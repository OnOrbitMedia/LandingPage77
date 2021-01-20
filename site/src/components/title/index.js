import React from 'react';
import { useSpring, useTransition, a } from "react-spring";
import './_title.scss';
import '../../../assets/fonts/RobotoBold700/Roboto-Bold.ttf';
import Arrow from '../../../assets/Company_RightArrow.png';

function Title() {
    const transitions = useTransition(Arrow, item => item.key, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
        })

    return (
        <div>
            <h1 className="title">WE HELP YOUR BUSINESS<br />STAND OUT FROM THE CROWD.</h1>
            <img style={ transitions } className="arrow" src={ Arrow } alt="Arrow" />
        </div>
    );
}

export default Title;
