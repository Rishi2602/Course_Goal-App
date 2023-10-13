import { StyleSheet,View,TextInput,Button, Modal,Image } from "react-native";
import React,{useState} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {addGoal} from '../redux/goalReducer';
import Input from './Input'
import nodemail from "../api/nodemail";
function ItemInput(props){
    const dispatch = useDispatch();
    const [goalvalue, setgoalvalue] = useState({
        username:'',
        phone:'',
        email:'',
        message:'',
    });
    function goalInutHandler(identifier,enteredValue){
        setgoalvalue((currentvalue)=>{
            return{
                ...currentvalue,
                [identifier]:enteredValue,
            }
        });
    }
    async function addGoalHandler(){
        if(!goalvalue.username || !goalvalue.phone || !goalvalue.email || !goalvalue.message){
            alert('Invalid Input');
            return;
        }
        const data={
            id:Math.random().toString(),
            username:goalvalue.username,
            phone:goalvalue.phone,
            email:goalvalue.email,
            message:goalvalue.message,
        }
        dispatch(addGoal(data));
        nodemail(data);
        setgoalvalue({
            username:'',
            phone:'',
            email:'',
            message:'',
        });
    }

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputcontainer}>
        <Image source={require('../assets/to-do-list.png')} style={styles.image} />     
        <Input label="Name" textInputconfig={
            {
                placeholder:'Enter your name',
                value:goalvalue.username,
                onChangeText:goalInutHandler.bind(this,'username'),
            }
            }/>
        <Input label="Phone Number" textInputconfig={
            {
                placeholder:'Enter your Phone number',
                value:goalvalue.phone,
                keyboardtype:'phone-pad',
                maxLength:10,
                onChangeText:goalInutHandler.bind(this,'phone'),
            }
            
            }
            />
        <Input label="Email" textInputconfig={
            {
                placeholder:'Enter youre email',
                value:goalvalue.email,
                keyboardType:'email-address',
                onChangeText:goalInutHandler.bind(this,'email'),
            }
            }/>
            <Input label="Message" textInputconfig={
            {
                placeholder:'Enter the message',
                multiline:true,
                goalvalue:goalvalue.message,
                onChangeText:goalInutHandler.bind(this,'message'),
            }
            }/>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='Submit' onPress={addGoalHandler} color="#5e0acc"/>
        </View>
        <View style={styles.button}>
        <Button title='Close Modal' onPress={props.onClose} color="#f31282"/>
        </View>      
        </View>
        </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    inputcontainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        padding:12,
        alignItems:'center',
        backgroundColor:'#1e085a',
        color:'#5e0acc'
      },
    buttonContainer:{
        flexDirection:'row',
        marginTop:16,
    },
    button:{
        width:'30%',
        marginHorizontal:8,
    },
    image:{
        width:100,
        height:100,
        margin:20,
    }
});

export default ItemInput;