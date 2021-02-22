/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  PixelRatio,
} from 'react-native';

const {width:ww,height:wh} = Dimensions.get('window')
const {width:sw,height:sh} = Dimensions.get('screen')

const scale=PixelRatio.get()
const MyStatusBar = ({backgroundColor,...props})=>{
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  )
}

export default ()=>{

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="red" barStyle='light-content' />
      <View>
      <Text>Hoho, {scale}</Text>
        <Text>Hello,{`(${ww},${wh}),(${sw},${sh})`}</Text>
      </View>
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1
  },
  statusBar:{
    height:100
  }
})