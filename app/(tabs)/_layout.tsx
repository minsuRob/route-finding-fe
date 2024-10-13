import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Image, SafeAreaView, Text, useColorScheme, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "@/components/common/styles";

const Nickname = styled.Text`
  margin-top: 4px;
  font-size: 16px;
`;
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#021520",
            width: 220,
          },
        }}
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#021520",
                  paddingBottom: 12,
                }}
              >
                <Image
                  source={require("@/assets/images/haerin.jpg")}
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 999,
                  }}
                />
                <Nickname>Banes Kang</Nickname>
              </View>
            </SafeAreaView>
          );
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
