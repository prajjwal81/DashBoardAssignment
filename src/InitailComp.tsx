import {
  SafeAreaView,
  StyleSheet,
  Text,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import MainStack from './Navigation/Mainstack';
import Login from './screens/login';
import Geolocation from 'react-native-geolocation-service';

const InitailComp = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [location, setLocation] = useState({latitude: null, longitude: null});

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
      return true;
    }
    return true;
  };

  const getLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;
    console.log('--->', hasPermission);

    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
        // dispatch(setLocation({latitude, longitude}));
      },
      error => console.error('Error getting location:', error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  let validOrNot = 0;
  if (state.global.loggedIn && Object.keys(state.global.loggedIn).length) {
    validOrNot = 1;
  }
  console.log(state?.global?.loggedIn, validOrNot);
  return validOrNot !== 1 ? <Login /> : <MainStack />;
};

export default InitailComp;
