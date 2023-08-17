import {View,Text,StyleSheet,Button}from 'react-native'
function About()
{
   return( <View style={styles.aboutContainer}>
    
    <Text style={styles.TextContainer}>This app is brought to you by {'Nesma Osama'}  it helps
     you add three different types of tasks ranging from ones you have to do today to ones
      that should be done in the future and even extra tasks!</Text>

    </View>)
}
const styles=StyleSheet.create({
    aboutContainer:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:30,
        backgroundColor:'purple',
    }
    ,
    TextContainer:{
    paddingHorizontal:20,
    letterSpacing:1,
    color:'white',
    lineHeight:30,

    }
})
export default About