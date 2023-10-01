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
  const [goals, setgoals] = useState([]);

  function addGoalHandler(goalvalue){
    setgoals(currentGoals => [...currentGoals,{text:goalvalue,key:Math.random().toString()}]);
  }

  return (
    <View style={styles.container}>
      <ItemInput onPress={addGoalHandler}/>
      <View style={styles.goalcontainer}>
      <FlatList data={goals} renderItem={(data)=>{
        return <ItemGoals itemData={data.item}/>;
      }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor: '#E1BEE7',
  },
  goalcontainer:{
    flex:4,    
  },
});
