  
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

    var data = query.split(','); 
    var temp = query.splice(0, 2);
    goal = temp[0];
    days = temp[1];
    parts = query.slice();
  }

  function createTable() {
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    for(var i = 0; i < 3; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 3; j++){
          var td = tr.insertCell();
          td.appendChild(document.createTextNode('Cell'));
          td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);
  }