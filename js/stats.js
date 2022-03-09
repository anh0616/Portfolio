let currentDate = new Date();

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

let startMonth = 01;
let startYear = 2018;

// Update hours of practiced by months
function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
        (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
}

let practicedHrs = monthDiff(new Date(startYear, startMonth), new Date(currentYear, currentMonth))*85;

const holdPracHrs = document.querySelector('.pracHrs');

holdPracHrs.dataset.target = practicedHrs;