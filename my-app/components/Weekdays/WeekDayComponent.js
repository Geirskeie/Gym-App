import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import DropDownComponent from "./DropDownComponent"
import SimpleTable from "./SimpleTable";

const WeekDayComponent = ({ route }) => {

    const navigation = useNavigation();

    const { day, workoutName } = route.params;

    const [exercises, setExercises] = useState({});

   const handleAddExercise = (muscle, selectedDropdownValue) => {
    const newExercise = { id: Date.now(), name: "", selectedDropdownValue };


     setExercises(prevExercises => ({
       ...prevExercises,
       [muscle]: prevExercises[muscle] ? [...prevExercises[muscle], newExercise] : [newExercise]
     }));
   };


      const handleRemoveExercise = (muscle, index) => {
        setExercises(prevExercises => ({
          ...prevExercises,
          [muscle]: prevExercises[muscle].filter((_, i) => i !== index)
        }));
      };

const updateExerciseDropdownValue = (muscle, exerciseId, value) => {
  setExercises(prevExercises => {
    // Clone the previous state to ensure immutability
    const updatedExercises = { ...prevExercises };
    // Map over the specific muscle group's exercises to update the target exercise
    updatedExercises[muscle] = updatedExercises[muscle].map(exercise => {
      if (exercise.id === exerciseId) {
        const updatedExercise = { ...exercise, selectedDropdownValue: value };
        return updatedExercise;
      }
      console.log(exercise);
      return exercise;

    });
    return updatedExercises;
  });
};





    const RenderExercises = ({ muscle }) => {
      return (
        <View>
          {exercises[muscle]?.map((exercise, index) => (
            <View key={exercise.id} style={{ marginBottom: 20 }}>
              <View style={{ alignItems: "center" }}>
                <Text>
                  <DropDownComponent
                    muscle={muscle}
                    selectedValue={exercise.selectedDropdownValue}
                    onValueChange={(value) => updateExerciseDropdownValue(muscle, exercise.id, value)}
                    onRemove={() => handleRemoveExercise(muscle, index)}                  />
                </Text>
              </View>
              <SimpleTable exercise={exercise} />
              <TouchableOpacity onPress={() => handleRemoveExercise(muscle, index)} style={{ alignItems: 'center' }}>
                <Text style={{ color: 'red', fontSize: 14 }}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
    };




    const GetMuscleGroup = ({ muscle }) => {
        let color = "";

        const armWorkouts = ["biceps", "triceps"];
        const mainMuscles = ["chest", "back", "shoulders", "core"];
        const legWorkouts = ["hamstring", "quads", "legs"];

        if (armWorkouts.includes(muscle.toLowerCase())) {
          color = "#EEADAD";
        }
        if (mainMuscles.includes(muscle.toLowerCase())) {
          color = "#C6D9BA";
        }
        if (legWorkouts.includes(muscle.toLowerCase())) {
          color = "#F2D280";
        }

        return (
            <View
              style={{
                 elevation: 4,
                 padding: 10,
                 width: "80%",
                 marginBottom:20,
                 height: "auto",
                 backgroundColor: color,
                 borderRadius: 10,
                 alignItems:"center"
                 }}
                 >
                 <View style={{width:"100%", flexDirection:"row", justifyContent:"flex-end", alignItems:"center", flex:3}}>
                 <View style={{ flex:1, marginLeft:10 }}></View>
                     <Text style={{ fontSize:20, textAlign:"center", flex:1}}>{muscle}</Text>
                 <View style={{  flex:1, alignItems:"flex-end", marginRight:10 }}>
                      <TouchableOpacity onPress={() => handleAddExercise(muscle)}>
                        <Text style={{ fontSize:25 }}>+</Text>
                      </TouchableOpacity>
                 </View>


                 </View>
                <GetExercise exercise="Pulldown" muscle={muscle}/>
              </View>
              )
    }

    const GetExercise = ({ exercise, muscle }) => {
        return (
        <View
            style={{
               elevation: 4,
               padding: 10,
               marginTop: 10,
               width: "80%",
               height: "auto",
               backgroundColor: "white",
               borderRadius: 10,
               marginBottom:20

               }}
               >

         <View style={{ marginBottom:5 }}>
            <RenderExercises muscle={muscle} />
            </View>
       </View>

        )
    }



    return (

        <ScrollView>
          <View style={{ backgroundColor:"#353935"	 }}>
              <Text style={{ fontSize:30, alignSelf:"center", color:"white" }}>{(day)}</Text>
          </View>

        <View style={{
            flex: 1, alignItems: "center"
        }}>
        <View
            style={{
              elevation: 4,
              padding: 10,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: 10,
              alignItems:"center"

            }}
          >
            {workoutName[0] ? (<GetMuscleGroup muscle={workoutName[0]}/>):("")}


            {workoutName[1] ? (<GetMuscleGroup muscle={workoutName[1]}/>):("")}
            {workoutName[2] ? (<GetMuscleGroup muscle={workoutName[2]} />):("")}
            </View>

          </View>

    </ScrollView>

    )

};

export default WeekDayComponent;


