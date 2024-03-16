    import * as React from 'react';
    import { View, Text } from 'react-native';
    import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
    import { useNavigationContext } from "../ContextState/NavigationProvider";
    import { useWorkoutNavigationContext } from "../ContextState/WorkoutProvider";


    import TopBar from "./TopBar"
    import HomePageNav from "./HomePageNav"
    import WeekNavigator from "./WeekNavigator"
    import MyStack from "./MyStack"

    const MainTab = createMaterialTopTabNavigator();

    export default function MainNavigator() {
      const { open, } = useNavigationContext();
      const { workoutNavOpen, } = useWorkoutNavigationContext();

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
           <MainTab.Screen
                 name="Muscles"
                 component={!open ? TopBar : MyStack}
                 options={!open ? undefined : { headerShown: false, tabBarButton: () => null }}
               />
               <MainTab.Screen
                  name="WorkoutDays"
                  component={HomePageNav}
               />
               </MainTab.Navigator>
      );
    }