import { ThemedText } from "@/components/ThemedText";
import { ThemeText } from "@/constants/Styles";
import React from "react";
import { useColorScheme } from "react-native";
import styled from "styled-components/native";
// import { useUser } from "../hooks/useUser";
// import { logUserOut } from "../apollo";
// import { light } from "../shared";

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 80%;
  border: 5px solid #fff;
  position: absolute;
  top: 100%;
  /* left: 20%; */
`;

const UserInfo = styled.View`
  width: 100%;
  padding-bottom: 20px;
  background-color: gray;
`;

const Card = styled.View`
  background-color: purple;
  /* flex-grow: 1; */
  /* max-width: ; */
  margin-left: 15px;
  margin-right: 15px;
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

const UserImg = styled.View``;

const Banner = styled.View``;

const UserTwitter = styled(ThemeText)``;

const UserStats = styled.View``;

const UserStat = styled.View``;

const UserStatInfo = styled(ThemeText)``;
const UserStatLabel = styled(ThemeText)``;

const UserName = styled(ThemeText)`
  font-size: 20px;
`;

export default function Profile({}) {
  // const { data } = useUser();
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark" ? true : false;

  return (
    <Card>
      <UserInfo>
        <UserImg>
          <Banner />
          <Avatar source={require("@/assets/images/haerinBG.png")} />
        </UserImg>
        <UserName isDark={isDark}>이민수</UserName>
        <UserTwitter isDark={isDark}>twitter</UserTwitter>
      </UserInfo>
      <UserStats>
        <UserStat>
          <UserStatInfo isDark={isDark}>200</UserStatInfo>
          <UserStatLabel isDark={isDark}>Followers</UserStatLabel>
        </UserStat>
        <UserStat>
          <UserStatInfo isDark={isDark}>999</UserStatInfo>
          <UserStatLabel isDark={isDark}>Likes</UserStatLabel>
        </UserStat>
        <UserStat>
          <UserStatInfo isDark={isDark}>500</UserStatInfo>
          <UserStatLabel isDark={isDark}>Tweets</UserStatLabel>
        </UserStat>
      </UserStats>
      {/* <ThemedText style={{fontSize:"2rem"}}>kw</ThemedText> */}
      <ThemedText style={{ fontFamily: "SpaceMono" }}>kw</ThemedText>
    </Card>
  );
}
