import React, {useCallback, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header';
import ThemedText from '../../components/ThemedText';
import CustomTextInput from '../../components/CustomTextInput';
import Separator from './Separator';

import {globalTextStyles} from '../../styles/global-styles';
import {getColors} from '../../styles/colors';

import ChevronRight from '../../assets/images/chevron-right.png';
import Google from '../../assets/images/google.png';
import Apple from '../../assets/images/apple.png';

function Register3() {
  // TODO - we may want to utilize context later, but for now, I am passing down the theme props down the components.
  const [theme, setTheme] = useState('light');

  const backgroundStyle = {
    backgroundColor: getColors(theme).backgound,
    flex: 1,
  };

  const loginButtonStyle = {
    ...styles.loginButtons,
    borderColor: getColors(theme).selected,
  };

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header theme={theme} />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.toggleThemeContainer}>
            <ThemedText theme={theme} style={globalTextStyles.h2}>
              Hi There!
            </ThemedText>
            <Pressable style={styles.toggleThemeButton} onPress={toggleTheme}>
              <Text style={{ color: 'white' }}>Toggle Theme</Text>
            </Pressable>
          </View>

          <ThemedText
            theme={theme}
            style={globalTextStyles.body1}
            status={'disabled'}>
            Welcome back, Sign in to your account
          </ThemedText>
          <View style={styles.form}>
            <CustomTextInput theme={theme} placeholder={'Your Email'} />
            <CustomTextInput
              theme={theme}
              isSecured={true}
              placeholder={'Password'}
            />
            <Pressable>
              <ThemedText
                theme={theme}
                style={globalTextStyles.body1}
                category={'body1'}
                status={'main'}>
                Forgot password
              </ThemedText>
            </Pressable>
          </View>
          <Pressable style={styles.sigInButton}>
            <Text style={styles.signInButtonText}>Sign In</Text>
            <Image
              source={ChevronRight}
              style={styles.chevronRight}
              resizeMode={'contain'}
            />
          </Pressable>
          <View style={styles.footer}>
            <View style={styles.separatorWrapper}>
              <Separator />
              <ThemedText
                theme={theme}
                style={globalTextStyles.body3}
                category={'body3'}
                status={'selected'}>
                OR
              </ThemedText>
              <Separator />
            </View>
            <View style={styles.loginButtonContainers}>
              <Pressable style={loginButtonStyle}>
                <Image
                  source={Google}
                  style={styles.loginIcons}
                  resizeMode={'contain'}
                />
              </Pressable>
              <Pressable style={loginButtonStyle}>
                <Image
                  source={Apple}
                  style={styles.loginIcons}
                  resizeMode={'contain'}
                  tintColor={getColors(theme).default}
                />
              </Pressable>
            </View>
            <View style={styles.signUpButtonContainer}>
              <ThemedText
                theme={theme}
                style={styles.signUpText}
                category={'body1'}
                status={'selected'}>
                Don't have an account?
              </ThemedText>
              <Pressable>
                <ThemedText
                  theme={theme}
                  style={globalTextStyles.body1}
                  category={'body1'}
                  status={'main'}>
                  Sign Up
                </ThemedText>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(Register3);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 24,
  },
  form: {
    gap: 16,
  },
  sigInButton: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B64FF',
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 9,
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    elevation: 12,
  },

  signInButtonText: {
    ...globalTextStyles.h5,
    color: 'white',
  },
  chevronRight: {
    width: 6,
    height: 12,
  },
  footer: {
    gap: 24,
  },
  loginButtonContainers: {
    flexDirection: 'row',
    gap: 16,
  },
  loginButtons: {
    flex: 1,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
  },
  loginIcons: {
    width: 24,
    height: 24,
  },
  separatorWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  signUpButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  toggleThemeContainer: {
     flexDirection: 'row', justifyContent: 'space-between'
  },
  toggleThemeButton: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B64FF',
    borderRadius: 8,
  },
});
