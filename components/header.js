import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import { faIcon } from 'your-icon-library'; // Replace with the appropriate icon
import { RFValue } from 'react-native-responsive-fontsize';
import { tintcolor } from '../constants/constants';

const IconTextWithBorder = ({ image, text,style }) => {
  return (
    <View style={[styles.container,styles.bottomBorder]}>
      <View style={styles.iconContainer}>
       <Image source={image} style={style}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop:RFValue(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: RFValue(17),
    // fontWeight:500,
    color: 'black', // Customize text color
  },
  bottomBorder: {
    paddingVertical:RFValue(5),
    borderBottomWidth: 1,
    borderBottomColor: tintcolor, // Customize border color
  },
});

export default IconTextWithBorder;
