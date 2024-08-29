import Form from "components/form/Form";
import { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Avatar, Button, Card, Modal, Portal } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = () => {
  const [active, setActive] = useState("blog");
  const [visible, setVisible] = useState(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: "auto",
    width: "80%",
    // borderRadius:"10px"
  };

  const user = {
    name: "Test Name",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
    email: "test@gmail.com",
    phone: "+919923456789",
    likedBlogs: [
      {
        id: 3,
        title: "The Rise of AI in Web Development",
        description:
          "Artificial Intelligence is revolutionizing web development. This blog delves into how AI tools are being integrated into web development processes, making it easier to build smarter, more efficient websites.",
        likes: 1890,
        image:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/What_is_Generative_AI_63beafff52.webp",
        liked: true,
      },
      {
        id: 4,
        title: "Understanding Cloud Computing: A Developer's Perspective",
        description:
          "Cloud computing has become a cornerstone of modern technology. This blog provides an in-depth look at cloud computing from a developer's point of view, covering everything from cloud architecture to deployment strategies.",
        likes: 2100,
        image: "https://i.ytimg.com/vi/mxT233EdY5c/maxresdefault.jpg",
        liked: false,
      },
      {
        id: 5,
        title: "Building Scalable Applications with Microservices",
        description:
          "Microservices architecture is key to building scalable and resilient applications. Learn the principles of microservices, best practices, and how to implement them effectively in your projects.",
        likes: 1750,
        image:
          "https://cdn.prod.website-files.com/601be0f0f62d8b2e2a92b830/64245a9ba750a45185d81d0f_microservices_202303.webp",
        liked: true,
      },
      {
        id: 3,
        title: "The Rise of AI in Web Development",
        description:
          "Artificial Intelligence is revolutionizing web development. This blog delves into how AI tools are being integrated into web development processes, making it easier to build smarter, more efficient websites.",
        likes: 1890,
        image:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/What_is_Generative_AI_63beafff52.webp",
        liked: true,
      },
      {
        id: 4,
        title: "Understanding Cloud Computing: A Developer's Perspective",
        description:
          "Cloud computing has become a cornerstone of modern technology. This blog provides an in-depth look at cloud computing from a developer's point of view, covering everything from cloud architecture to deployment strategies.",
        likes: 2100,
        image: "https://i.ytimg.com/vi/mxT233EdY5c/maxresdefault.jpg",
        liked: false,
      },
      {
        id: 5,
        title: "Building Scalable Applications with Microservices",
        description:
          "Microservices architecture is key to building scalable and resilient applications. Learn the principles of microservices, best practices, and how to implement them effectively in your projects.",
        likes: 1750,
        image:
          "https://cdn.prod.website-files.com/601be0f0f62d8b2e2a92b830/64245a9ba750a45185d81d0f_microservices_202303.webp",
        liked: true,
      },
      {
        id: 3,
        title: "The Rise of AI in Web Development",
        description:
          "Artificial Intelligence is revolutionizing web development. This blog delves into how AI tools are being integrated into web development processes, making it easier to build smarter, more efficient websites.",
        likes: 1890,
        image:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/What_is_Generative_AI_63beafff52.webp",
        liked: true,
      },
      {
        id: 4,
        title: "Understanding Cloud Computing: A Developer's Perspective",
        description:
          "Cloud computing has become a cornerstone of modern technology. This blog provides an in-depth look at cloud computing from a developer's point of view, covering everything from cloud architecture to deployment strategies.",
        likes: 2100,
        image: "https://i.ytimg.com/vi/mxT233EdY5c/maxresdefault.jpg",
        liked: false,
      },
      {
        id: 5,
        title: "Building Scalable Applications with Microservices",
        description:
          "Microservices architecture is key to building scalable and resilient applications. Learn the principles of microservices, best practices, and how to implement them effectively in your projects.",
        likes: 1750,
        image:
          "https://cdn.prod.website-files.com/601be0f0f62d8b2e2a92b830/64245a9ba750a45185d81d0f_microservices_202303.webp",
        liked: true,
      },
    ],
    blogs: [
      {
        id: 1,
        title: "Mastering JavaScript: The Ultimate Guide",
        description:
          "Dive deep into JavaScript with this comprehensive guide covering everything from the basics to advanced topics like closures, promises, and async/await. Perfect for both beginners and experienced developers looking to sharpen their skills.",
        likes: 1520,
        image:
          "https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg?w=720&h=480&fit=clip&auto=format",
        liked: true,
      },
      {
        id: 3,
        title: "The Rise of AI in Web Development",
        description:
          "Artificial Intelligence is revolutionizing web development. This blog delves into how AI tools are being integrated into web development processes, making it easier to build smarter, more efficient websites.",
        likes: 1890,
        image:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/What_is_Generative_AI_63beafff52.webp",
        liked: true,
      },
      {
        id: 3,
        title: "The Rise of AI in Web Development",
        description:
          "Artificial Intelligence is revolutionizing web development. This blog delves into how AI tools are being integrated into web development processes, making it easier to build smarter, more efficient websites.",
        likes: 1890,
        image:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/What_is_Generative_AI_63beafff52.webp",
        liked: true,
      },
    ],
  };
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Portal>
        <Modal
          contentContainerStyle={containerStyle}
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={containerStyle}
        >
          <Form />
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
