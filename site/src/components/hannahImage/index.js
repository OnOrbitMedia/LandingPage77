import React from 'react';
import './_hannahImage.scss';
import '../../../assets/fonts/RobotoLight300/Roboto-Regular.ttf';
import HannahImageFile from '../../../assets/HERO_Hannah.png';

function HannahImage() {
    return (
        <img className="hannahImage" src={ HannahImageFile } alt="Hannah" />
    );
}

HannahImage.defaultProps = {
    className: 'navbar',
};

export default HannahImage;
