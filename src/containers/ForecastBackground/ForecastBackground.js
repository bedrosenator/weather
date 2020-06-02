import React from 'react';

function ForecastBackground(props) {
  const { styles, children } = props;

  return (
    <div style={{
      backgroundImage: `url(${styles.bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: styles.bgColor,
      height: '100%',
      width: '100%'
    }}>
      {children.map((child) => child)}
    </div>
  );
}

export default ForecastBackground;
