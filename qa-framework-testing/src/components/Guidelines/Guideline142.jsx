import React, { Component } from 'react';
import DemoVideo from '../../assets/videos/demo.mp4';

class Guideline142 extends Component {
    render() {
        return (
            <div>
                <video width="320" height="240" autoPlay>
                    <source src={DemoVideo} type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default Guideline142;
