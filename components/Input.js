import { TextInput, View ,Text,StyleSheet} from "react-native";


const Input=({label,textInputconfig,style})=>{
    if(textInputconfig && textInputconfig.multiline){
        var inputStyle={
            height:100,
        };
    }
    return(
        <View style={styles.formcontainer}>
            <Text style={{color:'white',marginLeft:8}}>{label}</Text>
            <TextInput style={[styles.textcontainer,inputStyle]} {...textInputconfig} />
        </View>
    );

}
const styles=StyleSheet.create({
    textcontainer:{
        borderColor:'grey',
        borderWidth:2,
        borderRadius:16,
        backgroundColor:'#e4d0ff',
        width:'100%',
        padding:10,
        marginVertical:8,
      },
        formcontainer:{
            paddingHorizontal:12,
            paddingVertical:4,
            width:'100%',
        }
});
export default Input;