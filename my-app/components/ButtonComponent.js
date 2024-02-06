import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity} from 'react-native';
import { useNavigationContext } from "./ContextState/NavigationProvider"

const ButtonComponent = ({body, path}) => {
  const navigation = useNavigation();
  const { open, setOpen } = useNavigationContext()

    const nav = () => {
      navigation.navigate('MyStack', { screen: path });
      setOpen(true);
    }



  return (
    <TouchableOpacity onPress = {nav}>
           <Text style = {{ fontSize: 16}}>{body}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent;