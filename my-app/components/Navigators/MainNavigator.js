import * as React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigationContext } from "../ContextState/NavigationProvider";

import TopBar from "./TopBar"
import HomePageNav from "./HomePageNav"
import MyStack from "./MyStack"

const MainTab = createMaterialTopTabNavigator();

export default function MainNavigator() {
  const { open, isOpen } = useNavigationContext();

  return (
     <MainTab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'black', // Adjust text color for active tab
            tabBarInactiveTintColor: 'black', // Adjust text color for inactive tabs
            tabBarIndicatorStyle: { backgroundColor: '#145656', height: '100%'},
            tabBarIndicatorContainerStyle: { backgroundColor: '#a0e8e8' }, // Background color for the inactive tabs
            tabBarLabelStyle: { fontWeight: 'bold' },
          }}
        >
       {!open ? (
               <>
                 <MainTab.Screen
                   name="Muscles"
                   component={TopBar}
                 />
                 <MainTab.Screen
                   name="Workout"
                   component={HomePageNav}
                 />
               </>
             ) : (
               <MainTab.Screen
                 name="MyStack"
                 component={MyStack}
                 options={{ headerShown: false, tabBarButton: () => null }}
               />
             )}
           </MainTab.Navigator>
  );
}