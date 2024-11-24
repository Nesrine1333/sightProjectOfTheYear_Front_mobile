// screens/DoctorAppointment.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const DoctorAppointment = () => {
  // Function to generate marked dates for each month
  const generateMarkedDates = () => {
    const marked = {};
    const currentYear = new Date().getFullYear();
    
    // Loop through 12 months
    for (let month = 0; month < 12; month++) {
      const monthString = `${currentYear}-${String(month + 1).padStart(2, '0')}-15`;
      marked[monthString] = { marked: true, dotColor: 'blue' };
    }
    return marked;
  };

  const markedDates = generateMarkedDates();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor Appointment Screen</Text>
      <Calendar
        current={`${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-01`}
        monthFormat={'yyyy MM'}
        hideExtraDays={true}
        style={styles.calendar}
        markedDates={markedDates}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9C4',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  calendar: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default DoctorAppointment;
