import React from 'react';
import {Text, TextInput} from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Simples from './componentes/Simples';
import Parimpar from './componentes/Parimpar'
import Inverter, { MegaSena } from './componentes/Multi';
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Eventos from './componentes/Eventos'
import Padrao from './estilo/Padrao';


export default function Menu() {
  return (
    <NavigationContainer>
         <Drawer.Navigator> 
            <Drawer.Screen name = "Eventos" component = {getEventos}/>
            <Drawer.Screen name = "ValidarProps" component = {getValidarProps}/>
            <Drawer.Screen name = "Plataformas" component = {getPlataformas}/>
            <Drawer.Screen name = "Contador" component = {GetContador}/>
            <Drawer.Screen name="Mega Sena" component={GetMegaSena}/>
            <Drawer.Screen name="Inverter" component={GetInverter}/>
            <Drawer.Screen name = "Par Ou Impar" component = {getParimpar}/>
            <Drawer.Screen name='Simples' component={GetSimples}/>
        </Drawer.Navigator> 
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

function getEventos(){
    return <Eventos/>
}

function getValidarProps(){
    return <ValidarProps  ano =  {20}/>
}

function getPlataformas(){
    return <Plataformas/>
}

function GetContador(){
    return <Contador numeroInicial = {100}/>
}

function GetMegaSena() {
    return <MegaSena numeros={8} />
}
 
function GetInverter() {
    return <Inverter texto='React Nativo!' />
}
 
function GetSimples() {
    return <Simples texto='Flexível!!!' />
}

function getParimpar() {
    return <Parimpar/>
}