const form = document.querySelector('contactForm');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse("6LeaZ3EqAAAAALf8D-nzTNXEswgqJ4NsZOutBz2q");
    
    
    if (!captchaResponse.length > 0) {
        throw new Error("Please complete the CAPTCHA.");        
    }

    const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);

    fetch('https://localhost:3000/upload', {
        method: "POST",
        body: params,
    }) 
    .then(res => res.json())
    .then(data => {
        if (data.captchaSuccess){
            console.log("Validation")
        } else {
            console.log("Validation failed");
        }
    })
    .catch(err => console.error(err))
}

)