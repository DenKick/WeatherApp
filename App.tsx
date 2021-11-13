import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { ThemeProvider, lightTheme, darkTheme } from './src/themes';

import Text from './src/components/Text';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor: string = isDarkMode ? '#000' : '#fff';

  return (
    <SafeAreaView style={{ backgroundColor }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeProvider value={isDarkMode ? darkTheme : lightTheme}>
        <Text>Text</Text>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
