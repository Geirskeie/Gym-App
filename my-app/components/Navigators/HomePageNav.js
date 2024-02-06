import HomeScreen from "../../pages/HomeScreen";
import Chest from "../../pages/Chest";
import MuscleGroups from "../MuscleGroups"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomePageNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workou" component={HomeScreen} />
    </Stack.Navigator>
  );
}