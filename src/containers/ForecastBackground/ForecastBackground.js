import React from 'react';

function ForecastBackground(props) {
  const { forecastStyles, children } = props;

  return (
    <div style={{
      backgroundImage: `url(${forecastStyles.bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: forecastStyles.bgColor,
      height: '100%',
      width: '100%'
    }}
    >
      {children.map((child) => child)}
    </div>
  );
}

export default ForecastBackground;
