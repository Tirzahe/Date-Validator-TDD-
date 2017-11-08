function isValidDate() {
    var date = document.getElementById('validate').value;
    var valid = hasValidLength(date) && hasValidDelimiters(date) && hasValidDay(date) && hasValidMonth(date)  && hasValidYear(date);
        alertValidity(valid);
}
function hasValidLength(date){
    return date.length === 8 || date.length === 10;
}

function hasValidMonth(date){
    var dateArr = date.split(''); //turn date into an array
    var mmPrefix = ['01', '02','03','04','05','06','07','08','09','10','11','12'];
    return mmPrefix.includes(date.slice(0,2));
}
function hasValidDelimiters(date){
    var delimeters = ['/','-','.'];
    return delimeters.includes(date[2]) && delimeters.includes(date[5]) && (date[2] === date[5]);
}
function hasValidYear(date){
    var num = ['0','1','2','3','4','5','6','7','8','9'];
    if(date.length === 8){
        return (num.includes(date[6]) && num.includes(date[7]));
    }
    else if(date.length === 10){
        return (num.includes(date[6]) && num.includes(date[7]) && num.includes(date[8]) && num.includes(date[9]));
    }
    else{
        return false;
    }
}
function hasValidDay(date){
    if(monthHas31Days(date)) {
        return dayInRange(date, 31);
    }
    else if(monthHas30Days(date)){
        return dayInRange(date, 30);
    }
    else if(monthHas29Days(date)){
        return dayInRange(date, 29);
    }
    else if(monthHas28Days(date)){
        return dayInRange(date, 28);;
    }
    else{
        return false;
    }
}
function dayInRange(date, endDay){
    var day = +date.slice(3, 5);
    return day >= 1 && day <= endDay;
}
function monthHas31Days(date){
    var months = ['01','03','05','07','08', '10', '12']
    return isAmongMonths(date, months);
}
function monthHas30Days(date){
    var months = ['04','06','09', '11'];
    return isAmongMonths(date,months);
}
function monthHas29Days(date){
    var year = +date.slice(-2);
    return isAmongMonths(date,['02']) && (year % 4 === 0);
}
function monthHas28Days(date){
    return isAmongMonths(date,['02']);
}
function isAmongMonths(date, months){
    var month = date.slice(0, 2);
    return months.includes(month);
}



function alertValidity(isValidDate){
    if(isValidDate === true){
        return alert("Congratulations!! You\'ve entered a valid date!");
    }
    else {
        return alert("Sorry!! You\'ve entered an invalid date!");
    }
}
