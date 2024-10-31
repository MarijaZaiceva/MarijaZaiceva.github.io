document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();

    // Collecting the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    //Email validation
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(emailPattern)) {
        document.getElementById("responseMessage").innerText = "Please enter a valid email address.";
        return; 
    }

    
    // If email is valid, prepare to send the data
    const formData = {
        name: name,
        email: email,
        message: message
    };


    emailjs.send("service_j43ay6v", "template_6xje15m", formData)
        .then((response) => {
            document.getElementById("responseMessage").innerText = "Message sent successfully!";
        }, (error) => {
            document.getElementById("responseMessage").innerText = "Error sending message: " + error.text;
        });
    
    // For demonstration purposes, we just log the data
    console.log(formData);
    document.getElementById("responseMessage").innerText = "Message would be sent!";
};