import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, View , Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert, FlatList, ScrollView, ImageBackground, LogBox } from 'react-native';
import * as myConstClass from './HttpLink';

export default function Crypto() {
    
    const navigation = useNavigation();

    const [viewMode, setViewMode] = useState("all");

    const [top_crypto_gain, setTop_crypto_gain] = useState([]);
    const [top_crypto_lose, setTop_crypto_lose] = useState([]);
    const [crypto_change_percent_gain, setCrypto_change_percent_gain] = useState([]);
    const [crypto_change_percent_lose, setCrypto_change_percent_lose] = useState([]);
    const [crypto_image_gain, setCrypto_image_gain] = useState([]);
    const [crypto_image_lose, setCrypto_image_lose] = useState([]);
    const [crypto_price_gain, setCrypto_price_gain] = useState([]);
    const [crypto_price_lose, setCrypto_price_lose] = useState([]);


    const [all_crypto_name, setAll_crypto_name] = useState([]);
    const [all_crypto_price, setAll_crypto_price] = useState([]);
    const [all_crypto_change, setAll_crypto_change] = useState([]);



    const fetchCrypto_top_gain = () => {
        fetch(`${myConstClass.HTTP_LINK}/top_crypto_gain`)
        .then(res=>res.json())
        .then(value=>{
            setTop_crypto_gain(value);
        })
    }

    const fetchCrypto_top_lose = () => {
        fetch(`${myConstClass.HTTP_LINK}/top_crypto_lose`)
        .then(res=>res.json())
        .then(value=>{
            setTop_crypto_lose(value);
        })
    }

    const fetchCrypto_change_percent_gain = () => {
        fetch(`${myConstClass.HTTP_LINK}/crypto_change_percent_gain`)
        .then(res=>res.json())
        .then(value=>{
            setCrypto_change_percent_gain(value);
        })
    }

    const fetchCrypto_change_percent_lose = () => {
        fetch(`${myConstClass.HTTP_LINK}/crypto_change_percent_lose`)
        .then(res=>res.json())
        .then(value=>{
            setCrypto_change_percent_lose(value);
        })
    }

    const fetchCrypto_image_gain = () => {
        fetch(`${myConstClass.HTTP_LINK}/crypto_image_gain`)
        .then(res=>res.json())
        .then(value=>{
            setCrypto_image_gain(value);
        })
    }

    const fetchCrypto_image_lose = () => {
        fetch(`${myConstClass.HTTP_LINK}/crypto_image_lose`)
        .then(res=>res.json())
        .then(value=>{
            setCrypto_image_lose(value);
        })
    }

    const fetchCrypto_price_gain = () => {
        fetch(`${myConstClass.HTTP_LINK}/crypto_price_gain`)
        .then(res=>res.json())
        .then(value=>{
            setCrypto_price_gain(value);
        })
    }

    const fetchCrypto_price_lose = () => {
        fetch(`${myConstClass.HTTP_LINK}/crypto_price_lose`)
        .then(res=>res.json())
        .then(value=>{
            setCrypto_price_lose(value);
        })
    }

    // ALL

    const fetchAll_crypto_name = () => {
        fetch(`${myConstClass.HTTP_LINK}/all_crypto_name`)
        .then(res=>res.json())
        .then(value=>{
            setAll_crypto_name(value);
        })
    }

    const fetchAll_crypto_price = () => {
        fetch(`${myConstClass.HTTP_LINK}/all_crypto_price`)
        .then(res=>res.json())
        .then(value=>{
            setAll_crypto_price(value);
        })
    }

    const fetchAll_crypto_change = () => {
        fetch(`${myConstClass.HTTP_LINK}/all_crypto_change`)
        .then(res=>res.json())
        .then(value=>{
            setAll_crypto_change(value);
        })
    }

    useEffect(()=>{
        fetchCrypto_top_gain(),
        fetchCrypto_change_percent_gain(),
        fetchCrypto_image_gain(),
        fetchCrypto_price_gain(),

        fetchCrypto_top_lose(),
        fetchCrypto_change_percent_lose(),
        fetchCrypto_image_lose(),
        fetchCrypto_price_lose(),

        fetchAll_crypto_name(),
        fetchAll_crypto_price(),
        fetchAll_crypto_change(),

        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    },[])

    const LineDivider = () => {
        return (
            <View style={{ width: 0, paddingVertical: 18 }}>
                <View style={{ flex: 1, borderLeftColor: "gray", borderLeftWidth: 1 }}></View>
            </View>
        );
    }


    function All() {
        return(
            <View style={{ flexDirection: 'row'}}>
                <View >
                    {all_crypto_name.map((item) => {
                        return (
                            <View key={all_crypto_name.indexOf(item)} >
                                <Text style={{  
                                    marginLeft: 18,
                                    marginTop: 10,
                                    fontSize: 14,
                                    fontFamily: 'GothamMedium', 
                                    color: "black"
                                }}>{item}</Text>
                                
                                <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 5}} />
                            </View>
                        );
                    })}
                            
                </View>
                <View >
                    {all_crypto_price.map((item) => {
                        return (
                            <View key={all_crypto_price.indexOf(item)} >
                                <Text style={{  
                                    marginLeft: 18,
                                    marginTop: 5,
                                    fontSize: 14,
                                    fontFamily: 'GothamMedium', 
                                    color: "black"
                                }}>{item}</Text>
                                <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 10}} />
                            </View>
                        );   
                    })}
                </View>

                <View>
                    {all_crypto_change.map((item) => {
                        return (
                            <View key={all_crypto_change.indexOf(item)} >
                                <Text style={{  
                                    paddingTop: 5,
                                    marginLeft: 18,
                                    marginBottom: 5,
                                    fontSize: 14,
                                    fontFamily: 'GothamMedium', 
                                    color: item.charAt(0)=="-" ? "red" : "green",
                                }}>{item}</Text>
                                <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 5}} />
                            </View>
                        );
                        
                    })}
                </View>
                            
            </View>
            /////////
            // <View style={{ flex:1}}>
            //     {all_crypto_name.map((item) => {
            //             return (
            //                 <View key={all_crypto_name.indexOf(item)} >
            //                     <Text style={{  
            //                         marginLeft: 18,
            //                         marginTop: 10,
            //                         fontSize: 14,
            //                         fontFamily: 'GothamMedium', 
            //                         color: "black"
            //                     }}>{item}</Text>
            //                 </View>
            //             );
            //         })}

            //         {all_crypto_price.map((item) => {
            //             return (
            //                 <View key={all_crypto_price.indexOf(item)} >
            //                     <Text style={{  
            //                         marginLeft: 18,
            //                         marginTop: 10,
            //                         fontSize: 14,
            //                         fontFamily: 'GothamMedium', 
            //                         color: "black"
            //                     }}>{item}</Text>
            //                 </View>
            //             );
            //         })}

            //         {all_crypto_change.map((item) => {
            //             return (
            //                 <View key={all_crypto_change.indexOf(item)} >
            //                     <Text style={{  
            //                         marginLeft: 18,
            //                         marginTop: 10,
            //                         fontSize: 14,
            //                         fontFamily: 'GothamMedium', 
            //                         color: "black"
            //                     }}>{item}</Text>
            //                 </View>
            //             );
            //         })}
            // </View>
        )
    }


    function Gainers() {
        return (
        <View style={{ flexDirection: 'row'}}>
                <View >
                    {crypto_image_gain.map((item) => {
                        return (
                            <View key={crypto_image_gain.indexOf(item)} >
                                <Image style={{height: 26, width: 26, marginTop: 5}} source={{uri: item}} />
                                
                                <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 5}} />
                            </View>
                        );
                    })}
                            
                </View>
                <View >
                    {top_crypto_gain.map((item) => {
                        return (
                            <View key={top_crypto_gain.indexOf(item)} >
                                <Text style={{  
                                    marginLeft: 18,
                                    marginTop: 10,
                                    fontSize: 14,
                                    fontFamily: 'GothamMedium', 
                                    color: "black"
                                }}>{item}</Text>
                                <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 10}} />
                            </View>
                        );   
                    })}
                </View>

                <View>
                    {crypto_price_gain.map((item) => {
                        return (
                            <View key={crypto_price_gain.indexOf(item)} >
                                <Text style={{  
                                    paddingTop: 10,
                                    marginLeft: 18,
                                    marginBottom: 5,
                                    fontSize: 14,
                                    fontFamily: 'GothamMedium', 
                                    color: "black",
                                }}>{item}</Text>
                                <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 5}} />
                            </View>
                        );
                        
                    })}
                </View>
                            
                    
                <View  style={{ flex: 1}}>
                    {crypto_change_percent_gain.map((item) => {
                        return (
                            <View key={crypto_change_percent_gain.indexOf(item)} >
                                <Text style={{
                                    paddingTop: 5,
                                    marginRight: 0,
                                    marginTop: 5,
                                    fontSize: 14,
                                    fontFamily: 'GothamMedium', 
                                    color: "black"
                                }}>{item}</Text>
                                <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 10}} />
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }

    function Losers() {
        return (
            <View style={{ flexDirection: 'row'}}>
                    <View >
                        {crypto_image_lose.map((item) => {
                            return (
                                <View key={crypto_image_lose.indexOf(item)} >
                                    <Image style={{height: 26, width: 26, marginTop: 5}} source={{uri: item}} />
                                    
                                    <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 5}} />
                                </View>
                            );
                        })}
                                
                    </View>
                    <View >
                        {top_crypto_lose.map((item) => {
                            return (
                                <View key={top_crypto_lose.indexOf(item)} >
                                    <Text style={{  
                                        marginLeft: 18,
                                        marginTop: 10,
                                        fontSize: 14,
                                        fontFamily: 'GothamMedium', 
                                        color: "black"
                                    }}>{item}</Text>
                                    <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 10}} />
                                </View>
                            );   
                        })}
                    </View>
    
                    <View>
                        {crypto_price_lose.map((item) => {
                            return (
                                <View key={crypto_price_lose.indexOf(item)} >
                                    <Text style={{  
                                        paddingTop: 10,
                                        marginLeft: 18,
                                        marginBottom: 5,
                                        fontSize: 14,
                                        fontFamily: 'GothamMedium', 
                                        color: "black",
                                    }}>{item}</Text>
                                    <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 5}} />
                                </View>
                            );
                            
                        })}
                    </View>
                                
                        
                    <View  style={{ flex: 1}}>
                        {crypto_change_percent_lose.map((item) => {
                            return (
                                <View key={crypto_change_percent_lose.indexOf(item)} >
                                    <Text style={{
                                        paddingTop: 5,
                                        marginRight: 0,
                                        marginTop: 5,
                                        fontSize: 14,
                                        fontFamily: 'GothamMedium', 
                                        color: "black"
                                    }}>{item}</Text>
                                    <View style={{borderBottomWidth: 1, borderBottomColor: "#BEC1D2", marginTop: 10}} />
                                </View>
                            );
                        })}
                    </View>
                </View>
            );
        }

    return (

        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white"}}>
                <View style={{ flexDirection: 'row', marginTop: 40 , marginBottom: 10}}>
                    <TouchableOpacity style={{ flex: 1,}} onPress={() => navigation.goBack()} >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{marginLeft: 0, width: 27, height: 27, marginRight: 60 }} source={require('../assets/icons/back_arrow_icon.png')} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{  marginLeft: 0, fontSize: 18,fontFamily: 'GothamMedium', color: "black"}}>Cryptocurrencies</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1,}}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', padding: 12,}}>
                <View style={{ flexDirection: 'row', height: 45, backgroundColor: "white", borderRadius: 8 }}>
                    {/* Claim */}
                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor: viewMode == "all" ? "#BEC1D2" : null, 
                            margin: 5,
                            borderRadius: 6,
                        }}
                        onPress={() => setViewMode("all")}
                        
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{  marginLeft: 0, fontSize: 16,fontFamily: 'GothamMedium', lineHeight: 22, color: "black"}}>All</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* Get Point */}
                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor: viewMode == "gain" ? "#BEC1D2" : null, 
                            margin: 5,
                            borderRadius: 8,
                        }}
                        onPress={() => setViewMode("gain")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Top Gainers</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* My Card */}
                    <TouchableOpacity
                        style={{ 
                            flex: 1,
                            backgroundColor: viewMode == "lose" ? "#BEC1D2" : null, 
                            margin: 5,
                            borderRadius: 8,
                        }}
                        onPress={() => setViewMode("lose")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Top Losers</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                
                { viewMode == "all" && All()}
                { viewMode == "gain" && Gainers()}
                { viewMode == "lose" && Losers()}

            </View>
            
        </ScrollView>
                            
        
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 50,
        padding: 50
    }, 
    inputField: {
        backgroundColor: "white"
    }
});


