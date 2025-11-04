document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let consent = document.getElementById("consent").checked;
    
    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let emailError = document.getElementById("emailError");
    let emailFormatError = document.getElementById("emailFormatError");
    
    firstNameError.style.display = firstName === "" ? "block" : "none";
    lastNameError.style.display = lastName === "" ? "block" : "none";
    emailError.style.display = email === "" ? "block" : "none";
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailFormatError.style.display = email !== "" && !emailPattern.test(email) ? "block" : "none";
    
    if (firstName === "" || lastName === "" || email === "" || !emailPattern.test(email) || !consent) {
        return;
    }
    
    document.getElementById("messageBox").style.display = "block";
    document.getElementById("contactForm").reset();
});