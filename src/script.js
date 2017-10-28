function isValidDate(a, b) {
   
}

// function alertValid(){
//     //if true function alert("this is a valid date");
// }

// function alertInvalid(){
//     //else if false alert("this is an invalid date")
// }

function hasValidLength(date){
    return date.length === 8 || date.length === 10;
}

function hasValidMonth(date){
    var dateArr = date.split(''); //turn date into an array
    var mmPrefix = ['01', '02','03','04','05','06','07','08','09','10','11','12'];
    return mmPrefix.includes(date.slice(0,2));
}

// function hasValidFormat(date){
//     for (i=0; i< date.length; i++){
//         //if (date.slice(0,2) === 
//     }
// }