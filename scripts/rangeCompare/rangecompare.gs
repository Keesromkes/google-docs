// Kees magic
  
  var compareRange = { // B2:CC999
    top : 2,
    bottom : 999,
    left : 2,
    right : 81
  };
  
  // Exit if we're out of range
  var thisRow = e.range.getRow();
  
  if (thisRow < compareRange.top || thisRow > compareRange.bottom) return;

  var thisCol = e.range.getColumn();
  Logger.log(thisCol);
  if (thisCol < compareRange.left || thisCol > compareRange.right) return;

  // We're in range; timestamp the edit
  sh.getRange(thisRow,82)   // "CD" is column 82
    .setValue(new Date()); // Set time of edit in "CD"
