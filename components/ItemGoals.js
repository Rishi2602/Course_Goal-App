import { StyleSheet,View,Text } from "react-native";
function ItemGoals(props) {
    return (
        <View style={styles.goalItem} key={props.itemData.id}>
        <Text style={styles.goalText}>{props.itemData.text}</Text>
        </View>
    );
}
export default ItemGoals;

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:12,
        backgroundColor:'green',
        padding:10,
    },
    goalText:{
        color:'white',
        fontSize:16,
    },
});