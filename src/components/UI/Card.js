// import React from 'react';

// import './Card.css';

// const Card = ({ className, children, ...props }) => {
//   const classes = `card ${className}`;

//   return <div className={classes} {...props}>{children}</div>;
// };

// export default Card;

import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;