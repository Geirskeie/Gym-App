import { View } from "react-native";
import { useState, useEffect } from "react"
import DropDownPicker from 'react-native-dropdown-picker';

const SetCustomWeek = ({ items, setItems, setZones  }) => {

   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(null);

   const arnold = [
      {id:1, name:"Mandag", items:[{ id:"che1", name: "Chest" }, { id:"bac1", name: "Back"}, {id: "cor1", name: "Core"}]},
      {id:2, name:"Tirsdag", items:[{ id:"tri2", name: "Triceps"}, { id: "bic2", name: "Biceps"}, { id: "sho2", name: "Shoulders"}, {id: "cor2", name: "Core"}]},
      {id:3, name:"Onsdag", items:[{ id:"leg3", name: "Legs" }, { id:"cor3", name: "Core"}]},
      {id:4, name:"Torsdag", items:[{ id:"che4", name: "Chest" }, { id:"bac4", name: "Back"}, {id: "cor4", name: "Core"}]},
      {id:5, name:"Fredag", items:[{ id:"tri5", name: "Triceps"}, { id: "bic5", name: "Biceps"}, { id: "sho5", name: "Shoulders"}, {id: "cor5", name: "Core"}]},
      {id:6, name:"Lørdag", items:[{ id:"leg6", name: "Legs" }, { id:"cor6", name: "Core"}]},
      {id:7, name:"Søndag", items:[]}
      ];

   const fullBody = [
       {id:1, name:"Mandag", items:[{ id:"che1", name: "Chest" }, { id:"tri1", name: "Triceps"}, {id: "sho1", name: "Shoulders"}]},
       {id:2, name:"Tirsdag", items:[]},
       {id:3, name:"Onsdag", items:[{ id:"leg3", name: "Legs" }, { id:"cor3", name: "Core"}]},
       {id:4, name:"Torsdag", items:[]},
       {id:5, name:"Fredag", items:[{ id:"bac5", name: "Back"}, { id: "bic5", name: "Biceps"}]},
       {id:6, name:"Lørdag", items:[]},
       {id:7, name:"Søndag", items:[]}
       ];

   const ppl5 = [
      {id:1, name:"Mandag", items:[{ id:"che1", name: "Chest" }, { id:"tri1", name: "Triceps"}, {id: "sho1", name: "Shoulders"}]},
      {id:2, name:"Tirsdag", items:[{ id:"bac2", name: "Back"}, { id: "bic2", name: "Biceps"}]},
      {id:3, name:"Onsdag", items:[{ id:"leg3", name: "Legs" }, { id:"cor3", name: "Core"}]},
      {id:4, name:"Torsdag", items:[]},
      {id:5, name:"Fredag", items:[{ id:"leg5", name: "Legs" }]},
      {id:6, name:"Lørdag", items:[{ id:"che6", name: "Chest" }, { id:"tri6", name: "Triceps"}, {id: "sho6", name: "Shoulders"}, { id:"bac6", name: "Back"}, { id: "bic6", name: "Biceps"}]},
      {id:7, name:"Søndag", items:[{ id:"bac7", name: "Back"}, { id: "bic7", name: "Biceps"}]},
      ];

   const ppl6 = [
      {id:1, name:"Mandag", items:[{ id:"leg1", name: "Legs" }, { id:"cor1", name: "Core"}]},
      {id:2, name:"Tirsdag", items:[{ id:"che2", name: "Chest" }, { id:"tri2", name: "Triceps"}, {id: "sho2", name: "Shoulders"}]},
      {id:3, name:"Onsdag", items:[{ id:"bac2", name: "Back"}, { id: "bic2", name: "Biceps"}]},
      {id:4, name:"Torsdag", items:[]},
      {id:5, name:"Fredag", items:[{ id:"che5", name: "Chest" }, { id:"tri5", name: "Triceps"}, {id: "sho5", name: "Shoulders"}]},
      {id:6, name:"Lørdag", items:[{ id:"bac6", name: "Back"}, { id: "bic6", name: "Biceps"}]},
      {id:7, name:"Søndag", items:[{ id:"leg7", name: "Legs" }]}
      ];

   const uul = [
       {id:1, name:"Mandag", items:[{ id:"che1", name: "Chest" }, { id:"tri1", name: "Triceps"}, {id: "sho1", name: "Shoulders"}, { id:"bac1", name: "Back"}, { id: "bic1", name: "Biceps"}]},
       {id:2, name:"Tirsdag", items:[]},
       {id:3, name:"Onsdag", items:[{ id:"leg3", name: "Legs" }, { id:"cor3", name: "Core"}]},
       {id:4, name:"Torsdag", items:[]},
       {id:5, name:"Fredag", items:[{ id:"che5", name: "Chest" }, { id:"tri5", name: "Triceps"}, {id: "sho5", name: "Shoulders"}, { id:"bac5", name: "Back"}, { id: "bic5", name: "Biceps"}]},
       {id:6, name:"Lørdag", items:[]},
       {id:7, name:"Søndag", items:[]}
       ];

   useEffect(() => {
       if (value === "arnold") {
           // Assuming setZones is now passed in and setCustomZone logic is adjusted accordingly
           setZones(arnold);
       }
       if (value === "Full body") {
           setZones(fullBody);
       }
       if (value === "ppl5") {
             setZones(ppl5);
       }
       if (value === "ppl6") {
             setZones(ppl6);
       }
       if (value === "uul") {
            setZones(uul);
       }
   }, [value, setZones]);

    return (
        <View style={{ width:"50%", alignSelf:"center", margin:10 }}>
        <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
         </View>
    )
}

export default SetCustomWeek;