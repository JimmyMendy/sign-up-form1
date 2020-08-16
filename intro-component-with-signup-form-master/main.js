//Form
const form = document.getElementsByTagName("form")[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    

    const inputs = document.getElementsByTagName("input");
    const errorMessages = document.getElementsByClassName("error");

    for (let i = 0; i < inputs.length; ++i) {
        if (inputs[i].value == "") {
            errorMessages[i].style.display = "block";
            inputs[i].style.background = "url(images/icon-error.svg) right 20px center no-repeat";
            errorCounter = true;
        } else {
            errorMessages[i].style.display = "none";
        }
    }
});

