import React,{useRef} from 'react'
import { View, Text,FlatList ,StyleSheet, Dimensions } from 'react-native'
import products from '../../data/products';
import VideoShow from '../../components/VideoShow'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
interface vidProps {
  item:any,
  onChangeIndex:any
}

const index = ( {item,onChangeIndex}: vidProps) => {
  
    return (
      <View>
        <SwiperFlatList
          vertical
          data ={products}
          renderItem={({item,index}) => <VideoShow item={item} />} 
          keyExtractor={(item, index) =>index.toString()}
          showsVerticalScrollIndicator={false}
          snapToInterval={Dimensions.get('window').height-48}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          onChangeIndex={onChangeIndex}
          
           

          />
      </View>
    )
            
      
    
}

export default index
