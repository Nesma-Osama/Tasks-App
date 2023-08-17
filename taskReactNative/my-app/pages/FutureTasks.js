import {View,Text,TextInput,StyleSheet,KeyboardAvoidingView,TouchableOpacity,ScrollView}from 'react-native'
import { useState } from 'react'
function FutureTasks()
{
    const [futureTask,setFutureTask]=useState('')
    const [futureTasks,setFutureTasks]=useState([])
    function Complete(ind)
    {
        setFutureTasks(futureTasks.filter((task,index)=>index!==ind))
    }
    function addFutureTask(task)
    {
        setFutureTask(task)
    }
    function addTasks()
    {
        setFutureTasks([...futureTasks,futureTask])
        setFutureTask('')
    }

    return(
       
    <View style={styles.futureContainer}>
        <View >
         <Text  style={styles.header} >Future Tasks</Text>
         </View>
        <View >
            <ScrollView>
                { futureTasks.map((task,index)=>(
               <Tasks task={task} index={index} complete={Complete}/>))}
            </ScrollView>

        </View>
        <KeyboardAvoidingView style={styles.input}>
                  <TextInput style={styles.inputtext} placeholder='Enter Your Daily Tasks' onChangeText={addFutureTask} value={futureTask}/>
                  <TouchableOpacity style={styles.buttoncont} onPress={addTasks}>
                    <Text style ={styles.buttontext}>+</Text>
                  </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
    )
}
const styles=StyleSheet.create({
    futureContainer:{
    flex:1,
     backgroundColor:'white',
     marginTop:10,
     paddingHorizontal:10,
    },
    header:{
    color:'black',
    fontSize:25,
    fontStyle:'italic',
    fontWeight:'500',
    margin:10,
    textAlign:'center'

},
input:{
    position:'absolute',
    bottom:60,
    flexDirection:'row',
    justifyContent:'space-around',
    alignContent:'center',
  
}
,
inputtext:{
    padding:10,
    marginHorizontal:20,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:20,
    width:'70%',
    backgroundColor:'white',
},
buttoncont:{
    width:50,
    height:50,
    borderColor:'gary',
    borderWidth:1,
    borderRadius:50,
    alignContent:'center',
    justifyContent:'center',
    paddingHorizontal:17,
    marginRight:10,
    backgroundColor:'black'
},
buttontext:{
   fontSize:20,
   color:'white'
}

})

export default FutureTasks


function Tasks({task,index,complete}){
    
   
    return( <TouchableOpacity  key={index} style={TaskStyle.task} onPress={()=>complete(index)}>

    <View style={TaskStyle.Left}>
       <TouchableOpacity style={TaskStyle.square}></TouchableOpacity>
       <Text style={TaskStyle.text}>{task}</Text>
       </View>
       <TouchableOpacity style={TaskStyle.circle}></TouchableOpacity>
</TouchableOpacity>)
}
const TaskStyle=StyleSheet.create({
    task:{
        backgroundColor:'#5e0acc',
        borderRadius:10,
        borderWidth:1,
        paddingHorizontal:1,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20,
    },
    Left:{
        flexDirection: 'row', 
        alignItems: 'center', 
        flexWrap: 'wrap',
    }
    ,circle:{
        width: 20, 
        height: 20, 
        borderColor: 'white', 
        borderWidth: 2, 
        borderRadius: 20
    },
 
    
    text:{
        color:'white',
        width:'70%',
    },
    square:{
        width: 24, 
        height:24, backgroundColor:'white', 
        borderRadius: 5, 
        marginRight: 15
    }
})