'use script'
function rollDice() {
    let roll;
    let output = document.getElementById("diceRolls");
    output.innerHTML = "";

    do {
        roll = Math.floor(Math.random() * 6) + 1;
        let listItem = document.createElement("li");
        listItem.textContent = `Rolled: ${roll}`;
        output.appendChild(listItem);
    } while (roll !== 6);
}

function rollCustomDice() {
    let sides = parseInt(prompt("enter the side of dice"));
    if (isNaN(sides) || sides <= 1) {
        document.getElementById("customDiceRolls").innerHTML = "WRONG";
        return;
    }

    let roll;
    let output = document.getElementById("customDiceRolls");
    output.innerHTML = "";

    do {
        roll = Math.floor(Math.random() * sides) + 1;
        let listItem = document.createElement("li");
        listItem.textContent = `Rolled: ${roll}`;
        output.appendChild(listItem);
    } while (roll !== sides);
}