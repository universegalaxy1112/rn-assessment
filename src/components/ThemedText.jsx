import React from 'react';
import {Text} from 'react-native';
import {getColors} from '../styles/colors';

function ThemedText({
  theme,
  children,
  status = 'default',
  category = 's1',
  style,
  ...otherProps
}) {
  style = {
    ...style,
    color: getColors(theme)[status],
  };
  return (
    <Text {...otherProps} style={style}>
      {children}
    </Text>
  );
}

export default React.memo(ThemedText);