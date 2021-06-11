let cDate = new Date();

let cDay = cDate.getDate();
let cMonth = cDate.getMonth() + 1;
let cYear = cDate.getFullYear();

// Update copyright year
const holdYear = document.querySelector('.footerDate');

holdYear.innerHTML = `Copyright &copy; ${cYear}. All rights reserved.`