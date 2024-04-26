// Get the elements representing the time
const hoursElement = document.querySelector('[data-time="hours"]');
const minutesElement = document.querySelector('[data-time="minutes"]');
const secondsElement = document.querySelector('[data-time="seconds"]');

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Pad single digit hours, minutes, and seconds with leading zero
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    // Update the time on the page
    hoursElement.textContent = paddedHours;
    minutesElement.textContent = paddedMinutes;
    secondsElement.textContent = paddedSeconds;
}

// Call updateClock() once to immediately display the current time
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
// Get the elements representing the time
const hoursElement = document.querySelector('[data-time="hours"]');
const minutesElement = document.querySelector('[data-time="minutes"]');
const secondsElement = document.querySelector('[data-time="seconds"]');

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Pad single digit hours, minutes, and seconds with leading zero
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    // Update the time on the page
    hoursElement.textContent = paddedHours;
    minutesElement.textContent = paddedMinutes;
    secondsElement.textContent = paddedSeconds;
}

// Call updateClock() once to immediately display the current time
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);