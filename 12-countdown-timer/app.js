const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector('.giveaway')
const deadLine = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 0, 2, 14, 30, 0);
let futureDate = new Date(tempYear,tempMonth,tempDay + 10,16,30,0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours} : ${minutes}`

// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);
getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  
  //1s = 1000ms
  //1m - 60s
  //1hr = 60m
  //1d= 24h

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000)
  //set values array;
  const values = [days, hours, minutes, seconds]

  const format = (item) => {
    if (item < 10) {
      return `0${item}`
    }
    return item
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(countDown);
    deadLine.innerHTML = `<h4 class="expired">Sorry! Giveaway expired</h4>`
  }
}
let countDown = setInterval(getRemainingTime,1000)
getRemainingTime();