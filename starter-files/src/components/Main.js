import React from 'react';
import Header from './Header';

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            numBeers: 10
        }
    }

    render() {
        // props are how you pass data to a component
        // components HAVE state
        return (
            <div className="main">
                <Header siteName="Beer me"/>
            </div>
        )
    }
}

export default Main;