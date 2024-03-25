import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, memo, useCallback } from "react";
import DropDownComponent from "./DropDownComponent"
import SimpleTable from "./SimpleTable";
import RenderExercises from "./RenderExercises";
import GetMuscleGroup from "./GetMuscleGroup";
import { useExerciseContext } from "../ContextState/ExerciseProvider";



const WeekDayComponent = ({ route }) => {

    const { day, workoutName } = route.params;

    return (

        <ScrollView>
          <View style={{ backgroundColor:"#353935"	 }}>
              <Text style={{ fontSize:30, alignSelf:"center", color:"white" }}>{(day)}</Text>
          </View>

        <View style={{
            flex: 1, alignItems: "center"
        }}>
        <View style={{
          elevation: 4,
          padding: 10,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          alignItems:"center"
        }}>
          {
            workoutName.map((muscle, index) => (
              <GetMuscleGroup key={index} muscle={muscle} />
            ))
          }
        </View>


          </View>

    </ScrollView>

    )

};

export default WeekDayComponent;


