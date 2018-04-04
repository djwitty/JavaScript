// My First JavaScript program
// Created by Mikhail aka DjWitty
// 02.04.2018, 23:10
document.addEventListener('DOMContentLoaded', function() {

var calendarWrap = document.getElementById('wrapper');
var tblHeads = document.getElementsByTagName('th');
var tblBody = document.getElementsByTagName('tbody');
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var startWeek = 0;
function getMonth(month)
{
    month = month-1;
    if(months[month] != null){
        return months[month];
    }else{
        throw "Invalid Month Number";
    }
}

function getWeekDay(day)
{
    if(weekDays[day] != null){
        return weekDays[day];
    }else{
        throw "Invalid Day of Week Number";
    }
}

var date = new Date();
var currMonth = date.getMonth() + 1;

var currYear = date.getFullYear();
var lastYear = date.getFullYear() - 1;
var nextYear = date.getFullYear() + 1;

var today = date.getDate();
var yest = today - 1;
var tomo = today + 1;
var currDay = '0' + date.getDay();
    if (currDay == 0) currDay = 7;

//Number of days in month
var days = [];
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
//Number of days in curr month
var daysInCurrMonth = daysInMonth(currMonth, currYear);
for (var a = 1; a <= daysInCurrMonth; a++) {
    days.push(a); 
}


var currMonthName = getMonth(currMonth);
var lastMonthName = getMonth(currMonth-1);
var nextMonthName = getMonth(currMonth+1);

var lastDayName = getWeekDay(date.getDay() - 2);
var currDayName = getWeekDay(date.getDay() - 1);
var nextDayName = getWeekDay(date.getDay());

function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');
  table.classList.add('calendar');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');
    row.classList.add('days');
    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.classList.add('day');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  var calendar = document.getElementById('calendar');
  calendar.appendChild(table);
}
console.log(days);
createTable([days]);

var genTable = document.getElementsByClassName('calendar');
genTable[0].setAttribute("border", "1");
genTable[0].setAttribute("align", "center");
//write current date
var dateRow = genTable[0].insertRow(0);
var dateCell = dateRow.insertCell(0);
dateCell.setAttribute("colspan", daysInCurrMonth);
dateCell.setAttribute("align", "center");

/*DATE FORMAT*/
var dd = date.getDate();
var mm = date.getMonth()+1; //January is 0!
var yyyy = date.getFullYear();
if(dd<10) dd = '0'+dd;
if(mm<10) mm = '0'+mm; 
curDate = dd + '.' + mm + '.' + yyyy;
curDate2 = mm + '.' + dd + '.' + yyyy;
dateCell.innerHTML = '<strong>Today is </strong> (<em>dd.mm.yyyy</em>) ' + curDate + '<br/>';
dateCell.innerHTML += '<strong>Today is </strong> (<em>mm.dd.yyyy</em>) ' + curDate2;
dateCell.innerHTML += '<hr/>';
//dateCell.innerHTML = '<strong>Current Date is </strong>'  + currDayName + ', ' + currDay + ' ' + currMonthName + ', ' + currYear;
//write current year
var yearRow = genTable[0].insertRow(1);
var yearCell = yearRow.insertCell(0);
yearCell.setAttribute("colspan", daysInCurrMonth);
yearCell.innerHTML = '<strong>Last Year is </strong>' + lastYear + '&nbsp;&nbsp;&nbsp;';
yearCell.innerHTML += '<strong>Current Year is </strong>' + currYear + '&nbsp;&nbsp;&nbsp;';
yearCell.innerHTML += '<strong>Next Year is </strong>' + nextYear + '&nbsp;&nbsp;&nbsp;';
//write current month
var monthRow = genTable[0].insertRow(2);
var monthCell = monthRow.insertCell(0);
monthCell.setAttribute("colspan", daysInCurrMonth);
monthCell.innerHTML = '<strong>Last Month is </strong>' + lastMonthName + " (Month #" + (currMonth-1) + ') &nbsp;&nbsp;&nbsp;';
monthCell.innerHTML += '<strong>Current Month is </strong>' + currMonthName + " (Month #" + (currMonth) + ') &nbsp;&nbsp;&nbsp;';
monthCell.innerHTML += '<strong>Next Month is </strong>' + nextMonthName + " (Month #" + (currMonth+1) + ') ';
//write current dayOfWeek
var NextDayOfWeekRow = genTable[0].insertRow(3);
var NextDayOfWeekCell = NextDayOfWeekRow.insertCell(0);
NextDayOfWeekCell.setAttribute("colspan", daysInCurrMonth);
NextDayOfWeekCell.innerHTML = '<strong>Yesturday is </strong>' + lastDayName + '&nbsp;&nbsp;&nbsp;';
NextDayOfWeekCell.innerHTML += '<strong>Today is </strong>' + currDayName + '&nbsp;&nbsp;&nbsp;';
NextDayOfWeekCell.innerHTML += '<strong>Tomorrow is </strong>' + nextDayName;
//write current number
var numberRow = genTable[0].insertRow(4);
var numberCell = numberRow.insertCell(0);
numberCell.setAttribute("colspan", daysInCurrMonth);
numberCell.setAttribute("align", "center");
numberCell.innerHTML = '<strong>Yesturday is </strong>' + yest + '&nbsp;&nbsp;&nbsp;';
numberCell.innerHTML += '<strong>Today is </strong>' + today + '&nbsp;&nbsp;&nbsp;';
numberCell.innerHTML += '<strong>Today is </strong>' + tomo;

var numbers = document.getElementsByClassName('day');
for(var c = 0; c < numbers.length; c++)
{
    if(numbers[c].innerHTML == today)
    {
        numbers[c].classList.add('today');
    }
}
for(var b = 0; b < numbers.length; b++)
{
    if((numbers[b].innerHTML%7) === 0)
    {
        numbers[b].classList.add('isWeekend');
    }
}

/*WEEKDAYS NAMES from weekDays[]*/
var wDayRow = genTable[0].insertRow(5);
for (var i = 0; i < weekDays.length; i++)
{
var wDayCell = wDayRow.insertCell(0);
wDayCell.innerHTML = weekDays[i];
if (wDayCell.innerHTML == currDayName) wDayCell.classList.add('today');
}


});

