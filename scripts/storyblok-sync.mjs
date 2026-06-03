#!/usr/bin/env node
// Sync des composants Storyblok via le Management API direct.
// Raison : le CLI Storyblok v4 casse le pull/push à cause de l'endpoint
// internal_tags (403 "does not support this token type" avec un PAT). Le
// Management API, lui, répond 200 sur /components. On le pilote donc en direct.
//
// Token lu UNIQUEMENT depuis .env (STORYBLOK_PAT), jamais en dur.
// Usage :
//   node scripts/storyblok-sync.mjs pull            # read-only : affiche, n'écrit rien
//   node scripts/storyblok-sync.mjs pull --write     # écrit les schémas dans storyblok/components/
// (le push distant n'est volontairement PAS implémenté ici — étape gated séparée)

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const REGION_HOST = 'https://mapi.storyblok.com' // région EU
const COMPONENTS_DIR = join(ROOT, 'storyblok', 'components')

function loadEnv() {
  let raw
  try {
    raw = readFileSync(join(ROOT, '.env'), 'utf8')
  } catch {
    throw new Error('.env introuvable à la racine du projet')
  }
  const env = {}
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
  return env
}

async function api(path, token) {
  const res = await fetch(`${REGION_HOST}/v1${path}`, {
    headers: { Authorization: token, 'Content-Type': 'application/json' },
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`API ${res.status} sur ${path} : ${body}`)
  }
  return res.json()
}

async function pull({ token, spaceId, write }) {
  const { components } = await api(`/spaces/${spaceId}/components`, token)
  components.sort((a, b) => a.name.localeCompare(b.name))

  console.log(`\n${components.length} composant(s) dans l'espace ${spaceId} :\n`)
  for (const c of components) {
    const fields = Object.keys(c.schema || {})
    const flags = [c.is_root && 'root', c.is_nestable && 'nestable'].filter(Boolean).join(', ')
    console.log(
      `  • ${c.name}  (${c.display_name || c.real_name || '—'})  ` +
        `— ${fields.length} champ(s)${flags ? ` [${flags}]` : ''}`
    )
    console.log(`      champs : ${fields.join(', ') || '(aucun)'}`)
  }

  if (!write) {
    console.log('\n[read-only] aucun fichier écrit. Relancer avec --write pour versionner les schémas.')
    return
  }

  mkdirSync(COMPONENTS_DIR, { recursive: true })
  for (const c of components) {
    const file = join(COMPONENTS_DIR, `${c.name}.json`)
    writeFileSync(file, JSON.stringify(c, null, 2) + '\n')
    console.log(`  ✓ écrit storyblok/components/${c.name}.json`)
  }
  console.log(`\n${components.length} schéma(s) écrit(s) dans storyblok/components/`)
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2)
  const env = loadEnv()
  const token = env.STORYBLOK_PAT
  const spaceId = env.STORYBLOK_SPACE_ID
  if (!token) throw new Error('STORYBLOK_PAT manquant dans .env')
  if (!spaceId) throw new Error('STORYBLOK_SPACE_ID manquant dans .env')

  switch (cmd) {
    case 'pull':
      await pull({ token, spaceId, write: rest.includes('--write') })
      break
    default:
      console.log('Usage : node scripts/storyblok-sync.mjs pull [--write]')
      process.exit(1)
  }
}

main().catch((e) => {
  console.error(`\n✖ ${e.message}\n`)
  process.exit(1)
})
