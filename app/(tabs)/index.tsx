import { ThemedText } from "@/components/ThemedText";
import { ThemeText } from "@/constants/Styles";
import React from "react";
import { useColorScheme } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #63c2d1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 40px;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled(ThemeText)`
  font-size: 18px;
  color: #fff;
`;

export const SearchUserImage = styled(ThemeText)``;
export const SearchTextName = styled(ThemeText)`
  font-size: 16px;
  color: #268596;
`;
export const SearchTextCPF = styled(ThemeText)`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
  margin-left: 5px;
`;

const UserTwitter = styled(ThemeText)`
  font-size: 20px;
  color: #0971f1;
  /* transition: text-decoration 0.2s; */
`;
const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 80%;
  border: 5px solid #fff;
  /* position: absolute; */
  /* top: 100%; */
  /* left: 50%; */
`;

export default function Profile({}) {
  // const { data } = useUser();
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark" ? true : false;

  return (
    <Container>
      {/* <AccountIcon width="100" height="100" fill="#268596" /> */}
      <Avatar source={require("@/assets/images/haerinBG.png")} />

      <SearchTextName isDark={isDark}>이민수</SearchTextName>
      <SearchTextCPF isDark={isDark}>다크@naver.com</SearchTextCPF>

      <InputArea>
        <CustomButton>
          <CustomButtonText isDark={isDark}>Log Out</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
}
