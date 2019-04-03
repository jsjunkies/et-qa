import React, { Component } from 'react';


class Guideline411 extends Component {
    render() {
        return (
            <div>
                <h2>Div's with same id</h2>
                <div className="guidelineContainer411">
                    <div id="uniqueId"></div>
                    <div id="uniqueId"></div>
                </div>

            </div>
        );
    }
}

export default Guideline411;


