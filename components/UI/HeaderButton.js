import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

const HeaderButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>🛒</Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});
