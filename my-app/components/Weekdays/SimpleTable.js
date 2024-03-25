import { View, Text, TextInput } from "react-native";
import { useState } from "react";

const SimpleTable = ({ kg, reps, sets, onKgChange, onRepsChange, onSetsChange}) => {

      const [kgInput, setKgInput] = useState(kg.toString());
      const [repsInput, setRepsInput] = useState(reps.toString());
      const [setsInput, setSetsInput] = useState(sets.toString());

      // Handlers for ending editing each field
      const handleKgEndEditing = (e) => {
        const numericValue = Number(e.nativeEvent.text);
        onKgChange(numericValue);
        setKgInput(numericValue.toString());
      };

      const handleRepsEndEditing = (e) => {
        const numericValue = Number(e.nativeEvent.text);
        onRepsChange(numericValue);
        setRepsInput(numericValue.toString());
      };

      const handleSetsEndEditing = (e) => {
        const numericValue = Number(e.nativeEvent.text);
        onSetsChange(numericValue);
        setSetsInput(numericValue.toString());
      };


      return (
        <View style={{ padding: 2 }}>
          {/* Row 1 */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#000', padding: 10 }}>
              <Text>KG</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#000', padding: 10 }}>
              <Text>Reps</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
              <Text>Sets</Text>
            </View>
          </View>
          {/* Divider */}
          <View style={{ borderBottomWidth: 1, borderColor: '#000', marginHorizontal: 20 }} />
          {/* Row 2 */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#000', padding: 10 }}>
      <TextInput
           style={{ flex: 1, textAlign: 'center', borderWidth: 1, borderColor: '#000', marginRight: 5, padding:3, backgroundColor:"white" }}
           value={kgInput}
           onChangeText={setKgInput}
           onEndEditing={handleKgEndEditing}
           keyboardType="numeric"
         />
            </View>
            <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#000', padding: 10 }}>
        <TextInput
           style={{ flex: 1, textAlign: 'center', borderWidth: 1, borderColor: '#000', marginRight: 5, padding:3, backgroundColor:"white" }}
          value={repsInput}
          onChangeText={setRepsInput}
          onEndEditing={handleRepsEndEditing}
          keyboardType="numeric"
        />
        </View>
            <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
        <TextInput
           style={{ flex: 1, textAlign: 'center', borderWidth: 1, borderColor: '#000', padding:3, backgroundColor:"white" }}
          value={setsInput}
          onChangeText={setSetsInput}
          onEndEditing={handleSetsEndEditing}
          keyboardType="numeric"
        />
        </View>
          </View>
        </View>
      );
    };

export default SimpleTable;