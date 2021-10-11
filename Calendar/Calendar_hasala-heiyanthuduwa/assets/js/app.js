const date = new Date();

let possibleYears = []

for(let i=1970; i<2038; i++){
    possibleYears.push(i)
}

let currentYearIndex = possibleYears.indexOf(date.getFullYear())
$('.overlay').hide()

window.onload = function () {
    clock();
    function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = "PM";
      if (min < 10) {
        min = "0" + min;
      }
      if (hour > 12) {
        hour = hour - 12;
      }
      if (hour == 0) {
        hour = 12;
      }
      if (TwentyFourHour < 12) {
        mid = "AM";
      }

      $('.time').text(`${hour}:${min} ${mid}`)
      setTimeout(clock, 1000);
    }
    $('.current-year').text(possibleYears[currentYearIndex])
    $('.current-year').attr('data-year', possibleYears[currentYearIndex])
    $('.previous-year').text(possibleYears[currentYearIndex-1])
    $('.next-year').text(possibleYears[currentYearIndex+1])

  };
  


const renderCalendar = () => {

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = new Date(date.getFullYear(),date.getMonth(),1).getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

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

  $('.month-year').text(`${months[date.getMonth()]} ${date.getFullYear()}`)

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() 
        && 
        date.getMonth() === new Date().getMonth()
        &&
        date.getFullYear() === new Date().getFullYear()
        ) {

      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
     $('.days').html(days);
};

$('.prev').click(() => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

$('.next').click(() => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

$('.prev-year').click(()=>{
    if(currentYearIndex>0){
        currentYearIndex--
        clearYears()
        $('.current-year').text(possibleYears[currentYearIndex])
        $('.current-year').attr('data-year', possibleYears[currentYearIndex])
        $('.previous-year').text(possibleYears[currentYearIndex-1])
        $('.next-year').text(possibleYears[currentYearIndex+1])
    }
})

$('.next-year').click(()=>{
    if(currentYearIndex<(possibleYears.length-1)){
        currentYearIndex++
        clearYears()
        $('.current-year').text(possibleYears[currentYearIndex]).attr('data-year', currentYearIndex)
        $('.current-year').attr('data-year', possibleYears[currentYearIndex])
        $('.previous-year').text(possibleYears[currentYearIndex-1])
        $('.next-year').text(possibleYears[currentYearIndex+1])
    }
})

const clearYears = () => {
    $('.current-year').text('')
    $('.previous-year').text('')
    $('.next-year').text('')
}

$('.current-year').click(() => {
    let selectedYear = $('.current-year').attr('data-year')
    date.setFullYear(selectedYear)
    renderCalendar();
})

$('.close-year-select').click(() => {
    $('.overlay').hide()
})

$('.month-year').click(() => {
    $('.overlay').show()
})