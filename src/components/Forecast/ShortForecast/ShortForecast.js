import React from 'react';
import PropTypes from 'prop-types';
import WeatherStateIcon from 'components/Forecast/WeatherStateIcon';
import Temperature from 'components/Forecast/Temperature';
import TemperatureRange from 'components/Forecast/TemperatureRange';
import WeatherUnit from 'components/Forecast/WeatherUnit';
import CountryFlag from 'components/Forecast/CountryFlag';
import styles from './ShortForecast.module.scss';

function ShortForecast(props) {
  const { weatherDetails } = props;

  return (
    <div className={styles.shortForecast}>
      {weatherDetails.weather &&
        weatherDetails.weather.map((weather) => <WeatherStateIcon key={weather.id} imgSrc={weather.icon} status={weather.main} />
      )}
      <div className={styles.forecastDetails}>
        <div className={styles.location}>{weatherDetails.name} {weatherDetails.sys.country}&nbsp;
          <CountryFlag countryCode={weatherDetails.sys.country} />
          &nbsp;
          {weatherDetails.weather &&
            weatherDetails.weather.map((weather) => <strong key={weather.id}>{weather.description}</strong>
          )}
        </div>
        <div className={styles.description}>
          <Temperature badge={true} value={weatherDetails.main.temp} />&nbsp;
          <TemperatureRange max={weatherDetails.main.temp_max} min={weatherDetails.main.temp_min} />,&nbsp;
          <WeatherUnit unit={'hpa'} value={weatherDetails.main.pressure} />,
          wind <WeatherUnit value={weatherDetails.wind.speed} unit={'m/s'} />,
          clouds <WeatherUnit value={weatherDetails.clouds.all} unit={'%'} />
        </div>
        <div className={styles.coords}>Geo coords [{weatherDetails.coord.lat} {weatherDetails.coord.lon}]</div>
      </div>
    </div>
  );
}

ShortForecast.propTypes = {
  weatherDetails: PropTypes.object,
};

export default ShortForecast;
