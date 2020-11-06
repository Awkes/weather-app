import client from './client';

const getWeatherData = () => client('Stockholm?format=j1');

export { getWeatherData };
