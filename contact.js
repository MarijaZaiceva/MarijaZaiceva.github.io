const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const textInput = document.getElementById('text');
    const emailError = document.getElementById('emailError');
    const captchaError = document.getElementById('captchaError');
    
    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailError.textContent = '';
        captchaError.textContent = '';
        
        const email = emailInput.value;
        const text = textInput.value;
        
        // Email validation
        if (!validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            return;
        }

        // Get the reCAPTCHA response
        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            captchaError.textContent = 'Please complete the CAPTCHA.';
            return;
        }

        // Send the data (here, we're just logging it)
        sendData(email, text, recaptchaResponse);
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function sendData(email, text, recaptchaResponse) {
        console.log('Email:', email);
        console.log('Message:', text);
        console.log('reCAPTCHA Response:', recaptchaResponse);
        alert('Your message has been sent!');



        const axios = require('axios');

app.post('/submit', async (req, res) => {
    const { email, text, recaptchaResponse } = req.body;

    // Verify reCAPTCHA
        const secretKey = '6LeKB3EqAAAAAGrFBIrmQWA2eO2SB0_dNiFKw5FS';
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

    try {
        const response = await axios.post(url);
        if (response.data.success) {
            // Handle successful submission
            console.log('Email:', email);
            console.log('Message:', text);
            res.send('Success!');
        } else {
            res.status(400).send('CAPTCHA verification failed.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error.');
    }
});

        // Here, you would normally send the data to your server using fetch or XMLHttpRequest.
        // Example:
        // fetch('/submit', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, text, recaptchaResponse })
        // });

        // Reset form
        emailInput.value = '';
        textInput.value = '';
        grecaptcha.reset();
    }
