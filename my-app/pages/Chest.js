import {Text, View, ScrollView} from "react-native"
import SearchBar from "../components/SearchBar"
import PageComponent from "../components/PageComponent";
import { DataTable } from "react-native-paper";
import { useState } from "react";






const Chest = () => {
    const [benchExercises] = useState([
        { id: '1', title: 'Bench press'},
        { id: '2', title: 'Push ups'},
        { id: '3', title: 'Incline Bench press'},
        { id: '4', title: 'Machine Flies'},

    ]);

    const [favoritesChestExercises] = useState(
    [
        {}
    ]    );
    return (
        <PageComponent exerciseList={benchExercises} allExercises={benchExercises} favorites = {favoritesChestExercises}/>
    )
}

export default Chest;