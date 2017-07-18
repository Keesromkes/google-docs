var CSVer = function() {
  var spreadsheet_ = null;

  this.setSpreadsheet = function(spreadsheet) {
    spreadsheet_ = spreadsheet;
    return this;
  }

  this.importFile = function(file, funct) {
    try {
      var csv = file.getBlob().getDataAsString().split('\n');
      var len = csv[0].parseCSVtoArray().length;
      var data = [];
      for (var i = 0; i < csv.length; i++) {
        var row = csv[i].parseCSVtoArray();
        if (row.length == len)
          data.push(row);
      }
      var fileName = file.getName();
      fileName = fileName.split('.')[0];
      var newSheet = spreadsheet_.getSheetByName(fileName);
      newSheet.getRange(1, 1, data.length, data[0].length).setValues(data);
      if (funct)
        funct(newSheet);
      return newSheet;
    } catch (err) {
      Logger.log(JSON.stringify(err));
      return null;
    }
  }
}

CSVer.prototype.importFiles = function(files, funct) {
  while (files.hasNext()) {
    var file = files.next();
    this.importFile(file, funct);
  }
  return this;
};
