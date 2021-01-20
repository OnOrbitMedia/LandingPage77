import React from 'react';
import './_stars.scss';
import '../../../assets/fonts/RobotoLight300/Roboto-Regular.ttf';
import StarImg from '../../../assets/Stars_1.png';
import HeroStars from '../../../assets/HERO_STARS2.png';
function Stars() {
    return (
        <div>
            <img className="stars" src={ StarImg } alt="Logo" />
            <img className="heroStars" src={ HeroStars } alt="Logo" />
        </div>
    );
}

Stars.defaultProps = {
    className: 'navbar',
};

export default Stars;
