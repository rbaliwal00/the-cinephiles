import React from 'react';
import classes from './ToggleButton.module.css';

const toggleButton = () => {
    return (
        <div className={classes.ToggleButton}>
            <div id={classes.strip}></div>
            <div id={classes.strip}></div>
            <div id={classes.strip}></div>
        </div>  
    );
}

export default toggleButton;