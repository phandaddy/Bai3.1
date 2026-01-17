import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Hello world
        </Text>
      </View>
    </View>
  );
}