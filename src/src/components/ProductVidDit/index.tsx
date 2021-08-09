import React from 'react'
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons,Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import { useState } from 'react';
const { height }= Dimensions.get('window')

  
const index = ({count, item}) => {
  const[like, setLike]= useState(count.like);
  const [isLiked,setIsLiked]= useState(false)
  const onLikePress = ()=>{
    const likesToAdd = isLiked ? -1 : 1;
    setLike( 
      
      count.like= count.like+likesToAdd,
    )
    setIsLiked(!isLiked)
    
     
  }
  
      const onSharePress = ()=>{
        console.warn('share')
      }
    return (
        <View style={styles.conrainer}>
            <View style ={styles.reviewAndLike}>
                {/* Ratings */}
       
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome 
              key={`$(item.id)-${i}`}
              
              name={i < Math.floor(count.avgRating) ? 'star' : 'star-o'}
              size={20}
              color={'#E5D225'}
            />
          ))}
          <Text style={{color:"white",marginTop:5,marginLeft:1}}>{count.ratings}</Text>
          
        </View>
        <View style ={{flexDirection:'column', justifyContent:"center",}}><TouchableOpacity  onPress={onLikePress}><AntDesign name="like1" size={35} color={ isLiked ? "red":'white'}  />
        <Text style={{color:"white", fontSize:15, marginTop:5, marginLeft:5}}>{count.like}</Text></TouchableOpacity></View>
        
        <View>
        <TouchableOpacity onPress={onSharePress}>
        <MaterialCommunityIcons name="share" size={40} color='white' style={{ paddingTop:20, marginLeft:-5}} />
        <Text style={{color:"white", marginTop:5,}}>{count.share}</Text>
        </TouchableOpacity>
        </View>
        
       
        
        
            
            
            
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    conrainer:{
        
        width:100,
         height:400,
         //backgroundColor:"blue",
         flexDirection:"column",
         position:"absolute",
         //alignItems:"flex-end",
         marginLeft:"90%",
         marginTop:"45%"
    },
    reviewAndLike:{
        width:100,
        //alignSelf:'center',
        //justifyContent:"center",
       // marginTop:"45%",
        //backgroundColor:'red',
        //alignItems:'flex-end',
        height:150,
        paddingLeft:10,
        marginBottom:50
        
        
        
    },
    ratings:{
         //marginLeft:200,
        alignItems:"center",
        //backgroundColor:"red",
        width:'100%',
        height:"100%"
        
    },
})
