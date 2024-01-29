import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import ThemedContainer from './ThemedContainer';
import backButtonImage from '../assets/images/back.png';
import ThemedText from './ThemedText';
import {globalTextStyles} from '../styles/global-styles';
import {getColors} from '../styles/colors';

function Header({theme}) {
  const backButtonStyle = {
    ...styles.backButtonContainer,
    borderColor: getColors(theme).secondary,
  };
  return (
    <ThemedContainer
      style={{...styles.container, borderBottomWidth: theme === 'light' ? 0 : 1} }
      theme={theme}>
      <View style={backButtonStyle}>
        <Image
          source={backButtonImage}
          style={styles.backButtonImage}
          resizeMode={'contain'}
          tintColor={theme === 'light' ? 'black' : 'white'}
        />
        <ThemedText theme={theme} style={globalTextStyles.body3}>
          Back
        </ThemedText>
      </View>
      <View style={styles.titleContainer}>
        <ThemedText theme={theme} text={''} style={globalTextStyles.subTitle}>
          Sign Up
        </ThemedText>
      </View>
    </ThemedContainer>
  );
}

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderColor: '#2F4067',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 12,
    shadowOpacity: 0.3,
    shadowColor: '#000000',
    elevation: 16,
  },
  backButtonContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    flexGrow: 0,
    marginLeft: 24,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 50,
  },
  backButtonImage: {
    width: 6,
    height: 11,
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
