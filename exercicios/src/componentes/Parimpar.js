import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'


export default class Parimpar extends Component {
    state = {
        numero: 2
    }

    alterarNumero = numero =>{
        this.setState({numero})
    }
    parOuImpar(){
        if(this.state.numero % 2 == 0){
            return <Text style = {Padrao.ex}>Par</Text>
        }
        else{
            return <Text style = {Padrao.ex}>Impar</Text>
        }
    }
    respostaParOuImpar(){
        if(this.state.numero % 2 == 0){
            return <Text style= {Padrao.ex} >{this.state.numero} é Par</Text>
        }
        else{
           return  <Text style= {Padrao.ex}>{this.state.numero} é Impar</Text>
        }   

    }
    numberToString(){
        const palavra = this.state.numero.toString()
        return palavra
    }
    render (){
        return(
            <View>
                <TextInput value = {this.numberToString()}
                    style = {Padrao.input}
                    onChangeText = {this.alterarNumero}
                />
                <Text>
                    {this.respostaParOuImpar()}
                </Text>
                
                
            </View>
        )
    }

}
