import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
    <div className="layout">
        <Helmet title="OnOrbit Media" />
        {children}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.element.isRequired,
};

export default TemplateWrapper;
