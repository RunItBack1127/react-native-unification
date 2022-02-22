import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

import { signInToGoogleFitOAuth } from './google-fit-oauth/oauth';

const GFitComponent = () => {
  return (
    <View style={styles.gFitContainer}>
      <Pressable onPress={() => signInToGoogleFitOAuth()} style={styles.gFitOAuthBtn}>
        <Text style={styles.gFitOAuthText}>Sign In To Google</Text>
      </Pressable>
    </View>
  )
}

const App = () => {
  return (
    <GFitComponent></GFitComponent>
  )
}

const styles = StyleSheet.create({
  gFitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  gFitOAuthBtn: {
    width: 300,
    height: 75,
    backgroundColor: '#000',
    borderRadius: 20,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gFitOAuthText: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 2.0,
    textTransform: 'uppercase'
  }
});

export default App;
