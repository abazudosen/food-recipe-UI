import React, { useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";
import * as font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

import { images, COLORS, SIZES, } from "../constants";
import { CustomButton } from "../components";

const Login = ({ navigation }) => {
  useEffect(() => {
    font.loadAsync({
      "roboto-bold": require("./../assets/fonts/Roboto-Bold.ttf"),
      "roboto-black": require("./../assets/fonts/Roboto-Black.ttf"),
      "roboto-regular": require("./../assets/fonts/Roboto-Black.ttf"),
    });
  }, []);

  function renderHeader() {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? "65%" : "60%",
        }}
      >
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "80%",
                color: COLORS.white,
                fontSize: SIZES.largeTitle,
                fontFamily: 'roboto-black',
                lineHeight: 45,
              }}
            >
              Nice Delicious Food Made Easy!
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Description */}
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            fontSize: SIZES.body3,
            fontFamily: 'roboto-regular',
          }}
        >
          Discover over 100 food recipes made very easy
        </Text>

        {/* Buttons  */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* Login  */}
          <CustomButton
            buttonText="Login"
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace("Home")}
          />

          {/* Signup  */}
          <CustomButton
            buttonText="Sign Up"
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            colors={[]}
            onPress={() => navigation.replace("Home")}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <StatusBar barStyle="light-content" />

      {/* Header  */}
      {renderHeader()}

      {/* Details */}
      {renderDetail()}
    </View>
  );
};

export default Login;
