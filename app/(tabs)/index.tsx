import { Screen } from "@/ignite/Screen";
import { ThemedText } from "@/components/ThemedText";
import { translate } from "@/constants/i18n";
import { ThemeText } from "@/constants/Styles";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView<{ isDark: boolean }>`
  /* background-color: ${(props) => (props.isDark ? "#FFF" : "#e5e5e5")}; */
  /* flex: 1;
  justify-content: center;
  align-items: center; */
`;

const FollowContentsBox = styled.TouchableOpacity`
  width: 20%;
  border-color: ${(props) => props.theme.accent};
`;

const Side = styled.View`
  flex: 1;
  border-width: 1;
  /* background-color: #f1f1f1; */
  /* padding: 20px; */
  border-color: "red";
  height: 200px;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* flex-direction: column; */
`;
const Main = styled.View`
  flex: 2;
  border-width: 1;
  /* background-color: #f1f1f1; */
  /* padding: 20px; */
  border-color: "blue";
  height: 200px;
`;

const FakeImg = styled.View`
  width: 200px;
  width: 100%;
  background-color: #aaa;
  padding: 20px;
`;

const styles = StyleSheet.create({
  root: { flex: 1, flexDirection: "row" },
  masterView: {
    flex: 1,
    // maxWidth: 400,
    borderWidth: 1,
    borderColor: "red",
    height: 200,
  },
  detailView: {
    height: 200,
    flex: 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "blue",
  },
});

export default function Profile({}) {
  // const { data } = useUser();
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark" ? true : false;
  // <Avatar source={require("@/assets/images/haerinBG.png")} />

  return (
    <Screen preset="fixed">
      {/* <Container isDark={isDark}> */}
      {/* <AccountIcon width="100" height="100" fill="#268596" /> */}
      {/* <Row>
        <Side>
          <ThemedText type="title">Welcome!!</ThemedText>
          <ThemedText>Welcome!!</ThemedText>
          <ThemedText>Welcome!!</ThemedText>
          <FakeImg></FakeImg>
          <ThemedText>More Text</ThemedText>
        </Side>
        <Main>
          <ThemedText type="title">Welcome!!</ThemedText>
          <ThemedText>Welcome!!</ThemedText>
          <ThemedText>Welcome!!</ThemedText>
          <FakeImg></FakeImg>
          <ThemedText>More Text</ThemedText>
          </Main>
          </Row> */}
      {/* </Container> */}
      <SplitView />
      <Row>
        <Side>
          <ThemedText>More Text</ThemedText>
        </Side>
        <Main></Main>
      </Row>
    </Screen>
  );
}
const SplitView = () => (
  <View style={styles.root}>
    <View style={styles.masterView}></View>
    <View style={styles.detailView}></View>
  </View>
);
