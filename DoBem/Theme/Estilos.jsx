// styles.js
import { StyleSheet } from 'react-native';

const corBase = '#421e70';

export const Estilos = StyleSheet.create({
    // lOGIN
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  label: {
    marginBottom: '3%',
    fontSize: 18
  },
  input: {
    height: 40,
    borderColor: '#333',
    borderWidth: 2,
    marginBottom: 16,
    padding: 10,
    width: '80%',
    borderRadius: 15,
  },
  error: {
    color: 'red',
    width: '80%',
    fontWeight: '500'
  },
  btnLogin: {
    backgroundColor: corBase,
    padding: 10,
    borderRadius: 15,
    marginVertical: 15,
    width: '80%',
    elevation: 5,
  },
  btnLoginText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#ccc'
  },
  circle: {
    width: '100%',
    height: '100%',
    backgroundColor: corBase,
    zIndex: -1,
    top: 0,
    position: 'absolute'
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 30,
    marginBottom: 20
  },
  formLogin: {
    width: '95%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    position: 'absolute',
    bottom: 0,
    height: '95%',
    elevation: 100,
    paddingTop: '15%',
    borderWidth: 2,
    borderColor: '#ccc'
  },

  // Cadastro
  progressContainer: {
    height: 15,
    width: '80%',
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginVertical: 50
  },
  barraProgresso: {
    height: '100%',
    backgroundColor: corBase,
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingBottom: '8%'
  },
  btnCadastro: {
    backgroundColor: corBase,
    borderRadius: 10,
    padding: 10,
  },

  title: {
    width: '80%',
    paddingBottom: 50,
    fontSize: 18,
    fontWeight: 500,
    textAlign: 'center'
  },
  inputCadastro : {
    width: '80%',
    borderBottomWidth: 3,
    borderColor: corBase,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: '#ddd',
    elevation: 5
  },

  // Cadastro Equipes

  containerPicker: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  picker: {
    width: '80%',
    backgroundColor: '#ccc',
  }
});
