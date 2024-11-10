


let students = [
    { firstName: "Vlad", lastName: "Dracula", credits: 30 },
    { firstName: "Zosia", lastName: "Nowak", credits: 45 },
    { firstName: "Cocoa", lastName: "Beans", credits: 25 }
];


function getCredits(firstName) {
    for (let student of students) {
        if (student.firstName === firstName) {
            return `${student.firstName} ${student.lastName} has ${student.credits} credits.`;
        }
    }
    return `Student with name ${firstName} not found.`;
}


console.log(students[2]);


for (let student of students) {
    console.log(`Name: ${student.firstName} ${student.lastName}, Credits: ${student.credits}`);
}


console.log("Sorted by first name:", students.sort((a, b) => a.firstName.localeCompare(b.firstName)));


console.log("Reversed list:", students.reverse());
console.log(getCredits("Zosia"));
console.log(getCredits("Nonexistent"));
