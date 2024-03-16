import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { memo } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

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
        { label: 'Skulderpress stang', value: '1' },
        { label: 'Millitærpress manualer', value: '2' },
        { label: 'Sidehev kabel', value: '3' },
        { label: 'Sidehev manualer', value: '4' },
        { label: 'Facepull kabel', value: '5' },
        { label: 'Omvendt flyes', value: '6' },
        { label: 'Push ups', value: '7' },
      ];

      const bicepsData = [
       { label: 'Bicepscurl kabel', value: '1' },
       { label: 'Bicepscurl manualer', value: '2' },
       { label: 'Incline curl', value: '3' },
       { label: 'Preacher curl', value: '4' },
       { label: 'Hammer curl', value: '5' },
     ];

      const tricepsData = [
       { label: 'Kabel pushdown', value: '1' },
       { label: 'Smale dips', value: '2' },
       { label: 'Brede dips', value: '3' },
       { label: 'Skullcrushers', value: '4' },
       { label: 'Trisepsekstensjon kabel over hodet', value: '5' },
     ];

      const backData = [
       { label: 'Markløft', value: '1' },
       { label: 'Nedtrekk smalt grep', value: '2' },
       { label: 'Nedtrekk bredt grep', value: '3' },
       { label: 'Nedtrekk omvendt grep', value: '4' },
       { label: 'Pullups', value: '5' },
       { label: 'Roing', value: '6' },
       { label: 'Rygghev', value: '7' },
       { label: 'Good morning', value: '8' },
       { label: 'Stående roing', value: '9' },
       { label: 'Mageliggende roing', value: '10' },
       { label: 'T-bar roing', value: '11' },
       { label: 'Roing manual', value: '12' },
       { label: 'Nedtrekk', value: '13' },]



  const DropDownComponent = ({muscle, selectedValue, onValueChange}) => {

    let data = [];

    if (muscle.toLowerCase() === "biceps") {
        data = bicepsData;
    } else if (muscle.toLowerCase() === "triceps") {
        data = tricepsData;
    } else if (muscle.toLowerCase() === "chest") {
        data = chestData;
    } else if (muscle.toLowerCase() === "shoulder") {
        data = shoulderData;
    } else if (muscle.toLowerCase() === "back") {
        data = backData;
    } else {
        data = chestData;
    }



    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
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
    );
  };

  export default memo(DropDownComponent);

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

