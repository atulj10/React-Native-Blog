import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, useTheme } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import blogs from "../../data/Blog.json";

const Trending = ({ navigation: { navigate } }) => {
  const theme = useTheme();
  const date = new Date().toDateString();
  const [currentBlogs, setCurrentBlogs] = useState(blogs);

  const handleLike = (id) => {
    try {
      setCurrentBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.id === id
            ? {
                ...blog,
                likes: blog.liked ? blog.likes - 1 : blog.likes + 1,
                liked: !blog.liked,
              }
            : blog
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <View className="h-screen flex flex-center pt-5 px-5">
        <Text className=" text-4xl self-center">Trending</Text>
        <Text className=" text-xs self-end">{date}</Text>
        <ScrollView>
          <View className="flex flex-col gap-5 mt-2 mb-28">
            {currentBlogs.map((item, index) => (
              <Card
                key={index}
                onPress={() => navigate("Details", { blog: item, handleLike })}
              >
                <Card.Cover source={{ uri: item.image }} />
                <Card.Title title={item.title} />
                <Card.Actions>
                  <MaterialCommunityIcons
                    name={item.liked ? "heart" : "heart-outline"}
                    size={20}
                    color="red"
                    onPress={() => handleLike(item.id)}
                  />
                  <Text className="text-xs">{item.likes}</Text>
                </Card.Actions>
              </Card>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Trending;

const styles = StyleSheet.create({});
