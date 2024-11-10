const year= prompt("Enter your year");


function checker(year){
    if (year % 4===0 && year % 100 !==0){
        return year
    }
}

document.getElementById("output").innerHTML = `
    <p> ${year}</p>

`;