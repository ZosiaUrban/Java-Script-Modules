'use script'

dognames=[]


for (let i=0; i<6;i++){
    dogs=prompt("Enter dogs name");
    dognames.push(dogs);
}
dognames.sort().reverse();

const list=document.getElementById("dognames");
    dognames.forEach(dog => {
        const listItem = document.createElement("li");
        listItem.textContent = dog;
        list.appendChild(listItem);
    });

