import React from 'react';
import Header from './Header';
import Results from './Results';

class Main extends React.Component {
    state = {
        numBeers: 0,
        nails: [],
        beers: [],
        loading: true
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

    loadBeers = async (searchTerm = 'hops') => {
        const beers = await fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
            .then(res => res.json());
        console.log(beers);
    }

    loadNails = async () => {
        this.setState({loading: true});

        const localStorageNails = localStorage.getItem(`nails`);
        if (localStorageNails) {
            const localNails = JSON.parse(localStorageNails);
            this.setState({ nails: localNails, loading: false });
            return; // stop before fetch happens!
        }

        const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish')
            .then(res => res.json());
            
        let filteredNails = response.map((polish) => {
            return polish.product_colors.map((color) => {
                return {...polish, color: color};
            });
        }).filter(colors => colors.length);

        // flattening it
        filteredNails = Array.prototype.concat(...filteredNails);
        this.setState({nails: filteredNails, loading: false});
        localStorage.setItem(`nails`, JSON.stringify(this.state.nails));
    }

    componentDidMount() {
        this.loadNails();
    }

    render() {

        // props are how you pass data to a component
        // components HAVE state        
        return (
            <div className="main wrapper">
                <Header siteName="nail party"/>
                <Results nails={this.state.nails} loading={this.state.loading} />
            </div>
        )
    }
}

export default Main;
