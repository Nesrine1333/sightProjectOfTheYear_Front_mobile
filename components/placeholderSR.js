
import { faCalendarDays, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { greenText } from "../constants/constants"
export const PlaceholderWithIcon=({pin,fun,obscureText,input1,functionToggle})=>{
return(
    <View style={[styles.container,styles.textField]}>
        {/* <Image source={require('../assets/security.png')} style={{ resizeMode: 'contain', maxHeight: 20, width: 40, marginRight: 10 }} /> */}
       
        <TextInput  onChangeText={fun} value={pin} keyboardType="numeric" secureTextEntry={obscureText}
          // Set the text alignment to left
         
          //  selection={{ start: 0, end: 0 }}
          placeholder='Enter your Card PIN'
          placeholderTextColor={'black'} />
        {/* add an image and icon hide */}
        {/* i want a button contain an icon  */}
        <TouchableOpacity style={{  padding: 22 }} onPress={functionToggle}>
        <FontAwesomeIcon
        icon={obscureText ? faEye : faEyeSlash}
        size={25}
        color="#000"
        />

        </TouchableOpacity>
      </View>
)

}
  export       const Placeholder=({input1,text,fun})=>{
            return(<TextInput
          style={styles.textField}
          placeholder={text}
          
          value={input1}
          placeholderTextColor={'black'}
          
          onChangeText={fun}
        />)
        }

        export       const PlaceholderWithSg=({input1,text,fun,image,functionDate})=>{
            return( <View style={[styles.container,styles.textField]}>
            <TextInput
            //   style={styles.textField}
              placeholder={text}
              value={input1}
              placeholderTextColor={'black'}
              onChangeText={fun}
            />
            <Pressable style={{marginRight:RFValue(18)}} onPress={functionDate}> 

      <FontAwesomeIcon icon={faCalendarDays} size={30}></FontAwesomeIcon>
        </Pressable>
          </View>
        );
        }
        const styles=StyleSheet.create({
         container:   {
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: "white"},
            textField: {
               
                borderRadius:16,
                height: 55,
              
                backgroundColor:'#fff',
                borderColor: greenText,
                borderWidth: 2,
                // width:300,
                marginBottom: 10,
                paddingLeft: RFValue(20),
              },
        })
