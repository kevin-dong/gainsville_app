  
  var goal, days, parts; // global variables that affect workout

  window.onload = function() { // pull information from query string
    var query = window.location.search;
    // Skip the leading ?, which should always be there, 
    // but be careful anyway
    if (query.substring(0, 1) == '?') {
      query = query.substring(1);
    }

    var data = query.split(','); 
    var temp = query.splice(0, 2);
    goal = temp[0];
    days = temp[1];
    parts = query.slice();
  }

  function createTable() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 2; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(" ");
            tr.appendChild(td)
      }
      
      tbdy.appendChild(tr);
    }
    
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}