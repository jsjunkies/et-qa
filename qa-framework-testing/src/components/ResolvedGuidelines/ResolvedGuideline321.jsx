import React, { Component } from 'react';
class ResolvedGuideline321 extends Component {
    render() {
        return (
            <div>
                <h2>User Form</h2>
                <form action="javascript:void(0)">
                    Enter your First Name:
                    <input
                        name="firstname"
                        type="text"
                        placeholder="Enter your First Name"
                        onFocus={this.showDialog} />
                    <br />
                    Enter your Last Name:
                    <input name="lastname" type="text" placeholder="Enter your Last Name" />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default ResolvedGuideline321;
