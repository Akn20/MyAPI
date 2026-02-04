
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  button: {
    height: 48,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 10,
  },
  header: {
    padding: 16,
    backgroundColor: '#007bff',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    padding: 20,
  },
  content: {
    padding: 20,
    gap: 10,
  },
  logoImage: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  dogImage: {
    width: '100%',
    height: '75%',
    borderRadius: 12,
    marginTop: 16,
  },
  profileName: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
},

});

export default styles;
