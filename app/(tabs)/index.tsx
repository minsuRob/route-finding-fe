import { ThemedText } from "@/components/ThemedText";
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

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 80%;
  border: 5px solid #fff;
  /* position: absolute; */
  /* top: 100%; */
  /* left: 50%; */
`;

// interface MyProfileProps {
//   navigation: NavigationProp<RootSharedStackParamList, "Profile">;
// }

//////////

const ButtonBox = styled.View`
  width: 100%;
`;

const UserProfileContainer = styled.View``;

const UserInfoBox = styled.View`
  margin: 10px 0;
  align-items: center;
`;

const Username = styled.Text`
  font-weight: bold;
  font-size: 25;
  color: ${(props) => props.theme.accent};
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: 18;
  color: ${(props) => props.theme.grayColor};
`;

const Email = styled.Text`
  color: ${(props) => props.theme.grayColor};
  margin-bottom: 10px;
`;

const FollowContainer = styled.View`
  max-width: 300px;
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
  width: 33%;
  border-color: ${(props) => props.theme.accent};
`;

export default function Profile({}) {
  // const { data } = useUser();
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark" ? true : false;
  // <Avatar source={require("@/assets/images/haerinBG.png")} />

  return (
    <Container isDark={isDark}>
      {/* <AccountIcon width="100" height="100" fill="#268596" /> */}
      <UserProfileContainer>
        <Avatar source={require("@/assets/images/haerinBG.png")} />
        <UserInfoBox>
          <Username>vanes kang</Username>
          <Name>강해린</Name>
          <Email>hrkang@gmail.com</Email>
          <ButtonBox>{/* <Button text={"프로필 수정하기"} /> */}</ButtonBox>
          <ButtonBox style={{ marginTop: 5 }}>
            {/* <Button redBgColor={true} text={"로그아웃"} /> */}
          </ButtonBox>
        </UserInfoBox>
        <FollowContainer>
          <FollowContentsBox
            style={{ borderRightWidth: 1, borderStyle: "solid" }}
          >
            <FollowText>팔로워</FollowText>
            <FollowValue>200</FollowValue>
          </FollowContentsBox>
          <FollowContentsBox
            style={{ borderRightWidth: 1, borderStyle: "solid" }}
          >
            <FollowText>팔로워</FollowText>
            <FollowValue>200</FollowValue>
          </FollowContentsBox>
          <FollowContentsBox>
            <FollowText>팔로잉</FollowText>
            <FollowValue>100</FollowValue>
          </FollowContentsBox>
        </FollowContainer>
      </UserProfileContainer>
    </Container>
  );
}
