import React from 'react'
import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import ButtonVid from '../../components/ButtonVid';
import {useNavigation} from '@react-navigation/native';
import api from '../../data/api'
import {MaterialCommunityIcons,Feather, FontAwesome, AntDesign} from '@expo/vector-icons';

interface ProductItemProps {
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
      videoURI: string;
      paused:any,
      user:any
    };
    count:any;

  }

const index = ({user,count, item}:ProductItemProps) => {
    const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ProductDetails", {id:item});
  };
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.imageContainer} >
                <Image style={styles.image} source={{uri: user.image}}/>
            </View>
            <View style={styles.titlAmdPrice} > 
            <Text numberOfLines={3} style={styles.title}>{user.title}</Text>
            <Text numberOfLines={3} style={styles.price}>Price: ${user.price}</Text>
            
            </View>

            <View style={styles.Buttons}>
                <ButtonVid  text={'Add To Cart'}
                    onPress={() => {
                    console.warn('Added to cart');
                               }}/>
                               <ButtonVid text={'Buy Now'}
                    onPress={() => {
                    console.warn('Buy Now');
                               }}/>
            </View>
            
        </Pressable>
    )
}

export default index

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"'rgba(52, 52, 52, 0.3)'",
        height:'20%',
        width:"100%",
        position:"absolute",
        marginTop:"140%",
        borderRadius:15,
        borderWidth:0.5,borderColor:"gray"
    },
    imageContainer:{
        flex:3,
        //backgroundColor:'blue',
        alignItems:'center',
        //paddingVertical:20,

    },
    titlAmdPrice:{
        flex:5,
        //backgroundColor:'yellow',
        flexDirection:"column",
        paddingTop:10

    },
    Buttons:{
        flex:4,
        //backgroundColor:'black',
        alignItems:"center",
        paddingVertical:15,
        justifyContent:"space-between",
        paddingBottom:70
    },
    image:{
        marginVertical:10,
        height:70,
        width:70,
        marginLeft:15,
        resizeMode: 'contain',
        borderRadius:15
        
    },
    title:{
        fontSize:16,
        color:'white',
        fontWeight:"bold",
        
    },
    price:{
        fontSize:16,
        color:'white',
        fontWeight:"bold",
        paddingTop:10,
        
        
    }

})
