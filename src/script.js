function isValidDate(a, b) {
   
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
    var mo30Days = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
    var mo31Days = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
    var feb28Days = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28'];
    var feb29Days = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'];
    var year = date.slice(-2);
    if((date.slice(0, 2) === '01') || (date.slice(0, 2) ==='03') || (date.slice(0, 2) === '05') || (date.slice(0, 2) ==='07')|| (date.slice(0, 2) === '08') || (date.slice(0, 2) === '10') || (date.slice(0, 2) === '12')) {
        return mo31Days.includes(date.slice(3, 5));
    }
    else if((date.slice(0, 2) === '04') || (date.slice(0, 2) === '06') || (date.slice(0, 2) === '09') || (date.slice(0, 2) === '11')){
        return mo30Days.includes(date.slice(3, 5));
    }
    else if((date.slice(0, 2) === '02') && (year % 4 === 0)){
        return feb29Days.includes(date.slice(3, 5));
    }
    else if((date.slice(0, 2) === '02') && (year % 4 != 0)){
        return feb28Days.includes(date.slice(3, 5));
    }
    else{
        return false;
    }
}
    
// function alertValid(){
  //  if(isValidDate === true){
//     alert("this is a valid date");
// }

// function alertInvalid(){
//     //else if false alert("this is an invalid date")
// }
// else {
//         return alert("This is an invalid date, Please try again!")
// }