function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value.trim();

    let msg = document.getElementById("msg");

    // Check name
    if (name === "") {
        msg.innerText = "Please enter your name";
        return false;
    }

    // Check email
    if (email === "") {
        msg.innerText = "Please enter your email";
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.innerText = "Please enter a valid email";
        return false;
    }

    // Check phone number
    if (!/^\d{10}$/.test(phone)) {
        msg.innerText = "Phone number must contain exactly 10 digits";
        return false;
    }

    // Check gender
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        msg.innerText = "Please select your gender";
        return false;
    }

    // Check date of birth
    if (dob === "") {
        msg.innerText = "Please select your date of birth";
        return false;
    }

    // Check languages
    let languages = document.querySelectorAll(
        'input[name="language"]:checked'
    );

    if (languages.length === 0) {
        msg.innerText = "Please select at least one language";
        return false;
    }

    // Check address
    if (address === "") {
        msg.innerText = "Please enter your address";
        return false;
    }

    msg.innerText = "Registration successful!";
    return false;
}