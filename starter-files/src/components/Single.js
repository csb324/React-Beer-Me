import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Single extends React.Component {
    render() {
        return (
            <div className="single-beer">
                Single
                <Link to="/">
                BACK
                </Link>
            </div>
        )
    }
}

export default Single;