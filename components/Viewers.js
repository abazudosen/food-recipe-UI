import React, {useEffect} from "react";
import { Image, View, Text } from "react-native";
import * as font from "expo-font";

import { COLORS, FONTS, SIZES } from "../constants";

const Viewers = ({ viewersList }) => {
  useEffect(() => {
    font.loadAsync({
      "roboto-bold": require("./../assets/fonts/Roboto-Bold.ttf"),
      "roboto-black": require("./../assets/fonts/Roboto-Black.ttf"),
      "roboto-regular": require("./../assets/fonts/Roboto-Black.ttf"),
    });
  }, []);

  if (viewersList?.length == 0) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
          Be the first to try!
        </Text>
      </View>
    );
  } else if (viewersList?.length <= 4) {
    return (
      <View>
        {/* Profile  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          {viewersList?.map((item, index) => (
            <View
              key={index}
              style={{
                height: 50,
                width: 50,
                marginLeft: index == 0 ? 0 : -20,
              }}
            >
              <Image
                source={item.profilePic}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                }}
              />
            </View>
          ))}
        </View>

        {/* Text  */}
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            lineHeight: 18,
            fontSize: SIZES.body4,
            fontFamily: 'roboto-regular',
          }}
        >
          {viewersList?.length} people
        </Text>

        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            lineHeight: 18,
            fontSize: SIZES.body4,
            fontFamily: 'roboto-regular',
          }}
        >
          Already tried this!
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        {/* Profile  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 10,
          }}
        >
          {viewersList?.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={index}
                  style={{
                    height: 50,
                    width: 50,
                    marginLeft: index == 0 ? 0 : -20,
                  }}
                >
                  <Image
                    source={item.profilePic}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                    }}
                  />
                </View>
              );
            }
            if (index == 3) {
              return (
                <View
                  key={index}
                  style={{
                    height: 50,
                    width: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    backgroundColor: COLORS.darkGreen,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: SIZES.body4,
                      fontFamily: 'roboto-regular',
                    }}
                  >
                    {viewersList.length - 3}+
                  </Text>
                </View>
              );
            }
          })}
        </View>

        {/* Text  */}
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            lineHeight: 18,
            fontSize: SIZES.body4,
            fontFamily: 'roboto-regular',
          }}
        >
          {viewersList?.length} people
        </Text>

        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            lineHeight: 18,
            fontSize: SIZES.body4,
            fontFamily: 'roboto-regular',
          }}
        >
          Already tried this!
        </Text>
      </View>
    );
  }
};

export default Viewers;
