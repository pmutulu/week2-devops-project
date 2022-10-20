
var getAkanName = () => {
    // Retrieve Birthday and Gender from HTML from
    var birthdayInput = document.getElementById('birthday');
    var genderInput = document.getElementById('gender');
    // Retrieve the Birthday and Gender values
    var birthday = birthdayInput.value;
    var gender = genderInput.value;

    alert(birthday);
    alert(gender);
    //Get the Day of Week and assign it a number 0 for saturday and 6 for Saturday.
    var dayOfWeek = new Date(birthday);
    var numberOfDay = dayOfWeek.getDay();
    alert(numberOfDay);
    //If statetements to check the number associated with the day of Week and Assign Akan Name
    if (numberOfDay == 0 && gender == 'Male') {
        alert("Your were born on Sunday and your Akan Name is Kwasi");
    } else if (numberOfDay == 1 && gender == 'Male') {
        alert("Your were born on Monday and your Akan Name is Kwadwo");
    } else if (numberOfDay == 2 && gender == 'Male') {
        alert("Your were born on Tuesday and your Akan Name is Kwabena");
    } else if (numberOfDay == 3 && gender == 'Male') {
        alert("Your were born on Wednesday and your Akan Name is Kwaku");
    } else if (numberOfDay == 4 && gender == 'Male') {
        alert("Your were born on Thursday and your Akan Name is Yaw");
    } else if (numberOfDay == 5 && gender == 'Male') {
        alert("Your were born on Friday and your Akan Name is Kofi");
    } else if (numberOfDay == 6 && gender == 'Male') {
        alert("Your were born on Saturday and your Akan Name is  Kwame");
    } else if (numberOfDay == 0 && gender == 'Female') {
        alert("Your were born on Sunday and your Akan Name is  Akosua");
    } else if (numberOfDay == 1 && gender == 'Female') {
        alert("Your were born on Monday and your Akan Name is Adwoa");
    } else if (numberOfDay == 2 && gender == 'Female') {
        alert("Your were born on Tuesday and your Akan Name is Abenaa");
    } else if (numberOfDay == 3 && gender == 'Female') {
        alert("Your were born on Wednesday and your Akan Name is Akua");
    } else if (numberOfDay == 4 && gender == 'Female') {
        alert("Your were born on Thursday and your Akan Name is Yaa");
    } else if (numberOfDay == 5 && gender == 'Female') {
        alert("Your were born on Friday and your Akan Name is Afua");
    } else if (numberOfDay == 6 && gender == 'Female') {
        alert("Your were born on Saturday and your Akan Name is  Ama");
    } else {
        alert('Your name is note yer loaded');
    }
}








