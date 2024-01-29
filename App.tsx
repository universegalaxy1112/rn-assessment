import React from 'react';
import {StyleSheet, View} from 'react-native';
import Register3 from './src/screens/register3/Register3';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Register3 />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
