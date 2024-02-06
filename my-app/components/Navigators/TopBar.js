    import HomeScreen from "../../pages/HomeScreen";
    import Chest from "../../pages/Chest";
    import MuscleGroups from "../MuscleGroups"
    import MyStack from "./MyStack"
    import { createStackNavigator } from '@react-navigation/stack';

    const Stack = createStackNavigator();

    export default function TopBar() {
      return (
        <Stack.Navigator>
          <Stack.Screen
          name="Muscle Groups"
          component={MuscleGroups}
          options={{ headerShown: false }}
        />

        </Stack.Navigator>
      );
    }