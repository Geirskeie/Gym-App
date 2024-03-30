    import HomeScreen from "../WorkoutPage/HomeScreen";
    import Chest from "../../pages/Chest";
    import MuscleGroups from "../MusclePage/MuscleGroups"
    import MyStack from "./MyStack"
    import { createStackNavigator } from '@react-navigation/stack';

    const Stack = createStackNavigator();

    export default function TopBar() {
      return (
        <Stack.Navigator>
          <Stack.Screen
          name="Muscle Groups"
          component={MuscleGroups}
          options={{ headerTitleAlign: 'center',
                     title:'Muscles',
                     headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                     }}
        />

        </Stack.Navigator>
      );
    }