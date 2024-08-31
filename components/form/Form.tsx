import { View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Form = ({
  setVisible,
  handlePick,
  setTitle,
  title,
  setDescription,
  description,
}) => {
  return (
    <View  style={{ flexDirection: "column", gap: 10 }}>
      <MaterialCommunityIcons
        style={{ alignSelf: "flex-end", marginVertical:0 }}
        name="close"
        size={20}
        onPress={() => setVisible(false)}
      />
      <View>
        <TextInput
          value={title}
          onChangeText={setTitle}
          label="Title"
          mode="outlined"
        />
      </View>
      <View>
        <TextInput
          value={description}
          onChangeText={setDescription}
          label="Description"
          multiline={true}
          numberOfLines={4}
          mode="outlined"
        />
      </View>
      <View>
        <Button mode="outlined" onPress={handlePick}>
          Select thumbnail
        </Button>
      </View>
      <Button mode="contained" >
        Create Blog
      </Button>
    </View>
  );
};

export default Form;
