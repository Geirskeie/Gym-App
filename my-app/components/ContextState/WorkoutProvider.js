import React, { createContext, useContext, useState } from 'react';

const WorkoutNavigation = createContext();

export const useWorkoutNavigationContext = () => useContext(WorkoutNavigation);


const WorkoutProvider = ({ children }) => {
    const [workoutNavOpen, setWorkoutNavOpen] = useState(false);

  return (
    <WorkoutNavigation.Provider value={{ workoutNavOpen, setWorkoutNavOpen }}>
      {children}
    </WorkoutNavigation.Provider>
  );
};

export default WorkoutProvider;
