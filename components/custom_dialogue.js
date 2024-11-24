import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  Modal,

  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { green, greenText } from '../constants/constants';
const CustomDialog = ({ visible, onClose, onSubmit, choices }) => {
  const [selectedChoice, setSelectedChoice] = useState('dd');
  const [selectedValue, setSelectedValue] = useState('key');

  const handleChoicePress = (choice) => {
    setSelectedChoice(choice);
  };

  const renderChoices = () => (
    <View style={{gap:RFValue(25),justifyContent:'space-between',alignContent:'space-between'}}>
      <Text style={styles.text}>Tell us What you are feeling today</Text>
      {/* Add your text component */}
   

    <View style={{borderColor:green,borderWidth:2,borderRadius:12}}>

      <Picker
      la
      selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        {choices.map((choice) => (
          <Picker.Item label={choice}   style={{color:'green' ,fontSize: 16}} key={choice}  value={choice} />
        ))}
      </Picker>
      </View>

      {/* FlatList for choices */}
     
<View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>

      {/* Add your buttons */}
      <TouchableOpacity onPress={() => onSubmit(selectedChoice)} style={styles.submitButton}>
        <Text style={{fontSize:17,color:'white'}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={{fontSize:17}}>Close</Text>
      </TouchableOpacity>
</View>
    </View>
  );

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {renderChoices()}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize:RFValue(22),
    fontWeight: 'bold',
    textTransform:"capitalize",
    marginTop: 10,
    marginBottom: 5,
  },
  picker: {
    color:'black',
    textTransform:'capitalize'
  
  },
  choicesContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  choiceButton: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: green ,
    borderRadius: 5,
    color:'black'
  },
  selectedChoice: {
    backgroundColor: 'lightblue',
  },
  submitButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: greenText,
    borderRadius: 12,
  },
  closeButton: {
    marginTop: 10,
  },
});

export default CustomDialog;
