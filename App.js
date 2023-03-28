import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, JosefinSans_400Regular, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';
import MainNavegator from './src/navigators/MainNavegator';
import { Provider } from 'react-redux';
import store from './src/store';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  React.useEffect(() =>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavegator />
    </Provider>
  );
}
