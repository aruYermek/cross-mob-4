import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      padding: 20,
      alignItems: 'center',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    email: {
      fontSize: 18,
      color: '#666',
    },
    menuItem: {
      flexDirection: 'row',
      padding: 15,
      alignItems: 'center',
    },
    menuIcon: {
      marginRight: 10,
    },
    menuText: {
      flex: 1,
      fontSize: 18,
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
  });