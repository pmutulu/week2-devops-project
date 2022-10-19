const valueVerifier = (dob,mob,yob,gender) => {
    if (dob == '' && mob == '' &&  yob =='' && gender=='') {
        alert('Please provide an Day of Month, Month of birth, Year of Birth and/or Gender');
    }
}

const passwordVerifier = (value) => {
    if (value.length < 4) {
        alert('The password should be greater than 4 characters');
    }
}

const userOne = { 'email': 'email@email.com', 'password': 'password' };

const loginFunction = (email, password) => {
    if (email == userOne.email && password == userOne.password) {
        const loginMessage = 'You are now logged is as ' + email;
        alert(loginMessage);
    } else {
        alert('Please review your email and/or your password');
    }
}

// Javascript program to find day of a given date
  
function dayofweek(d, m, y)
{
    let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
    y -= (m < 3) ? 1 : 0;
    return ( y + y/4 - y/100 + y/400 + t[m-1] + d) % 7;
}
 
// Driver Code
 
    let day = dayofweek(31, 3, 1990);
    console.log(Math.round(day));



const loginHandler = () => {
    // Retrieve the email and password elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Retrieve the email and password values
    const email = emailInput.value;
    const password = passwordInput.value;

    // Verify that email and password are not empty
    valueVerifier(email, password);

    // Verify that the password is greater than 4 characters
    passwordVerifier(password);

    // Check against existing users in the system to verify if the user is registered and if password matches
    loginFunction(email, password);
}



 
 
  
