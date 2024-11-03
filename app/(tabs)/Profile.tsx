import { ThemedText } from "@/components/ThemedText";
import { translate } from "@/constants/i18n";
import { ThemeText } from "@/constants/Styles";
import { useMe } from "@/hooks/useMe";
import { gql } from "@apollo/client";
import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView<{ isDark: boolean }>`
  background-color: ${(props) => (props.isDark ? "#FFF" : "#e5e5e5")};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 80%;
  border: 5px solid #fff;
`;

const ButtonBox = styled.View`
  width: 100%;
`;

const UserInfoBox = styled.View`
  margin: 10px 0;
  align-items: center;
`;

const Username = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: ${(props) => props.theme.accent};
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.grayColor};
`;

const Email = styled.Text`
  color: ${(props) => props.theme.grayColor};
  margin-bottom: 10px;
`;

const FollowContainer = styled.View`
  max-width: 500px;
  width: 90%;
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 5px;
`;

const FollowText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.fontColor};
`;

const FollowValue = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

const FollowContentsBox = styled.TouchableOpacity`
  width: 20%;
  border-color: ${(props) => props.theme.accent};
`;

export default function Profile({}) {
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark" ? true : false;
  const { data: userData } = useMe();

  return (
    <Container isDark={isDark}>
      <FollowContainer>
        <Avatar source={require("@/assets/images/haerinBG.png")} />
        <FollowContentsBox
          style={{ borderRightWidth: 1, borderStyle: "solid" }}
        >
          <FollowText>{translate("profile.followers")}</FollowText>

          <FollowValue>{userData?.me.startedAt} 🗓️</FollowValue>
        </FollowContentsBox>
        <FollowContentsBox
          style={{ borderRightWidth: 1, borderStyle: "solid" }}
        >
          <FollowText>{translate("profile.followers")}</FollowText>
          <FollowValue>{userData?.me.follower}</FollowValue>
        </FollowContentsBox>
        <FollowContentsBox>
          <FollowText>{translate("profile.following")}</FollowText>
          <FollowValue>{userData?.me.following}</FollowValue>
        </FollowContentsBox>
      </FollowContainer>
      <UserInfoBox>
        <Username>{userData?.me.email}</Username>
        <Name>{translate("welcomeScreen.exciting")}</Name>
        <Email>{userData?.me.instaId}</Email>
        <ButtonBox>{/* <Button text={"프로필 수정하기"} /> */}</ButtonBox>
        <ButtonBox style={{ marginTop: 5 }}>
          {/* <Button redBgColor={true} text={"로그아웃"} /> */}
        </ButtonBox>
      </UserInfoBox>
    </Container>
  );
}
