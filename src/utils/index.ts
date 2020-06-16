import { Work, Contacts } from '../models/app';

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
  contacts: Contacts[] = [
    {
      title: 'Github',
      url: 'https://github.com/faserman'
    },
    {
      title: 'Gmail',
      url: 'sornikyr@gmail.com'
    },
    {
      title: 'tumblr',
      url: 'https://www.tumblr.com/blog/sorokinnikolay'
    },
    {
      title: 'Telegram',
      url: '@faserman'
    }
  ]
  getUrlTools(toolName: string) {
    let urlTool: string = "";
    switch (toolName) {
      case "JavaScript":
          urlTool = "https://ru.wikipedia.org/wiki/JavaScript";
        break;
      case "TypeScript":
          urlTool = "https://www.typescriptlang.org/";
        break;
      case "React":
          urlTool = "https://ru.reactjs.org/";
        break;
      case "React Native":
          urlTool = "https://reactnative.dev/";
        break;
      case "Expo":
          urlTool = "https://expo.io/";
        break;
      case "Mobx":
          urlTool = "https://mobx.js.org/README.html";
        break;
      case "Redux":
          urlTool = "https://redux.js.org/";
        break;
      case "CSS3":
          urlTool = "https://www.w3.org/Style/CSS/";
        break;
      case "HTML5":
          urlTool = "https://html.spec.whatwg.org/multipage/";
        break;
      default: urlTool = "#";
    }
    return urlTool
  }

  miniStyles = (scroll: number, workDrawerIsOpen: boolean) => {
    let result: string = "";
    if(workDrawerIsOpen && scroll > 170) {
      result = "-mini"
    } else {
      result = ""
    };
    return result;
  }
  
}

export const utils = new Utils();