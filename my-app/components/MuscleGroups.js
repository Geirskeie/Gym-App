import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import ButtonComponent from "./ButtonComponent"

const screenHeight = Dimensions.get('window').height;

const styles = {
    boxes: {
    flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',
    alignItems: 'center', backgroundColor: 'white'
    },
    body: {
    width: '60%', marginTop:10, height: screenHeight / 16, justifyContent: 'center', alignItems: 'center',
    }
}

const Headers = ({text}) => {
    return (
         <Text style={{textDecorationLine:'underline', fontSize:25}}>{text}</Text>
    )
}

export default function MuscleGroups() {
  return (
  <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', padding: 20 }}>
        <Text>SearchBar</Text>
      <Headers text='Arms' />
        <View style={[styles.body, {backgroundColor: '#F3D1F4'}]}>
            <ButtonComponent body = "Biceps" path='Biceps' />
        </View>
        <View style={[styles.body, {backgroundColor: '#F3D1F4'}]}>
            <ButtonComponent body = "Triceps" path='Triceps' />
        </View>
      <Headers text='Upper Body' />


         <View style={[styles.body, {backgroundColor: '#B5EAD7'}]}>
            <ButtonComponent body = "Chest" path='Chest'/>
        </View>
        <View style={[styles.body, {backgroundColor: '#B5EAD7'}]}>
          <ButtonComponent body = "Shoulders" path='Shoulders'/>
        </View>

         <View style={[styles.body, {backgroundColor: '#B5EAD7'}]}>
            <ButtonComponent body = "Back" path='Back' />
         </View>
      <Headers text='Lower Body' />

        <View style={[styles.body, {backgroundColor: 'lightgreen'}]}>
            <ButtonComponent body = "Hamstring" path='Hamstring' />
      </View>
      <View style={[styles.body, {backgroundColor: 'lightgreen'}]}>
            <ButtonComponent body = "Quads" path='Quads' />
      </View>
      <View style={[styles.body, {backgroundColor: 'lightgreen'}]}>
            <ButtonComponent body = "Legs" path='Legs' />
      </View>
      </View>
          </ScrollView>
    );
}
