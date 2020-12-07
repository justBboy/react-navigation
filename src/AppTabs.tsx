import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from './AppParamList';
import { Center } from './center';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { HomeStack } from './HomeStack';

interface AppTabsProps {

}

const Tabs = createBottomTabNavigator<AppParamList>();

function Search() {
    return <Center>
        <Text>Search</Text>
    </Center>
}

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
     return (
         <Tabs.Navigator screenOptions={({route}) => ({
             tabBarIcon: ({focused, color, size}) => {
                 let iconName;
                 if(route.name === "Home"){
                     iconName = "home";
                 }else if(route.name =="Search"){
                    iconName = "search1";
                 }
                 return <AntDesign name={iconName} size={size} color={color} />
             }
         })} tabBarOptions={{
             activeTintColor: "tomato",
             activeBackgroundColor: "gray"
         }}>
             <Tabs.Screen name="Home" component={HomeStack} />
             <Tabs.Screen name="Search" component={Search} />
         </Tabs.Navigator>
     )
}