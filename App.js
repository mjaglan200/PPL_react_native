import 'react-native-gesture-handler';
import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Component/Register/index'
import Login from './Component/Login/index'
import Timeline from './Component/Timeline/index'
import ImageUpload from './Component/imageUpload/index'
import ForgotPassword from './Component/ForgotPassword/index'



const Stack = createStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
     


     <Stack.Navigator initialRouteName="Timeline" >
     <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Timeline" component={Timeline} />

      </Stack.Navigator>
    </NavigationContainer>
    
   
   


  );


};

export default App;
