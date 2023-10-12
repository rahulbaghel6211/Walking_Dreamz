import React, { useState, useEffect } from "react";
import { Text, View, Animated, Easing, Dimensions } from "react-native";

const CommentScreen = () => {
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    const animations = [
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 2,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 3,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
    ];

    const loopAnimation = () => {
      Animated.sequence(animations).start(() => loopAnimation());
    };

    loopAnimation();
  }, []);

  // Calculate position based on animated value
  const positionX = animatedValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [0, Dimensions.get("window").width, 0, 0],
  });

  const positionY = animatedValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [0, 0, Dimensions.get("window").height, 0],
  });

  return (
    <View style={{ position: "absolute" }}>
      <Animated.View
        style={{
          transform: [{ translateX: positionX }, { translateY: positionY }],
        }}
      >
        <Text style={{fontSize:16,color:'red',fontWeight:"800"}}>Data Is Not Available</Text>
      </Animated.View>
    </View>
  );
};

export default CommentScreen;
