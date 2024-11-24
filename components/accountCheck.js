import { Pressable, Text, View } from "react-native"
import { greenText } from "../constants/constants"
import sty from "../constants/styles"



export  const AccountCheck=({text,text2,fun})=>{
    return(
        <View style={{flexDirection:'row',
        alignSelf:"center"
          
          }}>
    
    <Text style={sty.size}> {text  }</Text>
    <Pressable onPress={fun}>
    <Text style={[{
      color: greenText,
      
    },sty.size]}> {text2}</Text>
    </Pressable>
    </View>
    )
}