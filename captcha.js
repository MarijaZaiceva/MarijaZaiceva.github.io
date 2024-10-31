const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const SECRET_KEY = '6LeKB3EqAAAAAL6HUeraDa4pw9nBt1wr81cuxvkE';

app.post('/verify-captcha', async (req, res) => {
    const response = req.body['g-recaptcha-response'];

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${response}`;
    const result = await axios.post(verificationUrl);

    if (result.data.success) {
        res.send("Solved!");
    } else {
        res.send("Error, try again.");
    }
});