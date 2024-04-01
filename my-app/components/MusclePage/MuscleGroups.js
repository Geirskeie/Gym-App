import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import SearchBar from "./SearchBar"
import ButtonComponent from "../ButtonComponent"

const screenHeight = Dimensions.get('window').height;

const styles = {
    boxes: {
    flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',
    alignItems: 'center', backgroundColor: 'white'
    },
    body: {
    width: '60%', marginTop:10, height: screenHeight / 20, justifyContent: 'center', alignItems: 'center',
    }
}

const Headers = ({text}) => {
    return (
         <Text style={{textDecorationLine:'underline', fontSize:25, marginVertical:5}}>{text}</Text>
    )
}

export default function MuscleGroups() {
  return (

  <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: 'center'}}>

      <Headers text='  Arms 💪' />
        <View style={[styles.body, {backgroundColor: '#EEADAD'}]}>
            <ButtonComponent body = "Biceps" path='Biceps' />
        </View>
        <View style={[styles.body, {backgroundColor: '#EEADAD'}]}>
            <ButtonComponent body = "Triceps" path='Triceps' />
        </View>
      <Headers text='  Upper Body 🏋' />


         <View style={[styles.body, {backgroundColor: '#C6D9BA'}]}>
            <ButtonComponent body = "Chest" path='Chest'/>
        </View>
        <View style={[styles.body, {backgroundColor: '#C6D9BA'}]}>
          <ButtonComponent body = "Shoulders" path='Shoulders'/>
        </View>
        <View style={[styles.body, {backgroundColor: '#C6D9BA'}]}>
          <ButtonComponent body = "Core" path='Core'/>
        </View>

         <View style={[styles.body, {backgroundColor: '#C6D9BA'}]}>
            <ButtonComponent body = "Back" path='Back' />
         </View>
      <Headers text='  Lower Body 🦵' />

        <View style={[styles.body, {backgroundColor: '#F2D280'}]}>
            <ButtonComponent body = "Hamstring" path='Hamstring' />
      </View>
      <View style={[styles.body, {backgroundColor: '#F2D280'}]}>
            <ButtonComponent body = "Quads" path='Quads' />
      </View>
      <View style={[styles.body, {backgroundColor: '#F2D280'}]}>
            <ButtonComponent body = "Legs" path='Legs' />
      </View>
      </View>
          </ScrollView>
    );
}
