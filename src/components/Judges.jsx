import React, { Component } from 'react';

class Judges extends Component {
    state = { 
        judge: [
        ]
     } 
    render() { 
        return (
            <div className='judge'>
                <input type="text" placeholder="Judge's name" />
            </div>
        );
    }
}
 
export default Judges;