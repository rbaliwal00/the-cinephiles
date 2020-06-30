import React from 'react';
import classes from './Menu.module.css';
import { MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom';

const menu = () => {
    return (
        <div className={classes.Menu}>
            <div className="row">
                <div className="col-lg-2" style={{ backgroundColor: '#222222', width: '100%', height: '10vh' }}>
                </div>
                <div className="col-lg-4" style={{ backgroundColor: '#222222', width: '100%', height: '10vh'}}>
                    <p className={classes.Brand}>The Cinephiles</p>
                </div>
                <div className="col-lg-4" style={{ backgroundColor: '#222222', width: '100%', height: '10vh' }}>
                    <Link to="/"><MDBIcon icon="times-circle" className={classes.Close}/></Link>
                </div>
                <div className="col-lg-2" style={{ backgroundColor: '#222222', width: '100%', height: '10vh' }}>
                </div>
            </div>

            <div className="row" style={{height: '80vh'}}>
                <div className="col-lg-2" style={{ backgroundColor: '#222222' }}>
                </div>
               
                <div className="col-lg-8" style={{ backgroundColor: '#222222', width: '100%' }}>
                    <div className="col-lg" style={{ backgroundColor: '#222222', height: '7vh', width: '100%' }}>
                        <p className={classes.Description}>@knowyourmovies . Arts & entertainment</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" style={{ backgroundColor: 'white', height: '36.5vh', width: '100%' }}>
                            <p>Div 1</p>
                        </div>
                        <div className="col-lg-4" style={{ backgroundColor: 'grey', height: '36.5vh', width: '100%' }}>
                            <p>Div 2</p>
                        </div>
                        <div className="col-lg-4" style={{ backgroundColor: 'white', height: '36.5vh', width: '100%' }}>
                            <p>Div 3</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" style={{ backgroundColor: 'grey', height: '36.5vh', width: '100%' }}>
                            <p>Div 4</p>
                        </div>
                        <div className="col-lg-4" style={{ backgroundColor: 'white', height: '36.5vh', width: '100%' }}>
                            <p>Div 5</p>
                        </div>
                        <div className="col-lg-4" style={{ backgroundColor: 'grey', height: '36.5vh', width: '100%' }}>
                            <p>Div 6</p>
                        </div>
                    </div>
                    
                </div>

                <div className="col-lg-2" style={{ backgroundColor: '#222222', height: '100%' }}>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12" style={{ backgroundColor: '#222222', width: '100%', height: '10vh' }}>
                </div>
            </div>
        </div>
    );
}

export default menu;