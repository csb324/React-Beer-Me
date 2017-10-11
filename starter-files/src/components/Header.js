// import the stuff you want 
import React from 'react';
import PropTypes from 'prop-types';

// ... do stuff ...
class Header extends React.Component {

  static propTypes = {
    siteName: PropTypes.string.isRequired
  }

  render() {
    return(
      <div>
        <h1>{this.props.siteName}</h1>
      </div>
    )
  }
}


// export what you want to use in the other file
export default Header;