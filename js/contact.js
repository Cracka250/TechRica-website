document.addEventListener("DOMContentLoaded", function()
{
    const contactForm =
    document.querySelector(".contact-form");
    const nameInput = 
    document.getElementById("name");
    const emailInput = 
    document.getElementById("email");
    const subjectInput = 
    document.getElementById("subject");
    const messageInput = 
    document.getElementById("message");

    function validateInput(input, regex) {
        if(!
            regex.test(input.value.trim())) {
                input.style.border = "2px solid red";
                return false;
            } else {
                input.style.border = "2px solid green";
                return true;
            }
        }

        emailInput.addEventListener("input", function() {
            validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        });

        nameInput.addEventListener("input", function() {
            validateInput(nameInput, /^[A-Za-z\s]{3,}$/);
        });

        subjectInput.addEventListener("input", function() {
            validateInput(subjectInput, /.+/);
        });

        messageInput.addEventListener("input", function() {
            validateInput.addEventListener(messageInput, /.+/);
        });

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // this prevents page reload

    let formData = new 
    FormData(contactForm);
    
    fetch("send-message.php", {
    method: "POST",
    body: formData            
    })
    .then(response => response.text())
    .then(data => {
        alert("Message sent successfully!");
        contactForm.reset();
    })
    .catch(error => {
        alert("Error sending message. Please try again.");
    });
});
  });





