import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { green, mainGreen, sleep, strezs } from '../constants/constants';
import { faFireFlameCurved, faHeartbeat, faHeartCirclePlus, faHeartCircleBol, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import CustomDialog from '../components/custom_dialogue';
import sty from '../constants/styles';

const MyGridComponent = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <ScrollView style={styles.scrollContainer}>
      <SafeAreaView>
        <View style={sty.container}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Ypu need to take care of your body ! </Text>

          </View>

          <View style={styles.imageLine}>
            <View style={styles.healthCard}>
              <Image
                source={require('../assets/Mask_group.png')}
                style={styles.healthIcon}
              />
              <View style={styles.healthTextContainer}>
                <Text style={styles.healthTitle}>Health Practices</Text>
                <Text style={styles.healthDescription}>
                  Discover Latest Practices to stay healthy
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.reminderText}>
            <Text style={styles.reminderTitle}>Don’t Forget To Check</Text>
          </View>
          <View style={[styles.lineSpacing]}>

            <View style={[styles.container]}>
              <View style={[styles.infoContainer]}>
                <HeartBeat />
                <Calories />

                {/* <CustomDialog visible={visible} onSubmit={() => {}} choices={['Head Ache', 'Aches']} onClose={() => { setVisible(false); }} /> */}


                <SPO2 />
                <Pressure />
              </View>
              <View>
                <CustomLineItem styles={[ styles.tracking]} image={sleep} text={"Sleep Tracking"} onPress={() => { }} />
                <CustomLineItem styles={[ styles.tracking]} image={strezs} text={"SPO2 Measure"} onPress={() => { }} />
              </View>
            </View>
          </View>

          {/* <ButtonPressable color={"#003128"} Press={() => { setVisible(true); }} text={"Write a discomfort"} image={require("../assets/innn.png")} />
          <ButtonPressable Press={() => { }} color={green} text={"Call Responsible"} image={require('../assets/call.png')} /> */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  infoContainer: { flexDirection: 'row' ,flexWrap:'wrap'},
  container: {
    flexDirection: 'column'
  },
  scrollContainer: {
    backgroundColor: '#F9F9F9',
    padding: RFValue(10),
  },
  greetingContainer: {
    flexDirection: 'row',
    marginVertical: RFValue(5),
    alignSelf: 'center',
  },
  greetingText: {
    color: '#7C7C7C', // Pastel Gray
    fontSize: RFValue(23),
    textAlign: 'center',
  },
  boldText: {
    fontWeight: '200',
  },
  imageLine: {
    marginBottom: RFValue(10),
  },
  healthCard: {
    backgroundColor: '#A8D5BA', // Pastel Green
    borderRadius: 15,
    borderColor: "#A3B6C3", // Light Pastel Blue-Gray
    borderWidth: 3,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: RFValue(10),
    marginHorizontal: RFValue(10),
    marginTop: 20
  },
  healthIcon: {
    resizeMode: 'contain',
    height: 35,
    width: 100,
    marginVertical: 10,
    marginRight: 15,

  },
  healthTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  healthTitle: {
    color: '#FFFFFF', // White to contrast with pastel background
    fontWeight: '800',
    fontSize: RFValue(23),
  },
  healthDescription: {
    color: '#FFFFFF', // White for readability
    fontWeight: '300',
    width: 190,
    textAlign: 'left',
    fontSize: RFValue(14),
  },
  reminderText: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  reminderTitle: {
    color: '#B4CFFA', // Pastel Blue
    fontSize: RFValue(26),
    fontWeight: '900',
    textAlign: 'center',
  },
line: {
  flexDirection: 'column',
  backgroundColor: '#f5e8da',  // Light pastel pink
  borderRadius: 20,
  width: '80%',
  height: 100,
  borderColor:'#FFCCCC',
  alignSelf: 'center',
  alignItems: 'center',
  margin: 10,

  // Optional: Add a slight shadow for depth without making it overwhelming
  shadowColor: '#000',  
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,  // Very light shadow for a soft feel
  shadowRadius: 3,
  elevation: 2,        // Light elevation for Android
},
  columnContainer: {
    flexDirection: 'column',
  },
  lineSpacing: {
    flexDirection: 'column',  // Items will be laid out in a row
    flexWrap: 'wrap',      // Allows items to wrap onto the next line
    justifyContent: 'flex-start',  // Centers items horizontally
    alignItems: 'flex-start',      // Centers items vertically
    width: '100%',
    margin: 5,
    gap:5

  },
  containerSmall: {
   width:'90%',
   alignSelf:'center'
  },
  general: {
   width:'50%',
  //  backgroundColor:'aqua',
   
   height:'50%'
    //organe

  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
tracking: {
  width: '95%',              // Slightly reduced width to add some space around the card
  margin: 10,                // Increase margin for breathing space between cards
  padding: 15,               // Increased padding for a more comfortable look
  
  borderRadius: 20,          // Keep the rounded corners
  borderWidth: 1,
  borderColor: '#FFAB91',    // Softer pastel orange border for a unique touch

  backgroundColor: '#FFF3E0', // Light pastel orange background to complement the border
  
  // Subtle shadow for a soft card-like elevation
  shadowColor: '#000',        
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,         // Light shadow opacity for a softer look
  shadowRadius: 4,
  elevation: 3,               // Low elevation for slight depth without harshness

  // Alignments
  alignItems: 'center',
  justifyContent: 'center',   // Center content vertically as well

  // Unique addition: Add a slight curve to simulate 3D feel
  transform: [{ scale: 0.98 }], // Slight scale to make the card look like it's pressing down slightly

  // Optional: Add a gradient or subtle texture if needed
}
 }
);

export default MyGridComponent;

const ButtonPressable = ({ image, Press, color, text }) => {
  return (
    <View style={[styles.imageLine, styles.general, { marginBottom: RFValue(15) }]}>
      <TouchableOpacity onPress={Press} activeOpacity={0.8} style={[styles.healthCard, { backgroundColor: color }]}>
        <Image source={image} style={styles.healthIcon} />
        <Text style={[styles.healthTitle, { color: 'white' }]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Calories = () => {
  return (
    <TouchableOpacity style={[styles.containerSmall, styles.general]} onPress={() => { }}>
      <View style={styles.healthTextContainer}>
        <View style={styles.line}>
          <Text>Calories</Text>

          <FontAwesomeIcon icon={faFireFlameCurved} color={mainGreen} size={40} style={styles.image} />

          <Text>2.2K cal</Text>

        </View>
      </View>
    </TouchableOpacity>
  );
};

const HeartBeat = () => {
  return (
    <TouchableOpacity style={[styles.containerSmall, styles.general]} onPress={() => { }}>
      <View style={styles.line}>
        <Text >Heart Rate </Text>
        <FontAwesomeIcon icon={faHeartbeat} color={mainGreen} size={40} style={styles.image} />
        <Text >80 bpm </Text>
      </View>





    </TouchableOpacity>
  );
};

const CustomLineItem = ({ styles, image, text, onPress }) => {
  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      <View style={styles.line}>
        <Image source={image} style={styles.image} />
        <Text >{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Pressure = () => {
  return (
    <TouchableOpacity style={[styles.containerSmall, styles.general]} onPress={() => { }}>
      <View style={styles.line}>
        <Text >Pressure</Text>
        <FontAwesomeIcon icon={faHeartCirclePlus} color={mainGreen} size={40} style={styles.image} />
        <Text >120 mmHg </Text>
      </View>
    </TouchableOpacity>
  );
};

const SPO2 = () => {
  return (
    <TouchableOpacity style={[styles.containerSmall, styles.general]} onPress={() => { }}>
      <View style={styles.line}>
        <Text >SPO2</Text>
        <Image source={require('../assets/oooo.png')} />
        <Text >98 % </Text>
      </View>
    </TouchableOpacity>
  );
};
