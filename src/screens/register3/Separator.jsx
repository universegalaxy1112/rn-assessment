import React from 'react';
import {StyleSheet, View} from 'react-native';
import {getColors} from '../../styles/colors';

function Separator({theme, ...otherProps}) {
  const style = {
    ...styles.separator,
    backgroundColor: getColors(theme).selected,
  };
  return <View {...otherProps} style={style} />;
}

export default React.memo(Separator);

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    backgroundColor: 'red',
    height: 1,
  },
})