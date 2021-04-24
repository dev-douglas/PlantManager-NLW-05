import React from 'react';
import AppLoading from 'expo-app-loading';

import { Welcome } from './src/pages/Welcome';
import { UserIdentification } from './src/pages/UserIdentification';
import Routes from './src/routes';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {

  const [fonstLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fonstLoaded) { //Se a fonte não foi carregada
    return <AppLoading/>
  }

  return (
    <Routes/>
  );
}