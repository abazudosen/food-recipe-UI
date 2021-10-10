import React, {useEffect} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as font from "expo-font";

import { COLORS, SIZES, FONTS } from "../constants";

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  useEffect(() => {
    font.loadAsync({
      "roboto-bold": require("./../assets/fonts/Roboto-Bold.ttf"),
      "roboto-black": require("./../assets/fonts/Roboto-Black.ttf"),
      "roboto-regular": require("./../assets/fonts/Roboto-Black.ttf"),
    });
  }, []);

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Image  */}
      <Image
        source={categoryItem.image}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Details  */}
      <View
        style={{
          width: "65%",
          paddingHorizontal: 20,
        }}
      >
        {/* Name  */}
        <Text
          style={{
            flex: 1,
            fontSize: SIZES.h2,
            fontFamily: 'roboto-bold',
          }}
        >
          {categoryItem.name}
        </Text>

        {/* Servings  */}
        <Text
          style={{
            color: COLORS.gray,
            fontSize: SIZES.body4,
            fontFamily: 'roboto-regular',
          }}
        >
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
