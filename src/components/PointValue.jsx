import React, { Component } from 'react';

class PointValue extends Component {
    state = { 
        value: this.props.value
     } 
    render() { 
        return (
            <div>
                <button>{this.props.value}</button>
            </div>
        );
    }
}
 
export default PointValue;
