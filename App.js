import { StyleSheet,
   Text,
   View ,
   TextInput,
   Button,
   ScrollView,
   FlatList,
  } from 'react-native';
  import ItemGoals from './components/ItemGoals';
  import ItemInput from './components/ItemInput';
import React,{useState} from 'react';

export default function App() {

  // Variables

  const [goals, setgoals] = useState([]);
  const [ModalIsVisible, setModalIsVisible] = useState(false);

  // Functions

  function addGoalHandler(goalvalue){
    setgoals(currentGoals => [...currentGoals,{text:goalvalue,key:Math.random().toString()}]);
    CloseGoalHandler();
  }
  function deleteGoalHandler(goalId){
    setgoals((currentGoals) => {
      return currentGoals.filter((goal)=>goal.key !== goalId);
    });
  }
  function AddStartGoalHandler(){
    setModalIsVisible(true);
  }
  function CloseGoalHandler(){
    setModalIsVisible(false);
  }



  return (
    <View style={styles.container}>
      <Button title='Open Modal' onPress={AddStartGoalHandler} color='#5e0acc'/>
      <ItemInput visible={ModalIsVisible} onClose={CloseGoalHandler} onPress={addGoalHandler}/>
      <View style={styles.goalcontainer}>
      <FlatList data={goals} renderItem={(data)=>{
        return <ItemGoals itemData={data.item} onDelete={deleteGoalHandler}/>;
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
