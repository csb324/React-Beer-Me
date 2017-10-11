import React from 'react';
import Header from './Header';

class Main extends React.Component {

    render() {
        // props are how you pass data to a component 
        return (
            <div className="main">
                <Header siteName="polish me"/>
            </div>
        )
    }
}

export default Main;