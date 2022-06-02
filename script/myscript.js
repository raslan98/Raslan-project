function validaRegisterForm() {
    let firstNameValue = document.getElementById("firstName").value;
    if (firstNameValue == "") {
        alert("Name must be filled out");
        return;
    }

    let emailValue = document.getElementById("email").value;
    if (emailValue == "") {
        alert("Email address must be filled out");
        return;
    }

    let passwordValue = document.getElementById("password").value;
    if (passwordValue == "") {
        alert("Password must be filled out");
        return;
    }

    let dateBirthValue = document.getElementById("dateBirth").value;
    if (dateBirthValue == "") {
        alert("Date of birth must be filled out");
        return;
    }
}


function validaloginForm() {
    let emailValue = document.getElementById("email").value;
    if (emailValue == "") {
        alert("Email address must be filled out");
        return;
    }

    let passwordValue = document.getElementById("password").value;
    if (passwordValue == "") {
        alert("Password must be filled out");
        return;
    }

}