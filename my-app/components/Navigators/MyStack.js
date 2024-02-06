import HomeScreen from "../../pages/HomeScreen"
import Chest from "../../pages/Chest"
import Shoulders from "../../pages/Shoulders"
import Back from "../../pages/Back"
import Biceps from "../../pages/Biceps"
import Triceps from "../../pages/Triceps"
import Hamstring from "../../pages/Hamstring"
import Quads from "../../pages/Quads"
import Legs from "../../pages/Legs"
import Core from "../../pages/Core"



import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chest" component={Chest} />
      <Stack.Screen name="Shoulders" component={Shoulders} />
      <Stack.Screen name="Biceps" component={Biceps} />
      <Stack.Screen name="Triceps" component={Triceps} />
      <Stack.Screen name="Hamstring" component={Hamstring} />
      <Stack.Screen name="Quads" component={Quads} />
      <Stack.Screen name="Legs" component={Legs} />
      <Stack.Screen name="Core" component={Core} />
    </Stack.Navigator>
  );
}