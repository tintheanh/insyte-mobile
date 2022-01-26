import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UnAuthStack from "./UnAuthStack/UnAuthStack";

export default function RootStack() {
  return (
    <NavigationContainer>
      <UnAuthStack />
    </NavigationContainer>
  );
}
