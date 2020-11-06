import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import List from '../../components/List';
import { getWeatherData } from '../../api';
import weatherIcon from '../../utils/weatherIcon';
import formatDate from '../../utils/formatDate';
import styles from './Weather.module.css';

const Weather = () => {
  const [data, setData] = useState(null);
  const [error, setErrorMsg] = useState(null);

  useEffect(() => {
    getWeatherData()
      .then(data => setData(data))
      .catch(error => setErrorMsg(`Error: ${error?.message}`));
  }, []);

  if (error) return <div className={styles.error}>{error}</div>;
  if (!data) return <div className={styles.loading}>Loading ...</div>;
 
  const cardHeading = 'Today';
  const listHeading = 'Upcoming days';
  const feelsLikeText = 'Feels like';
  const sunriseText = 'Sunrise';
  const sunsetText = 'Sunset';

  const current = data?.current_condition?.[0];
  const description = current?.weatherDesc?.[0]?.value || '';
  const feelsLike = (current?.FeelsLikeC || '0') + '°';
  const icon = weatherIcon(description);
  const temp = (current?.temp_C || '0') + '°';
  const items = data?.korv?.weather?.map(day => ({
    date: formatDate(day?.date),
    maxTemp: (day?.maxtempC || '0') + '°',
    minTemp: (day?.mintempC || '0') + '°',
    sunrise: day?.astronomy?.[0]?.sunrise || '?',
    sunset: day?.astronomy?.[0]?.sunset || '?',
  })) || [];

  return (
    <div className={styles.wrapper}>
      <Card 
        description={description}
        feelsLike={`${feelsLikeText} ${feelsLike}`}
        heading={cardHeading} 
        icon={icon}
        temp={temp}
      />
      <List 
        heading={listHeading}
        items={items}
        sunriseText={sunriseText}
        sunsetText={sunsetText}
      />
    </div>
  );
}

export default Weather;
