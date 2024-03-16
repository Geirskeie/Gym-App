import WeekDayComponent from "../Weekdays/WeekDayComponent"
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const WeekNavigator = () => {
    return (
          <Stack.Navigator>
            <Stack.Screen
              name="Days"
              component={WeekDayComponent}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        );
    };

export default WeekNavigator;