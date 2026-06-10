/**
 * EDM — Réception des formulaires du site.
 * À coller dans un Google Sheet : Extensions → Apps Script → (remplacer Code.gs) →
 * Déployer → Web app → « Exécuter en tant que : moi » + « Accès : tout le monde » →
 * autoriser → copier l'URL /exec (à donner pour PUBLIC_FORM_ENDPOINT).
 *
 * Chaque envoi : 1 ligne dans l'onglet du formulaire (créé au besoin) + 1 email
 * formaté à contact@ericdimartino.com. Les CV sont rangés dans un dossier Drive,
 * et c'est le LIEN qui apparaît dans le tableau.
 */
var EMAIL_TO = 'contact@ericdimartino.com';
var CV_FOLDER = 'Site EDM — CV candidatures';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Anti-spam : honeypot rempli → on ignore silencieusement.
    if (data._hp) return json_({ ok: true });

    var form = String(data._form || 'Autre').trim() || 'Autre';
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(form) || ss.insertSheet(form);

    // CV (base64) → fichier Drive ; on remplace par le lien dans la donnée.
    if (data.cv) {
      try {
        var folder = getOrCreateFolder_(CV_FOLDER);
        var fname = [data.prenom, data.nom].filter(String).join('_') + '_' + (data.cvName || 'cv');
        var blob = Utilities.newBlob(Utilities.base64Decode(data.cv), data.cvType || 'application/octet-stream', fname);
        data.CV = folder.createFile(blob).getUrl();
      } catch (err) { data.CV = 'Erreur upload CV : ' + err; }
    }
    delete data.cv; delete data.cvName; delete data.cvType;

    // Colonnes : Horodatage + champs (clés internes exclues), en-têtes dynamiques.
    var ignore = { _form: 1, _hp: 1 };
    var keys = Object.keys(data).filter(function (k) { return !ignore[k]; });
    ensureHeaders_(sheet, keys);
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var row = headers.map(function (h) { return h === 'Horodatage' ? new Date() : (data[h] != null ? data[h] : ''); });
    sheet.appendRow(row);

    sendMail_(form, data, ignore);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function ensureHeaders_(sheet, keys) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Horodatage'].concat(keys));
    sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight('bold');
    sheet.setFrozenRows(1);
    return;
  }
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  keys.forEach(function (k) {
    if (headers.indexOf(k) === -1) { sheet.getRange(1, sheet.getLastColumn() + 1).setValue(k); }
  });
}

function getOrCreateFolder_(name) {
  var it = DriveApp.getFoldersByName(name);
  return it.hasNext() ? it.next() : DriveApp.createFolder(name);
}

function sendMail_(form, data, ignore) {
  var lines = Object.keys(data)
    .filter(function (k) { return !ignore[k]; })
    .map(function (k) { return '• ' + k + ' : ' + data[k]; });
  var who = [data.prenom, data.nom].filter(String).join(' ') || 'Contact';
  MailApp.sendEmail({
    to: EMAIL_TO,
    name: 'Site Eric Di Martino',
    replyTo: data.email || EMAIL_TO,
    subject: '[Site EDM] ' + form + ' — ' + who,
    body: 'Nouveau formulaire « ' + form + ' » reçu depuis le site.\n\n' + lines.join('\n') +
      '\n\nLigne ajoutée dans l\'onglet « ' + form + ' » du Google Sheet.\n— Envoi automatique.',
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
