import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop:100,
      },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputLabel: {
      fontSize: 16,
      color: 'grey',
      alignSelf: 'flex-start',
      marginLeft: 40,
    },
    inputEmail: {
      height: 50,
      width: '90%',
      marginVertical: 10,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 5,
      padding: 10,
    },
    termsText: {
      fontSize: 12,
      color: 'grey',
      margin: 20,
      textAlign: 'center',
    },
    input: {
        height: 50,
      width: '90%',
      marginVertical: 10,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 5,
      padding: 10,
      

      },
    continueButton: {
      width: '90%',
      height: 50,
      backgroundColor: '#FF65BB',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: 40
    },
    continueButtonText: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
  });
  