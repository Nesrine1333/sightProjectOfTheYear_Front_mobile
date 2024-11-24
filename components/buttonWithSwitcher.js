import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { tintcolor } from '../constants/constants';




const ThemeSwitcher = ({text,Mode,fun}) => {
 

  return (
    <View style={styles.container}>
        <View style={styles.buttonContent}>

      <Text style={styles.label}>{text}</Text>
      <Switch
        value={Mode}
        onValueChange={fun}
        trackColor={{ false: '#D4D4D4', true: '#0711FF' }}
        thumbColor={Mode ? '#FFFFFF' : '#E4E4E4'}
        ios_backgroundColor="#3e3e3e"
        />
      {/* <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} size={20} color="black" style={styles.themeIcon} /> */}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:RFValue(300),
    borderWidth: 1,
    borderColor: tintcolor,
    borderRadius: 9,
    // marginVertical:RFValue(10),
    paddingVertical: RFValue(10),
    paddingHorizontal: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 17,
    marginRight: 10,
fontWeight:"700" 
},
  themeIcon: {
    marginLeft: 10,
  },
});

export default ThemeSwitcher;
