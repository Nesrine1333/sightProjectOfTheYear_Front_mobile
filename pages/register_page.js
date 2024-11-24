import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useContext, useEffect, useState } from 'react';

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { AccountCheck } from '../components/accountCheck';
import { Placeholder, PlaceholderWithIcon, PlaceholderWithSg } from '../components/placeholderSR';
import { greenText, grey } from '../constants/constants';
import {AuthContext} from '../context/AuthContext'

import sty from "../constants/styles";
const RegisterPage = ({navigation}) => {
  const [pin, setPin] = useState('');
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);



  const {signup}=useContext( AuthContext);

  const handleCheck = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      if (checked2) {
        setChecked2(false)
      }
      setChecked1(!checked1);


    } else if (checkboxNumber === 2) {
      if (checked1) {
      setChecked1(false)
      }
      setChecked2(!checked2);
    }
  };
  const [obscureText, setObscureText] = useState(true);
  const [name, setname] = useState('');
  const [birthDate, setbirthDate] = useState(new Date());
  const [email, setemail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [resphoneNumber, setresphoneNumber] = useState('');
  const [passwod, setpasswod] = useState('');
  const [sex, setsex] = useState('');
  const [bloodType, setbloodType] = useState('');


  // ... Repeat for other text fields
const ToLoginPress=()=>{
  navigation.push("Home");
}
  const toggleObscureText = () => {
    setObscureText(!obscureText);

    // Wait for 200ms and then toggle the obscureText back
    setTimeout(() => {
      setObscureText(!obscureText);
    }, 200);
  };
  const handleButtonPress = () => {
    // Handle button press logic here
    console.log('Button pressed');
  };

  return (
    <ScrollView contentContainerStyle={{ ...stylesRegister.container }}>

  <Text  style={sty.Texxt} >Create New Account </Text>
      <View style={stylesRegister.textFieldContainer}>
        <Placeholder name={name} text={"Username"} fun={(text) => setname(text)}></Placeholder>
        <Placeholder name={email} text={"Email"} fun={(text) => setemail(text) }></Placeholder>
        <Placeholder name={phoneNumber} text={"Phone N°1"} fun={(text) => setphoneNumber(text)}></Placeholder>
        <Placeholder name={resphoneNumber} text={"Responsable Phone Number"} fun={(text) => setresphoneNumber(text)}></Placeholder>
        <Placeholder  name={birthDate}  text={"Birthday"} fun={(text) =>setbirthDate(text)}></Placeholder>
       <PlaceholderWithIcon functionToggle={toggleObscureText}  fun={(text) => setpasswod(text)} pin={passwod} obscureText={obscureText}></PlaceholderWithIcon>
       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
        <Text style={{fontSize:20,fontWeight:700}}> Gender </Text>
      <CheckBox
        title="Male"
        checked={checked1}
        onPress={() => handleCheck(1)}
        iconType="font-awesome"
        checkedIcon={
          <FontAwesomeIcon icon={faCheckCircle} size={23} color={greenText}/>
        }
        uncheckedIcon={
          <FontAwesomeIcon icon={faCircle} size={24} color="#E3E3E3" secondaryColor="black" />

        }
      containerStyle={{backgroundColor:'transparent',borderColor:'transparent'}}

      />
      <CheckBox style={{backgroundColor:'blue'}}
        title="Female "
        checked={checked2}
        onPress={() => handleCheck(2)}
        iconType="font-awesome" // Specify the icon type
        checkedIcon={
          <FontAwesomeIcon icon={faCheckCircle} size={24} color={greenText}/>
        } // Circular icon when checked
        uncheckedIcon={
          <FontAwesomeIcon icon={faCircle} size={24} color="#E3E3E3" secondaryColor="black" />


       
        } 
      containerStyle={{backgroundColor:'transparent',borderColor:'transparent'}}
              />
      {/* Additional content or actions based on checkbox states */}
    </View>
        {/* <Placeholder name={birthDate} text={"Email"} fun={(text) => setbirthDate(text)}></Placeholder> */}
      

        {/* Repeat for other text fields */}
        <Placeholder name={bloodType} text={"Blood Type"} fun={(text) => setbloodType(text)}></Placeholder>
      </View>
      <TouchableOpacity style={stylesRegister.button} onPress={()=>{signup(name,birthDate,email,phoneNumber,resphoneNumber,passwod,'',bloodType)}}>
        <Text style={stylesRegister.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Row containing two text elements */}
    
      <AccountCheck text={"Already Have An Account? "} text2={"Sign In"} fun={ToLoginPress}></AccountCheck>
    </ScrollView>
  );
};

export const stylesRegister = StyleSheet.create({
  container: {
    margin:20,
    padding:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    borderRadius: 50,
backgroundColor:grey,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageText: {
    marginTop: 10,
    fontSize: 16,
  },
  textFieldContainer: {
    width: '100%',
    marginBottom: 20,
  },

  button: {
    backgroundColor: greenText,
    padding: 10,
    borderRadius: 16,
    border:2,
    marginBottom:10,
    
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    // paddingHorizontal:20,
    width:200,
    fontSize: 21,
    // fontWeight:700,
    // textTransform:"capitalize"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
 
});

export default RegisterPage;
