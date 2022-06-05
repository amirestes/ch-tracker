import React, { Component } from 'react';

class PointValue extends Component {
    state = { 
        value: this.props.value
     } 

     handleClick = product => {
         this.setState({ value: this.state.value + this.props.value});
         console.log()
     }
    render() { 
        return (
            <div className='btn-group button'>
                <button className='btn btn-dark btn-lg' onClick={() => this.handleClick()}>
                    {this.props.value}
                </button>
                <span className={this.trackPoints()}>{this.formatCount}</span>
            </div>
        );
    }

    trackPoints() {
        let goal = "badge m-2 badge-";
        goal += (this.state.value === 15) ? "warning" : "primary";
        return goal;
    }

    formatCount() {
        const { value: points } = this.state;
        return points === 15 ? 'New Champion' : points;
    }
}
 
export default PointValue;
