import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slug from 'slugify';

class NailPolish extends React.Component {  
  render() {
    const { brand, name, price, image_link, product_link, color, id } = this.props.details;
    const uniqueName = `${ brand } - ${ color.colour_name }`;

    return (
      <div className='nailpolish' style={ { backgroundColor: color.hex_value } }>
        <Link to={`/polish/${id}/${slug(uniqueName)}`}>
          <h2 className="nailpolish__name">{ uniqueName }</h2>
        </Link>
      </div>
    )
  }
}

export default NailPolish;
