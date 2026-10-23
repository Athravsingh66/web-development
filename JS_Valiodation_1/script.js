function validateForm() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    let pattern = /^[A-Za-z]{6,}$/;

    if (!pattern.test(name)) {
        alert("Please enter a valid name");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Valid name and password");
    return true;
}