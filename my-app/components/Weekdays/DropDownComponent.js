import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';



const DropDownComponent = ({ day, muscle, selectedValue, onValueChange   }) => {
    const [data, setData ] = useState([]);

    const [newExerciseName, setNewExerciseName] = useState("");


  const chestData = [
    { label: 'Benk', value: '1' },
    { label: 'Skråbenk', value: '2' },
    { label: 'Høye flys', value: '3' },
    { label: 'Lave flys', value: '4' },
    { label: 'Brede dips', value: '5' },
    { label: 'Flys', value: '6' },
    { label: 'Push ups', value: '7' },
    { label: 'Benk manualer', value: '8' },
  ];

  const shoulderData = [
    { label: 'Skulderpress stang', value: '11' },
    { label: 'Millitærpress manualer', value: '21' },
    { label: 'Sidehev kabel', value: '31' },
    { label: 'Sidehev manualer', value: '41' },
    { label: 'Facepull kabel', value: '51' },
    { label: 'Omvendt flyes', value: '61' },
    { label: 'Push ups', value: '71' },
  ];

  const bicepsData = [
   { label: 'Bicepscurl kabel', value: '12' },
   { label: 'Bicepscurl manualer', value: '22' },

   { label: 'Incline curl', value: '32' },
   { label: 'Preacher curl', value: '42' },
   { label: 'Hammer curl', value: '52' },
 ];

  const tricepsData = [
   { label: 'Kabel pushdown', value: '13' },
   { label: 'Smale dips', value: '23' },
   { label: 'Brede dips', value: '33' },
   { label: 'Skullcrushers', value: '43' },
   { label: 'Trisepsekstensjon kabel over hodet', value: '53' }
 ];

  const backData = [
   { label: 'Markløft', value: '10' },
   { label: 'Nedtrekk smalt grep', value: '20' },
   { label: 'Nedtrekk bredt grep', value: '30' },
   { label: 'Nedtrekk omvendt grep', value: '40' },
   { label: 'Pullups', value: '50' },
   { label: 'Roing', value: '60' },
   { label: 'Rygghev', value: '70' },
   { label: 'Good morning', value: '80' },
   { label: 'Stående roing', value: '90' },
   { label: 'Mageliggende roing', value: '100' },
   { label: 'T-bar roing', value: '110' },
   { label: 'Roing manual', value: '120' },
   { label: 'Nedtrekk', value: '130' },];



useEffect(() => {
  const muscleDataMap = {
    biceps: bicepsData,
    triceps: tricepsData,
    chest: chestData,
    shoulder: shoulderData,
    back: backData,
  };
   const selectedData = muscleDataMap[muscle.toLowerCase()] || chestData;
   setData(selectedData);

}, [muscle]);



const addNewExercise = () => {
    if (newExerciseName.trim() !== "" && !data.some(e => e.label.toLowerCase() === newExerciseName.trim().toLowerCase())) {
      const newValue = String(Math.max(...data.map(d => parseInt(d.value, 10))) + 1);
      const newExercise = { label: newExerciseName, value: newValue };
      setData(prevData => [...prevData, newExercise]);

      setNewExerciseName(""); // Reset input field
    }
  };



return (
    <>
      <View style={{ justifyContent:"center" }}>
      <TextInput
        style={{    backgroundColor:"#ffff",
                    height: 30,
                    marginTop:12,
                    marginBottom: 0,
                    borderWidth: 1,
                    padding: 7,
                    borderRadius: 14,
                    width:200}}
        onChangeText={setNewExerciseName}
        value={newExerciseName}
        placeholder="Add custom exercise"
        onSubmitEditing={addNewExercise}
      />
    </View>
  <Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    data={data}

    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder="Select item"
    searchPlaceholder="Search..."
    value={selectedValue}
    onChange={item => {
      onValueChange(item.value);
    }}

  />
  </>
);
};



export default DropDownComponent;

const styles = StyleSheet.create({
dropdown: {
  margin: 12,
  height: 30,
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
  borderRatio:10
},

placeholderStyle: {
  fontSize: 16,
},
selectedTextStyle: {
  fontSize: 16,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},
});

