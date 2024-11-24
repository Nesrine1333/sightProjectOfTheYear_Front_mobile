import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import SearchInput from "../components/searchContainer"
import { greenText } from "../constants/constants"
import { styles } from "./medecine_page"
// import { text } from "@fortawesome/fontawesome-svg-core"

export const  SearchPage=()=>{
    return (
        <ScrollView Style={{flex:1}}>
            
            <View style={{flexDirection:'column',gap:10,paddingBottom:RFValue(20),alignItems:"center",marginVertical:RFValue(50)}}>
<SearchInput></SearchInput>
<Text style={[styles.sizeMed,styles.weightBig,styles.Texxt,{alignSelf:'center',marginBottom:RFValue(10)}]}>Let’s add a new Doctor</Text>
<DoctorProfil doctorName={"Wiem"} speciality={"Dentist"} ></DoctorProfil>
<DoctorProfil doctorName={"Wiem"} speciality={"Dentist"} ></DoctorProfil>
<DoctorProfil doctorName={"Wiem"} speciality={"Dentist"} ></DoctorProfil>
<DoctorProfil doctorName={"Wiem"} speciality={"Dentist"} ></DoctorProfil>

</View>
            </ScrollView>

    )
}
const DoctorProfil=({doctorName,speciality,addFun,SeeFun,moreFun})=>{
    return (
        < View style={[styles.generalContainer,styles.Dim,{width:RFValue(270),height:RFValue(150)}]}>
<View style={{flexDirection:'column',justifyContent:"center",alignItems:"center",gap:6,alignSelf:'center',marginVertical:RFValue(20)}}>
<View style= {{flexDirection:'column',marginVertical:
10}}>
<Text style={[styles.TextBox,{fontSize:20}]}>DR {doctorName}</Text>

    <Text style={[styles.sizeSmall,styles.weightSmall,styles.Texxt]}> {speciality}
</Text> 

</View>
<View style={{flexDirection:'row',gap:RFValue(20)}}>
    
<TouchableOpacity style={[styles.button,styles.generalButton]} onPress={addFun}>
        <Text style={[styles.buttonText,{color:'white'}]}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonOutlined,styles.generalButton]} onPress={SeeFun}>
        <Text style={[styles.buttonText,{color:greenText}]}>See More</Text>
      </TouchableOpacity >
      <TouchableOpacity style={[styles.buttonOutlined,styles.generalButton]}  onPress={moreFun}>
        <Image source={require('../assets/points.png')} style={{height:20}}></Image>
     
      </TouchableOpacity>
</View>

</View>
</View>
    )
}