import HomeScreen from "../../pages/HomeScreen";
import Chest from "../../pages/Chest";
import MuscleGroups from "../MuscleGroups"
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Muscle Groups" component={MuscleGroups} />
    </Drawer.Navigator>
  );
}