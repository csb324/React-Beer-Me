import React from 'react';
import PropTypes from 'prop-types';
import NailPolish from './NailPolish';
import Loader from './Loader';

class Results extends React.Component {
  
  static propTypes = {
    nails: PropTypes.array
  }
  
  render() {
    if (this.props.loading) {
      return <Loader message="one sec..." />
    }

    return (
      <div className="results">
        { this.props.nails.map((nail) => {
          return (
            <NailPolish 
              key={`${nail.id}_${nail.color.hex_value}`} 
              details={ nail }
            />
          )
        } )}
      </div>
    )
  }
}

export default Results;