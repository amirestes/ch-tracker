//Points Count and Button click event function
const pointsValue = document.getElementById("points");
let points = 0;
pointsValue.textContent = points;
//Print points to span
const increasePoints = (value) => {
  points = points + value;
  pointsValue.textContent = points;
  //Prints banner when 15 points is reached
  if (points >= 15) {
    const banner = document.getElementById("h3");
    banner.textContent = "CONGRATULATIONS ON YOUR NEW CHAMPION!!!";
  }
};

//Resets points to 0 and prints 0
const reset = () => {
  pointsValue.textContent = 0;
  points = 0;
};

// const progressBarUpdater = document.getElementById("progressbar").value;
// console.log("test button clicked");
// progressBarUpdater.removeAttribute(style);
// progressBarUpdater.setAttribute(style, 100);
// progress bar change class for 5 points
// const progressUpdate = () => {
//   if (points === 5) {
//     console.log("woohoo");
//   } else {}
// };
// progressUpdate();
//progress bar change class for 10 points
//progress bar change class for 15 points
