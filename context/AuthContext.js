import React, { createContext } from 'react';
import { BASE_URL } from '../config';
import axios from 'axios';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
   
    const login = (email, password,navigation) => {
      navigation.push('Main');

        // axios.post(`${BASE_URL}api/patients/authenticate`, { email, password })
        //   .then(res => {
        //     const userInfo = res.data;
        //     console.log(`loginInfo ${userInfo.email}`);
      
        //     if (res.status === 200) {
        //       // Save user information to context or storage if needed
        //       navigation.push('Main');
        //     } else {
        //       Alert.alert('Login Failed', res.data.error || 'Invalid credentials');
        //     }
        //   })
        //   .catch(error => {
        //     console.log(`error ${error}`);
        //     Alert.alert('Login Failed', 'An error occurred. Please try again.');
        //   });
      };
      


console.log(`loginInfo ${BASE_URL}api/patients/authenticate`);




    const signup =( name,birthDate, email,phoneNumber,responsiblePhoneNumbe,password,sexe,bloodType)=>{ axios.post(`${BASE_URL}api/patients`,{
        name, email,birthDate,phoneNumber,responsiblePhoneNumbe,password,sexe,bloodType
     }).then(res=>{
         let userSignUp = res.data;
     console.log(`loginInfo ${ userSignUp }`);
     
     
     }).catch(e=>{
         console.log(`error ${e}`);
         
     })
     
console.log(`loginInfo ${BASE_URL}api/patients`);
     
     
     
     
         };



    return (    <AuthContext.Provider value={{login,signup}}>{children}</AuthContext.Provider>
    ) ;
}