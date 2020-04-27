import { Work } from '../models/app';

class Utils {
  works: Work[] = [
    {
      id: 'weather',
      name: 'weatherApp',
      description: 'WeatherApp - React Native приложение, использующие API OpenWeatherMap.',
      tools: ['React Native', 'Expo', 'TypeScript', 'Mobx'],
      srcIcon: '/imgs/works/weatherAppRn/icon.png',
      screenshots: ['/imgs/works/weatherAppRn/weatherApp_1.jpg', '/imgs/works/weatherAppRn/weatherApp_2.jpg', '/imgs/works/weatherAppRn/weatherApp_3.jpg']
    },
    {
      id: 'fibonacci',
      name: 'fibonacci',
      description: 'Fibonacci представляет собой приложение для определения числа Фибоначчи по его порядковому номеру.',
      tools: ['React Native', 'Expo', 'TypeScript', 'Mobx'],
      srcIcon: '/imgs/works/fibonacciAppRn/icon.png',
      screenshots: ['/imgs/works/fibonacciAppRn/fibonacciApp_1.jpg', '/imgs/works/fibonacciAppRn/fibonacciApp_2.jpg', '/imgs/works/fibonacciAppRn/fibonacciApp_3.jpg']
    },
  ]
}

export const utils = new Utils();