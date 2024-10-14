import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { useColorScheme } from "react-native";
import styled from "styled-components/native";
// import { useUser } from "../hooks/useUser";
// import { logUserOut } from "../apollo";
// import { light } from "../shared";

const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: 100px;
`;

const Username = styled.Text`
  margin-top: 10px;
  font-size: 22px;
  color: ${(props) => props.theme.fontColor};
`;

const Name = styled.Text`
  margin-top: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.fontColor};
`;

const Location = styled.Text`
  margin-top: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.accent};
`;

const LogoutBtn = styled.TouchableOpacity`
  position: absolute;
  margin-top: 4px;
  padding: 10px;
  background-color: #ff471a;
  border-radius: 5px;
  bottom: 14px;
`;

const LogoutBtnText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

const Loading = styled.ActivityIndicator`
  margin-top: 40px;
  transform: scale(1.4, 1.4);
  color: ${(props) => props.theme.fontColor};
`;

const Card = styled.View``;

const UserInfo = styled.View``;

const UserImg = styled.View``;

const Banner = styled.View``;

const UserTwitter = styled.Text``;

const UserStats = styled.View``;

const UserStat = styled.View``;

const UserStatInfo = styled.Text``;
const UserStatLabel = styled.Text``;

const ThemeText = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "#FFF" : "#000")};
`;
const SangText = styled(ThemeText)`
  font-size: 20px;
`;
const UserName = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "#FFF" : "#000")};
`;

export default function Profile({}) {
  // const { data } = useUser();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark" ? true : false;

  return (
    <Card>
      <UserInfo>
        <UserImg>
          {/* <Banner bgImage={bgImage} />
          <Avatar src={avatar} /> */}
        </UserImg>
        <UserName isDark={isDark}>이민수</UserName>
        <SangText isDark={isDark}>이민수</SangText>

        <UserTwitter>twitter</UserTwitter>
      </UserInfo>
      <UserStats>
        <UserStat>
          <UserStatInfo>200</UserStatInfo>
          <UserStatLabel>Followers</UserStatLabel>
        </UserStat>
        <UserStat>
          <UserStatInfo>999</UserStatInfo>
          <UserStatLabel>Likes</UserStatLabel>
        </UserStat>
        <UserStat>
          <UserStatInfo>500</UserStatInfo>
          <UserStatLabel>Tweets</UserStatLabel>
        </UserStat>
      </UserStats>
    </Card>
  );
}
