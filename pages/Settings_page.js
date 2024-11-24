import { Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"

import { useState } from "react"
import { RFValue } from "react-native-responsive-fontsize"
import ThemeSwitcher from "../components/buttonWithSwitcher"
import IconTextWithBorder from "../components/header"
import TextButtonWithArrow from "../components/textArrowWithButton"
import { greenText } from "../constants/constants"
import { styles } from "./medecine_page"

export const  SettingsPage=()=>{
    const [isDarkMode, setDarkMode] = useState(false);
    const [isNotifMode, setNotifMode] = useState(true);

    const toggleDarkMode = () => {
      setDarkMode(!isDarkMode);
      // Implement your theme-switching logic here
    };const toggleNotiMode = () => {
      setNotifMode(!isNotifMode);
      // Implement your theme-switching logic here
    };
    return(
        <ScrollView style={{flex:1}}>
            <SafeAreaView>


            <View style={{flexDirection:'column',gap:14,paddingBottom:RFValue(10),alignItems:"center",marginVertical:RFValue(50),marginHorizontal:RFValue(20)}}>
                <Pressable style={{alignSelf:"flex-start"}}>
                <Image source={require("../assets/left_arrow.png")} style={{}}></Image>
                </Pressable>
                <Text style={{fontSize:RFValue(30),fontWeight:'800',marginBottom:RFValue(10)}}>Settings</Text>

                <IconTextWithBorder image={require('../assets/acc.png')} text={"Account"}></IconTextWithBorder>
                <TextButtonWithArrow text={"Edit Profil"}></TextButtonWithArrow>
                <IconTextWithBorder image={require('../assets/not.png')} text={"Account"}></IconTextWithBorder>
                <ThemeSwitcher text={"Show Notification"} fun={toggleNotiMode} Mode={isNotifMode} ></ThemeSwitcher>
                <IconTextWithBorder image={require('../assets/more.png')} style={{height:20,width:30}} text={"Account"}></IconTextWithBorder>
                <View style={{flexDirection:"column",gap:16}}>
                    
                <TextButtonWithArrow text={"Change Language"}></TextButtonWithArrow>
                <ThemeSwitcher text={"Change Theme"} Mode={isDarkMode} fun={toggleDarkMode}></ThemeSwitcher>
                </View>
                <TouchableOpacity style={[{width:RFValue(100),height:RFValue(40), backgroundColor: greenText,},styles.generalButton]} onPress={()=>{}}>
        <Text style={[styles.buttonText,{color:'white'}]}>Logout</Text>
      </TouchableOpacity>
                </View>

            </SafeAreaView>
        </ScrollView>
    )
}