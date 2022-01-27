import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { StartExercise } from './src/screens/StartExercise';



const App = () => {
  return (
    <Provider store ={store}>
      <StartExercise/>
    </Provider>
  );
};



export default App;
