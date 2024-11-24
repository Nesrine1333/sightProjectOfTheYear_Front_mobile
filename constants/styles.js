import { buttonGreen, greenText, tintcolor,buttonText } from './constants';

// Adjust the styles based on your design
// import * as React from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = {
  centeredContainer: {
    flex: 1, // Fills the available space
    justifyContent: 'center', // Centers elements vertically
    alignItems: 'center', // Centers elements horizontally
  },
 containerinput:{
    flexDirection:"row",

    alignItems:"center",
    justifyContent:"center",
    marginBotton:20,
    position:"relative"
  },
  container: {
flex:1,
alignItems:"center",
justifyContent:"center",
 alignContent: 'center',
 alignSelf:'center',
 height:'100%',
 width:'100%'
// paddingHorisental:30

  },inputcontair:{
flex:1
  },
  
  image: {
    alignSelf:'center',
    width:100,
    height: 100,
    marginTop: 0,
    resizeMode: 'contain',
    tintColor: tintcolor,
  },
  logo: {
    height:140,
    width:140,
    padding:20,
    alignSelf: 'center',
    // resizeMode: 'contain',
  },
  button: {
    height: 10,
    backgroundColor: buttonGreen,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  
  },
  buttonText: {
    fontSize: RFValue(10),
    color: greenText,
  },
  pinText: {
    fontSize: 20,
    fontWeight: 'bold',

    color: greenText,
  
  },
  input: {
    fontSize: RFValue(20),
    // height: '100%',
   
     alignItems:'center',
    // alignSelf:'center',
    // borderColor: greenText,
    // padding:10,
    fontFamily:"Poppins-ExtraBold",
    // width:"100%"
// backgroundColor:'red',
  
  
  },
  loginText: {
    fontSize: 20,
    color:greenText,
    fontWeight: 'bold',
    alignItems:"center",
    alignSelf:"center",
    padding:20
    // fontFamily:"Poppins-Bold",r
  },
  loginButtonText: {
    fontSize: 20,
    color: buttonText,
    fontWeight: 'bold',
    // fontFamily:"Poppins-Bold",r
  },
  inputcontainer:{
    flexDirection:"row",
    padding:20,
   width:325,
margin:10,
borderRadius:50,
    alignItems:"center",
    justifyContent:"space-between",
  alignContent:'center',
    position:"relative",
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
    borderColor:'#d9eaef00'
    
    
  }
};
const sty = StyleSheet.create({
  dimension: {
    height:62,
    width:325,
    padding:10,
    marginVertical:15,
    elevation: 5,
    borderRadius:25,
  },

  buttonLogin: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    
    backgroundColor: buttonGreen,
  },
size:{fontSize:15},
  underText: {
    marginTop: RFValue(70),
  
    alignSelf: 'center',
    color: greenText,
    fontSize: RFValue(10),
    fontWeight: 'bold',
  },
  Texxt: {
    textAlign:"center",
    fontWeight:500,
    fontSize: 10,
    // lineHeight:'normal',r
    color:"#003128",
    marginBottom:RFValue(0)
  },
  text: (fontS) => ({
    color: greenText,
    fontWeight: 'bold',
    fontSize: RFValue(fontS),
  }),

  textSuccess: (fontS) => ({
    color: greenText,
    fontWeight: 'bold',
    fontSize: RFValue(fontS),
  }),


});
export default sty;