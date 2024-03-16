import PageComponent from "../components/MusclePage/PageComponent";
import { useState } from "react";

const Hamstring = () => {
  const [hamstringExercises] = useState([
    { id: "1", title: "Hamstring Press" },
    { id: "2", title: "Push ups" },
    { id: "3", title: "Incline Bench press" },
    { id: "4", title: "Machine Flies" },
  ]);

  const [favorites, setFavorites] = useState([{}]);

  return (
    <PageComponent
      exerciseList={hamstringExercises}
      muscle={"hamstring"}
      favorites={favorites}
      setFavorites = {setFavorites}
    />
  );
};

export default Hamstring;
