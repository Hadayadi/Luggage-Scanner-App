function doGet(e) {
  const sheet = SpreadsheetApp.openById('16-bjgjIV4yKzI5hvQPmw_lSAy2YOikKh_G8_H_uSOnM')
                              .getSheetByName("LuggageSC");

  const code = e.parameter.code;
  if (!code) {
    return ContentService.createTextOutput(JSON.stringify({ error: "Missing code" }))
                         .setMimeType(ContentService.MimeType.JSON);
  }

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim() === String(code).trim()) {
      return ContentService.createTextOutput(JSON.stringify({
        destination: data[i][1],
        owner: data[i][2],
        arrival: data[i][3],
        from: data[i][4],
        departure: data[i][5],
        to: data[i][6],
        next: data[i][7],
        needs: data[i][8]
      })).setMimeType(ContentService.MimeType.JSON);
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ error: "Code not found." }))
                       .setMimeType(ContentService.MimeType.JSON);
}
