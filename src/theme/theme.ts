import {
  createLightTheme,
  createDarkTheme,
  BrandVariants,
  Theme,
} from '@fluentui/react-components';

// Define brand colors for Fluxline
const fluxlineBrand: BrandVariants = {
  10: '#020305',
  20: '#0F1419',
  30: '#1A2129',
  40: '#242D38',
  50: '#2E3947',
  60: '#394556',
  70: '#445166',
  80: '#505D76',
  90: '#5C6A86',
  100: '#687797',
  110: '#7485A8',
  120: '#8193BA',
  130: '#8EA1CC',
  140: '#9BB0DE',
  150: '#A9BFF1',
  160: '#B7CEFF',
};

// Create light theme
export const fluxlineLightTheme: Theme = createLightTheme(fluxlineBrand);

// Create dark theme
export const fluxlineDarkTheme: Theme = createDarkTheme(fluxlineBrand);

// Default export is light theme
export default fluxlineLightTheme;
