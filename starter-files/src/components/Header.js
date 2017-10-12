// import the stuff you want
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ... do stuff ...
function Header(props) {
  return (
    <Link to="/" className="header-link">
      <h1 className="header">{props.siteName}</h1>
    </Link>
  );
}

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};

// export what you want to use in the other file
export default Header;
