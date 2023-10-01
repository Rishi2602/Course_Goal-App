import { StyleSheet,View,TextInput,Button } from "react-native";
import React,{useState} from 'react';
function ItemInput(props){
    const [goalvalue, setgoalvalue] = useState(" ");
    function goalInutHandler(Text){
        setgoalvalue(Text);
    }
    function addGoalHandler(){
        props.onPress(goalvalue);
        setgoalvalue('');
    }

    return(
        <View style={styles.inputcontainer}>
        <TextInput style={styles.textcontainer} onChangeText={goalInutHandler} placeholder="Enter your goal" value={goalvalue}></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    );
}
const styles = StyleSheet.create({
    inputcontainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:24,
        borderBottomWidth:1,
        borderColor:'grey',
        alignItems:'center',
      },
    textcontainer:{
        borderColor:'grey',
        borderWidth:2,
        width:'70%',
        padding:10,
      },
});

export default ItemInput;