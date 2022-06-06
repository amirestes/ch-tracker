import React, { Component } from 'react';

class Dog extends Component {
    state = {  } 
    render() { 
        return (
            <div className='dog'>
                <h1>Championship Tracker</h1>
                <h3>Dog's Name</h3>
                <input type="text" 
                placeholder="Dog's Call Name" />
            </div>
        );
    }
}
 
export default Dog;