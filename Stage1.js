import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button
  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';



const STORAGE_KEY = "name";
const Stage1 = ({navigation}) =>{
    const [name,setName] = React.useState('');
    const [newUser,setNewUser] = React.useState(true);

    const getName = async() =>{
        const tmp = await AsyncStorage.getItem(STORAGE_KEY);
        if(tmp){
            setName(tmp);
            setNewUser(false);
        }
    }
    React.useEffect(()=>{
        getName();
    },[])

    const e = (!newUser)?"Welcome Back ":"Enter your name";
    return (
        
        <View style = {styles.root}>
            
            <View style = {styles.welcome}>
                <Text style = {{fontSize:30,textAlign:'center',marginTop:30}}>
                    Welcome to Notes
                </Text>
            </View>
            <ScrollView>
            <View style = {{flexGrow:14,justifyContent:'center'}}>
                <Text style = {{textAlign:'center',marginBottom:50,fontSize:25}}>
                    {e}
                </Text>
                <TextInput style = {styles.input} placeholder = "Name" onChangeText = {(text)=>setName(text)} value = {name}></TextInput>
                <Button
                title="Make Notes"
                color="#158284"
                accessibilityLabel="Learn more about this emerald button"
                style = {styles.button}
                onPress={() => navigation.navigate('Notes App',{name:name})}
                />
            </View>
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#e5d41e',
        flex:1,
        flexDirection:'column',
        alignItems:'center',
    },
    welcome:{
        flexGrow:1,justifyContent:'center'
    },
    input:{
        height:50,
        borderWidth:1,
        width:200,
        fontSize:20,
        marginBottom:100,
        textAlign:'center',
        marginLeft:50,
        marginRight:50
    },
    button:{
        width:100,
        margin:100
    }
});

export default Stage1;