import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity} from 'react-native';



const ButtonComponent = ({body, path}) => {
  const navigation = useNavigation();

const nav = () => {
  navigation.navigate('MyStack', { screen: path });
}


  return (
    <TouchableOpacity onPress = {nav}>
           <Text style = {{ fontSize: 16}}>{body}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent;