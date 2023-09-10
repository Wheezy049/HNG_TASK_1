let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDay = new Date().getDay();
let currentDayElement = document.getElementById('currentDayOfTheWeek');
currentDayElement.innerHTML = `
<b>Current Day of the Week:</b> ${daysOfTheWeek[currentDay]}
`;

let currentUTCTimeElement = document.getElementById('currentUTCTime');
function updateDateTime(){
 let currentUtcTime = new Date();
 let utcTimeString = currentUtcTime.toISOString();
 currentUTCTimeElement.innerHTML = `
<b>Current UTC Time:</b> ${utcTimeString}
`;
}
setInterval(updateDateTime, 1000);
updateDateTime();