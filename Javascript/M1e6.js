const answer = confirm('Should I calculate the Squareroot?');
const number=Number(prompt("Enter a number"));

console.log(answer);


function calc(answer){
    if (answer ==="OK"){
        Math.sqrt(number)
    }else{
        console.log("Canceling")
    }
}



document.getElementById("output").innerHTML = `
    <p>The square root is ${calc(number)}!</p>
`;