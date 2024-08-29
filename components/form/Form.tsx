import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const Form = () => {
  return (
    <View className="flex flex-col gap-2">
      <View>
        <TextInput label="Title" />
      </View>
      <View>
        <TextInput
          label="Description"
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View></View>

      {/* <TextInput /> */}
    </View>
  );
};

export default Form;
