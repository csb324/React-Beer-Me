import React from 'react';
import { Link } from 'react-router-dom';

class Single extends React.Component {

    state = {
        nailpolish: {
            color: {},
            tag_list: []
        }
    }

    loadNails = async () => {
        const localStorageNails = localStorage.getItem(`nails`);
        if (localStorageNails) {
            const localNails = JSON.parse(localStorageNails);
            return localNails; // stop before fetch happens!
        }

        const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish')
            .then(res => res.json());
            
        let filteredNails = response.map((polish) => {
            return polish.product_colors.map((color) => {
                return {...polish, color: color};
            });
        });
        return Array.prototype.concat(...filteredNails);
    }

    loadNailPolish = async () => {
        this.setState({loading: true});

        const polishes = await this.loadNails();
        const polish = polishes.filter((p) => {
            return p.uniqueID === this.props.match.params.polishID;
        })[0];

        this.setState({nailpolish: polish, loading: false});
        // localStorage.setItem(`nails`, JSON.stringify(this.state.nails));
    }

    componentDidMount() {
        this.loadNailPolish();
    }

    showTag(tag) {
        return (
            <Link to={`/search/${tag}`} className="tag">
                {tag}
            </Link>
        )
    }

    render() {
        const { name, color, description, image_link, tag_list } = this.state.nailpolish;
        const style = {
            borderTop: `3em solid ${color.hex_value}`
        };
        const buttonStyle = {
            "--color": color.hex_value,
        };

        return (
            <div className="single-nail-polish" style={style}>
                <Link to="/" className="back-button" style={buttonStyle}>
                    Back
                </Link>
                <div className="single-nail-polish__container">
                    <h1 className="single-nail-polish__name">{color.colour_name}</h1>
                    <p className="single-nail-polish__description">{description}</p>
                    <img src={image_link} alt={name} className="single-nail-polish__img" />

                    <div className="single-nail-polish__tags">
                        { tag_list.map(this.showTag)}
                    </div>
                </div>

            </div>
            
        )
    }
}

export default Single;