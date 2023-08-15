// Get DOM
const monthArea = document.querySelector(".month");
const datesArea = document.querySelector(".dates");

// Initialize variables
//Get today's time in object
const today = {
  year: new Date().getFullYear(),
  month: new Date().toLocaleString('en-us', {month: 'long'}),
  date: new Date().getDate(),
  day: new Date().toLocaleString('en-us', {weekday: 'long'}),
}

