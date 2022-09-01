const banner = document.getElementById("h3");
const pointsValue = document.getElementById("points");
const progressBarData = document.getElementById("percentLoaded");

//A function to add placeholder for dog's name
const name = () => {
  const nameArray = []; //create empty array
};

//Points Count and Button click event function
let points = 0;
pointsValue.textContent = points;

//Print points to span
const increasePoints = (value) => {
  points = points + value;
  pointsValue.textContent = points;
  progressBarUpdater(points);
  //Prints banner when 15 points is reached
  if (points >= 15) {
    banner.textContent = "CONGRATULATIONS ON YOUR NEW CHAMPION!!!";
  }
};

//Resets points to 0 and prints 0
const reset = () => {
  pointsValue.textContent = 0;
  points = 0;
  banner.textContent = "";
  progressBarData.style = "width: 0%;";
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
