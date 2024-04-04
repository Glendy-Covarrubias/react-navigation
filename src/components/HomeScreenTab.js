import React from "react";
import { View, Text, Button } from 'react-native';

function HomeScreenTab({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Go to Details
            </Text>
            <Button onPress={() => navigation.navigate('Details')} title="Go to Details" />
        </View>
    );
}

export default HomeScreenTab;