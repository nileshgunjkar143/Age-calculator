function age() {
  var d1 = document.getElementById('date').value;
  var m1 = document.getElementById('month').value;
  var y1 = document.getElementById('year').value;

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(d1 > d2){
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
  }
  if(m1 > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

   ye = y * 8760;
   mo = m * 730;
   da = d * 24;
   var t = ye+mo+da;
   var m = t*60;
   let s = m*60;

  document.getElementById('y').innerHTML = 'Your Age is '+y+' Years ' ;
  document.getElementById('mon').innerHTML = m+' Months ' ;
  document.getElementById('d').innerHTML = d+' Days ' ;
  document.getElementById('h').innerHTML =  t + ' Hours '  ;
  document.getElementById('m').innerHTML =  m + ' Minutes ' ;
  document.getElementById('s').innerHTML =  s + ' Seconds ' ;

}
function rest() {
    document.getElementById('age').innerHTML = ' ';
}