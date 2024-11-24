import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { green, grey } from '../constants/constants';

const SearchInput = () => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesomeIcon icon={faSearch} size={20} color="grey" style={styles.searchIcon} />
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#666" // Set the placeholder text color
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width:RFValue(270),
    marginHorizontal:RFValue(15),
    padding:RFValue(10),
    gap:10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: green,
    borderRadius: 12,
    marginBottom:RFValue(10)
    // paddingVertical: 5,
    // paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: grey, // Set the text color
  },
  searchIcon: {
    marginLeft: 10,
  },
});

export default SearchInput;
