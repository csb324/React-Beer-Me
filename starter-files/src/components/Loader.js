import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
    render() {
        return (
            <div className="loader">
                <img alt="" src="/images/ball.svg"/>
                <h2>Your Message from props goes here</h2>
            </div>
        )
    }
}

export default Loader;