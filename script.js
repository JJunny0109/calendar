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

// Get the index of the this month
const thisMonth = {
  monthNum: new Date().getMonth(),
  month: new Date().toLocaleString('en-us', {month: 'long'}),
  firstDay: new Date(today.year, today.monthNum, 1).getDay(),
  lastDay: new Date(today.year, today.monthNum + 1, 0).getDay(),
  lastDate: new Date(today.year, today.monthNum + 1, 0).getDate(),
}

// 첫 번째 날 이전에 빈 공간을 만듭니다.
for (let i = 0; i < thisMonth.firstDay; i++) {
  const placeholderDiv = document.createElement("div");
  placeholderDiv.classList.add("date", "empty");
  datesArea.appendChild(placeholderDiv);
}

// function to get the month and full date of the today then update the calendar header
function updateCalendarHeader() {
  monthArea.querySelector("h2").innerHTML = `${today.month} ${today.year}`;
  // monthArea.querySelector("p").innerHTML = `${today.day}, ${today.date} ${today.month} ${today.year}`;
}
updateCalendarHeader();

// function to update the calendar body
function updateCalendarBody() {
  for (let i = 1; i <= thisMonth.lastDate; i++) {
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    if(i === today.date) dateDiv.classList.add("today");
    dateDiv.textContent = i;
    datesArea.appendChild(dateDiv);
  }
}
updateCalendarBody();
