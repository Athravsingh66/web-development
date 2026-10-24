function validateForm() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email ID");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number");
        return false;
    }

    alert("Email and phone number are valid");
    return false;
}
