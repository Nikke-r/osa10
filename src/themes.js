import { Platform } from 'react-native';

const font = Platform.select({
  iso: 'Arial',
  android: 'Roboto',
  default: 'System',
});

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      background: '#e1e4e8',
      error: '#d73a4a',
      disabled: '#EBEBE4',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: font
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;