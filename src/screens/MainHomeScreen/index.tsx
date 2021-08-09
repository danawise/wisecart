import styles from './styles';
import HomePagePics from '../../data/HomePagePics';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions,Text, Image, Pressable  } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading'
import {Auth} from 'aws-amplify'
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
//import { Constants } from 'expo';

const { width } = Dimensions.get('window');

const index = ({item} ) => {
  let [fontsLoaded,error] = useFonts({
    Poppins_800ExtraBold,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_400Regular,
  })
  
  if(!fontsLoaded) {
     return <AppLoading/>;
    }
  const navigation = useNavigation();

  const pressed = () => {
    navigation.navigate('ProductDetails', {id: item});
  };
  const onLogout = () =>{ Auth.signOut()}
  
   return (
    
    <ScrollView horizontal= {false} showsHorizontalScrollIndicator={false} style={{backgroundColor:'white'}}>
         <Text style={styles.topics}> What's New🎇 </Text>
         <ScrollView showsHorizontalScrollIndicator={false}
        
        style={styles.container}
        //pagingEnabled={true}
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        showsVerticalScrollIndicator={false}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}>
        <Pressable  onPress={pressed} style={styles.view}>
            <Image style={styles.whatsNPic} source={{uri:HomePagePics.whatsN1}}/>
            <Text style={styles.whatsNText}>Kitchenware</Text>
            </Pressable>
        <Pressable  onPress={pressed} style={styles.view2}>
            <Image style={styles.whatsNPic} source={{uri:HomePagePics.whatsN2}}/>
            <Text style={styles.whatsNText}>Bathroom Product Ideas</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.view}>
            <Image style={styles.whatsNPic} source={{uri:HomePagePics.whatsN3}}/>
            <Text style={styles.whatsNText}>Decor </Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.view2}>
            <Image style={styles.whatsNPic} source={{uri:HomePagePics.whatsN4}}/>
            <Text style={styles.whatsNText}>Self Care</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.view}>
            <Image style={styles.whatsNPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.whatsNText}>Tools</Text>
            </Pressable>
      </ScrollView>
      <Text style={styles.topics}> Kitchen & Dining 🔪 </Text>
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
      <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN1}}/>
            <Text style={styles.catagoryText}>Kitchenware</Text>
            </Pressable>
        <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN2}}/>
            <Text style={styles.catagoryText}>Bathroom Product Ideas</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN3}}/>
            <Text style={styles.catagoryText}>Decor </Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN4}}/>
            <Text style={styles.catagoryText}>Self Care</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>

          </ScrollView>  
      <View style={{marginTop:5}}>
          <Text  style={styles.topics}> Top 5 Products of the Week🔥</Text>
          <View style={{flexDirection:'row'}}>
               <Text style={styles.top5number}>#1</Text>
                <Image style={styles.top5pic} source={{uri:HomePagePics.whatsN1}}/>
                 <Text style={styles.top5TextTitle}>Product Title</Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <Text style={styles.top5number}>#2</Text>
                <Image style={styles.top5pic} source={{uri:HomePagePics.whatsN2}}/>
                 <Text style={styles.top5TextTitle}>Product Title</Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <Text style={styles.top5number}>#3</Text>
                <Image style={styles.top5pic} source={{uri:HomePagePics.whatsN3}}/>
                 <Text style={styles.top5TextTitle}>Product Title</Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <Text style={styles.top5number}>#4</Text>
                <Image style={styles.top5pic} source={{uri:HomePagePics.whatsN4}}/>
                 <Text style={styles.top5TextTitle}>Product Title</Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <Text style={styles.top5number}>#5</Text>
                <Image style={styles.top5pic} source={{uri:HomePagePics.whatsN5}}/>
                 <Text style={styles.top5TextTitle}>Product Title</Text>
               </View>
               <Text style={styles.topics}> What's New🎇 </Text>
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
      <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN1}}/>
            <Text style={styles.catagoryText}>Kitchenware</Text>
            </Pressable>
        <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN2}}/>
            <Text style={styles.catagoryText}>Bathroom Product Ideas</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN3}}/>
            <Text style={styles.catagoryText}>Decor </Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN4}}/>
            <Text style={styles.catagoryText}>Self Care</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>

          </ScrollView>  
          <Text style={styles.topics}> What's New🎇 </Text>
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
      <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN1}}/>
            <Text style={styles.catagoryText}>Kitchenware</Text>
            </Pressable>
        <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN2}}/>
            <Text style={styles.catagoryText}>Bathroom Product Ideas</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN3}}/>
            <Text style={styles.catagoryText}>Decor </Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN4}}/>
            <Text style={styles.catagoryText}>Self Care</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>

          </ScrollView>  
          <Text style={styles.topics}> What's New🎇 </Text>
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
      <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN1}}/>
            <Text style={styles.catagoryText}>Kitchenware</Text>
            </Pressable>
        <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN2}}/>
            <Text style={styles.catagoryText}>Bathroom Product Ideas</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN3}}/>
            <Text style={styles.catagoryText}>Decor </Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN4}}/>
            <Text style={styles.catagoryText}>Self Care</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>

          </ScrollView>  
          <Text style={styles.topics}> What's New🎇 </Text>
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
      <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN1}}/>
            <Text style={styles.catagoryText}>Kitchenware</Text>
            </Pressable>
        <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN2}}/>
            <Text style={styles.catagoryText}>Bathroom Product Ideas</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN3}}/>
            <Text style={styles.catagoryText}>Decor </Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN4}}/>
            <Text style={styles.catagoryText}>Self Care</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>

          </ScrollView>  
          <Text style={styles.topics}> What's New🎇 </Text>
      <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
      <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN1}}/>
            <Text style={styles.catagoryText}>Kitchenware</Text>
            </Pressable>
        <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN2}}/>
            <Text style={styles.catagoryText}>Bathroom Product Ideas</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN3}}/>
            <Text style={styles.catagoryText}>Decor </Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN4}}/>
            <Text style={styles.catagoryText}>Self Care</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>
            <Pressable  onPress={pressed} style={styles.catagorContainer}>
            <Image style={styles.catagoryPic} source={{uri:HomePagePics.whatsN5}}/>
            <Text style={styles.catagoryText}>Tools</Text>
            </Pressable>

          </ScrollView> 
          <Pressable onPress={onLogout} style ={{ backgroundColor:'red', height:30, width:80,alignItems:'flex-end'}}>
            <Text> Sign out </Text>

            </Pressable> 
        
     </View> 

    </ScrollView>
      
      
    );
  
}
export default index;


