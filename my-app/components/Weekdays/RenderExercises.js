import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DropDownComponent from "./DropDownComponent";
import SimpleTable from "./SimpleTable";
import { useExerciseContext } from "../ContextState/ExerciseProvider";

const RenderExercises = ( { muscle } ) => {

    const [exercises, setExercises] = useExerciseContext();

    const handleRemoveExercise = (muscle, index) => {
        setExercises(prevExercises => ({
          ...prevExercises,
          [muscle]: prevExercises[muscle].filter((_, i) => i !== index)
        }));
    };

    const updateExerciseDetails = (muscle, exerciseId, updatedDetails) => {
        setExercises(prevExercises => {
            const updatedExercises = { ...prevExercises };

            updatedExercises[muscle] = updatedExercises[muscle].map(exercise => {
                if (exercise.id === exerciseId) {

                    return { ...exercise, ...updatedDetails };
                }

                return exercise;
            });
            return updatedExercises;
        });
    };

    const updateExerciseDropdownValue = (muscle, exerciseId, label) => {
      setExercises(prevExercises => {
        const updatedExercises = { ...prevExercises };
        updatedExercises[muscle] = updatedExercises[muscle].map(exercise => {
          if (exercise.id === exerciseId) {
            const updatedExercise = { ...exercise, selectedDropdownValue: label };
            return updatedExercise;
          }

          return exercise;

        });
        console.log(updatedExercises);
        return updatedExercises;
      });
      console.log(exerciseId);
    };




return (
        <View>
          {exercises[muscle]?.map((exercise, index) => (
            <View key={exercise.id} style={{ marginBottom: 20 }}>
              {/* Adjusted View usage */}
              <DropDownComponent
                muscle={muscle}
                selectedValue={exercise.label}
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

