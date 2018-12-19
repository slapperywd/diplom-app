import React, { Component } from 'react';
import MainNavbar from './Navbar';

class About extends Component {
    render() {
        return (
            <div>
                <MainNavbar/>
                <div className="hero col-sm-3">
                    <p>this is about page</p>
                </div>
            </div>
        )
    }
}

export default About;