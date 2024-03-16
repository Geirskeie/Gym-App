import {Text} from "react-native";

const DayText = ({day, size, top}) => {
    return (

        <Text style={{ fontSize:size, marginTop:top }}>{day}</Text>
    )
};

export default DayText;