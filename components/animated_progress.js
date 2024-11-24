import React from 'react';
import { Image, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { grey } from '../constants/constants';
const MyCircularProgressBarWithImage = ({ imageSource,color }) => {
  const [progress, setProgress] = React.useState(20);

  const handleIncrementProgress = () => {
    if (progress < 100) {
      setProgress((prevProgress) => prevProgress + 1);
    }
  };

  return (
    <AnimatedCircularProgress
      size={120}
      width={15}
      fill={progress}
      tintColor={grey}
      backgroundColor='white'
      onAnimationComplete={() => console.log('Animation complete!')}
    >{
        (fill) => (
            <View // Wrap the Image and Text components inside this View
            style={{
              
   
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={imageSource}
              style={{
                position: 'absolute',
                top: 20,
                left: 20,
                width: 50,
                height: 50,
                // tintColor:'#fff',
                resizeMode:'contain',
                // borderRadius: 40,
              }}
            />
            {/* <Text style={{ fontSize: 24 }}>{progress}%</Text> */}
          </View>
          )
    }
      {/* <View // Wrap the Image and Text components inside this View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
          </View> */}
        {/* <Image
          source={imageSource}
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            width: 80,
            height: 80,
            borderRadius: 40,
          }}
        /> */}
        {/* <Text style={{ fontSize: 24 }}>{progress}%</Text> */}
    </AnimatedCircularProgress>
  );
};

export default MyCircularProgressBarWithImage;