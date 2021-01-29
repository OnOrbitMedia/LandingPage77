import React, { useState } from 'react'
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'
import props from 'prop-types';
import './_services.scss';

function Trail({ children, ...props }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: 1,
      x: 0,
      height: 50,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div className="trails-main" {...props}>
        <div className="trails-inner">
          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              key={items[index]}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
              <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
          ))}
        </div>
      </div>
    )
  }

const Services = (props) => (
    <Trail>
        <span>digital marketing</span>
        <span>website development</span>
        <span>photography</span>
        <span>videography</span>
    </Trail>
);

export default Services;