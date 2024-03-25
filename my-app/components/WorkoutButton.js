import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity} from 'react-native';
import WeekNavigator from "./Navigators/WeekNavigator";

const WorkoutButton = ({ workoutName = [], day,  }) => {
  const navigation = useNavigation();


  const getColor = (workoutName) => {
    // Simplified approach, focusing on a single workout
    const armWorkouts = ["biceps", "triceps"];
    const mainMuscles = ["chest", "back", "shoulders", "core"];
    const legWorkouts = ["hamstring", "quads", "legs"];

    if (armWorkouts.includes(workoutName.toLowerCase())) {
      return "#EEADAD";
    }
    if (mainMuscles.includes(workoutName.toLowerCase())) {
      return "#C6D9BA";
    }
    if (legWorkouts.includes(workoutName.toLowerCase())) {
      return "#F2D280";
    }
    return "#b3b3b3"; // Default color if no workout matches
  };


  if (!workoutName) return null;


  return (
       <TouchableOpacity onPress={() => {
         //Må sjekke ut navigation litt mer
       navigation.navigate('WeekNavigator', {
         screen: 'Days',
         params: { day: day, workoutName:workoutName }
       });

       }}>
   <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: 'wrap' }}>
   {workoutName.map((workout, index) => (
           <View key={workout} style={{
             backgroundColor: getColor(workout),
             borderRadius: 10,
             borderColor: 'black',
             borderWidth: 1,
             padding: 6,
             marginRight: 10,
             marginBottom: 5,
             width:100

             }}>
             <Text style={{
               textAlign: "center",
               fontSize: 17
             }}>{workout}</Text>
           </View>
         ))}
               </View>

    </TouchableOpacity>
  );
};

export default WorkoutButton;