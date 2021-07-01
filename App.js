import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import ContactsScreen from './ContactsScreen';
import Contact from './components/Contact'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      names: ["ama", "kofi", "sam", "bob", "james"]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ContactsScreen />








        {/* <TextInput style={styles.input}
          placeholder="email"
          autoCapitalize="none"
          autoCorrect={false}
          //secureTextEntry={true}
          value={this.state.email}
          onChangeText={(email) => {
            this.setState({ email })
            console.log(text)
          }}
        />

        <TextInput style={styles.input}
          placeholder="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => {
            this.setState({password})
            console.log(text)
          }}
        />

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },


});

export default App;
