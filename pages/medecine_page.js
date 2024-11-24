import React, { useState } from "react";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import { green, greenText, mainGreen } from "../constants/constants";
import sty from "../constants/styles";


const medicationData = {
  userId: "12345",
  medications: [
    {
      id: "med1",
      name: "Sertraline",
      dosage: "50 mg",
      frequency: "Once daily",
      doctor: "Doctor A",
      numberPills: 1,
    },
    {
      id: "med2",
      name: "Citalopram",
      dosage: "20 mg",
      frequency: "Once daily",
      doctor: "Doctor B",
      numberPills: 2,
    },
    {
      id: "med3",
      name: "Bupropion",
      dosage: "150 mg",
      frequency: "Twice daily",
      doctor: "Doctor C",
      numberPills: 3,
    },
  ],
};

export const MedecineList = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(medicationData.medications.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = checkedState.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={[sty.container]}>
        <View style={{ flexDirection: "column", paddingBottom: RFValue(20) }}>
          <Text style={[styles.Texxt, styles.weightBig, styles.sizeBig]}>
            Today’s Medicine List
          </Text>
          <Text style={{ color: mainGreen, fontSize: 13, fontWeight: 500 }}>
            Given by your doctors
          </Text>
        </View>

        {medicationData.medications.map((medication, index) => (
          <ContainerCheckBox
            key={medication.id}
            fun={() => handleCheckboxChange(index)}
            checked={checkedState[index]}
            color={green}
            doctor={medication.doctor}
            medecine={medication.name}
            number_pills={medication.numberPills}
          />
        ))}
      </View>
    </ScrollView>
  );
};


export const styles = StyleSheet.create({
  buttonText: {    
    textAlign: 'center',
    fontWeight: '600',              // Softer weight
    fontSize: RFValue(15),          // Kept as it is for readability
    color: '#4C5C68',               // Calm, muted text color
  },
  
  weightBig: {
    fontWeight: '600',              // Softer, not too bold
  },

  weightSmall: {
    fontWeight: '300',              // Lighter font weight for small text
  },

  sizeSmall: {
    fontSize: 18,
    color: '#809BB2',               // Soft pastel blue for smaller text
  },

  sizeBig: {
    fontSize: 28,
    color: '#6D6875',               // Muted lavender for headings
  },

  sizeMed: {
    fontSize: 21,
    color: '#6D6875',               // Keep the same lavender tone
  },

  buttonOutlined: {
    height: RFValue(40),
    backgroundColor: 'transparent',
    borderColor: '#B4C9C7',         // Light pastel green for border
    borderWidth: 2,
    borderRadius: 10,               // Rounded corners
  },

  button: {
    width: RFValue(100),            // Made the button slightly wider
    height: RFValue(40),
    backgroundColor: '#F3D1DC',     // Soft pastel pink for the button
    borderRadius: 10,               // Rounded for a softer look
    justifyContent: 'center',       // Center the text
    alignItems: 'center',
  },

  generalButton: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#D3E4CD',         // Light pastel green border
    marginBottom: 10,
    backgroundColor: '#F6E5F5',     // Soft lavender background
  },

  Texxt: {
    color: "#003128",               // Keep the darker green text
    textTransform: 'capitalize',
  },

  containerInLine: {
    height: RFValue(83),
    width: RFValue(311),
    justifyContent: 'center',       // Centering content for a balanced layout
    alignItems: 'center',
  },

  Dim: {
    paddingHorizontal: 13,
    paddingLeft: 11,
    backgroundColor: '#FFFFFF',     // Clean white background
    marginHorizontal: RFValue(20),
    marginVertical: 4,
    borderRadius: 12,               // Softer rounded edges
    borderWidth: 1,
    borderColor: '#B4C9C7',         // Light pastel border for elegance
  },

  generalContainer: {
    borderRadius: 15,
    borderColor: "#6D6875",         // Muted lavender border
    borderWidth: 2,
    elevation: 2,                   // Lighter elevation for a calmer shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,             // Softer shadow for a subtle effect
    shadowRadius: 3,
  },

  customCheckedIcon: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#F3D1DC',         // Pastel pink border for checked icon
  },

  TextBox: {
    color: '#A3D9B1',               // Pastel green text color for a fresh look
    textTransform: 'capitalize',
    fontSize: 17,
    fontWeight: "600",              // Soft weight to match the calm vibe
  },

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',     // Light, clean background color
  },
});


    const ContainerCheckBox=({fun,checked,color,medecine,doctor,number_pills})=>{
        return ( 
        < View style={[styles.generalContainer,styles.Dim,styles.containerInLine]}>
        <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center",gap:10,alignSelf:'flex-start',marginVertical:RFValue(15)}}>
      
        <CheckBox
           
              checked={checked}
              onPress={fun}
              iconType="font-awesome"
              checkedIcon={
                  <FontAwesomeIcon icon={faCheckSquare} size={20} style={{color: color}} />
              }
              uncheckedIcon={
                  <View style={[styles.customCheckedIcon,{borderColor:color}]}></View>
              
              }
            />
      <View style={{flexDirection:'column'}}>
          <Text style={styles.TextBox}>{medecine}</Text>
          <Text style={[styles.Texxt,{fontSize:11}]}>Given by Doctor {doctor}</Text>
      </View>
          <Text style={[styles.Texxt,styles.sizeBig,styles.weightBig,{alignSelf:'center',marginHorizontal:RFValue(20)}]}>{number_pills} Pills</Text>
      
        </View>
        </View>
                  )
    }