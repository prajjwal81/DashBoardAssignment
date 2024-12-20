import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch, useSelector} from 'react-redux';
import {setLocation} from '../Redux/features/Globalslice';

const Home = () => {
  const [loginAttempts, setLoginAttempts] = useState([]);

  const dispatch = useDispatch();
  const location = useSelector(state => state.global.location);
  console.log('🚀 ~ Home ~ location:', location);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        const dateTime = new Date().toLocaleString();
        const location = `Lat: ${latitude}, Long: ${longitude}`;

        console.log('Latitude:', latitude, 'Longitude:', longitude);
        console.log('DateTime:', dateTime);
        console.log('Location:', location);

        if (latitude && longitude && dateTime) {
          dispatch(setLocation({location, dateTime}));
        } else {
          console.error('Error: Location or DateTime is missing');
        }
      },
      error => console.log('Error getting location:', error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const renderItem = ({item}) => {
    console.log('🚀 ~ renderItem ~ item:', item);
    return (
      <View style={styles.listItem}>
        <Text style={styles.itemText}>Login at: {item.dateTime}</Text>
        <Text style={styles.itemText}>Location: {item.location}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={location}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    padding: 20,
  },
  list: {
    width: '100%',
    marginTop: 20,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: '#555',
  },
});

export default Home;
