import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Button from '../components/button';
import OOLogo from '../../assets/OOLogo.png';
import ProgressBar from '../components/progressbar';


import './_pages.scss';
import Services from '../components/services';


function IndexPage () {
    // const [random, setRandom] = useState();

    // useEffect(() => {
    //     setRandom()
    // });

    return (
        <div>
            <div className='buttonDiv'>
                <img className={ "logo"} src={ OOLogo } alt={ "On Orbit Logo" }/>
                <Button email={ "luke@onorbitmedia.com" } className={ "GetInTouch" } text={ "Get In Touch" } /> 
            </div>
            <div className='servicesDiv'>
                <Services/>
            </div>
            <div className='progress-bar-div'>
                <ProgressBar percentage={60} />
            </div>
            <div className='soon-div'>
                <span className='soon-text'>coming soon</span>
            </div>
            <div className='tag-div'>
                <span className='tag-text'>OnOrbit Media LLC</span>
            </div>
        </div>
    );
} 


export default IndexPage;
