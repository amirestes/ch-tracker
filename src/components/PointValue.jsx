import React, { Component } from 'react';

class PointValue extends Component {
    state = { 
        value: this.props.value
     } 
    render() { 
        return (
            <div className='btn-group'>
                <button className='btn btn-success btn-lg'>{this.props.value}</button>
            </div>
        );
    }
}
 
export default PointValue;
