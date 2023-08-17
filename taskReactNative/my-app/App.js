import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import About from './pages/About';
import ExtraTasks from './pages/ExtraTasks';
import DailyTasks from './pages/DailyTasks';
import FutureTasks from './pages/FutureTasks';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Daily Tasks" component={DailyTasks} />

        <Stack.Screen name="Future Tasks" component={FutureTasks} />
        <Stack.Screen name="Extra Tasks" component={ExtraTasks} />
      </Stack.Navigator>
      

    </NavigationContainer>
  );
}

export default App;