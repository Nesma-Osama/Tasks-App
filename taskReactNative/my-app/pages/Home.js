import { NativeAppEventEmitter } from "react-native"
import {View,Text,TouchableOpacity,StyleSheet}from "react-native"
 function Home({navigation})
    {
return(
<View style={styles.Conatiner}>
    <View style={styles.TextContainer}>
        <Text style={styles.Header}>Tasks</Text>
        <Text style={styles.Para}>Choose the type of tasks you want</Text>
    </View>
        <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('Daily Tasks')}>
            <Text style={styles.text}>Daily Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.box} onPress={()=>navigation.navigate('Future Tasks')}>
        <Text style={styles.text}>Future Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.box} onPress={()=>navigation.navigate('Extra Tasks')}>
        <Text style={styles.text}>Extra Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.box} onPress={()=>navigation.navigate('About')} >
        <Text style={styles.text}> About</Text>
        </TouchableOpacity>
</View>
)
}
const styles=StyleSheet.create({
    Conatiner:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        paddingHorizontal:30,
        backgroundColor:'#5e0acc',
    },
    TextContainer:{
        justifyContent:'space-between',
        alignItems:'center'
    },
    Header:{
        color:'white',
        fontSize:30,
        fontStyle:'italic',
        position:'absolute',
        top:-130,
        textAlign:'center'

    },
    Para:{
      fontSize:20,
      color:'white',
      fontStyle:'italic',
      position:'absolute',
      top:-70,
      textAlign:'center'
    },
    box:{
        borderColor:'gray',
        borderWidth:1,
        padding:10,
        paddingHorizontal:30,
        borderRadius:20,
        marginBottom:30,
    },
    text:{
        fontSize:20,
        color:'white',
        fontStyle:'italic',
        textAlign:'center',
    }
})
export default Home