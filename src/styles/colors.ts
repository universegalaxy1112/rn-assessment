const lightColors = {
  backgound: '#FFF',
  main: '#3385FF',
  default: '#000',
  secondary: '#F4F9FF',
  disabled: '#5F7993',
  selected: '#7F97AC',
};

const darkColors = {
  backgound: 'rgba(39, 44, 60, 1)',
  main: '#3366FF',
  default: '#FFF',
  secondary: '#364452',
  disabled: '#5F7993',
  selected: '#688CAC',
};

export type Theme = 'light' | 'dark';

export const getColors = (theme: Theme) =>
  theme === 'light' ? lightColors : darkColors;
