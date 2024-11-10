const name = prompt('Type your name.');


function getRandom(){
     return Math.floor(Math.random() * 4) + 1;
}

const sort=getRandom();
let house;
if(sort===1){
    console.log('Grifindor')
} else if (sort===2){
    console.log('Hufflepuff')
} else if (sort===3){
    console.log('Ravenclaw')
} else{
    console.log('Slytherin')
}

console.log(house);

document.getElementById("output").innerHTML = `
    <p>The hat has chosen: ${name}, you belong to ${house}!</p>
`;