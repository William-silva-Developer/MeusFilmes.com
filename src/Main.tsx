import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Home from './screens/home/Home';
import Route from './routes/Route';





const Main: React.FC = () => {
  return (
    
    <SafeAreaView style={{flex:1, backgroundColor: 'transparent'}}>

      <Route />
     

   </SafeAreaView>
    
  )
}

export  {Main};