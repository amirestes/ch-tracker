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
const pastEl = document.getElementById("past-el");
const pastList = document.getElementById("past-ul");
let myDogs = [];
let myPoints = [];

//A function to add dog's name
addDogName.addEventListener("click", () => {
  const name = nameInput.value;
  //adds name to myDogs array
  myDogs.push(name);
  if (name !== "") {
    const listName = document.querySelector(".dog");
    listName.textContent += " " + name;
    clearInput();
    //Saves name and points to localStorage
    // localStorage.setItem("name", JSON.stringify(myDogs));
    // savedList();
  }
});

//Clears name
const resetName = () => {
  listName.textContent = "Dog's Name:";
};

//Clears the name value
const clearInput = () => {
  nameInput.value = "";
};

//Print points to span
const increasePoints = (value) => {
  points = points + value;
  pointsValue.textContent = points;
  // myPoints.push(points);
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
  // localStorage.setItem("points", points);
};

//localStorage list of past dogs and their points
// const savedList = () => {
//   let savedName = JSON.parse(localStorage.getItem("myDogs"));
//   let savedPoints = localStorage.getItem("points");
//   myDogs.forEach(
//     (element) => (pastList.innerHTML = `<li>${myDogs} ${points}</li>`)
//   );
// };
//clear past list
// const resetList = () => {
//   pastList.innerHTML = ` `;
//   localStorage.clear();
// };
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

//Controls progress bar changes
const progressBarUpdater = (points) => {
  if (points === 1) {
    progressBarData.style = "width: 7%";
  } else if (points === 2) {
    progressBarData.style = "width: 13%";
  } else if (points === 3) {
    progressBarData.style = "width: 20%";
  } else if (points === 4) {
    progressBarData.style = "width: 27%";
  } else if (points === 5) {
    progressBarData.style = "width: 33%";
  } else if (points === 6) {
    progressBarData.style = "width: 40%";
  } else if (points === 7) {
    progressBarData.style = "width: 47%";
  } else if (points === 8) {
    progressBarData.style = "width: 53%";
  } else if (points === 9) {
    progressBarData.style = "width: 60%";
  } else if (points === 10) {
    progressBarData.style = "width: 66%";
  } else if (points === 11) {
    progressBarData.style = "width: 73%";
  } else if (points === 12) {
    progressBarData.style = "width: 80%";
  } else if (points === 13) {
    progressBarData.style = "width: 87%";
  } else if (points === 14) {
    progressBarData.style = "width: 93%";
  } else if (points >= 15) {
    progressBarData.style = "width: 100%";
  }
};
