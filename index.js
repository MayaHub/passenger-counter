// initalize count at 0
let count = 0;

//listen for click - onclick property applied to element in html file
const element = document.getElementById("count-el");

//function to run when click event occurs
function increment() {
  count++; //increment the count variable when clicked
  element.innerHTML = count; //change the count-el in HTML to reflect new count
  // console.log(count);
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl
const saveEl = document.getElementById("save-el");

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  const saved = " " + count + " - ";
  // 3. Render the variable in the saveEl using innerText
  saveEl.innerText += saved;

  // NB: Make sure to not delete the existing content of the paragraph
  console.log(count);
}

function reset() {
count = 0;
element.innerText = 0;
console.log(count);
}

//this doesn't work yet
function clear() {
  const saved = "Previous entries:";
  saveEl.innerText = saved;
  console.log(count);
}


