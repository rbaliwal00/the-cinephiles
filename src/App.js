import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Containers/Home/Home';



const App = props => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
      )
};

export default App;
