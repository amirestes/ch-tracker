const banner = document.getElementById("h3");
const pointsValue = document.getElementById("points");
const progressBarData = document.getElementById("percentLoaded");
const major = document.getElementById("major");
const addDogName = document.querySelector("#submit");
const nameInput = document.querySelector("input");
const listName = document.querySelector(".dog");
const name = nameInput.value;
let points = 0;
pointsValue.textContent = points;
let majorCount = 0;

//A function to add dog's name
addDogName.addEventListener("click", () => {
  const name = nameInput.value;
  if (name !== "") {
    const listName = document.querySelector(".dog");
    listName.textContent += " " + name;
    clearInput();
  }
});

const clearInput = () => {
  nameInput.value = "";
};

//Print points to span
const increasePoints = (value) => {
  points = points + value;
  pointsValue.textContent = points;
  progressBarUpdater(points);
  //Prints banner when 15 points with at least 2 majors is reached
  if (points >= 15 && majorCount >= 2) {
    banner.textContent = "CONGRATULATIONS ON YOUR NEW CHAMPION!!!";
  }
  //Prints number of majors won
  if (value >= 3) {
    majorCount += 1;
    major.textContent = majorCount + " major wins";
  }
};

//Resets points to 0 and prints 0
const reset = () => {
  pointsValue.textContent = 0;
  points = 0;
  banner.textContent = "";
  progressBarData.style = "width: 0%;";
  majorCount = 0;
  major.textContent = "";
  listName.textContent = "Dog's Name:";
};
