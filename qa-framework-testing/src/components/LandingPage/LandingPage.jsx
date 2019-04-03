import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Pages Link</h1>

                <div className="container">

                    <div className="pages-container">
                        <Link to='/guidelines-1.1.1'>Guidelines 1.1.1</Link>
                        <Link to='/guidelines-3.3.2'>Guidelines 3.3.2</Link>
                        <Link to='/guidelines-4.1.1'>Guidelines 4.1.1</Link>
                    </div>
                    <div className="pages-container">
                        <Link to='/resolved-guidelines-1.1.1'>Resolved Guidelines 1.1.1</Link>
                        <Link to='/resolved-guidelines-3.3.2'>Resolved Guidelines 3.3.2</Link>
                        <Link to='/resolved-guidelines-4.1.1'>Resolved Guidelines 4.1.1</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
