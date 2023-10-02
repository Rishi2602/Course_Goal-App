import { StyleSheet,View,Text, Pressable } from "react-native";
function ItemGoals(props) {
    return (
        <View style={styles.goalItem} key={props.itemData.id}>
        <Pressable android_ripple={{color:'white'}} onPress={props.onDelete.bind(this,props.itemData.key)}>
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
});