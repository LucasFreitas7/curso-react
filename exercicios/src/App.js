import React, { Component } from 'react'
import { View, Text,  StyleSheet} from 'react-native'
import Simples from './componentes/Simples'
import Parimpar from './componentes/Parimpar'
import {Inverter, MegaSena} from './componentes/Multi.js'
export default class App extends Component{
  render(){
    return (
      <View style = {styles.container}>
        <Simples texto = 'Flexivel!!!!' />
        <Parimpar numero = {5} />
        <Inverter texto = 'React Nativo!' />
        <MegaSena numeros = {7}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})