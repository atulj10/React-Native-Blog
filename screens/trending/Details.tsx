import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Details = ({ navigation, route }) => {
  const { blog, handleLike } = route.params; // Extract the id from route.params

  return (
    <SafeAreaView className="py-2 mb-20 flex flex-col">
      <Button className="flex-row mb-7" onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={15}
          className="self-center"
        />
        Go Back
      </Button>
      <View className="flex-col  items-center gap-4">
        <Text className="text-3xl  w-[85%] tracking-widest">{blog.title}</Text>
        <Image
          source={{ uri: blog.image }}
          style={{ width: "85%", height: 200 }}
        />
        <View className="flex-row justify-between w-[85%]">
          <Text>{blog.date}</Text>
          <View className="flex-row gap-2">
            <MaterialCommunityIcons
              name={blog.liked ? "heart" : "heart-outline"}
              size={20}
              color="red"
              onPress={() => handleLike(blog.id)}
            />
            <Text>{blog.likes}</Text>
          </View>
        </View>

        <Text className="w-[85%] text-xl tracking-wider text-slate-800">
          {blog.description}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;
