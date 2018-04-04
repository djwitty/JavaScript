// My First JavaScript program
// Created by Mikhail aka DjWitty
// 02.04.2018, 23:10
document.addEventListener('DOMContentLoaded', function() {

var calendarWrap = document.getElementById('wrapper');
var tblHeads = document.getElementsByTagName('th');
var tblBody = document.getElementsByTagName('tbody');
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//Number of days in month
var days = [];
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
//Number of days in curr month
var daysInCurrMonth = daysInMonth(currMonth, currYear);
for (var i = 1; i <= daysInCurrMonth; i++) {
    days.push(i); 
}

var date = new Date();
var currMonth = date.getMonth() + 1;
var currYear = date.getFullYear();
var today = date.getDate();
var currDay = '0' + date.getDay();
    if (currDay == 0) currDay = 7;

function getMonth(month)
{
    month = month-1;
    if(months[month] != null){
        return months[month];
    }else{
        throw "Invalid Month Number";
    }
}
var currMonthName = getMonth(currMonth);

function getWeekDay(day)
{
    if(weekDays[day] != null){
        return weekDays[day];
    }else{
        throw "Invalid Day of Week Number";
    }
}
var currDayName = getWeekDay(date.getDay());
var currYear = date.getFullYear();

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
console.log(daysInCurrMonth);
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
//dateCell.innerHTML = '<strong>Current Date is </strong>'  + currDayName + ', ' + currDay + ' ' + currMonthName + ', ' + currYear;
//write current year
var yearRow = genTable[0].insertRow(1);
var yearCell = yearRow.insertCell(0);
yearCell.setAttribute("colspan", daysInCurrMonth);
yearCell.setAttribute("align", "center");
yearCell.innerHTML = '<strong>Current Year is </strong>' + currYear;
//write current month
var monthRow = genTable[0].insertRow(2);
var monthCell = monthRow.insertCell(0);
monthCell.setAttribute("colspan", daysInCurrMonth);
monthCell.setAttribute("align", "center");
monthCell.innerHTML = '<strong>Current Month is </strong>' + currMonthName + " (Month #" + currMonth + ') ';
//write current dayOfWeek
var dayOfWeekRow = genTable[0].insertRow(3);
var dayOfWeekCell = dayOfWeekRow.insertCell(0);
dayOfWeekCell.setAttribute("colspan", daysInCurrMonth);
dayOfWeekCell.setAttribute("align", "center");
dayOfWeekCell.innerHTML = '<strong>Current Day Of Week is </strong>' + currDayName;

var numbers = document.getElementsByClassName('day');
for(var c = 0; c < numbers.length; c++)
{
    if(numbers[c].innerHTML == today)
    {
        numbers[c].classList.add('today');
    }
}

/*WEEKDAYS NAMES from weekDays[]
var wDayRow = genTable[0].insertRow(2);
for (var i = 0; i < weekDays.length; i++)
{
var wDayCell = wDayRow.insertCell(0);
wDayCell.innerHTML = weekDays[i];
}
*/

});

