
var getAkanName = () => {
    // Retrieve Birthday and Gender from HTML from
    var birthdayInput = document.getElementById('birthday');
    var genderInput = document.getElementById('gender');
    // Retrieve the Birthday and Gender values
    var birthday = birthdayInput.value;
    var gender = genderInput.value;
    //alert(birthday);
    //alert(gender);
    //Get the Day of Week and assign it a number 0 for Sunday and 6 for Saturday.
    var dayOfWeek = new Date(birthday);
    var numberOfDay = dayOfWeek.getDay();
    //alert(numberOfDay);
    if (gender == 'Male') {
        const maleAkanNameArray = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let maleAkanName = maleAkanNameArray[numberOfDay];
        alert(numberOfDay);
        alert(maleAkanName);
    } else {
        alert("gender not updated");
    }
}








