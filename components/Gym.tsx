import { useColorScheme } from "react-native";
import styled from "styled-components/native";
const colorScheme = useColorScheme() ?? "light";
const isDark = colorScheme === "dark" ? true : false;

const Gym: React.FC<GymItemProps> = ({ gym_name }) => {
  return (
    <Container>
      <Header>
        <UserAvatar
          resizeMode="cover"
          source={require("@/assets/images/haerin.jpg")}
        />
        <Username isDark={isDark}>{gym_name}</Username>
      </Header>
      {/* <File
          resizeMode="cover"
          source={require("@/assets/images/haerinBG.png")}
  
          // source={{ uri: imgfile[id] }}
        /> */}
    </Container>
  );
};

const Container = styled.View``;
const Header = styled.View``;
const UserAvatar = styled.Image`
  margin-left: 10px;
  width: 32px;
  height: 32px;
  border-radius: 12.5px;
`;
const Username = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "#FFF" : "#000")};
`;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text``;
const Likes = styled.Text``;

const ExtraContainer = styled.View``;

export default Gym;

interface GymItemProps {
  gym_name: string;
  address: string;
  instargram_url: string;
  phone_number: string;
}
