import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Button, Text } from 'react-native';
import { AuthNavProps, AuthParamList } from './AuthParamList';
import { AuthContext } from './AuthProvider';
import { Center } from './center';


interface AuthStackProps {

}

const Stack = createStackNavigator<AuthParamList>();
function Login({ navigation, route }: AuthNavProps<"Login">) {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>This is the login screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Button
        title="Log me in"
        onPress={() => {
          login();
        }}
      />
    </Center>
  );
}
function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Center>
      <Text>This is the Register screen</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </Center>
  );
}
export const AuthStack: React.FC<AuthStackProps> = ({}) => {
     return (
        <Stack.Navigator screenOptions={{
            header: () => null
        }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
  )}

