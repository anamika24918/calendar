
const monthE1 = document.getElementById('month');

const daynameE1 = document.getElementById('day');

const daynumE1 = document.getElementById('day-num');

const yearE1 = document.getElementById('year');

const date = new Date()
const month = date.getMonth()
monthE1.innerHTML = date.toLocaleDateString("en", {
  month: "long",
});
daynameE1.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});
daynumE1.innerHTML = date.getDate();
yearE1.innerHTML = date.getFullYear();