import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/register_page';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image } from 'react-native';
import { greenText } from './constants/constants';
import { SettingsPage } from './pages/Settings_page';
import HomeScreen from './pages/HomeScreenPage';
import { MedecineList } from './pages/medecine_page';
import DoctorAppointment from './pages/DoctorAppointment';
import HomePage from './pages/main_page';
import { SearchPage } from './pages/searchPage';
import { VirtualTherapist } from './pages/VirtualTherapist';
import MyGridComponent from './pages/main_page';
import LinearGradient from 'react-native-linear-gradient';
import { AuthProvider } from './context/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
        
        {/* Pass the TabNavigator as a component */}
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Medicine" component={MedecineList}  />
        <Stack.Screen name="VirtualTherapist" component={VirtualTherapist}  />

        <Stack.Screen name="DoctorAppointment" component={DoctorAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

// Separate component for the Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 22,
        },
        headerShown: false,
        tabBarActiveTintColor: greenText,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen } 
        options={{ tabBarIcon: HomeTabIcon }} 
      />
      <Tab.Screen 
        name="Overview" 
        component={MyGridComponent} 
        options={{ tabBarIcon: mEDSTabIcon }} 
      />
      <Tab.Screen 
        name="Search" 
        component={SearchPage} 
        options={{ tabBarIcon: appTabIcon }} 
      />
      <Tab.Screen 
        name="Profil" 
        component={SettingsPage} 
        options={{ tabBarIcon: ProfilTabIcon }} 
      />
    </Tab.Navigator>
  );
}

// Tab Icons
const HomeTabIcon = () => (
  <Image source={require("./assets/house.png")} style={{ width: 23, height: 23 }} />
);

const appTabIcon = () => (
  <FontAwesomeIcon icon={faSearch} size={20} color="grey" />
);

const ProfilTabIcon = () => (
  <Image source={require("./assets/compte.png")} style={{ width: 23, height: 23 }} />
);

const mEDSTabIcon = () => (
  <Image source={require("./assets/med.png")} style={{ width: 23, height: 23 }} />
);
