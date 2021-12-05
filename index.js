const formInfo = document.getElementById("formInfo");
let hasJob = false;

if(hasJob) {
    showMessage("Thanks forvisiting, I'm currently employed.");
} else {
    showMessage("Please look around, I'm currently looking for a position!");
}

let today = new Date();
let dayOfWeek = today.getDay();

if(dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("It's the weekend, please be patient with my returning your e-mail. Thank you!");
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage(message) {
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {

    showMessage("Sending message...");
});
