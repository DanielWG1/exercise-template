function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    // let arrYears= [];
    function yearRange(startY, endY) {
    let yearRangeList= [] ;
    for (i = startY; i < endY; i++) {
    yearRangeList.push (i);
    }
    
    let leapYearList= [];
    yearRangeList.forEach (function (year) {
        if (isLeap(year))
        leapYearList.push(year);
    });
    return leapYearList;
}
    function isLeap(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 && year % 4 === 0 && year % 100 === 0)
    return year;
    } 

       
    

/**/
    output.innerText = out;
}