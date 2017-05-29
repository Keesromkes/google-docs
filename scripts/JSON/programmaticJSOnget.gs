function createTimeDrivenTriggers() {
  // Trigger every 6 hours.
  ScriptApp.newTrigger('getJSONresults')
      .timeBased()
      .everyHours(1)
      .create();
}

function getJSONresults(){
  var JSONrequest = "https://prospect.io/api/public/v1/account";
  var APIkey = "S7XszHS3Dy2qteunUznvqDPkMkyyLbR1aB_vhgx8vMEQEJ4Nkw";
  var range = "B1"; // set starting range to input JSON data
  
  var result = ImportJSONWithToken(JSONrequest,"","",APIkey);
  var numcols = (letterToColumn(range.charAt(0)) + result[0].length)-1;
  var numrows = result.length + Number(range.charAt(1)-1);
  var colnumber = columnToLetter(numcols);
  range = range+":"+colnumber+numrows;
  
  setValue(range,result);
}

function setValue(range,contents){
  SpreadsheetApp.getActiveSpreadsheet().getRange(range).setValues(contents);
}
