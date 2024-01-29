import React from 'react';
import {View} from 'react-native';
import {getColors} from '../styles/colors';

function ThemedContainer({theme, children, style, ...otherProps}) {
  style = {
    ...style,
    backgroundColor: getColors(theme).backgound,
  };
  return (
    <View {...otherProps} style={style}>
      {children}
    </View>
  );
}

export default React.memo(ThemedContainer);