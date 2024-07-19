let timerContainer = document.querySelector(".timer-container");
let title = document.querySelector(".title");
let form = document.querySelector(".form-container");
let startButton = document.querySelector("#startButton");

startButton.addEventListener("click", (event) => {
    event.preventDefault(); 

    let nameInput = document.querySelector(".name");
    let dateInput = document.querySelector(".date");

    if (nameInput.value !== "" && dateInput.value !== ""){

        if (new Date(dateInput.value) < Date.now()) {
            alert("Please enter a future date");
        }

        else {
            timerContainer.style.display = "flex";

            let title = document.querySelector("h1");
    
            title.innerHTML = nameInput.value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            
            let date = new Date(dateInput.value).getTime();
    
            form.remove();
            
            let counter = setInterval(() => {
                let now = new Date().getTime();
                let timeLeft = date - now;
    
                let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
                document.querySelector(".days .value").innerHTML = (days < 10) ? `0${days}` : days;
                document.querySelector(".hours .value").innerHTML = (hours < 10) ? `0${hours}` : hours;
                document.querySelector(".minutes .value").innerHTML = (minutes < 10) ? `0${minutes}` : minutes;
                document.querySelector(".seconds .value").innerHTML = (seconds < 10) ? `0${seconds}` : seconds;
    
            }, 1000);
        }
    }

    else {
        alert("Please fill in all fields");
    }
    
});
