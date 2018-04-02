// My First JavaScript program
// Created by Mikhail aka DjWitty
// 02.04.2018, 23:10
document.addEventListener('DOMContentLoaded', function() {

var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var calendarWrap = document.getElementById('wrapper');
var calendar = document.getElementById('calendar');
var tbl = document.createElement('table');
var tblBody = document.createElement('tbody');
tbl.appendChild(tblBody);
var tblRows = document.createElement('tr');
var tblCols = document.createElement('td');
var tblHeads = document.createElement('th');

for (var i = 1; i < 7; i++) {
    tblBody.innerHTML += '<tr id="row' + i + '"></tr>';
}
var calendarRows = document.getElementsByTagName('tr');
console.log(calendarRows[0]);
for (var i = 1; i < 8; i++) {
    tblRows.innerHTML += '<td>' + i + '</td>';
}

//for (var i = 0; i === 7; i++) {}
//tblRows.appendChild(tblHeads);

calendar.appendChild(tbl);

var date = new Date();

function getMonth(month){
    month = month-1;
    
    if(months[month] != null){
        return months[month];
    }else{
        throw "Invalid Month Number";
    }
}
function getWeekDay(day){
    if(weekDays[day] != null){
        return weekDays[day];
    }else{
        throw "Invalid Day of Week Number";
    }
}

var currMonth = date.getMonth() + 1;
var currDay = '0' + date.getDay();
if (currDay == 0) currDay = 7;
var currMonthName = getMonth(currMonth);
var currDayName = getWeekDay(1);
var currYear = date.getFullYear();
console.log(currDayName + ', ' + currDay + ' ' + currMonthName + " (Month #" + currMonth + ') ' + currYear);


});

