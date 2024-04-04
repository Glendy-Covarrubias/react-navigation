import React from "react";
import { Button, View } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back Pantalla de inicio alias Home" />
        </View>
    );
}

export default DetailsScreen;