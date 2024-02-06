import MainNavigator from "./components/Navigators/MainNavigator"
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProvider } from "./components/ContextState/NavigationProvider";


export default function App() {
  return (
    <NavigationProvider>
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    </NavigationProvider>
  );
}