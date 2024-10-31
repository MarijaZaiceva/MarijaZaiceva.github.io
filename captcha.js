function validateCaptcha() {
                const captchaResponse = grecaptcha.getResponse();
                if (captchaResponse.length === 0) {
                    alert("Please complete the CAPTCHA.");
                    return false; // Prevent form submission
                }
                return true; // Allow form submission
            }