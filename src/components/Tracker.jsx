import React, { Component } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tracker extends Component {
    state = {  } 
    render() { 
        return (
           <div className='progressBar tracker'>
               <ProgressBar striped variant="" now={33} />
           </div>
        )
    }
}
 
export default Tracker;