import React from 'react';

import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Text>
                    Go to notifications
                </Text>
            </TouchableOpacity>
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

/**Stack Navigator */
/* const Stack = createStackNavigator();
let StackNav = <Stack.Navigator>
    <Stack.Screen options={{title: 'Pantalla de inicio'}} name="Home" component={HomeScreen} />
    <Stack.Screen options={{title: 'Pantalla de notificaciones'}} name="Notifications" component={NotificationsScreen} />
</Stack.Navigator>; */

/**Drawer navigation */
const Drawer = createDrawerNavigator();
let DrawerNav = <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen options={{title: 'Pantalla de inicio'}} name="Home" component={HomeScreen} />
    <Drawer.Screen options={{title: 'Pantalla de notificaciones'}} name="Notifications" component={NotificationsScreen} />
</Drawer.Navigator>;

/**Tab navigation */
/* function HomeScreenTab({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Go to notifications
            </Text>
            <Button onPress={() => navigation.navigate('Notifications')} title="Go to Notificacions" />
        </View>
    );
}

function NotificationsScreenTab({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.navigate('Home')} title="Go to Home" />
        </View>
    );
}

const Tab = createBottomTabNavigator();
let TabNav = <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreenTab} />
    <Tab.Screen name="Notifications" component={NotificationsScreenTab} />
</Tab.Navigator>; */


const App = () => {
    return (
        <NavigationContainer>
            {DrawerNav}
        </NavigationContainer>
    );
}

export default App;