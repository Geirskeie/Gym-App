import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DropDownComponent from "./DropDownComponent";
import SimpleTable from "./SimpleTable";
import { useExerciseContext } from "../ContextState/ExerciseProvider";

const RenderExercises = ( { muscle, day } ) => {

    const [exercises, setExercises] = useExerciseContext();

    const handleRemoveExercise = (muscle, index) => {
        setExercises(prevExercises => ({
            [day.name]: {
            ...prevExercises[day.name],
          [muscle]: prevExercises[day.name][muscle].filter((_, i) => i !== index)
          }
        }));
    };

    const updateExerciseDetails = (muscle, exerciseId, updatedDetails) => {
        setExercises(prevExercises => {
            const updatedExercises = { ...prevExercises };

            updatedExercises[day.name][muscle] = updatedExercises[day.name][muscle].map(exercise => {
                if (exercise.id === exerciseId) {

                    return { ...exercise, ...updatedDetails };
                }

                return exercise;
            });
            return updatedExercises;
        });
    };

    const updateExerciseDropdownValue = (muscle, exerciseId, value) => {
      setExercises(prevExercises => {
        // Copying the previous exercises state
        const updatedExercises = { ...prevExercises };
        // Finding the right day and muscle group
        const exercisesForMuscle = updatedExercises[day.name][muscle];

        // Mapping through exercises to update the selected value for the matched exercise
        const updatedExercisesForMuscle = exercisesForMuscle.map(exercise => {
          if (exercise.id === exerciseId) {
            // Update the exercise with the new selected dropdown value
            return { ...exercise, selectedDropdownValue: value };
          }
          return exercise;
        });

        // Updating the state with the new exercises array
        updatedExercises[day.name][muscle] = updatedExercisesForMuscle;
        return updatedExercises;
      });
    };




return (
        <View>
          {exercises[day.name]?.[muscle]?.map((exercise, index) => (
            <View key={`${muscle}-${day.name}-${exercise.id}`} style={{ marginBottom: 20 }}>
              {/* Adjusted View usage */}
              <DropDownComponent
                day={day}
                muscle={muscle}
                selectedValue={exercise.value}
                onValueChange={(value) => updateExerciseDropdownValue(muscle, exercise.id, value)}
                onRemove={() => handleRemoveExercise(muscle, index)}
              />
              <SimpleTable
                kg={exercise.kg}
                reps={exercise.reps}
                sets={exercise.sets}
                onKgChange={(newKg) => updateExerciseDetails(muscle, exercise.id, { kg: newKg })}
                onRepsChange={(newReps) => updateExerciseDetails(muscle, exercise.id, { reps: newReps })}
                onSetsChange={(newSets) => updateExerciseDetails(muscle, exercise.id, { sets: newSets })}
              />
              <TouchableOpacity onPress={() => handleRemoveExercise(muscle, index)} style={{ alignItems: 'center' }}>
                <Text style={{ color: 'red', fontSize: 14 }}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
    );
};

export default RenderExercises;