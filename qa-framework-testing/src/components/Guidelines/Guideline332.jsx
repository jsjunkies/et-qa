import React, { Component } from 'react';


class Guideline332 extends Component {
    render() {
        return (
            <div>
                <h2>Email type input with incorrect Label</h2>
                <label htmlFor="username">Postal Code</label>
                <input type="email" id="username" />
            </div>
        );
    }
}

export default Guideline332;
