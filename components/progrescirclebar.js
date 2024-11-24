import React from 'react';
import { Image, View } from 'react-native';
import Svg, { Circle, ClipPath } from 'react-native-svg';

const CircleWithImage = ({ imageUrl, radius, strokeWidth }) => {
  const diameter = radius * 2;

  return (
    <View>
      <Svg width={diameter} height={diameter}>
        {/* Define a circular clipping mask */}
        <ClipPath id="clip">
          <Circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
          />
        </ClipPath>

        {/* Background Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Use the clipping mask for the image */}
        <Image
          source={ imageUrl }
          style={{height:20,resizeMode:"contain"}}
          // height={20}
          clipPath="url(#clip)"
        />
      </Svg>
    </View>
  );
};

export default CircleWithImage;