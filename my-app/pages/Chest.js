import PageComponent from "../components/MusclePage/PageComponent";
import { useState } from "react";

const Chest = () => {
  const [benchExercises] = useState([
    { id: "1", title: "Bench press" },
    { id: "2", title: "Push ups" },
    { id: "3", title: "Incline Bench press" },
    { id: "4", title: "Machine Flies" },
  ]);

  const [favorites, setFavorites] = useState([{}]);

  return (
    <PageComponent
      exerciseList={benchExercises}
      muscle={"chest"}
      favorites={favorites}
      setFavorites = {setFavorites}
    />
  );
};

export default Chest;
