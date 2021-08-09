import React,{useState} from 'react'
import {  TouchableWithoutFeedback, Text   } from 'react-native'
import { Video } from 'expo-av'

import styled from 'styled-components/native'



const Hero = styled(Video)`
	height: 100%;
`
const Poster = styled.ImageBackground`
	height: 100%;
`

const VideoPlayer = ({ video, poster, isPlay,  }) => {
    const [paused, setPaused] = useState(false)
    const onPlayPousePress =()=>{
        setPaused(!paused)
    }
    
	return isPlay ? (
		<TouchableWithoutFeedback onPress={onPlayPousePress}>
        <Hero
			rate={1.0}
			volume={1.0}
			isMuted={false}
			shouldPlay={!paused}
            isLooping={true}
			useNativeControls={true}
			posterSource={{uri:poster}}
			source={{uri:video}}
			resizeMode='cover'
            
		/>
        </TouchableWithoutFeedback>
	) : (
		<Poster source={{uri:poster}} />
	)
}

export default VideoPlayer