import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home/index';
import Agreement from '../Agreement/index';
const Stack = createStackNavigator();


function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' >
                <Stack.Screen name="Agreement" component={Agreement} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;