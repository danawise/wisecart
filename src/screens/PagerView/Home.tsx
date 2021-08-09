import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Hero from '../../components/Hero'
import ProductVidDit from '../../components/ProductVidDit'

import api from '../../data/api'

const Home = () => {
    return (
        <View style={styles.conrainer}>
            
        
            <Hero videos={api}/>
            
             
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    conrainer:{
       flex:1,
        //backgroundColor:"red"
    }
})
