const WEATHER_ICONS = {
  unknown:             '✨',
  cloudy:              '☁️',
  fog:                 '🌫',
  heavyrain:           '🌧',
  heavyshowers:        '🌧',
  heavysnow:           '❄️',
  heavysnowshowers:    '❄️',
  lightrain:           '🌦',
  lightshowers:        '🌦',
  lightsleet:          '🌧',
  lightsleetshowers:   '🌧',
  lightsnow:           '🌨',
  lightsnowshowers:    '🌨',
  partlycloudy:        '⛅️',
  sunny:               '☀️',
  thunderyheavyrain:   '🌩',
  thunderyshowers:     '⛈',
  thunderysnowshowers: '⛈',
  verycloudy:          '☁️',
}

export default function weatherIcon(weatherDescription) {
  const desc = weatherDescription.split(' ').join('').toLowerCase();
  const icon = Object.keys(WEATHER_ICONS).find(key => key === desc) || 'unknown';
  return WEATHER_ICONS[icon];
}
