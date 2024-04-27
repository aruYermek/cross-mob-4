import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    scrollView: {
      flex: 1,
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FCE4EC',
        padding: 20,
        borderRadius: 10,
    },
    bannerText: {
      fontSize: 20,
      fontWeight: 'bold',
     
    },
    bannerImage: {
        width: '30%', 
        height: 100, 
        resizeMode: 'cover', 
        borderRadius: 10
      },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginHorizontal: 10,
      marginTop: 20,
    },
    goodsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    goodItem: {
      width: '40%',
      padding: 10,
      
    },
    goodImage: {
      width: 150,
      height: 150,
      borderRadius: 10,
      
    },
    goodName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5,
      
    },
    goodPrice: {
      fontSize: 16,
      marginTop: 5,
      borderWidth: 2,
      borderColor: '#FF65BB',
      backgroundColor: '#fff',
      color:'#FF65BB',
      borderRadius: 5,
      textAlign: 'center',
      padding: 7
    },
    flowerImage: {
      width: '100%',
      height: 200,
      
    },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: '#ddd',
      marginBottom:20,
      paddingHorizontal: 10,
    },
    navItem: {
      alignItems: 'center',
    },
    navItemActive: {
      alignItems: 'center',
      borderTopWidth: 2,
      borderTopColor: 'red',
  },
})
  