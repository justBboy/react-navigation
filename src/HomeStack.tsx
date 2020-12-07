import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import { AuthContext } from "./AuthProvider";
import { Center } from "./center";
import { HomeParamList, HomeStackNavProps } from "./HomeParamList";
import faker from "faker";

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

function Product({ route, navigation }: HomeStackNavProps<"Product">) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button title="Edit this product" onPress={() => navigation.navigate('EditProduct', {
          name: route.params.name
      })}/>
    </Center>
  );
}

function apiCall(data){
    console.log("done")
}
function EditProduct({ route, navigation}: HomeStackNavProps<"EditProduct">) {
    const [formState] = useState();
    const submit = useRef(() => {})

    submit.current = () => {
        apiCall(formState);
        navigation.goBack()
    }

  return (
    <Center>
      <Text>Editing {route.params.name}</Text>
    </Center>
  );
}

function Feed({ navigation }: HomeStackNavProps<"Feed">) {
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item,
                });
              }}
            />
          );
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
}


export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => ( 
            <TouchableOpacity style={{paddingRight: 8}}
              onPress={() => {
                logout();
              }}
            >
              <Text style={{color: "red"}}>LOGOUT</Text>
            </TouchableOpacity>
          ),
        }}
        component={Feed}
      />
      <Stack.Screen
        name="Product"
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`,
        })}
        component={Product}
      />
      <Stack.Screen
        name="EditProduct"
        options={({route, navigation}) => ({
            headerTitle: `Edit: ${route.params.name}`,
            headerRight: () => (
            <TouchableOpacity style={{paddingRight: 8}} onPress={() => {
                navigation.goBack()
            }}>
                <Text style={{color: "red"}}>Done</Text>
            </TouchableOpacity>
        )
        })}
        component={EditProduct}
      />
    </Stack.Navigator>
  );
};
