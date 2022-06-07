
import React from 'react';
import { useFonts, Roboto_300Light, Roboto_400Regular,Roboto_500Medium} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components/native'
import theme from './src/theme';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_300Light, 
    Roboto_400Regular,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
     
    </ThemeProvider>
  );
}


