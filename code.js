function callDate1() {
    var currDate = new Date().toJSON().slice(0, 10);
    document.getElementById("dob").value = currDate;
}
 
function callDate2() {
    var currDate = new Date().toJSON().slice(0, 10);
    document.getElementById("cDate").value = currDate;
}
 
function ageCalculator() {
 
    var dob = document.getElementById("dob").value;
    var cDate = document.getElementById("cDate").value;
 
    if (dob == null || dob == '' || cDate == null || cDate == '') {
        return false;
    }
    var y1 = (new Date(dob)).getFullYear();
    var m1 = (new Date(dob)).getMonth();
    var d1 = (new Date(dob)).getDate();
 
    var y2 = (new Date(cDate)).getFullYear();
    var m2 = (new Date(cDate)).getMonth();
    var d2 = (new Date(cDate)).getDate();
 
    var Days, Months, Years;
 
    var demo = 0;
 
    if (d2 < d1) {
        if (m2 == 0 || m2 == 2 || m2 == 4 || m2 == 6 ||
            m2 == 7 || m2 == 9 || m2 == 11) {
            demo = 31;
            d2 = d2 + 31;
        } else if (m2 == 3 || m2 == 5 || m2 == 8 || m2 == 10) {
            demo = 30;
            d2 = d2 + 30;
        } else if (m2 == 1 && leapYear(y2)) {
            demo = 29;
            d2 = d2 + 29;
        } else {
            demo = 28;
            d2 = d2 + 28;
        }
 
        Days = d2 - d1;
        m2 = m2 - 1;
    } else {
        Days = d2 - d1;
    }
 
    if (m2 < m1) {
        Months = (m2 + 12) - m1;
        y2 = y2 - 1;
    } else {
        Months = m2 - m1;
    }
 
    Years = y2 - y1;
    if(Years>=0){
    document.getElementById("result").innerHTML = Years +
        " Years,  " + Months + " Months,  and " + Days + " Days";
    }
    else{
        document.getElementById("result").innerHTML = "Date of birth needs to be earlier than the Current Date.";
    }
 
}
 
function leapYear(year) {
 
    if (year % 400 == 0)
        return true;
 
    if (year % 100 == 0)
        return false;
 
    if (year % 4 == 0)
        return true;
    return false;
}