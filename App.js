import React from 'react';
// import de toutes les dépendences pour la navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// importation des screens
import BookScreen from './screens/BookScreen';
import LibraryScreen from './screens/LibraryScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil" screenOptions={{
        headerStyle: {
          backgroundColor: '#f1f1c8',
          height: 100
        },
        headerTintColor: 'grey',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontStyle: 'italic',
          textAlign: 'center',
          fontSize: 30
        },
      }}>
      <Stack.Screen name="Accueil" options={{headerShown: false}} component={SplashScreen} />
      <Stack.Screen name="Mes livres" component={LibraryScreen} />
      <Stack.Screen name="Détail d'un livre" component={BookScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


