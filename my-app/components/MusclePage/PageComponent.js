import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import DataTableComponent from "./DataTableComponent";
import SearchBar from "../SearchBar";
import {useNavigationContext} from "../ContextState/NavigationProvider";

const PageComponent = ({ exerciseList, muscle, favorites, setFavorites }) => {
    const [showMostPopular, setShowMostPopular] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const { open, setOpen } = useNavigationContext();


  const searchQuery = (newText) => {
      setSearchInput(newText);
  }


  return (
    <ScrollView>
    <TouchableOpacity onPress={() => { setOpen(false)} }>
      <Text style={{ fontSize:40 }}>←</Text>

    </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center"}}>

        <View style={{ width: "80%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 30,
            }}
          >
            <TouchableOpacity onPress={() => setShowMostPopular(true)}>
              {showMostPopular ? (
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Most popular
                </Text>
              ) : (
                <Text style={{ fontSize: 16 }}>Most popular</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowMostPopular(false)}>
              {!showMostPopular ? (
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Favorites
                </Text>
              ) : (
                <Text style={{ fontSize: 16 }}>Favorites</Text>
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              elevation: 4,
              padding: 10,
              marginTop: 10,
              width: "100%",
              backgroundColor: "#C6D9BA",
              borderRadius: 10,
            }}
          >
            {showMostPopular ? (
              <View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginBottom: 5,
                      textDecorationLine: "underline",
                    }}
                  >
                    Most popular
                  </Text>
                </View>
                {exerciseList.map((item) => (
                  <View key={item.id}>
                    <Text style={{ fontSize: 20 }}>
                      {item.id}. {item.title}
                    </Text>
                  </View>
                ))}
              </View>
            ) : (
              <View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginBottom: 5,
                      textDecorationLine: "underline",
                    }}
                  >
                    Favorites
                  </Text>
                </View>
                {favorites.map((item) => (
                  <View key={item.id}>
                    <Text style={{ fontSize: 20 }}>
                      {item.id}. {item.title}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
          <View style={{ marginTop: 30 }}>
            <SearchBar searchQuery={searchQuery}/>
          </View>
          <DataTableComponent muscle={muscle} searchInput={searchInput} favorites={favorites} setFavorites={setFavorites}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default PageComponent;
