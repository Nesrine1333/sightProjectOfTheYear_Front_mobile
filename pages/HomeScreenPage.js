import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions,Image,FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPills, faCalendarAlt, faComments, faSmile } from '@fortawesome/free-solid-svg-icons';
import { format, startOfWeek, addDays, eachDayOfInterval } from 'date-fns';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const checklist = [
  { id: '1', label: 'Medication 1', checked: true },
  { id: '2', label: 'Drink water', checked: false },
];


const HomeScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to manage selected date

  // Calculate the current week's dates starting from Monday
  const weekDays = eachDayOfInterval({
    start: startOfWeek(selectedDate, { weekStartsOn: 1 }), // Start on Monday
    end: addDays(startOfWeek(selectedDate, { weekStartsOn: 1 }), 6), // End on Sunday
  });

  // Handle day press event
  const handleDayPress = (day) => {
    setSelectedDate(day); // Update selected date
    navigation.navigate('DoctorAppointment', { selectedDate: day });
  };

  const [checklist, setChecklist] = useState([
    { id: '1', label: 'Medication 1', checked: true },
    { id: '2', label: 'Drink water', checked: false },
  ]);

  const handleStartChat = () => {
    navigation.navigate('VirtualTherapist');
  };

  const handleViewAppointments = () => {
    navigation.navigate('DoctorAppointment');
  };

  const handleAddMedication = () => {
    navigation.navigate('Medicine');
  };

  const handleMoodTracker = () => {
    navigation.navigate('MoodTracker');
  };
  const toggleChecked = (id) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const renderChecklistItem = ({ item }) => (
    <TouchableOpacity
      style={styles.checklistItem}
      onPress={() => toggleChecked(item.id)}
    >
      <View
        style={[
          styles.checkbox,
          { backgroundColor: item.checked ? '#2D8F95' : 'transparent' },
        ]}
      >
       
      </View>
      <Text style={styles.checklistText}>{item.label}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {/* One-Week Calendar */}
      <View style={styles.topBackground}>

      <ScrollView horizontal pagingEnabled contentContainerStyle={styles.calendarContainer}>
        {weekDays.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayContainer,
              selectedDate.toDateString() === day.toDateString() && styles.selectedDay,
            ]}
            onPress={() => handleDayPress(day)}
          >
            <Text style={styles.dayText}>{format(day, 'EEE')}</Text>
            <Text style={styles.dateText}>{format(day, 'd')}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.welcomeContainer}>
  <View style={styles.decorativeBackground} />
  
  <Text style={styles.welcomeText}>Welcome!</Text>
  <Text style={styles.feelingText}>How are you feeling today?</Text>
  

</View>
    </View>
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Decorative Top Element */}
  
        <View style={styles.divider}>
        {/* chat agent  */}

        
        <TouchableOpacity  onPress={handleStartChat}>
        <Image 
    source={require('../assets/chatai.png')} 
    style={styles.cardImage} 
  />

          </TouchableOpacity>
          <View style={styles.containerchat}>
        <View style={styles.factText} >
        <Text  >Hello !
               Did you know</Text>

               <Image 
    source={require('../assets/water.png')} 
    style={styles.cardImageicon} 
  />
        </View>

    <Text>Drinking plain water is associated with decreased risk of depression and anxiety in adults.</Text>
      
  <TouchableOpacity style={styles.moodButton}   onPress={handleStartChat}>
    <Text style={styles.moodButtonText}>Let’s talk!</Text>
  </TouchableOpacity>
  </View>
  <View>
    <Text style={styles.textlist}>Have you been taking care of yourself ?</Text>
    
  </View>
  <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>You're doing great!</Text>
        <TouchableOpacity    onPress={() => handleAddMedication()}>
          <MaterialIcons name="add-circle-outline" size={24} color="#2D8F95" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subHeaderText}>keep up the strike!</Text>

      <View style={styles.checklistContainer}>
          {checklist.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.checklistItem}
              onPress={() => toggleChecked(item.id)}
            >
              <View
                style={[
                  styles.checkbox,
                  { backgroundColor: item.checked ? '#2D8F95' : 'transparent' },
                ]}
              >
           
              </View>
              <Text style={styles.checklistText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </View>
          {/* Medication Reminder */}
          {/* <TouchableOpacity style={[styles.card, { backgroundColor: '#FFEBE8' }]} onPress={handleAddMedication}>
            <FontAwesomeIcon icon={faPills} size={40} color="#FF6F61" />
            <Text style={styles.cardTitle}>Medication</Text>
            <Text style={styles.cardText}>Next: {nextMedication.name}</Text>
            <Text style={styles.cardText}>Time: {nextMedication.time}</Text>
          </TouchableOpacity> */}
          <View style={styles.decorativeCircle} />
          {/* Doctor Appointment */}
          {/* <TouchableOpacity style={[styles.card, { backgroundColor: '#E8F5E9' }]} onPress={handleViewAppointments}>
            <FontAwesomeIcon icon={faCalendarAlt} size={40} color="#66BB6A" />
            <Text style={styles.cardTitle}>Doctor's Appointment</Text>
            <Text style={styles.cardText}>Doctor: {nextAppointment.doctor}</Text>
            <Text style={styles.cardText}>Time: {nextAppointment.time}</Text>
          </TouchableOpacity> */}
          <View style={styles.decorativeCircle} />
          {/* Virtual Therapist */}
          {/* <TouchableOpacity style={[styles.card, { backgroundColor: '#E3F2FD' }]} onPress={handleStartChat}>
            <FontAwesomeIcon icon={faComments} size={40} color="#42A5F5" />
            <Text style={styles.cardTitle}>Virtual Therapist</Text>
            <Text style={styles.cardText}>Chat with your virtual therapist</Text>
          </TouchableOpacity> */}
   
          {/* Mood Tracker */}
          {/* <TouchableOpacity style={[styles.card, { backgroundColor: '#FCE4EC' }]} onPress={handleMoodTracker}>
            <FontAwesomeIcon icon={faSmile} size={40} color="#EC407A" />
            <Text style={styles.cardTitle}>Mood Tracker</Text>
            <Text style={styles.cardText}>Log your mood today</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  
 textlist: {
  color: 'rgba(0, 0, 0, 0.75)', // Text color
  fontSize: 20, // Font size in pixels
  fontStyle: 'normal', // Font style
  fontWeight: '300', // Use string for font weight (e.g., '100', '200', '300', etc.)
  lineHeight: 24, // Numeric value (not percentage); adjust based on font size
  letterSpacing: 2, // Numeric value (no quotes)
  marginTop: 15, // Spacing from the top
}
,containerchat:{
  alignContent: 'center',
  alignItems: 'center',
  width: '90%',
  height: '40%', // Adjust the size for the curve effect
  backgroundColor: 'transparent', // Correct spelling for transparent
  borderRadius: 24,
  marginTop: -20,
  borderWidth: 1,
  borderColor: "#AEE0E3",
  justifyContent: 'center',
  padding:10,
  zIndex: -1, 
},
  divider: {
    alignContent:'center',
    alignItems:'center',
    width: '100%',
    height: '100%', // Adjust the size for the curve effect
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex:1
  // Overlap the top and bottom sections slightly
  },
  container: {
    flex: 1,
    // backgroundColor: '#F9F9F9',
    backgroundColor:'#fbb5998a'    ,
   

    
  },
  cardImage: {
    width: 90, 
    height: 90, 
    resizeMode: 'contain',
    marginTop:-40
  },
  calendarContainer: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
// height:'20%'
  },
  dayContainer: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
  },
  selectedDay: {
    backgroundColor: '#BFD8E4',
    alignItems: 'center', 
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 16,
    color: '#666',
  },
  scrollContainer: {
    paddingTop: 40,
flex:1,
    paddingBottom: 40,
    alignItems: 'center',
    position: 'relative',

  },
  // decorativeCircle: {
  //   position: 'absolute',
  //   top: -50,
  //   right: -50,
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  //   backgroundColor: '#FFF176',
  //   opacity: 0.1,
  // },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    // marginBottom: 30,
  },
  grid: {
    // width: '100%',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
 alignItems: 'center',
    justifyContent: 'center',
   
  },
  card: {
    width:width*0.9, // Adjusting width based on screen size and padding
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, // For Android shadow
    marginTop: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
    marginBottom: 16,
  },
  checklistContainer: {
    paddingVertical: 8,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    marginRight: 12,
  },
  checklistText: {
    fontSize: 16,
    color: '#333',
  },
  welcomeContainer: {
  width: '100%',
           // Add some vertical padding for height
        // Horizontal padding for spacing
  alignItems: 'center',         // Center the text and button horizontally
  justifyContent: 'center',     // Center content vertically
  position: 'relative',         // Relative position for the decorative background
  overflow: 'hidden',   
  backgroundColor:'#fbb59900'        // Hide anything going outside the container
}, decorativeBackground: {
     backgroundColor:'#f8875a92'
},

// decorativeBackground: {
//   position: 'absolute',
//   top: -30,                     // Move it upwards a bit for design
//   left: -30,                    // Shift to the left for asymmetry
//   width: 150,
//   height: 150,
//   borderRadius: 75,
//   backgroundColor: '#FFF176',   // Soft pastel color (can change for other styles)
//   opacity: 0.2,                 // Make it subtle by reducing opacity
//   zIndex: -1,                   // Ensure it stays behind the text and button
// },

welcomeText: {
  fontSize: 28,
  fontWeight: '700',
  color: '#333',
  marginBottom: 20,
},
factText: {
  fontSize: 18,
  fontWeight: '400',
  color: '#666',                // Softer color for subtext
  marginBottom: 30,
  marginTop:-20,
  justifyContent:'space-between',
  alignContent:'center',
  alignItems: 'center',
  width:"100%",
  flexDirection: 'row',
},


feelingText: {
  fontSize: 18,
  fontWeight: '400',
  color: '#666',                // Softer color for subtext
  marginBottom: 10,

},

moodButton: {
  backgroundColor: '#5295BA9E',   // Soft pastel orange
  paddingVertical: 12,          // Vertical padding for button height
  paddingHorizontal: 20,        // Horizontal padding for width
  borderRadius: 10,             // Rounded button
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  marginTop:20,
  width:'50%',
  alignContent:'center',

  // elevation: 2,                 // Slight shadow for depth
},

moodButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
    alignSelf:'center',
  textAlign:'center'
},

});

export default HomeScreen;
