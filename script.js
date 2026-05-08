const form = document.getElementById("contactForm");

if(form){
    form.addEventListener("submit", function(event){
        event.preventDefault();

        document.getElementById("message").innerHTML =
        "Message Sent Successfully!";

        form.reset();
    });
}