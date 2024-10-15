import { ThemedText } from "@/components/ThemedText";
import { ThemeText } from "@/constants/Styles";
import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView<{ isDark: boolean }>`
  background-color: ${(props) => (props.isDark ? "#000" : "#63c2d1")};
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
`;

export const SearchUserImage = styled(ThemeText)``;
export const SearchTextName = styled(ThemeText)`
  font-size: 16px;
`;
export const SearchTextCPF = styled(ThemeText)`
  color: #268596;
  font-weight: bold;
  margin-left: 5px;
`;

const UserTwitter = styled(ThemeText)`
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

const Header = styled.View`
  margin-bottom: 44px;
  background: var(--ins-background-primary);
  color: var(--ins-content-primary);
  @media only screen and (max-width: 735px) {
    display: block;
    margin-bottom: 0px;
  }
`;
const HeaderWrap = styled.View`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 30px;
  @media only screen and (max-width: 735px) {
    display: flex;
    padding: 14px;
    column-gap: 0px;
  }
`;
const ProfilePic = styled.View`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 735px) {
    width: 77px;
    height: 77px;
    margin-right: 28px;
  }
`;
const ProfileImg = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 1000px;
  border: 1px solid var(--ins-border-primary);
  @media only screen and (max-width: 735px) {
    width: 100%;
    height: 100%;
  }
`;
const ProfileH2 = styled(ThemeText)`
  font-size: 28px;
  font-weight: 300;
  @media only screen and (max-width: 735px) {
    display: inline-block;
    margin-bottom: 12px;
  }
`;
const ProfileIcon = styled.View`
  margin-left: 8px;
  @media only screen and (max-width: 735px) {
    display: inline-block;
  }
`;
const ProfileButtonWrap = styled.View`
  margin-left: 20px;
  @media only screen and (max-width: 735px) {
    display: block;
    margin-left: 0px;
  }
`;
const ProfileTitle = styled.View`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 735px) {
    display: block;
  }
`;

const ProfileDescriptionH1 = styled(ThemeText)`
  font-weight: 600;
  line-height: 24px;
  @media only screen and (max-width: 735px) {
    line-height: 20px;
  }
`;
const ProfileDescriptionSpan = styled.View`
  font-weight: 400;
  line-height: 24px;
  @media only screen and (max-width: 735px) {
    line-height: 20px;
  }
`;
const ProfileDescriptionA = styled(ThemeText)`
  color: var(--ins-content-blue);
`;
const ProfileDescriptions = styled.View`
  @media only screen and (max-width: 735px) {
    padding-left: 16px;
    padding-bottom: 21px;
    font-size: 14px;
    margin-bottom: 0px !important;
  }
`;
const ProfileRow = styled.View`
  margin-bottom: 20px;
`;

export default function Profile({}) {
  // const { data } = useUser();
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark" ? true : false;

  return (
    <Container isDark={isDark}>
      {/* <AccountIcon width="100" height="100" fill="#268596" /> */}
      {/* <Avatar source={require("@/assets/images/haerinBG.png")} /> */}
      <HeaderWrap>
        <ProfileRow>
          <ProfileTitle>
            <ProfileH2 isDark={isDark}>apple</ProfileH2>
            <ProfileIcon></ProfileIcon>
            <ProfileButtonWrap>
              <TouchableOpacity>Follow</TouchableOpacity>
            </ProfileButtonWrap>
          </ProfileTitle>
        </ProfileRow>
        <ProfileRow>{/* <KeyNumbers /> */}</ProfileRow>
        <ProfileDescriptions
        // class="row last"
        >
          <ProfileDescriptionH1 isDark={isDark}>apple</ProfileDescriptionH1>
          <ProfileDescriptionSpan>
            Everyone has a story to tell. Tag to take part.
          </ProfileDescriptionSpan>
        </ProfileDescriptions>
      </HeaderWrap>

      <InputArea>
        <CustomButton>
          <CustomButtonText isDark={isDark}>Log Out</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
}
