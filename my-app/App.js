import MainNavigator from "./components/Navigators/MainNavigator"
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProvider } from "./components/ContextState/NavigationProvider";
import { Provider as PaperProvider } from 'react-native-paper';



export default function App() {
  return (
    <PaperProvider>
        <NavigationProvider>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </NavigationProvider>
    </PaperProvider>
  );
}