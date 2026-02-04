let saveHunger = localStorage.getItem("hunger");
let saveEnergy = localStorage.getItem("energy");
let saveMood = localStorage.getItem("mood");

let hunger;
let energy;
let mood;

if (saveHunger !== null) {
    hunger = Number(saveHunger);
    energy = Number(saveEnergy);
    mood = Number(saveMood);
} else {
    hunger = 50;
    energy = 50;
    mood = 50;
}

const feedButton = document.querySelector("#feedButton")
const playButton = document.querySelector("#playButton")
const sleepButton = document.querySelector("#sleepButton")

const hungerSpan = document.querySelector("#hunger");
const energySpan = document.querySelector("#energy");
const moodSpan = document.querySelector("#mood");

const petDiv = document.querySelector("#pet");

function updatePetBackground() {
    if (mood >= 70) {
        petDiv.style.backgroundColor = "green";
    } else if (mood >= 40) {
        petDiv.style.backgroundColor = "yellow";
    } else {
        petDiv.style.backgroundColor = "red";
    }
}

function update() {
    hungerSpan.textContent = hunger;
    energySpan.textContent = energy;
    moodSpan.textContent = mood;
    updatePetBackground();
}

function save() {
    localStorage.setItem("hunger", hunger);
    localStorage.setItem("energy", energy);
    localStorage.setItem("mood", mood);
}

update();
save();

feedButton.addEventListener("click", function () {
    hunger = hunger - 10

    if (hunger < 0) {
        hunger = 0;
    }

    mood = mood + 10
    if (mood > 100) {
        mood = 100;
    }

    update()
    save();
})

playButton.addEventListener("click", function () {
    energy = energy - 15;

    if (energy < 0) {
        energy = 0;
    }

    mood = mood + 15
    if (mood > 100) {
        mood = 100;
    }

    update()
    save();
})

sleepButton.addEventListener("click", function () {
    energy = energy + 35

    if (energy > 100) {
        energy = 100;
    }

    mood = mood + 5
    if (mood > 100) {
        mood = 100;
    }

    update()
    save();
})

setInterval(function () {
    hunger = hunger + 5
    if (hunger > 100) {
        hunger = 100;
    }

    energy = energy - 2
    if (energy < 0) {
        energy = 0;
    }

    if (hunger > 70) {
        mood = mood - 5
    }

    if (energy < 30) {
        mood = mood - 5 
    }

    if (mood < 0) {
        mood = 0;
    }

    update();
    save();
}, 5000);