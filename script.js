let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDay = new Date().getDay();
let currentDayElement = document.getElementById('currentDayOfTheWeek');
currentDayElement.innerHTML = `
<b>Current Day of the Week:</b> ${daysOfTheWeek[currentDay]}
`;
const currentTimeMillis = Date.now();
const currentUtcTime = new Date(currentTimeMillis);
const formattedTime = currentUtcTime.toISOString();
let currentUTCTimeElement = document.getElementById('currentUTCTime');
currentUTCTimeElement.innerHTML = `
<b>Current UTC Time:</b> ${formattedTime}
`;