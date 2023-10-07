import { StyleSheet,
  } from 'react-native';
import {Provider} from 'react-redux'; 
import Goalstore from './redux/store';
import Index from './components/Index';
export default function App() {
  return (
    <Provider store={Goalstore}>
      <Index/>
    </Provider>
  );
}
  // CSS sytles
