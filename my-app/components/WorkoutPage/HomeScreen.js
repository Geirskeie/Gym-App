import { View, Text, Dimensions, ScrollView} from 'react-native';
import { useState } from "react";
import WorkoutButton from "../WorkoutButton";
import DayText from "./DayText";

export default function HomeScreen() {

  const height = 10;

  const screenHeight = Dimensions.get('window').height;

  const getDays = (days, workouts) => {
      return (
        <View style={{ height:screenHeight/height, width:Dimensions.get('window').width, marginBottom: 10}}>

        <View style= {{backgroundColor: "#d3d3d3", height:screenHeight/height}}>
        <View style={{ alignItems:"center" }}>
            <DayText day={days} size={20} top={5} />
            {getWorkout(days, workouts)}

            </View>

            </View>

            </View>
            )
        }

  const getWorkout = (day, workouts) => {
    // Filter out null workouts first
    const validWorkouts = workouts.filter(workout => workout != null);
    return (
    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 5 }}>
        <WorkoutButton day={day} workoutName={validWorkouts} />
      </View>
    );
  };

  return (
    <ScrollView>
    <View style={{ flex: 1, flexDirection:'column'}}>
            {getDays("Mandag", ["Triceps", "Chest", "Legs"])}
            {getDays("Tirsdag", ["Back", "Biceps"])}
            {getDays("Onsdag", ["Legs"])}
            {getDays("Torsdag", ["Rest"])}
            {getDays("Fredag", ["Chest", "Triceps"])}
            {getDays("Lørdag", ["Back", "Biceps"])}
            {getDays("Søndag", ["Legs"])}

    </View>
    </ScrollView>
  );
}