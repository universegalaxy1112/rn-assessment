import React, {useCallback, useState} from 'react';
import {View, Image, Pressable, TextInput, StyleSheet} from 'react-native';
import {getColors} from '../styles/colors';
import EyeOn from '../assets/images/eye-on.png';

function CustomTextInput({
  theme,
  isSecured = false,
  style = {},
  ...otherProps
}) {
  const [showPassword, setShowpassword] = useState(false);

  style = {
    ...style,
    color: getColors(theme).disabled,
  };

  const containerStyle = {
    ...styles.textInputContainer,
    backgroundColor:
      theme === 'light'
        ? 'rgba(244, 246, 246, 0.52)'
        : 'rgba(56, 78, 99, 0.52)',
    borderColor:
      theme === 'light'
        ? 'rgba(204, 217, 255, 0.15)'
        : 'rgba(51, 102, 255, 0.15)',
  };

  const inputStyle = {
    ...styles.input,
    color: getColors(theme).default,
  };

  const onPressTogglePassword = useCallback(() => {
    setShowpassword(!showPassword);
  }, [showPassword]);

  return (
    <View style={containerStyle}>
      <TextInput
        {...otherProps}
        placeholderTextColor={getColors(theme).disabled}
        secureTextEntry={isSecured && !showPassword}
        style={inputStyle}
      />
      {isSecured ? (
        <Pressable
          onPress={onPressTogglePassword}
          style={styles.toggleButtonContainer}>
          <Image
            source={EyeOn}
            style={styles.toggleButton}
            resizeMode={'contain'}
          />
        </Pressable>
      ) : null}
    </View>
  );
}

export default React.memo(CustomTextInput);

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 16,
    height: 54,
    backgroundColor: 'rgba(244, 246, 246, 0.52)',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(204, 217, 255, 0.15)',
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'PublicSans-Regular',
  },
  toggleButtonContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    width: 20,
    height: 14,
  },
});
