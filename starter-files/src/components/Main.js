import React from 'react';
import Header from './Header';

class Main extends React.Component {
    state = {
        numBeers: 0
    }

    // why not this?
    // incrementBeers() {
        // stuff...
    // }
    // because of BINDING 
    // if we want to access the instance, use arrow functions

    incrementBeers = () => {
        // why not this?
        // this.state.numBeers += 1;
        // because that mutates state! don't do that!! but why?
        // you want to take state, get a copy of it, do the stuff you were gonna do to it, 
        const beerAmount = this.state.numBeers + 1;
        // then set the state again
        this.setState({ numBeers: beerAmount });
    }

    render() {
        // props are how you pass data to a component
        // components HAVE state
        return (
            <div className="main wrapper">
                <Header siteName="nail party"/>
                <button onClick={this.incrementBeers}>
                    {this.state.numBeers}
                </button>
                {'🍻'.repeat(this.state.numBeers)}
            </div>
        )
    }
}

export default Main;