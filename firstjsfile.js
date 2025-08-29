

/* ---------------- Part 1: Variables & Conditionals ---------------- */
let myName = "Vanessa";
let myAge = 21;
let lovesCoding = true;

//  conditional logic
if (lovesCoding) {
    console.log(myName + " loves coding 💻");
} else {
    console.log(myName + " is still figuring things out 🌱");
}

/* ---------------- Part 2: Custom Functions ---------------- */
// Function 1: Greet user
function greetUser(name) {
    return "Hello " + name + "! 👋";
}

// Function 2: Check if number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return num + " is even ✨";
    } else {
        return num + " is odd 🌙";
    }
}

console.log(greetUser("Vanessa"));
console.log(checkEvenOdd(7));

/* ---------------- Part 3: Loops ---------------- */
// Loop 1: For loop
for (let i = 1; i <= 3; i++) {
    console.log("For Loop count: " + i);
}

// Loop 2: While loop
let counter = 0;
while (counter < 3) {
    console.log("While Loop count: " + counter);
    counter++;
}

/* ---------------- Part 4: DOM Interactions ---------------- */
const btnChangeText = document.getElementById("btnChangeText");
const btnChangeColor = document.getElementById("btnChangeColor");
const btnAddItem = document.getElementById("btnAddItem");
const myList = document.getElementById("myList");

// Interaction 1: Change heading text
btnChangeText.addEventListener("click", () => {
    document.querySelector("h1").innerText = "You clicked the button! 🎉";
});

// Interaction 2: Change background color
btnChangeColor.addEventListener("click", () => {
    document.body.style.backgroundColor = "#ffeaa7"; // pastel yellow
});

// Interaction 3: Add a new item to the list
btnAddItem.addEventListener("click", () => {
    let newItem = document.createElement("li");
    newItem.textContent = "New item added by Vanessa 💕";
    myList.appendChild(newItem);
});
