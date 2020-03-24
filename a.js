console.log("THis message will be printed to console");
console.warn("This is a warning message");
console.error("There is an error");
let input = Number(prompt("Enter a number here"));
console.log(input);
console.assert(!Number.isNaN(input),"The entered text is not a number");
document.write("To be printed on document window");
document.writeln("will be printed followed by a space character");
console.log("%cLearning JS\n%cUsing console","color:red;font-size:2rem;border:1px solid lightgray;border-radius:5px;background-color:#eeeeee","color:blue;font-size:1.5rem");