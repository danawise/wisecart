import React,{useRef} from 'react'
import { View, Text, TouchableWithoutFeedback, Image, ImagePickerIOS,TouchableOpacity, Dimensions  } from 'react-native'
import {Video} from 'expo-av';
import ButtonVid from '../../components/ButtonVid';
import styles from './styles';
import { PlaybackMixin } from 'expo-av/build/AV';
import {MaterialCommunityIcons,Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import products from '../../data/products';
import { useState } from 'react';
interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
    videoUri: string;
    paused:any,
    like:number,
    share:number
  };
}
 
const index = ({item}: ProductItemProps) => {
    //const {videoURI, image, price, oldPrice, }= props
    const[like, setLike]= useState(item.like);
    const [isLiked,setIsLiked]= useState(false)
    const [isMehed,setIsmehed]= useState(false)
    const [paused, setPaused] = useState(false)
 
    const onPlayPousePress =()=>{
        setPaused(!paused)
    }
    const onLikePress = ()=>{
      const likesToAdd = isLiked ? -1 : 1;
      setLike( 
        
        item.like= item.like+likesToAdd,
      )
      setIsLiked(!isLiked)
      !isLiked? setIsmehed(false): setIsmehed(false)
       
    }
    const onMehPress = ()=>{
      
      setIsmehed(!isMehed)
      !isMehed? setIsLiked(false): setIsLiked(false)
      isMehed?-1:1
      
       
      
      
    }
    const onSharePress = ()=>{
      console.warn('share')
    }
    
 
  
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPousePress}>
            <Video source={{uri: item.videoUri}}
            style={styles.video}
             //useNativeControls 
             resizeMode={'cover'}
              isLooping={true}
              shouldPlay ={paused}
              isMuted={true}
             posterSource={{uri:"https://cdn.vox-cdn.com/thumbor/8kuh2NeOzdUyFyk1ZD-WdtKQ6Tg=/0x0:1440x2560/1200x0/filters:focal(0x0:1440x2560):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22702174/Screenshot_20210706_154801.png"}}
 
             
              
             
             
               />
               
            </TouchableWithoutFeedback>
            <View style ={styles.reviewAndLike}>
                {/* Ratings */}
        <View style={styles.ratings}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome 
              key={`${item.id}-${i}`}
              
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={20}
              color={'#E5D225'}
            />
          ))}
          <Text style={{color:"white",marginTop:2}}>{item.ratings}</Text>
          
        </View>
        <TouchableOpacity onPress={onLikePress}><AntDesign name="like1" size={35} color={ isLiked ? "red":'white'}  /> 
        <Text style={{color:"white",marginTop:5, fontSize:15, textAlign:"center"}}>{item.like}</Text></TouchableOpacity>
        <TouchableOpacity onPress={onMehPress}>
        <AntDesign name="meho" size={35} color={isMehed ? '#ffd853':'white'  } style={{ paddingTop:20}} />
        <Text style={{color:"white",marginTop:5, fontSize:15, textAlign:"center"}}>Meh</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSharePress}>
        <MaterialCommunityIcons name="share" size={40} color='white' style={{ paddingTop:20,}} />
        <Text style={{color:"white", textAlign:"center"}}>{item.share}</Text>
        </TouchableOpacity>
        
            </View>
            <View style ={styles.productdetails}>
                
                <View  style={styles.imagec1}><Image style={styles.image} source={{uri: item.image}}/></View>
                <View style={styles.secondcolum} ><Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>
        Price: ${item.price}
        {item.oldPrice && (
          <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
          
        )}
      </Text>
      <MaterialCommunityIcons name="gesture-tap" size={25} color='white' />
        
                </View>
 
                <View style={styles.bottons}>
                    <View style={styles.addtocart}>
                    <ButtonVid 
                    text={'Add To Cart'}
                    onPress={() => {
                    console.warn('Added to cart');
                               }}
         
                                   />
                    </View>
                    <View style={styles.buynow} >
                    <ButtonVid   text={'Buy Now'} 
            onPress={() => 
            {console.warn('Buy now');}} 
            />
                    </View>
                    
      </View>
                
            
            
            </View>
            
        </View>
    )
}
 
export default index
