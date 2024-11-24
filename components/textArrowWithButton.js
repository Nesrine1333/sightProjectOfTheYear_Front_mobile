import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { tintcolor } from '../constants/constants';

const TextButtonWithArrow = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{text}</Text>
        <FontAwesomeIcon icon={faArrowRight} size={20} color="black" style={styles.arrowIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width:RFValue(300),
    borderWidth: 1,
    borderColor: tintcolor,
    borderRadius: 9,
    marginTop:RFValue(2),
    paddingVertical: RFValue(20),
    paddingHorizontal: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight:'700'
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default TextButtonWithArrow;
