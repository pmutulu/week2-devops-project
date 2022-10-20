
var getAkanName = () => {
    // Retrieve Birthday and Gender from HTML from
    var birthdayInput = document.getElementById('birthday');
    var genderInput = document.getElementById('gender');
    // Retrieve the Birthday and Gender values
    var birthday = birthdayInput.value;
    var gender = genderInput.value;
    //Get the Day of Week and assign it a number 0 for Sunday and 6 for Saturday.
    var dayOfWeek = new Date(birthday);
    var numberOfDay = dayOfWeek.getDay();
    //If statements to give Akan Names depending on the gender
    if (gender == 'Male') {
        const maleAkanNameArray = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let maleAkanName = maleAkanNameArray[numberOfDay];
        alert("Your Akan Name is: " + maleAkanName);
    } else if (gender == 'Female') {
        const femaleAkanNameArray = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        let femaleAkanName = femaleAkanNameArray[numberOfDay];
        alert("Your Akan Name is: " + femaleAkanName);
    } else {
        alert("Akan Name not found, please check birthday and/or gender entered")
    }
}








