import React from 'react';
import './_lightGradient.scss';
import '../../../assets/fonts/RobotoLight300/Roboto-Regular.ttf';
import gradient from '../../../assets/BANNER_GRADIENT.png';
function LightGradient() {
    return (
        <img className="gradient" src={ gradient } alt="Logo" />
    );
}

LightGradient.defaultProps = {
    className: 'navbar',
};

export default LightGradient;
