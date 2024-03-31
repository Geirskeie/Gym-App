import { View } from "react-native";
import { useState, useEffect } from "react"
import DropDownPicker from 'react-native-dropdown-picker';

const SetCustomWeek = ({ items, setItems, setZones  }) => {

   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(null);

   const arnold = [
      {id:"arnold1", name:"Mandag", items:[{ id:"che1", name: "Chest" }, { id:"bac1", name: "Back"}, {id: "cor1", name: "Core"}]},
      {id:"arnold2", name:"Tirsdag", items:[{ id:"tri2", name: "Triceps"}, { id: "bic2", name: "Biceps"}, { id: "sho2", name: "Shoulders"}, {id: "cor2", name: "Core"}]},
      {id:"arnold3", name:"Onsdag", items:[{ id:"leg3", name: "Legs" }, { id:"cor3", name: "Core"}]},
      {id:"arnold4", name:"Torsdag", items:[{ id:"che4", name: "Chest" }, { id:"bac4", name: "Back"}, {id: "cor4", name: "Core"}]},
      {id:"arnold5", name:"Fredag", items:[{ id:"tri5", name: "Triceps"}, { id: "bic5", name: "Biceps"}, { id: "sho5", name: "Shoulders"}, {id: "cor5", name: "Core"}]},
      {id:"arnold6", name:"Lørdag", items:[{ id:"leg6", name: "Legs" }, { id:"cor6", name: "Core"}]},
      {id:"arnold7", name:"Søndag", items:[]}
      ];

   const fullBody = [
       {id:"fullbody1", name:"Mandag", items:[{ id:"che1", name: "Chest" }, { id:"tri1", name: "Triceps"}, {id: "sho1", name: "Shoulders"}]},
       {id:"fullbody2", name:"Tirsdag", items:[]},
       {id:"fullbody3", name:"Onsdag", items:[{ id:"leg3", name: "Legs" }, { id:"cor3", name: "Core"}]},
       {id:"fullbody4", name:"Torsdag", items:[]},
       {id:"fullbody5", name:"Fredag", items:[{ id:"bac5", name: "Back"}, { id: "bic5", name: "Biceps"}]},
       {id:"fullbody6", name:"Lørdag", items:[]},
       {id:"fullbody7", name:"Søndag", items:[]}
       ];

   const ppl5 = [
      {id:"ppl51", name:"Mandag", items:[{ id:"che1", name: "Chest" }, { id:"tri1", name: "Triceps"}, {id: "sho1", name: "Shoulders"}]},
      {id:"ppl52", name:"Tirsdag", items:[{ id:"bac2", name: "Back"}, { id: "bic2", name: "Biceps"}]},
      {id:"ppl53", name:"Onsdag", items:[{ id:"leg3", name: "Legs" }, { id:"cor3", name: "Core"}]},
      {id:"ppl54", name:"Torsdag", items:[]},
      {id:"ppl55", name:"Fredag", items:[{ id:"leg5", name: "Legs" }]},
      {id:"ppl56", name:"Lørdag", items:[{ id:"che6", name: "Chest" }, { id:"tri6", name: "Triceps"}, {id: "sho6", name: "Shoulders"}, { id:"bac6", name: "Back"}, { id: "bic6", name: "Biceps"}]},
      {id:"ppl57", name:"Søndag", items:[{ id:"bac7", name: "Back"}, { id: "bic7", name: "Biceps"}]},
      ];

   const ppl6 = [
      {id:"ppl61", name:"Mandag", items:[{ id:"leg1", name: "Legs" }, { id:"cor1", name: "Core"}]},
      {id:"ppl62", name:"Tirsdag", items:[{ id:"che2", name: "Chest" }, { id:"tri2", name: "Triceps"}, {id: "sho2", name: "Shoulders"}]},
      {id:"ppl63", name:"Onsdag", items:[{ id:"bac2", name: "Back"}, { id: "bic2", name: "Biceps"}]},
      {id:"ppl64", name:"Torsdag", items:[]},
      {id:"ppl65", name:"Fredag", items:[{ id:"che5", name: "Chest" }, { id:"tri5", name: "Triceps"}, {id: "sho5", name: "Shoulders"}]},
      {id:"ppl66", name:"Lørdag", items:[{ id:"bac6", name: "Back"}, { id: "bic6", name: "Biceps"}]},
      {id:"ppl67", name:"Søndag", items:[{ id:"leg7", name: "Legs" }]}
      ];

   const uul = [
       {id:"uul1", name:"Mandag", items:[{ id:"che1", name: "Chest" }, { id:"tri1", name: "Triceps"}, {id: "sho1", name: "Shoulders"}, { id:"bac1", name: "Back"}, { id: "bic1", name: "Biceps"}]},
       {id:"uul2", name:"Tirsdag", items:[]},
       {id:"uul3", name:"Onsdag", items:[{ id:"leg3", name: "Legs" }, { id:"cor3", name: "Core"}]},
       {id:"uul4", name:"Torsdag", items:[]},
       {id:"uul5", name:"Fredag", items:[{ id:"che5", name: "Chest" }, { id:"tri5", name: "Triceps"}, {id: "sho5", name: "Shoulders"}, { id:"bac5", name: "Back"}, { id: "bic5", name: "Biceps"}]},
       {id:"uul6", name:"Lørdag", items:[]},
       {id:"uul7", name:"Søndag", items:[]}
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