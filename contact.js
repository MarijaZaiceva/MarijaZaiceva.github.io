    function sendMail(){
        let formData ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    
    if (document.getElementById("g-recaptcha-response").value==""){
        document.getElementById("responseMessage").innerText = "Kaptcha nav derīga";
        return;
    }

    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formData.email.match(emailPattern)) {
        document.getElementById("responseMessage").innerText = "Lūdzu, ievadiet derīgu e-pastu.";
        return; 
    }
    
    // If email is valid, prepare to send the data
    emailjs.send("service_j43ay6v","template_6xje15m", formData).then(alert("Email Sent"))
        .then((response) => {
            document.getElementById("responseMessage").innerText = "Jūsu ziņojums ir veiksmīgi nosūtīts!";
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            document.getElementById("responseMessage").innerText = "Kļūda: " + error.text;
            console.log('FAILED...', error);
        });
    
    // For demonstration purposes, we just log the data
    console.log(formData);
    document.getElementById("responseMessage").innerText = "Ziņojums ir gatavs nosūtīšanai";
    document.getElementById("contactForm").reset();
}