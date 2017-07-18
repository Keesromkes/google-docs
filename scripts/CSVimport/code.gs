function main() {
  var files = DriveApp.getFolderById("0BwNVDplhiTwEZ0pUVkRCdzJOb2M").getFilesByType('text/csv');
  var csver = new CSVer();
  csver.setSpreadsheet(SpreadsheetApp.openById("1M2pXYxT87jJN_hwajJ1DgJF4M9G9o3NFq1WG4KrB9_Q"));
  csver.importFiles(files,newChart);
}

function newChart(sheet) {
  
}
