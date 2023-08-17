// Get DOM
const monthArea = document.querySelector(".month");
const datesArea = document.querySelector(".dates");

// Initialize variables
// Get today's time in object
const today = {
  year: new Date().getFullYear(),
  month: new Date().toLocaleString('en-us', {month: 'long'}),
  monthNum: new Date().getMonth(),
  date: new Date().getDate(),
  day: new Date().toLocaleString('en-us', {weekday: 'long'}),
}

// Get the last day of the month
const lastDay = new Date(today.year, today.monthNum + 1, 0).getDate();

// function to get the month and full date of the today then update the calendar header
function updateCalendarHeader() {
  monthArea.querySelector("h2").innerHTML = today.month;
  monthArea.querySelector("p").innerHTML = `${today.day}, ${today.date} ${today.month} ${today.year}`;
}
updateCalendarHeader();

// function to update the calendar body
function updateCalendarBody() {
  for (let i = 1; i <= lastDay; i++) {
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = i;
    datesArea.appendChild(dateDiv);
  }
}
updateCalendarBody();