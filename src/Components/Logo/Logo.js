import React from 'react';

import Logo from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={Logo} alt="MyLogo" />
    </div>
);

export default logo;