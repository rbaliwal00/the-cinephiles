import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Menu from './Menu/Menu';
import { Route } from 'react-router-dom';

const home = () => {
    return (
        <div>
            <Route path="/" exact component={ Navigation } />
            <Route path="/menu" component={Menu} />
        </div>
        
    );
}

export default home;