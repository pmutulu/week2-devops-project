/*
const valueVerifier = (dob,mob,yob) => {
    if (dob == '' && mob == '' &&  yob =='') {
        alert('Please provide an Day of Month, Month of birth, Year of Birth and/or Gender');
    }
}*/

/*const passwordVerifier = (value) => {
    if (value.length < 4) {
        alert('The password should be greater than 4 characters');
    }
}*/

//const userOne = { 'dob': '26', 'mob': '3', 'yob':'1990' };

/*const loginFunction = (dob, mob, yob,gender) => {
    if (dob == userOne.dob && mob == userOne.mob && yob== userOne.yob && gender == userOne.gender) {
        const loginMessage = 'You are now logged is as ' + dob;
        alert(loginMessage);
    } else {
        alert('Please review your email and/or your password');
    }
}*/

// Javascript program to find day of a given date
  
 function dayOfWeek(dob, mob, yob)
{
    let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
    yob -= (mob < 3) ? 1 : 0;
    return ( yob + yob/4 - yob/100 + yob/400 + t[mob-1] + dob) % 7;
}
 




const loginHandler = () => {
    // Retrieve the email and password elements
    const dobInput = document.getElementById('dob');
    const mobInput = document.getElementById('mob');
    const yobInput = document.getElementById('yob');

    // Retrieve the email and password values
    const dob = dobInput.value;
    const mob = mobInput.value;
    const yob = yobInput.value;

    // Verify that email and password are not empty
   // valueVerifier(dob, mob, yob);

    // Verify that the password is greater than 4 characters
    //passwordVerifier(password);

    // Check against existing users in the system to verify if the user is registered and if password matches
    //dayOfWeek(dob, mob, yob);
    // Driver Code
    let day = dayOfWeek(dob, mob, yob);
    alert(Math.round(day));
}




 
 
  
