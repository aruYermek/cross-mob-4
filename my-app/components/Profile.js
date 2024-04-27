import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import axios from "axios";

const ProfileScreen = ({ navigation }) => {

  const [userData, setUserData] = useState({ name: '', email: '' });

  async function getData() {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    axios
      .post('http://192.168.0.15:5001/userdata', { token: token })
      .then(res => {
        console.log(res.data);
        setUserData(res.data.data);
      });

  }
  useEffect(() => {
    getData();
  }, []);
  const HomePage = () => {
    navigation.navigate('HomePage')
  }
  const menuItems = [
    { icon: 'cube-outline', title: 'My orders' },
    { icon: 'location-outline', title: 'My addresses' },
    { icon: 'notifications-outline', title: 'Notification' },
    { icon: 'information-circle-outline', title: 'About us' },
    { icon: 'help-circle-outline', title: 'About app' },
  ];

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem}>
      <Ionicons name={item.icon} size={24} style={styles.menuIcon} />
      <Text style={styles.menuText}>{item.title}</Text>
      <Ionicons name="chevron-forward-outline" size={24} style={styles.menuIcon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Aruzhan</Text>
        <Text style={styles.email}>asdf@as.df</Text>
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={item => item.title}
      />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={HomePage}>
          <Ionicons name="home-outline" size={24} color="#000" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid-outline" size={24} color="#000" />
          <Text>Catalog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="#000" />
          <Text>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart-outline" size={24} color="#000" />
          <Text>Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="person-circle-outline" size={24} color="red" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;