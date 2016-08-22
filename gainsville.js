 var goal, days, parts; // global variables that affect workout

  window.onload = function() { // pull information from query string
    var query = window.location.search;
    // Skip the leading ?, which should always be there,
    // but be careful anyway
    if (query.substring(0, 1) == '?') {
      query = query.substring(1);
    }

    else {
      return 0;
    }

    parts = query.split(',');
    var temp = parts.splice(parts.length - 2, parts.length);
    days = temp[0];
    goal = temp[1];
    createTable(arrayFill());
  }

  function arrayFill() { // populate 2D array
    var tempArr = [];
    var counter = 1;
    tempArr[0] = ["Muscles", "Exercise", "Sets x Reps"];
    while(counter < parts.length + 1) {
      switch(parts[counter - 1]) { // populate array based on part
        case "deltoid":
          if(goal === "str") {
            tempArr[counter] = ["Deltoid", "Overhead Press", "3 x 5"];
          }

          else {
            tempArr[counter] = ["Deltoid", "Dumbbell Lateral Raise", "3 x 12"];
          }
          break;
        case "bicep":
          if(goal === "str") {
            tempArr[counter] = ["Bicep", "Barbell Bicep Curl", "3 x 8"];
          }

          else {
            tempArr[counter] = ["Bicep", "Incline Dumbbell Bicep Curl", "3 x 12"];
          }
          break;
        case "forearm":
          tempArr[counter] = ["Forearm", "Dumbbell Wrist Curl", "3 x 12"];
          break;
        case "quadricep":
          if(goal === "aes") {
            tempArr[counter] = ["Quadricep", "Leg Extension", "3 x 12"];
          }

          else {
            tempArr[counter] = ["Quadricep", "Barbell Squat", "3 x 5"];
          }
          break;
        case "chest":
          if(goal === "aes") {
            tempArr[counter] = ["Chest", "Cable Fly", "3 x 12"];
          }

          else {
            tempArr[counter] = ["Chest", "Bench Press", "3 x 5"];
          }
          break;
        case "tricep":
          if(goal === "str") {
            tempArr[counter] = ["Tricep", "Close Grip Bench Press", "3 x 8"];
          }

          else {
            tempArr[counter] = ["Tricep", "Cable Tricep Extension", "3 x 12"];
          }
          break;
        case "abdomen":
          tempArr[counter] = ["Abdomen", "Plank", "3 x As long as possible"];
          break;
        case "hamstring":
          if(goal === "str") {
            tempArr[counter] = ["Hamstring", "Leg Curl", "3 x 8"];
          }

          else {
            tempArr[counter] = ["Hamstring", "Leg Curl", "3 x 12"];
          }
          break;
        case "calves":
          tempArr[counter] = ["Calves", "Standing Calf Raise", "3 x 15"];
          break;
        case "trapezius":
          if(goal === "aes") {
            tempArr[counter] = ["Trapezius", "Barbell Shrug", "3 x 12"];
          }

          else if(parts.indexOf("lowerback") != -1) {
            break;
          }

          else {
            tempArr[counter] = ["Trapezius", "Barbell Shrug", "3 x 8"];
          }
          break;
        case "upper":
          if(goal === "aes") {
            tempArr[counter] = ["Upper Back", "Cable Row", "3 x 12"];
          }

          else {
            tempArr[counter] = ["Upper Back", "Barbell Row", "3 x 5"];
          }
          break;
        case "lower":
          if(goal === "aes") {
            tempArr[counter] = ["Lower Back", "Hyperextension", "3 x 12"];
          }

          else if(parts.indexOf("trapezius") != -1) { // include traps in back
            tempArr[counter] = ["Lower Back, Trapezius", "Deadlift", "3 x 5"];
          }

          else {
            tempArr[counter] = ["Lower Back", "Deadlift", "3 x 5"];
          }
          break;
      }
      counter++; // move on to next part
    }

    return tempArr;
  }

  function createTable(partsArray) {
    var col = 3; // number of columns
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.className = "u-full-width";

    for(var i = 0; i < parts.length + 1; i++) {
        var tr = tbl.insertRow();
        for(var j = 0; j < col; j++) {
          var td = tr.insertCell();
          td.appendChild(document.createTextNode('Cell'));
        }
    }
    body.appendChild(tbl);
    tbl.rows[0].cells[0].style.fontWeight = 'bold';
    tbl.rows[0].cells[1].style.fontWeight = 'bold';
    tbl.rows[0].cells[2].style.fontWeight = 'bold';
    for(var x = 0; x < parts.length + 1; x++) {
      for(var y = 0; y < col; y++) {
        tbl.rows[x].cells[y].innerHTML = partsArray[x][y];
      }
    }
  }
