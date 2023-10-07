import { StyleSheet,View,Text, Pressable } from "react-native";
import {useDispatch} from 'react-redux';
import {deleteGoal} from '../redux/goalReducer';
function ItemGoals(props) {
    const dispatch = useDispatch();
    function deleteGoalHandler(goalId){
        dispatch(deleteGoal({id:goalId}));
      }
    return (
        <View style={styles.goalItem} key={props.itemData.id}>
        <Pressable style={({pressed})=>{pressed && styles.pressedItem}} android_ripple={{color:'white'}} onPress={() => deleteGoalHandler(props.itemData.key)}>
        <Text style={styles.goalText}>{props.itemData.text}</Text>
        </Pressable>
        </View>
    );
}
export default ItemGoals;

const styles = StyleSheet.create({
    goalItem:{
        margin:6,
        borderRadius:8,
        backgroundColor:'#f31282',
    },
    goalText:{
        padding:10,
        color:'white',
        fontSize:16,
    },
    pressedItem:{
        backgroundColor:'white',
        opacity:0.5,
    }
});