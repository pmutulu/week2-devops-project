 
 //Function to calculate the day of Week one was born. Sunday 1 Saturday 7


 function dayOfWeek(dob, mob, yob)
 {
     var t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
     yob -= (mob < 3) ? 1 : 0;
     return ( yob + yob/4 - yob/100 + yob/400 + t[mob-1] + dob) % 7;
 }
 
 
 //get day, month and year of birth from HTML form
 var getDay = () => {
     // Retrieve dob, mob, yob

     var dobInput = document.getElementById('dob');
     var mobInput = document.getElementById('mob');
     var yobInput = document.getElementById('yob');
          // Retrieve the dob, mob, yob values
     var dob = dobInput.value;
     var mob = mobInput.value;
     var yob = yobInput.value;



     let day = dayOfWeek(25, 3, 1990);
     alert(Math.round(day));    
 }
 
