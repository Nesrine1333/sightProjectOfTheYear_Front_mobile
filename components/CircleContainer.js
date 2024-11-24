import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { tintcolor } from '../constants/constants';


const GreyCircleContainer = ({ fun }) => {
  return (
      
      <View style={styles.container}>
      <View style={styles.circle}>
        <Pressable onPress={fun}>
       <FontAwesomeIcon icon={faCamera} size={RFValue(30)} color='black'
       ></FontAwesomeIcon>
    </Pressable>
      </View>
    </View>
  );
};
const size=RFValue(100)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:RFValue(40),
    // marginBottom:RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: size, // Adjust the size of the circle as needed
    height: size ,
    borderRadius: 100, // Half of the width and height to make it a circle
    backgroundColor: tintcolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode:'contain',
//  flex:1,
 width:400,
 
 height:100,
    // borderRadius: 50, // Half of the width and height to make it a circle
  },
});

export default GreyCircleContainer;