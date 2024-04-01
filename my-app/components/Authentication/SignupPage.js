import React, { useState } from 'react';
import { ImageBackground, Text, TextInput, View, SafeAreaView, Switch, Image } from 'react-native';

export default function SignUpPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='cover' source={require("./Icons/SignupPageGym1.jpg")}>
                <View style={{ alignItems: "center", paddingTop: 100 }}>
                    <Text style={{ fontSize: 30, paddingVertical: 40, color: "white", fontWeight: "bold" }}>Registrer deg</Text>
                    <View style={{ width: "90%" }}>

                        <Text style={{ color: "white", marginBottom: 3, fontSize: 16 }}>Brukernavn</Text>
                        <View style={{ backgroundColor: "lightgrey", borderRadius: 5, opacity:0.9 }}>
                            <TextInput
                                style={{ padding: 10, fontSize: 16, marginLeft: 5, fontFamily: "sans-serif" }}
                                onChangeText={setUsername}
                                value={username}
                                placeholder="Brukernavn"
                            />
                        </View>

                        <Text style={{ color: "white", marginBottom: 3, marginTop: 10, fontSize: 16 }}>Email</Text>
                        <View style={{ backgroundColor: "lightgrey", borderRadius: 5, opacity:0.9 }}>
                            <TextInput
                                style={{ padding: 10, fontSize: 16, marginLeft: 5, fontFamily: "sans-serif" }}
                                onChangeText={setEmail}
                                value={email}
                                placeholder="Email"
                            />
                        </View>

                        <Text style={{ color: "white", marginBottom: 3, marginTop: 10, fontSize: 16 }}>Passord</Text>
                        <View style={{ backgroundColor: "lightgrey", borderRadius: 5, opacity:0.9}}>
                            <TextInput
                                style={{ padding: 10, fontSize: 16, marginLeft: 5 }}
                                onChangeText={setPassword}
                                value={password}
                                placeholder="Passord"
                            />
                        </View>

                        <Text style={{ color: "white", marginTop: 10, fontSize: 16, marginBottom:10 }}>Bekreft passord</Text>
                        <View style={{ backgroundColor: "lightgrey", borderRadius: 5, opacity:0.9 }}>
                            <TextInput
                                style={{ padding: 10, fontSize: 16, marginLeft: 5, fontFamily: "sans-serif" }}
                                onChangeText={setConfirmpassword}
                                value={confirmPassword}
                                placeholder="Bekreft Passord"
                            />
                        </View>

                        <View style={{ backgroundColor: "orange", borderRadius: 5, alignItems: "center", marginTop: 40 }}>
                            <Text style={{ padding: 10, fontSize: 20 }}>Registrer deg</Text>
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

                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 5 }}>
                            <Image source={require("./Icons/Facebook.jpg")} />
                            <Image source={require("./Icons/Google.jpg")} />
                            <Image source={require("./Icons/Apple.jpg")} />
                        </View>
                    </View>
                    <View style={{  flexDirection:"row", justifyContent:"center", marginTop:40 }}>
                        <Text style={{ color:"white" }}>Har allerede en konto?</Text>
                        <Text style={{ color:"yellow" }}> Logg inn</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
