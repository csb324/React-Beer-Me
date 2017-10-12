import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
    
    static propTypes = {
        message: PropTypes.string
    }

    render() {
        return (
            <div className="loader">
                <img alt="" src="/images/ball.svg"/>
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}

export default Loader;