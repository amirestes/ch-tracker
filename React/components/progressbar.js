import React from 'react';
import ReactDOM from 'react-dom';

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
  
  