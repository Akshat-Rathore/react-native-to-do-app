import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import { sub } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Button } from 'react-native-elements';


const Form = ({route,navigation}) =>{
    const [ID,setID] = React.useState(0);
    const [subject,setSubject] = React.useState('');
    const [body,setBody] = React.useState('');
    let d = new Date();
    let month;
    if(d.getMonth()<=8)
        month = '0'+(1+d.getMonth());
    else
        month = d.getMonth();
    let date_str = d.getDate()+'/'+month+'/'+d.getFullYear();

    React.useEffect(()=>{
        setID(route.params.ID);
        setSubject(route.params.subject);
        setBody(route.params.body);
    },[route.params])

    const e = subject?" Update your Notes":"Create  Notes ";
    return (
        <View style = {styles.root}>
            <View style = {styles.form}>
                <Text style = {{marginBottom:40,fontSize:20,borderWidth:1,padding:20,backgroundColor:'#d2e854'}}>{e}</Text>
                <ScrollView>
                <TextInput placeholder = "Subject" style = {styles.subject} onChangeText = {(text)=>setSubject(text)} value = {subject}></TextInput>
                </ScrollView>
                <View style = {styles.notes}>
                <ScrollView >
                    <TextInput multiline placeholder = "Notes" style = {{fontSize:20}} onChangeText = {(text)=>setBody(text)} value = {body}></TextInput>
                    </ScrollView>
                </View>
                <View style={styles.button}>
                <Button  title = "Continue" onPress = {()=>navigation.navigate('Notes App',{
                    ID:ID,
                    subject:subject,
                    body:body,
                    date:date_str,
                })}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#e5d41e',
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    form:{
        alignItems:'center',
        backgroundColor:'#e5d41e',
        padding:50,
        paddingBottom:30,
        paddingTop:30,
        borderRadius:5,
        width:400
    },
    subject:{
        padding:10,
        width:300,
        height:80,
        borderWidth:2,
        fontSize:20,
        backgroundColor:'#eafc81'
    },
    notes:{
        width:300,
        height:250,
        borderWidth:2,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#eafc81'
    },
    button:{
        backgroundColor:'#158284'
    }
});


export default Form;