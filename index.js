
var getDayOfWeek = () => {
    // Retrieve Birthday and Gender
    var birthdayInput = document.getElementById('birthday');
    var genderInput = document.getElementById('gender');

    // Retrieve the Birthday and Gender
    var birthday = birthdayInput.value;
    var gender = genderInput.value;

    alert(birthday);
    alert(gender);
    /*const dayOfWeek = new Date(birthday);
    let day = dayOfWeek.getDate();
    alert(day);*/
    var dayOfWeek = new Date(birthday);
    var numberOfDay = dayOfWeek.getDay();
    // alert("Week Day: " + dayOfWeek.getDay());
    alert(numberOfDay);
    if (numberOfDay == 0 && gender == 'Male') {
        var akanName = 'Your Akan Name is Kwasi';
        alert(akanName);
    } else {
        alert('Your name is note yer loaded');
    }

}








