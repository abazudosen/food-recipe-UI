import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";

import { CategoryCard, TrendingCard } from "../components";
import { images, COLORS, SIZES, FONTS, dummyData, icons } from "../constants";

const Home = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          alignItems: "center",
          height: 80,
        }}
      >
        {/* Text  */}
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              color: COLORS.darkGreen,
							fontSize: SIZES.h2,
              fontFamily: 'roboto-bold',
            }}
          >
            Hello Abaz Udosen,
          </Text>

          <Text
            style={{
              marginTop: 3,
              color: COLORS.gray,
							fontSize: SIZES.body3,
              fontFamily: 'roboto-regular',
            }}
          >
            What you wanna cook today?
          </Text>
        </View>

        {/* Image  */}
        <TouchableOpacity onPress={() => console.log("Profile")}>
          <Image
            source={images.abaz}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          paddingVertical: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />

        <TextInput
          style={{
            marginLeft: SIZES.radius,
						fontSize: SIZES.body3,
            fontFamily: 'roboto-regular',
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipes"
        />
      </View>
    );
  }

  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}
      >
        {/* Image  */}
        <View
          style={{
            width: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={images.recipe}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </View>

        {/* Text  */}
        <View
          style={{
            flex: 1,
            paddingVertical: SIZES.radius,
          }}
        >
          <Text
            style={{
              width: "70%",
							fontSize: SIZES.body4,
              fontFamily: 'roboto-regular',
            }}
          >
            You've 8 recipes that you never try b4
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
            onPress={() => console.log("see recipes")}
          >
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: "underline",
								fontSize: SIZES.body4,
              	fontFamily: 'roboto-regular',
              }}
            >
              Check 'em out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTrendingSection() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            fontSize: SIZES.h2,
            fontFamily: 'roboto-bold',
          }}
        >
          Trending Recipes
        </Text>

        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TrendingCard
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 0,
                }}
                recipeItem={item}
                onPress={() => navigation.navigate("Recipe", { recipe: item })}
              />
            );
          }}
        />
      </View>
    );
  }

	function renderContainerHeader() {
		return (
			<View
				style={{ 
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: 20,
					marginHorizontal: SIZES.padding,
				}}
			>

			{/* Section title  */}
			<Text
				style={{
					flex: 1,
					fontSize: SIZES.h2,
          fontFamily: 'roboto-bold',
				}}
			>
				Categories
			</Text>

			{/* View All  */}
				<TouchableOpacity>
					<Text style={{
						fontSize: SIZES.body4,
            fontFamily: 'roboto-regular',
					}}>
						View All
					</Text>
				</TouchableOpacity>
			</View>
		)
	}

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header  */}
            {renderHeader()}
            {/* Search Bar  */}
            {renderSearchBar()}
            {/* See Recipe Card  */}
            {renderSeeRecipeCard()}

            {/* Trending Section  */}
            {renderTrendingSection()}

            {/* Category Header  */}
						{renderContainerHeader()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              categoryItem={item}
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
            />
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
