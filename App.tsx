import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ImageListScreen from './src/ImageListScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageDetailScreen from './src/ImageDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ImageListScreen" component={ImageListScreen} />
        <Stack.Screen name="ImageDetailScreen" component={ImageDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
