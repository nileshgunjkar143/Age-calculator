  let month = document.getElementById("month");
  let date = document.getElementById("date");
  let year = document.getElementById("year");
  let todayMonth = document.getElementById("todayMonth");
  let todayDate = document.getElementById("todayDate");
  let todayYear = document.getElementById("todayYear");

  
  function myFunction () {
     
    let yearSathi = todayYear.value-year.value;
    let monthSathi = todayMonth.value-month.value;
    let daySathi = todayDate.value - date.value;
    let eDays = 31 + daySathi;
    let eMonths = 12 + monthSathi;
    if(yearSathi>=0){
        if(monthSathi>=0){
          if(daySathi>=0){
            let a = "Your Age is " + yearSathi + " Years " + monthSathi + " Months " + daySathi + " Days ";
            console.log(a);
            document.getElementById("result").innerHTML = a;
          }
          else{
            let a = "Your Age is " + yearSathi + " Years " + (monthSathi-1) + " Months " + eDays + " Days ";
            console.log(a);
            document.getElementById("result").innerHTML = a;
          }
        }
        else{
          let a = "Your Age is " + (yearSathi-1) + " Years " + eMonths + " Months " + daySathi + " Days ";
            console.log(a);
            document.getElementById("result").innerHTML = a;
        }
    }else document.getElementById("result").innerHTML="your dob is grater than todays age";
    
  }
  
  function rest() {
    document.getElementById("result").innerHTML ="";
  }