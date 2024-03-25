import React, { createContext, useContext, useState } from 'react';

const ExerciseContext = createContext();

export const useExerciseContext = () => useContext(ExerciseContext);


export const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState({});

  return (
    <ExerciseContext.Provider value={[ exercises, setExercises ]}>
      {children}
    </ExerciseContext.Provider>
  );
};