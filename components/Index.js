import { StyleSheet,
    Text,
    View ,
    TextInput,
    Button,
    ScrollView,
    FlatList,
   } from 'react-native';
   import ItemGoals from './ItemGoals';
   import ItemInput from './ItemInput';
 import React,{useState} from 'react';
 import {useSelector} from 'react-redux';
 import {Goalstore} from '../redux/store';
 
 export default function Index() {
   // Variables
   const [ModalIsVisible, setModalIsVisible] = useState(true);
 
   // Functions
 
   function AddStartGoalHandler(){
     setModalIsVisible(true);
   }
   function CloseGoalHandler(){
     setModalIsVisible(false);
   }
 
   
   const goals=useSelector(state=>state.goal.ids);
   return (
     <View style={styles.container}>
       <Button title='Open Modal' onPress={AddStartGoalHandler} color='#5e0acc'/>
       <ItemInput visible={ModalIsVisible} onClose={CloseGoalHandler}/>
       <View style={styles.goalcontainer}>
       <FlatList data={goals} renderItem={(data)=>{
         return <ItemGoals itemData={data.item}/>;
       }}
       />
       </View>
     </View>
   );
 }
   // CSS sytles
 
 const styles = StyleSheet.create({
   container: {
     flex:1,
     paddingTop:50,
     paddingHorizontal:16,
   },
   goalcontainer:{
     flex:4,    
     marginTop:16,
   },
 });
 