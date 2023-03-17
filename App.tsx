import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {Main} from './src/Main';







const App: React.FC = () => {
  return (
    <>
        <StatusBar barStyle='light-content' backgroundColor='#111' />
          
          <Main />
          
      

    </>
  )
}

export default App