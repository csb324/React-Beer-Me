import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './components/Main';
import Single from './components/Single';
import Header from './components/Header';
import './style.css';

const Root = function() {
  // route tags can go anywhere! this is at the topmost level but it could be in the sidebar or wherever
  return (
    <BrowserRouter>
      <div>
        <Header siteName="nail party"/>

        <Route exact path="/" component={Main} />
        <Route path="/search/:searchTerm" component={Main} />
        <Route path="/beer/:beerID/:beerSlug" component={Single} />
        <Route path="/polish/:polishID/:polishSlug" component={Single} />

        <div className="credit">
          <p>
            made by <a className="script-link" rel="noopener noreferrer" href="http://www.twitter.com/clarabellum" target="_blank">clara beyer</a> at <a target="_blank" className="code-link" rel="noopener noreferrer" href="http://2017.cssdevconf.com/">CSSDevConf</a> with <a href="http://makeup-api.herokuapp.com/" target="blank" rel="noopener noreferrer">makeup-api</a>
          </p>
        </div>

      </div>
    </BrowserRouter>
  );
};

render(<Root />, document.querySelector('#claras-root'));
