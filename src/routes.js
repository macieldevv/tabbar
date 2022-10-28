import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import Sobre from './pages/Sobre';

import { Entypo, Feather } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

 export default function Routes(){
  return(
    <Tab.Navigator
       screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle:{
          position: 'absolute',
          backgroundColor: '#171626',
          borderTopWidth: 0,

          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          borderRadius: 10,
          height: 50
        }
       }}
    >

       <Tab.Screen
         name="Inicio" 
         component={Home} 
         options={{
           headerShown: false,
           tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={size} color={color} />
           )
            
       }}     
       />

       

       <Tab.Screen
         name="Sobre"
         component={Sobre}
         options={{
           headerShown: false,
           tabBarIcon: ({ size, color }) => (
              <Entypo name="info-with-circle" size={size} color={color} />
           )
           }}  
       />

       <Tab.Screen
         name="Portfolio"
         component={Portfolio} 
         options={{
           headerShown: false,
           tabBarIcon: ({ size, color }) => (
              <Entypo name="list" size={size} color={color} />
           )
           }}    
       />

       
    </Tab.Navigator>
  )
}

