'use script'
function concat(strings) {
    let result = "";
    for (let str of strings) {
        result += str;
    }
    return result;
}
function showConcatenatedString() {
    const array = ["Johnny", "DeeDee", "Joey", "Marky"];
    const result = concat(array);
    document.getElementById("concatOutput").innerHTML = `Concatenated string: ${result}`;
}