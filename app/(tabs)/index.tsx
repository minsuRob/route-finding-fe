import { Screen } from "@/ignite/Screen";
import { ThemedText } from "@/components/ThemedText";
import { translate } from "@/constants/i18n";
import { ThemeText } from "@/constants/Styles";
import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView<{ isDark: boolean }>`
  background-color: ${(props) => (props.isDark ? "#FFF" : "#e5e5e5")};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FollowContentsBox = styled.TouchableOpacity`
  width: 20%;
  border-color: ${(props) => props.theme.accent};
`;

export default function Profile({}) {
  // const { data } = useUser();
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark" ? true : false;
  // <Avatar source={require("@/assets/images/haerinBG.png")} />

  return (
    <Screen preset="fixed">
      <Container isDark={isDark}>
        {/* <AccountIcon width="100" height="100" fill="#268596" /> */}
        <ThemedText type="title">Welcome!!</ThemedText>
        <ThemedText type="title">Welcome!!</ThemedText>
        <ThemedText type="title">Welcome!!</ThemedText>
      </Container>
    </Screen>
  );
}
