
function validateAll() {

    var result = true;

    result = userNameVal() && result;
    result = passwordVal() && result;
    result = userFirstNameVal() && result;
    result = userLastNameVal() && result;
    result = confirmPassFun() && result;
    result = confirmEmail() && result;
    result = confirmPhone() && result;

    return result;

}



// validating username

function userNameVal() {
    var userName = document.getElementById("UserName").value;
    if (userName == "") {
        document.getElementById("messUserName").value = "User Name is Required";
        document.getElementById("messUserName").style.display = "inline";
        return false;
    }

    return true;
}

// validating firstname

function userFirstNameVal() {
    var userFirstName = document.getElementById("FirstName").value;
    if (userFirstName == "") {
        document.getElementById("messFirstName").value = "First Name is Required";
        document.getElementById("messFirstName").style.display = "inline";
        return false;
    }


    return true;
}

// validating lastname

function userLastNameVal() {
    var userLastName = document.getElementById("LastName").value;
    if (userLastName == "") {
        document.getElementById("messLastName").value = "Last Name is Required";
        document.getElementById("messLastName").style.display = "inline";
        return false;
    }
    return true;
}

// validating password

function passwordVal() {
    var pass = document.getElementById("Password").value;
    if (pass.length < 3) {
        document.getElementById("messPassword").value = "password must contain at least 3 charactes";
        document.getElementById("messPassword").style.display = "inline";
        return false;
    }
    return true;
}

// validating password confirmation

function confirmPassFun() {
    var pass = document.getElementById("Password").value;
    var confirm = document.getElementById("ConfPassword").value;
    if (pass != confirm) {
        document.getElementById("messConfPassword").value = "passwords doesn't match";
        document.getElementById("messConfPassword").style.display = "inline";
        return false;
    }

    return true;
}

// validating email

function confirmEmail() {

    var email = document.getElementById("Email").value;
    var reg = /^\w+/;
    if (!reg.test(email)) {
        document.getElementById("messEmail").value = "mail must start with letter or digit ";
        document.getElementById("messEmail").style.display = "inline";
        return false;
    }

    reg = /^\w+([\.-]?\w+)/;
    if (!reg.test(email)) {
        document.getElementById("messEmail").value = "mail can have only one [. or -] following letter ";
        document.getElementById("messEmail").style.display = "inline";
        return false;
    }

    reg = /^\w+([\.-]?\w+)*@/;
    if (!reg.test(email)) {
        document.getElementById("messEmail").value = "mail must have @ "
        document.getElementById("messEmail").style.display = "inline";
        return false;
    }

    reg = /^\w+([\.-]?\w+)*@\w+/;
    if (!reg.test(email)) {
        document.getElementById("messEmail").value = "you need letters after@ "
        document.getElementById("messEmail").style.display = "inline";
        return false;
    }


    reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!reg.test(email)) {
        document.getElementById("messEmail").value = "Invalid email "
        document.getElementById("messEmail").style.display = "inline";
        return false;
    }

    return true;
}

// validating phone

function confirmPhone() {
    var phone = document.getElementById("Phone").value;


    var reg = /^0{1}(2|3|4|6|8|9|5[0|(2-8)]|73)-?[1-9]\d{6}$/;
    if (!reg.test(phone)) {
        document.getElementById("messPhone").value = "phone number is illegal";
        document.getElementById("messPhone").style.display = "inline";
        return false;
    }

    return true;
}


// validating age

function checkAge() {
    var isAgeCorrect = true;
    var ageTxt = document.getElementById("Age").value;
    var age = parseInt(ageTxt);
    if (age.ageTxt == "" || age < 10) {
        document.getElementById("messAge").value = "age cannot be empty and must be at least 10";
        document.getElementById("messAge").style.display = "inline";
        isAgeCorrect = false;
    }

    //----- IMPORTANT !!! --------
    if (validateAll() && isAgeCorrect == true) {
        document.getElementById("submit").disabled = false;
    }

}
