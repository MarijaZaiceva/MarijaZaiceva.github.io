    function sendMail(){
        let formData ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    
    if (document.getElementById("g-recaptcha-response").value==""){
        document.getElementById("responseMessage").innerText = "Captcha not solved";
        return;
    }

    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formData.email.match(emailPattern)) {
        document.getElementById("responseMessage").innerText = "Please enter a valid email address.";
        return; 
    }
    
    // If email is valid, prepare to send the data
    emailjs.send("service_j43ay6v","template_6xje15m", formData).then(alert("Email Sent"))
        .then((response) => {
            document.getElementById("responseMessage").innerText = "Message sent successfully!";
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            document.getElementById("responseMessage").innerText = "Error sending message: " + error.text;
            console.log('FAILED...', error);
        });
    
    // For demonstration purposes, we just log the data
    console.log(formData);
    document.getElementById("responseMessage").innerText = "Message would be sent!";
    document.getElementById("contactForm").reset();
}