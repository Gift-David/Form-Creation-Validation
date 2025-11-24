document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form')
    const feedbackDiv = document.getElementById('form-feedback')

    form.addEventListener('submit', function(event) {
        event.preventDefault() // Prevent form submission

        let isValid = true;
        let messages = [];

        // Validates username
        const username = (document.getElementById('username')).value.trim()
        if (username.value.length < 3){
            isValid = false;
            messages.push("Username can't be less than 3 characters");
        }

        // Validates email
        const email = document.getElementById('email').value.trim()
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)){
            isValid = false;
            messages.push("Enter a valid email");
        }

        // Validates password 
        const password = document.getElementById('password')
        if (password < 8){
            isValid = false;
            messages.push("Password can't be less than 8 characters");
        }

        if (isValid){
            feedbackDiv.style.display = "block";
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.style.display = "block";
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }

        form.submit();
    });
});

