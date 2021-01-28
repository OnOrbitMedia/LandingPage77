import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './_button.scss';

const Button = (props) => (
    <a href={ 'mailto:' + props.email } >
        <button className={ `button ${props.className}` }>
            { props.text }
        </button>
    </a>
);

Button.propTypes = {
    email: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default Button;
