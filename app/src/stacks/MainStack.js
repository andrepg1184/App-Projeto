import React from 'react';
import {} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SingIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';


const Stack = createStackNavigator();

export default () => (
        <Stack.Navigator 
            initialRouteName='Preload'
            screenOptions={{
                headerShown:false
            }}  
        >
        

        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn"  component={SignIn} />
        <Stack.Screen name="SignUp"  component={SignUp} />

    </Stack.Navigator>
);