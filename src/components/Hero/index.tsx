import React, {useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import PagerView from 'react-native-pager-view';
import VideoPlayer from '../VideoPLayer'
import ProduuctTab from '../../components/ProduuctTab'
import ProductVidDit from '../../components/ProductVidDit'


const index = ({videos}) => {
        const [selected, setSelected] = useState(0)
    return (
        <PagerView orientation={'vertical'}
         onPageSelected={e => setSelected(e.nativeEvent.position)}
         initialPage={0}
         style={styles.conrainer}>
            
            {videos.map((item, index) => {
              return(
              
              <View key={item.id}>
                  <VideoPlayer 
                  video={item.video}
                  poster={item.poster}
                  isPlay={selected === index}
                  
                  />
                  <ProduuctTab user={item.user}/>
                  <ProductVidDit count={item.count}
                  
                  />
                 
         
              </View>
              )  
            })}
            
        </PagerView >
    )
}

export default index

const styles = StyleSheet.create({
    conrainer:{
        width:"100%",
         height:Dimensions.get('window').height-48,
         //backgroundColor:"black"
         position:"relative",
         resizeMode:'contain'
    }
})
