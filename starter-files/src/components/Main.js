import React from 'react';
import Results from './Results';
import Header from './Header';
import Search from './Search';
import slug from 'slugify';

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


    loadNails = async () => {
        this.setState({loading: true});

        const localStorageNails = localStorage.getItem(`nails`);
        if (localStorageNails) {
            const localNails = JSON.parse(localStorageNails);
            console.log(localNails);

            this.setState({ nails: localNails, loading: false });
            return; // stop before fetch happens!
        }

        const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish')
            .then(res => res.json());
            
        let filteredNails = response.map((polish) => {
            return polish.product_colors.map((color) => {
                return {...polish, color: color, uniqueID: slug(`${polish.id}_${color.hex_value}`) };
            });
        }).filter(colors => colors.length);

        // flattening it
        filteredNails = Array.prototype.concat(...filteredNails);
        this.setState({nails: filteredNails, loading: false});
        localStorage.setItem(`nails`, JSON.stringify(this.state.nails));
    }

    filterNails = (searchTerm) => {
        if (searchTerm === "") {
            return;
        }
        console.log(searchTerm);
        const taggedNails = this.state.nails.filter((polish) => {
            console.log(polish);
            return polish.tag_list
                .map((t) => { return t.toLowerCase() })
                .includes(searchTerm.toLowerCase());
        });
        console.log(taggedNails);
        this.setState({ nails: taggedNails });
    }

    getData = async (props) => {
        await this.loadNails();
        const params = props.match.params || {};
        if (params.searchTerm) {
            this.filterNails(params.searchTerm);
        }
    }

    componentDidMount() {
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps) {
       this.getData(nextProps);
    }

    render() {

        // props are how you pass data to a component
        // components HAVE state        
        return (
            <div className="main wrapper">
                <Header siteName="nail party"/>
                <Search />
                <Results nails={this.state.nails} loading={this.state.loading} />
            </div>
        )
    }
}

export default Main;
