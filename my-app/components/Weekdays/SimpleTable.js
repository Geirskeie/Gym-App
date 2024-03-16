import { View, Text } from "react-native";

const SimpleTable = () => {


      return (
        <View style={{ padding: 20 }}>
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
          <View style={{ borderBottomWidth: 1, borderColor: '#000', marginHorizontal: -20 }} />
          {/* Row 2 */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#000', padding: 10 }}>
              <Text>80</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#000', padding: 10 }}>
              <Text>6</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
              <Text>3</Text>
            </View>
          </View>
        </View>
      );
    };

export default SimpleTable;