import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Classes from '../pages/Classes';
import Spells from '../pages/Spells';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Classes" component={Classes} />
    <App.Screen name="Spells" component={Spells} />
  </App.Navigator>
);

export default AppRoutes;
