import { StyleSheet,View,TextInput,Button, Modal,Image } from "react-native";
import React,{useState} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {addGoal} from '../redux/goalReducer';
function ItemInput(props){
    const dispatch = useDispatch();
    const [goalvalue, setgoalvalue] = useState(" ");
    function goalInutHandler(Text){
        setgoalvalue(Text);
    }
    function addGoalHandler(){
        if(goalvalue.length === 0){
            alert('Please enter a goal');
            return;
        }
        dispatch(addGoal({id:Math.random(),text:goalvalue}));
        setgoalvalue(" ");
    }

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputcontainer}>
        <Image source={require('../assets/to-do-list.png')} style={styles.image} />
        <TextInput style={styles.textcontainer} onChangeText={goalInutHandler} placeholder="Enter your goal" value={goalvalue}></TextInput>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandler} color="#5e0acc"/>
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
    textcontainer:{
        borderColor:'grey',
        borderWidth:2,
        borderRadius:16,
        backgroundColor:'#e4d0ff',
        width:'100%',
        padding:10,
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