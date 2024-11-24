import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const HeartbeatAnimation = () => {
    const pathRef = useRef();
    const animationDuration = 1000; // milliseconds
  
    useEffect(() => {
      animateECG();
    }, []);
  
    const animateECG = () => {
      const pathLength = 100; // Adjust as needed
      pathRef.current.setNativeProps({
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
  
      Animated.loop(
        Animated.sequence([
          Animated.timing(pathRef.current, {
            toValue: 0,
            duration: animationDuration,
            useNativeDriver: false,
          }),
          Animated.timing(pathRef.current, {
            toValue: pathLength,
            duration: animationDuration,
            useNativeDriver: false,
          }),
        ])
      ).start();
    };
  
    return (
      <View>
        <Svg height="100" width="100">
          <Path
            d="M10 80 Q 40 10, 70 80 T 150 80"
            ref={pathRef}
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
        </Svg>
      </View>
    );
  };
export default HeartbeatAnimation;
