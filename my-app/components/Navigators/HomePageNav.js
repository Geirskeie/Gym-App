import HomeScreen from "../WorkoutPage/HomeScreen";
import WeekNavigator from "./WeekNavigator"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomePageNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workout" component={HomeScreen}
      options={{    headerTitleAlign: 'center',
                    title:'Your Workout week',
                    headerTitleStyle: {

                    fontWeight: 'bold',
                    },
                    }
                    }/>
      <Stack.Screen name="WeekNavigator" component={WeekNavigator} options={{ title:"Week" }}/>

    </Stack.Navigator>
  );
}