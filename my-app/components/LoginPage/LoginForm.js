import React, { useState } from 'react'
import { ImageBackground, Text, TextInput, View, SafeAreaView, Switch, Image } from 'react-native'

export default function LoginForm() {
    const [click,setClick] = useState(false);
    const [username,setUsername]= useState("");
    const [password,setPassword]= useState("");

    console.log(click);

  return (
    <SafeAreaView style={{ flex:1 }}>
        <ImageBackground style={{ flex:1, width: '100%', height: '100%' }} resizeMode='cover' source={require("./LoginPageGym1.jpg")}>
            <View style={{ alignItems:"center", paddingTop:100 }}>
                <Text style={{ fontSize:30, paddingVertical : 40, color:"white", fontWeight:"bold" }}>Logg inn</Text>
                <View style={{ width:"90%" }}>
                    <View style={{  width:"100%" }}>
                        <Text style={{ color:"white", marginBottom:3, fontSize:16 }}>Brukernavn</Text>
                        <View style={{ backgroundColor:"lightgrey", borderRadius:5 }}>

                        <TextInput
                            style={{ padding:10, fontSize:16, marginLeft:5, fontFamily: "sans-serif"   }}
                            onChangeText={setUsername}
                            value={username}
                            placeholder="Email eller brukernavn"
                            />
                        </View>
                        <Text style={{ color:"white", marginBottom:3, marginTop:10, fontSize:16 }}>Passord</Text>
                        <View style={{ backgroundColor:"lightgrey", borderRadius:5 }}>
                        <TextInput
                            style={{ padding:10,  fontSize:16, marginLeft:5 }}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Passord"

                           />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row',  justifyContent:"space-between"}}>
                        <View style={{ alignItems:"flex-start", flexDirection:"row" }}>
                            <Switch style={{ marginTop: 5}} value={click} onValueChange={setClick} trackColor={{true : "green" , false : "gray"}} />
                            <Text style={{ color:"grey", marginTop:20, marginRight:5 }}>Husk meg</Text>
                        </View>
                        <View style={{alignItems:"flex-end"}}>
                        <Text style={{ color:"grey", marginTop:20, textDecorationLine:"underline" }}>Glemt passord?</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor:"orange", borderRadius:5, alignItems:"center", marginTop:10 }}>
                        <Text style={{ padding:10, fontSize:20 }}>Logg inn</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", width: "100%", paddingVertical: 10, marginTop: 50 }}>
                      <View style={{ flex: 1, height: 2, backgroundColor: "grey" }} />
                      <View>
                        <Text style={{ width: 140, textAlign: "center", color: "white", paddingHorizontal: 5 }}>
                            Alternativ innlogging
                        </Text>
                      </View>
                      <View style={{ flex: 1, height: 2, backgroundColor: "grey" }} />
                    </View>
                    <View style={{ flexDirection:"row", justifyContent:"space-evenly", marginTop:5 }}>
                        <Image source={require("./Facebook.jpg")} />
                        <Image source={require("./Google.jpg")} />
                        <Image source={require("./Apple.jpg")} />
                    </View>

                    <View style={{  flexDirection:"row", justifyContent:"center", marginTop:70}}>
                        <Text style={{ color:"white", fontSize:20 }}>Ingen konto?</Text>
                        <Text style={{ color:"yellow", fontSize:20 }}> Lag nå</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

