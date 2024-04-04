import React from "react";
import { Button, View } from 'react-native';

function DetailsScreenTab({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.navigate('Home')} title="Go back Pantalla de inicio alias Home" />
        </View>
    );
}

export default DetailsScreenTab;