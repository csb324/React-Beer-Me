// import the stuff you want 
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ... do stuff ...
class Header extends React.Component {

  static propTypes = {
    siteName: PropTypes.string.isRequired
  }

  render() {
    return(
      <Link to="/" className="header-link">
        <h1 className="header">{this.props.siteName}</h1>
      </Link>
    )
  }
}


// export what you want to use in the other file
export default Header;