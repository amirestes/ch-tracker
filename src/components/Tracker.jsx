import React, { Component } from 'react';

class Tracker extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div>
                    {/* everytime you add points it adds a new div filled in with a background color */}
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Tracker</th>
                                <th>tracker</th>
                                <th>tracker</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a</td>
                                <td>b</td>
                                <td>c</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
 
export default Tracker;