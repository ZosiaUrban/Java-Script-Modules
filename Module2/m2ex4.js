'use script'
numbers=[]

let nom;
while(nom !== '0'){
    nom=prompt("Enter a number or 0 to stop");
    numbers.push(nom);
}

numbers.sort().reverse();

const list=document.getElementById('numbers');
numbers.forEach(nom=>{
    const listItem=document.createElement('li');
    listItem.textContent=nom;
list.append(listItem)
});