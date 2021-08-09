import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';

interface prop{
    children:any,
    style:any
}


export default function Screen({children,style}:prop) {
    return (
  <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        flex: 1,
       

    }
})
