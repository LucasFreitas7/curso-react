import React, {Component } from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

export default class Contador extends Component{
    state = {
        numero: this.props.numeroInicial
    }

    /*     constructor(props){
        super(props)
        this.maisUm = this.maisUm.bind(this);
    } */
    
    maisUm = () =>{
        this.setState({ numero: this.state.numero + 1 })
    }
    limpar = () =>{
        this.setState({ numero: this.props.numeroInicial})
    }
    multipla10x = () =>{
        this.setState({ numero: this.state.numero * 10})
    }

    render(){
        return(
            <View>
                <Text style = {{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress = {this.maisUm}
                    onLongPress = {this.limpar}
                >
                    <Text style = {{fontSize:20}}>Incrimentar/Zerar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.multipla10x}
                >
                    <Text style = {{fontSize:20}}>Multipla o numero 10x</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
}