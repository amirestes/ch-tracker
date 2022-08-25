//Points Count and Button click event function
const pointsValue = document.getElementById("points");
let points = 0;
pointsValue.innerHTML = points;

const increasePoints = (value) => {
  points = points + value;
  pointsValue.innerHTML = points;
};

//Progress Bar
//progress bar change class for 5 points
const progressUpdate = () => { 
  
};

//progress bar change class for 10 points
//progress bar change class for 15 points