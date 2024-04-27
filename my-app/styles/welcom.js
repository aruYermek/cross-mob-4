import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#A2A2A2',
    marginBottom: 20,
  },
  button: {
    width: '60%',
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    borderWidth: 2, 
    borderColor: '#FF65BB',
    backgroundColor: '#fff',
    color: '#FF65BB',
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    
  },
  buttonTextLogin: {
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#FF65BB',
    backgroundColor: '#fff',
    marginTop: 20,
    color: '#FF65BB',
    fontSize: 18,
    padding: 10,
    borderRadius: 10
  },
  bottomNav: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20
  },
});
