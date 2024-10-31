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
        const secretKey = '6LeKB3EqAAAAAL6HUeraDa4pw9nBt1wr81cuxvkE';
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

});

        //sending the e-mail
        const nodemailer = require('nodemailer');

// Create a transporter object
let transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email service
    auth: {
        user: '3aicevamarija@gmail.com', // Your email address
        pass: 'your_email_password' // Your email password or app-specific password
    }
});

// Email options
let mailOptions = {
    from: 'your_email@gmail.com', // Sender address
    to: 'recipient_email@example.com', // List of recipients
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent using Node.js and Nodemailer!' // Plain text body
};

// Send mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ' + error.message);
    }
    console.log('Email sent: ' + info.response);
});

        // Reset form
        emailInput.value = '';
        textInput.value = '';
        grecaptcha.reset();
    }



    