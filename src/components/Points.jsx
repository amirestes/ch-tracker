import React, { Component } from 'react';
import PointValue from './PointValue'

class Points extends Component {
    state = { 
        points: [
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 4},
            {id: 5, value: 5}
        ]
     } 
    render() { 
    
        return (
            <div>
                {this.state.points.map(points => (
                    <PointValue key={points.id} value={points.value} id={points.id} />
                ))}
            </div>
        );
    }
}
 
export default Points;