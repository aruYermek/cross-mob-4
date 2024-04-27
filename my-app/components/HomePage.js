import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/home';
import { Ionicons } from '@expo/vector-icons';


export const HomePage = ({navigation}) => {
  

  const Profile =() =>{
    navigation.navigate('Profile')
  }

  const popularGoods = [
    { name: 'Bouquet', price: '35 990₸', image: require('../assets/bouquet1.jpg') },
    { name: 'Designer bouquet "winx"', price: '24 990₸', image: require('../assets/bouquet2.jpg') },
    
  ];

  const flowers = [
    { name: 'Tulip', price: '1 990₸', image: require('../assets/tulip.jpg') },
    { name: 'Rose', price: '1 790₸', image: require('../assets/rose.jpg') },
    
  ];
  return (
   <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
    
    <View style={styles.banner}>
        <Text style={styles.bannerText}>Try a new service</Text>
        <Image source={require('../assets/ads.jpg')} 
        style={styles.bannerImage} 
        />
    </View>


        
        <Text style={styles.sectionTitle}>Popular goods</Text>
        <View style={styles.goodsContainer}>
          {popularGoods.map((item, index) => (
            <View key={index} style={styles.goodItem}>
              <Image source={item.image} style={styles.goodImage} />
              <Text style={styles.goodName}>{item.name}</Text>
              <Text style={styles.goodPrice}>{item.price}</Text>
            </View>
          ))}
        </View>

        
        <Text style={styles.sectionTitle}>Flowers</Text>
        <View style={styles.goodsContainer}>
          {flowers.map((item, index) => (
            <View key={index} style={styles.goodItem}>
              <Image source={item.image} style={styles.flowerImage} />
              <Text style={styles.goodName}>{item.name}</Text>
              <Text style={styles.goodPrice}>{item.price}</Text>
            </View>
          ))}
        </View>

        
      </ScrollView>
        <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="home-outline" size={24} color="red" />
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
        <TouchableOpacity style={styles.navItem} onPress={Profile}>
          <Ionicons name="person-circle-outline" size={24} color="#000" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
        </View>
  );
};

export default HomePage;