import { View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { GestureHandlerRootView,  } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxScrollView } from 'react-native-drax';
import SetCustomWeek from "./SetCustomWeek";



export default function HomeScreen() {

  const screenHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  const initialItems= [
        { id:"tri", name: "Triceps" },
        { id:"bic", name: "Biceps" },
        { id:"leg", name: "Legs" },
        { id:"che", name: "Chest" },
        { id:"bac", name: "Back" },
        { id:"sho", name: "Shoulders" },
        { id:"cor", name: "Core" },
  ];

  const [items, setItems] = useState([
      {label: "Upper Upper Lower 3 days", value: "uul"},
      {label: 'Full body - 3 day', value: 'Full body'},
      {label: 'PPL (Push Pull Legs) 5 days', value: 'ppl5'},
      {label: 'PPL (Push Pull Legs) 6 days', value: 'ppl6'},
      {label: 'Arnold Split 6 days', value: 'arnold'},

    ]);

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
        const mainMuscles = ["chest", "back"];
        const legWorkouts = ["hamstring", "quads", "legs"];
        const smallerMuscles = ["shoulders", "core"];

        if (armWorkouts.includes(workoutName.toLowerCase())) {
          return "#EEADAD";
        }
        if (mainMuscles.includes(workoutName.toLowerCase())) {
          return "#C6D9BA";
        }
        if (legWorkouts.includes(workoutName.toLowerCase())) {
          return "#F2D280";
        }
        if (smallerMuscles.includes(workoutName.toLowerCase())) {
           return "#568E08";
        }
        return "#b3b3b3"; // Default color if no workout matches
      };

  const navigateToDay = (day, workout) => {
        if (workout.length > 0) {
            navigation.navigate('WeekNavigator', { screen: 'Days', params: { day:day, workout:workout } })
        }
        else {
            return false
        };
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

    const removeItemFromZone = (zoneId, itemId) => {
      // Create a new array of zones, updating the one from which we're removing the item
      const updatedZones = zones.map(zone => {
        if (zone.id === zoneId) {
          // Filter out the item to be removed
          const updatedItems = zone.items.filter(item => item.id !== itemId);
          return { ...zone, items: updatedItems };
        }
        return zone;
      });

      // Update the state with the new zones array
      setZones(updatedZones);
    };

  return (
    <View style={{ flex:1 }}>
        <SetCustomWeek items={items} setItems={setItems} setZones={setZones}/>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DraxProvider>
        <DraxScrollView showsVerticalScrollIndicator={false}>
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
                onPress={() => navigateToDay(zone, zone.items.map(item => item.name))}

              >
                <DraxView
                  style={{ height: screenHeight / 11, backgroundColor: 'lightgrey', alignItems: 'center', borderRadius:5, marginTop:10 }}
                  receivingStyle={{ borderColor: 'red', borderWidth: 2}}
                  onReceiveDragDrop={({ dragged: { payload } }) => handleItemDrop(zone.id, payload)}
                >
                  <Text style={{ marginBottom: 5, fontSize: 20 }}>{zone.name}</Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    {zone.items.map((item) => (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() => removeItemFromZone(zone.id, item.id)}
                        style={{ marginRight: 10, marginBottom: 5 }}
                      >
                      <View style={{ backgroundColor: getColor(item.name),  padding: 7, borderRadius:10, borderWidth:1, borderColor:"black"}}>
                        <Text style={{ fontSize: 16, justifyContent:"center" }}>
                          {item.name}
                        </Text>
                      </View>

                      </TouchableOpacity>
                    ))}
                  </View>
                </DraxView>
              </TouchableOpacity>
            ))}
            </View>

        </View>
        </DraxScrollView>
      </DraxProvider>
    </GestureHandlerRootView>
    </View>
  );
}
