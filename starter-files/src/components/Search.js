import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const query = this.q.value;
        this.context.router.history.push(`/search/${query}`);
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit} >
                    <input 
                        type="text" 
                        ref={(q) => this.q = q } 
                        onChange={this.handleChange} 
                        placeholder="Canadian, Vegan, etc..." 
                    />
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default Search;