function validateForm() {
    var returnval = true;
    var password = document.forms['myForm']["cpass"].value; 
    if (password.length < 6){
        alert("Password should be atleast 6 characters long!");
        returnval = false;
    }
}