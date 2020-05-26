import React from 'react';
import WeatherState from 'components/WeatherState';
import Temperature from 'components/Temperature';

function ShortCityForecast(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td vertical-align="center">
              <WeatherState imgSrc={'http://openweathermap.org/img/wn/01d@2x.png'} />
            </td>
            <td>
              <div>London City</div>
              <div><Temperature value={'20'} unit={'C'} /></div>
              <div>Coords</div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default ShortCityForecast;