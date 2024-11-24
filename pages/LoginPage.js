import React, { useContext, useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
// import { Icon } from 'react-native-vector-icons/FontAwesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { AccountCheck } from '../components/accountCheck';
import { buttonGreen, greenText, ieee, logoImage } from '../constants/constants';
import sty, { styles } from '../constants/styles';
import axios from 'axios';
import { Alert } from 'react-native';
import {AuthContext} from '../context/AuthContext'


library.add(faEye, faEyeSlash);

// const image = require('../assets/ieee.png');
library.add(faEye, faEyeSlash);
export default function LoginPage({ navigation }) {
  const [obscureText, setObscureText] = useState(true);
  const [qrScanned, setQrScanned] = useState(false);
  const [pin, setPin] = useState('');


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');



  const toggleObscureText = () => {
    setObscureText(!obscureText);

    // Wait for 200ms and then toggle the obscureText back
    setTimeout(() => {
      setObscureText(!obscureText);
    }, 200);
  };

  const handleScanPress = () => {
    if (!qrScanned) {
      // Implement navigation to QR scanning screen
      navigation.push('Scanner');
    }
    else {
    }
  };

const ToRegisterPress = () => {
    navigation.push("Register");
    // Implement login logic
  };

  const {login}=useContext( AuthContext);

  const handleLoginPress = async () => {   navigation.push('Main');
    console.log('auth');
    
    try {
      const response = await fetch('http://192.168.1.39:4000/api/patients/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  console.log(response.status);
  
      if (response.status === 200) {
     
      } else {
        Alert.alert('Login Failed', data.error || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Network error:', error);
      Alert.alert('Network Error', 'An error occurred while making the network request.');
    }
  };
  
  useEffect(() => {

    return () => {
  
    };
  }, []); 

  return (
<ScrollView   contentContainerStyle={{ flexGrow: 1 }} 
  style={{ flex: 1 }} >
<ImageBackground source={require('../assets/background.png')}  style={{ flex: 1, width: '100%' }} // Ensure it covers the whole screen
    resizeMode="cover">
<View style={styles.centeredContainer}>
      <View>
        <Image source={ieee} style={styles.image} />
   
        <Image source={logoImage} style={styles.logo} />
        <Text style={styles.loginText} >Welcome Back !</Text>

      </View>
<View   >
      <View style={styles.inputcontainer}>
        {/* <Text style={styles.pinText}>Your Email</Text> */}
        <TextInput
      
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder='Enter your email'
          placeholderTextColor={'grey'}
        />
      </View>


      {/* <Text style={styles.pinText}>Your Password</Text> */}
        <View  style={styles.inputcontainer} >
        <TextInput
      
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={obscureText}
          placeholder='Enter your password'
          placeholderTextColor={'grey'}
        />
             <TouchableOpacity onPress={toggleObscureText}>
          <FontAwesomeIcon
            icon={obscureText ? faEye : faEyeSlash}
            size={30}
            color="#000"
            // style={{position:'absolute',right:12}}
          />
        </TouchableOpacity>
        

       
      </View>
      <Text style={styles.loginText} >Forgot Password</Text>
</View>
      <TouchableOpacity style={[sty.buttonLogin, sty.dimension]} onPress={() =>{login(email,password,navigation)}}>
        <Text style={styles.loginButtonText} >Login</Text>
      </TouchableOpacity>

      {/* <Text style={sty.underText}>Need Help?</Text> */}
      </View>
      <AccountCheck text={"Don't Have An Account?"} text2={"Sign Up"} fun={ToRegisterPress} />
</ImageBackground>
    </ScrollView>
  );
}
