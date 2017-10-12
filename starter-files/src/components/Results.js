import React from 'react';
import PropTypes from 'prop-types';
import NailPolish from './NailPolish';
import Loader from './Loader';

class Results extends React.Component {
  
  static propTypes = {
    nails: PropTypes.array
  }

  shuffle() {
		return 0.5-Math.random()
  }
  
  render() {
    if (this.props.loading) {
      return <Loader message="one sec..." />
    }

    const nails = this.props.nails.sort(this.shuffle); // tired of seeing the same nails at the top

    return (
      <div className="results">
        { nails.map((nail) => {
          return (
            <NailPolish 
              key={ nail.uniqueID } 
              details={ nail }
            />
          )
        } )}
      </div>
    )
  }
}

export default Results;