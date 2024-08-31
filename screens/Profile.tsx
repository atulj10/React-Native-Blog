import Form from "components/form/Form";
import { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Avatar, Button, Card, Modal, Portal } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import user from "./User.json";
import * as DocumentPicker from "expo-document-picker";


const Profile = () => {
  const [active, setActive] = useState("blog");
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const date = new Date().toDateString();

  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: "auto",
    width: "80%",
    borderRadius:"10px"
  };

  

  const handlePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/*",
      });

      console.log(result);

      const file = result.assets[0];

      const image = {
        name: file.name.split(".")[0],
        uri: file.uri,
        type: file.mimeType,
        size: file.size,
      };

      setImage(image);

      // console.log(image);
    } catch (error) {
      console.log("Error picking document:", error);
      alert("An error occurred while picking the document");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Portal>
        <Modal
          contentContainerStyle={containerStyle}
          visible={visible}
          onDismiss={() => setVisible(false)}
        >
          <Form
            handlePick={handlePick}
            setVisible={setVisible}
            setTitle={setTitle}
            title={title}
            setDescription={setDescription}
            description={description}
          />
          {/* <Button onPress={() => setVisible(false)}>Close Modal</Button> */}
        </Modal>
      </Portal>

      <View className="items-center mt-5 mb-4">
        <Avatar.Image source={{ uri: user.photo }} size={100} />
        <Text className="text-2xl mt-2">{user.name}</Text>
        <Text className="text-sm text-gray-500">{user.email}</Text>
        <View className="flex-row gap-6 my-2">
          <Text>
            <Text className="text-black">Liked:</Text>{" "}
            <Text className="text-purple-700">{user.likedBlogs.length}</Text>
          </Text>
          <Text>
            <Text className="text-black">Blogs:</Text>{" "}
            <Text className="text-purple-700">{user.blogs.length}</Text>
          </Text>
        </View>
      </View>

      <View
        className="flex-row w-full mb-4"
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: "#D7C3F1",
        }}
      >
        <Text
          className={`text-lg flex-1 text-center py-1 font-medium ${
            active == "blog" && "bg-[#D7C3F1]"
          }`}
          onPress={() => setActive("blog")}
        >
          Blogs
        </Text>
        <Text
          className={`text-lg flex-1 text-center py-1 font-medium ${
            active == "likes" && "bg-[#D7C3F1]"
          }`}
          onPress={() => setActive("likes")}
        >
          Liked
        </Text>
      </View>

      <ScrollView className="flex-1">
        <View className="px-4">
          {(active == "blog" ? user.blogs : user.likedBlogs).map(
            (item, index) => (
              <Card key={index} className="mb-4">
                <Card.Cover source={{ uri: item.image }} />
                <Card.Title title={item.title} />
              </Card>
            )
          )}
        </View>
      </ScrollView>

      <View
        className="bg-purple-100 p-2 rounded-full absolute"
        style={{ right: 24, bottom: 24 }}
        onTouchStart={() => setVisible(true)}
      >
        <MaterialCommunityIcons name="plus" size={30} color="purple" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
