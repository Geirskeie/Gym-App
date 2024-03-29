import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { GestureHandlerRootView,  } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';


export default function HomeScreen() {

  const screenHeight = Dimensions.get('window').height;

  const navigation = useNavigation();

  const initialItems= [
        { id:"tri", name: "Triceps" },

        { id:"bic", name: "Biceps" },

        { id:"leg", name: "Legs" },

        { id:"sho", name: "Shoulders" },

        { id:"che", name: "Chest" },

        { id:"bac", name: "Back" },

        { id:"cor", name: "Core" },


  ];

    const [items, setItems] = useState(initialItems);


  const [zones, setZones] = useState([
   {
       id: 1,
       name:"Mandag",
       items: []
   },
   {
       id: 2,
       name:"Tirsdag",
       items: []
   },
   {
       id: 3,
       name:"Onsdag",
       items: []
   },
   {
       id: 4,
       name:"Torsdag",
       items: []
   },
   {
       id: 5,
       name:"Fredag",
       items: []
   },
   {
       id: 6,
       name:"Lørdag",
       items: []
   },
   {
       id: 7,
       name:"Søndag",
       items: []
   }
  ]);


  const getColor = (workoutName) => {
        // Simplified approach, focusing on a single workout
        const armWorkouts = ["biceps", "triceps"];
        const mainMuscles = ["chest", "back", "shoulders", "core"];
        const legWorkouts = ["hamstring", "quads", "legs"];

        if (armWorkouts.includes(workoutName.toLowerCase())) {
          return "#EEADAD";
        }
        if (mainMuscles.includes(workoutName.toLowerCase())) {
          return "#C6D9BA";
        }
        if (legWorkouts.includes(workoutName.toLowerCase())) {
          return "#F2D280";
        }
        return "#b3b3b3"; // Default color if no workout matches
      };

  const navigateToDay = (day, workout) => {
        console.log(day, workout);
        if (day) {
        navigation.navigate('WeekNavigator', { screen: 'Days', params: { day:day, workout:workout } })
        }
        else {return false}
   };

  const handleItemDrop = (zoneId, item) => {
    const updatedZones = zones.map(zone => {
      if (zone.id === zoneId) {
          const newItem = { ...item, id: `${item.id}-${zone.id}` };
          const isItemInZone = zone.items.some(existingItem => existingItem.name === newItem.name);

          if (isItemInZone) {
              return zone;
          } else {
              return { ...zone, items: [...zone.items, newItem] };
          }
          }
      return zone;
    });
    setZones(updatedZones); // Update state
  };

  const handleItemRemove = (zoneId, item) => {
    const updatedZones = zones.map(zone =>  n )
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DraxProvider>
        <View style={{ flex: 1,flexDirection: 'column', width: "100%" }}>
          <View style={{ flexDirection: "row", justifyContent:"center" }}>
            {initialItems.map((item) => (
              <DraxView
                key={item.id}
                style={{ marginRight: 5 }}
                dragPayload={item}
                renderContent={() => <Text style={{ backgroundColor: getColor(item.name), padding:5 }}>{item.name}</Text>}
              />
            ))}
          </View>
          <View style={{ width:"100%" }}>
            {zones.map((zone) => (
              <TouchableOpacity
                key={zone.id}
                onPress={() => navigateToDay(zone.name, zone.items.map(item => item.name))}

              >
                <DraxView
                  style={{ height: screenHeight / 10, backgroundColor: 'lightgrey', alignItems: 'center', borderRadius:5, marginTop:10 }}
                  receivingStyle={{ borderColor: 'red', borderWidth: 2}}
                  onReceiveDragDrop={({ dragged: { payload } }) => handleItemDrop(zone.id, payload)}
                >
                  <Text style={{ marginBottom: 5, fontSize: 20 }}>{zone.name}</Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    {zone.items.map((item) => (
                      <Text style={{ fontSize: 16, backgroundColor: getColor(item.name), padding: 10, marginRight: 10, marginBottom: 5, borderRadius:10 }} key={item.id}>{item.name}</Text>
                    ))}
                  </View>
                </DraxView>
              </TouchableOpacity>
            ))}
            </View>

        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
}
