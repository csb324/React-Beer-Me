import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './components/Main';
import Single from './components/Single';
import './style.css';


const Root = function() {
    // route tags can go anywhere! this is at the topmost level but it could be in the sidebar or wherever
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/search/:searchTerm" component={Main} />
                <Route path="/beer/:beerID/:beerSlug" component={Single} />
            </div>
        </BrowserRouter>
    )
}

render(<Root />, document.querySelector('#claras-root'));
