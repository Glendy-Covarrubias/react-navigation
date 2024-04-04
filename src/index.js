import React from 'react';

import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import HomeScreenTab from './components/HomeScreenTab';
import DetailsScreenTab from './components/DetailsScreenTab';

/**Stack Navigator */
/* const Stack = createStackNavigator();
let StackNav = <Stack.Navigator>
    <Stack.Screen options={{title: 'Pantalla de inicio'}} name="Home" component={HomeScreen} />
    <Stack.Screen options={{title: 'Pantalla de Detalles'}} name="Details" component={DetailsScreen} />
</Stack.Navigator>; */

/**Drawer navigation */
const Drawer = createDrawerNavigator();
let DrawerNav = <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen options={{title: 'Pantalla de inicio'}} name="Home" component={HomeScreen} />
    <Drawer.Screen options={{title: 'Pantalla de Detalles'}} name="Details" component={DetailsScreen} />
</Drawer.Navigator>;

/**Tab navigation */
/* const Tab = createBottomTabNavigator();
let TabNav = <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreenTab} />
    <Tab.Screen name="Details" component={DetailsScreenTab} />
</Tab.Navigator>; */


const App = () => {
    return (
        <NavigationContainer>
            {DrawerNav}
        </NavigationContainer>
    );
}

export default App;