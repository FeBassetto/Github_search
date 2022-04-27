import { createGlobalStyle } from 'styled-components'
import RobotoExtraBold from './assets/fonts/Roboto/Roboto-Black.ttf';
import RobotoBold from './assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoMedium from './assets/fonts/Roboto/Roboto-Medium.ttf';
import RobotoRegular from './assets/fonts/Roboto/Roboto-Regular.ttf';
import InterMedium from './assets/fonts/Inter/Inter-Medium.ttf';
import InterLight from './assets/fonts/Inter/Inter-Light.ttf';
import InterBold from './assets/fonts/Inter/Inter-Bold.ttf';
import Secular from './assets/fonts/SecularOne/SecularOne-Regular.ttf';
import Lobister from './assets/fonts/Lobster/Lobster-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face{
      font-family: "RobotoBold";
      src: url(${RobotoBold});
    }
    @font-face{
      font-family: "RobotoRegular";
      src: url(${RobotoRegular});
    }
    @font-face{
      font-family: "RobotoExtraBold";
      src: url(${RobotoExtraBold});
    }
    @font-face{
      font-family: "RobotoMedium";
      src: url(${RobotoMedium});
    }
    @font-face{
      font-family: "InterMedium";
      src: url(${InterMedium});
    }
    @font-face{
      font-family: "InterLight";
      src: url(${InterLight});
    }
    @font-face{
      font-family: "InterBold";
      src: url(${InterBold});
    }
    @font-face{
      font-family: "Secular";
      src: url(${Secular});
    }
    @font-face{
      font-family: "Lobister";
      src: url(${Lobister});
    }
  `

export const lightMode = {
    dark: '#24292F',
    light: '#F6F8FA',
    background: '#ffffff',
    text: '#24292f',
    headerText: '#ffffff'
}

export const darkMode = {
    dark: '#24292F',
    light: '#202935',
    background: '#0D1117',
    text: '#c9d1d9dark',
    headerText: '#ffffff'
}
