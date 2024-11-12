import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { TouchableOpacity, useColorScheme } from "react-native";
import styled from "styled-components/native";
const colorScheme = useColorScheme() ?? "light";
const isDark = colorScheme === "dark" ? true : false;

const Gym: React.FC<GymItemProps> = ({ gym_name, address }) => {
  const goToProfile = () => {
    router.push("/GymInfo");
  };

  return (
    <Container>
      <Header>
        <UserAvatar
          resizeMode="cover"
          source={require("@/assets/images/haerin.jpg")}
        />
        <Actions>
          <Action>
            <Ionicons
              name={"heart-outline"}
              // name={isLiked ? "heart" : "heart-outline"}
              // color={isLiked ? "tomato" : "white"}
              color={"white"}
              size={22}
            />
          </Action>
          <Action>
            <Ionicons name="chatbubble-outline" color="white" size={22} />
          </Action>
        </Actions>
        <Caption>
          <TouchableOpacity onPress={goToProfile}>
            <Username isDark={isDark}>{gym_name}</Username>
          </TouchableOpacity>
          <CaptionText isDark={isDark}>{address}</CaptionText>
        </Caption>
      </Header>
    </Container>
  );
};

const Container = styled.View``;
const Header = styled.View`
  padding: 10px;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 2px;
  border-color: aqua;
`;
const UserAvatar = styled.Image`
  margin-right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 20px;
`;
const Username = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "#FFF" : "#000")};
`;
const File = styled.Image``;
const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;
const Caption = styled.View`
  flex-direction: row;
`;
const CaptionText = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "#FFF" : "#000")};
  margin-left: 5px;
`;
const Likes = styled.Text``;

const ExtraContainer = styled.View`
  padding: 10px;
  border-bottom-width: 2px;
  border-color: aqua;
`;

export default Gym;

interface GymItemProps {
  gym_name: string;
  address: string;
  instargram_url: string;
  phone_number: string;
}
