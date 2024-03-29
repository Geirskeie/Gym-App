import MainNavigator from "./components/Navigators/MainNavigator"
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProvider } from "./components/ContextState/NavigationProvider";
import  WorkoutProvider  from "./components/ContextState/WorkoutProvider";
import {ExerciseProvider} from "./components/ContextState/ExerciseProvider";
import { Provider as PaperProvider } from 'react-native-paper';



export default function App() {
  return (
    <PaperProvider>
        <WorkoutProvider>
            <NavigationProvider>
                <NavigationContainer>
                    <ExerciseProvider>
                        <MainNavigator />
                    </ExerciseProvider>

                </NavigationContainer>
            </NavigationProvider>
        </WorkoutProvider>
    </PaperProvider>
  );
}