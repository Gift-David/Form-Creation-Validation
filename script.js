document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form')
    const feedbackDiv = document.getElementById('form-feedback')

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        let isValid = true
        let messages = []

        const username = (document.getElementById('username')).trim()

        if (username.length < 3){
            isValid = false
            messages += "Username can't be less than 3 characters"
        }

        const email = document.getElementById('email').trim()

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)){
            isValid = false
            messages += "Enter a valid email"
        }

        const password = document.getElementById('password')

        if (password < 8){
            isValid = false
            messages += "Password can't be less than 8 characters"
        }

        feedbackDiv.style.display = "block"

        if (isValid){
            feedbackDiv.textContent = "Registration successful!"
        }

        form.submit()
    })
});

