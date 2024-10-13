import { ThemedText } from "@/components/ThemedText";
import React from "react";
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

export default function Profile({}) {
  // const { data } = useUser();
  return (
    <Container>
      <ThemedText>MS</ThemedText>
      {/* {data?.seeProfile ? ( */}
      <>
        {/* <Avatar resizeMode="contain" source={data?.seeProfile?.avatarURL ? data?.seeProfile?.avatarURL : require("../assets/nullAvatar.png")} />
                <Username>{data?.seeProfile?.username}</Username>
                <Name>Name | {data?.seeProfile?.name}</Name>
                <Location>Location | {data?.seeProfile?.location}</Location>
                <LogoutBtn onPress={() => logUserOut(navigation)}>
                    <LogoutBtnText>Log Out</LogoutBtnText>
                </LogoutBtn> */}
        <Avatar
          resizeMode="contain"
          // source={require("https://resources.chimhaha.net/article/1718893896146-fvvkh60gstd.jpg")}
        />
        <Username>MS</Username>
        <Name>Name | </Name>
        <Location>Location | </Location>
        <LogoutBtn>
          <LogoutBtnText>Log Out</LogoutBtnText>
        </LogoutBtn>
      </>
    </Container>
  );
}
