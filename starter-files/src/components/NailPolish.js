import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slug from 'slugify';

class NailPolish extends React.Component {  

  static propTypes = {
    color: PropTypes.shape(
      {
        hex_value: PropTypes.string,
        colour_name: PropTypes.string
      }
    )
  }

  render() {
    const { color, uniqueID } = this.props.details;

    return (
      <Link to={`/polish/${uniqueID}/${slug(color.colour_name)}`} className="nailpolish" style={ { backgroundColor: color.hex_value } }>
        <h2 className="nailpolish__name">{ color.colour_name }</h2>
      </Link>
    )
  }
}

export default NailPolish;
