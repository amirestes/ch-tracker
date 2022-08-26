//Points Count and Button click event function
const pointsValue = document.getElementById("points");
let points = 0;
pointsValue.innerHTML = points;

const increasePoints = (value) => {
  points = points + value;
  pointsValue.innerHTML = points;
};

const progressChange = () => {
  if (points === 5) {
    //banner works when I used it with an onclick event and a button, but not working when I put in a conditional
    const banner = document.querySelectorAll("h3");
    banner.innerText = "Hello!!!";
  }
};

progressChange();

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
