import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useExerciseContext } from "../ContextState/ExerciseProvider";
import RenderExercises from "./RenderExercises";

const GetMuscleGroup = ({ muscle }) => {
    const [exercises, setExercises] = useExerciseContext();

    const handleAddExercise = (muscle) => {
        const newExercise = { id: Date.now(), kg: 0, reps: 0, sets: 0 };

        setExercises(prevExercises => ({
            ...prevExercises,
            [muscle]: prevExercises[muscle] ? [...prevExercises[muscle], newExercise] : [newExercise]
        }));
    };

    const determineColor = (muscle) => {
        const armWorkouts = ["biceps", "triceps"];
        const mainMuscles = ["chest", "back", "shoulders", "core"];
        const legWorkouts = ["hamstring", "quads", "legs"];

        if (armWorkouts.includes(muscle.toLowerCase())) return "#EEADAD";
        if (mainMuscles.includes(muscle.toLowerCase())) return "#C6D9BA";
        if (legWorkouts.includes(muscle.toLowerCase())) return "#F2D280";
        return "beige"; // Default color
    };

    // Using determineColor for setting the background color of the TouchableOpacity
    const muscleGroupColor = determineColor(muscle);

    return (
        <View style={{ elevation: 4, padding: 10, width: "80%", height: "auto", backgroundColor: muscleGroupColor, borderRadius: 10, marginBottom: 20 }}>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ justifyContent:"center" }}>
                <Text style={{ fontSize: 20,  fontWeight:"semibold" }}>{muscle}</Text>
            </View>
                <TouchableOpacity onPress={() => handleAddExercise(muscle)} style={{ backgroundColor: muscleGroupColor, padding: 8, borderRadius: 10 }}>
                    <Text style={{ fontSize: 25 }}>+</Text>
                </TouchableOpacity>
            </View>
            <RenderExercises muscle={muscle} />
        </View>
    );
}

export default GetMuscleGroup;
