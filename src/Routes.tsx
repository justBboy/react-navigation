import React, { useContext, useEffect, useState } from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { AuthNavProps, AuthParamList } from "./AuthParamList";
import { Center } from "./center";

import { AuthContext } from "./AuthProvider";
import { AppTabs } from "./AppTabs";
import { AuthStack } from "./AuthStack";

interface RoutesProps {}



export const Routes: React.FC<RoutesProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <AppTabs />
      ) : (
        <AuthStack />
      )} 
    </NavigationContainer>
  )
}
;
