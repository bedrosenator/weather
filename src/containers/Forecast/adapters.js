import { config } from 'config';
import { convertFromKelvinToCelsius } from 'utils/utils';
import { TEMPERATURE_COLORS } from './constants';

export function adaptWeatherStyles(weatherDetails) {
  let styles = {};
  if (!weatherDetails) {
    return styles;
  }

  let bgColor = '';
  const { main: { temp } } = weatherDetails;
  const celsiusTemp = convertFromKelvinToCelsius(temp);
  if (celsiusTemp < -10) {
    bgColor = TEMPERATURE_COLORS.COLD;
  } else if (celsiusTemp > -10 && celsiusTemp < 30) {
    bgColor = TEMPERATURE_COLORS.WARM;
  } else if (celsiusTemp > 30) {
    bgColor = TEMPERATURE_COLORS.HOT;
  }

  return {
    bgImage: `${config.api.url.icons}${weatherDetails.weather[0].icon}.png`,
    bgColor,
  };
}
