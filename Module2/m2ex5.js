'use script'
numbers=[];
let duplicateFound=false;
while(! duplicateFound){
    let nom=prompt("Enter a number")


    if(numbers.includes(nom)){
        alert("Number has already been given")
        duplicateFound=true;
    }else{
        numbers.push(nom)
    }
}

numbers.sort((a, b) => a - b);
console.log("Given numbers in ascending order:", numbers);

const list=document.getElementById('numbers');
numbers.forEach(nom=>{
    const listItem=document.createElement('li');
    listItem.textContent=nom;
list.append(listItem)
});