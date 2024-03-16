import PageComponent from "../components/MusclePage/PageComponent";
import { useState } from "react";

const Biceps = () => {
  const [benchExercises] = useState([
    { id: "1", title: "Bench press" },
    { id: "2", title: "Push ups" },
    { id: "3", title: "Incline Bench press" },

  ]);

  const [favorites, setFavorites] = useState([{}]);

  return (
    <PageComponent
      exerciseList={benchExercises}
      muscle="biceps"
      favorites={favorites}
      setFavorites = {setFavorites}
    />
  );
};

export default Biceps;
