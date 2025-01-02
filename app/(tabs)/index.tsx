import React from "react";
import styled from "styled-components/native";
import { FlatList, ImageBackground, StyleSheet, Text } from "react-native";
// import { WithLocalSvg } from "react-native-svg";
const hold1 = require("@/constants/images/svg/hold1.svg");
import { Image } from "expo-image";

const EmojiGrid = () => {
  const emojis = [
    { id: "1", x: 50, y: 50 },
    { id: "2", x: 150, y: 50 },
    { id: "3", x: 250, y: 50 },
    { id: "4", x: 50, y: 150 },
    { id: "5", x: 150, y: 150 },
    { id: "6", x: 250, y: 150 },
    { id: "7", x: 50, y: 250 },
    { id: "8", x: 150, y: 250 },
    { id: "9", x: 250, y: 250 },
    { id: "10", x: 50, y: 350 },
    { id: "11", x: 150, y: 350 },
    { id: "12", x: 250, y: 350 },
  ];
  // TODO: check valid blur hash
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const renderItem = ({
    item,
  }: {
    item: { id: string; x: number; y: number };
  }) => (
    <HoldContainer style={{ position: "absolute", left: item.x, top: item.y }}>
      <Image
        style={{
          flex: 1,
          width: "100%",
          transform: [{ rotate: `${item}deg` }],
        }}
        source={hold1}
        placeholder={{ blurhash }}
        contentFit="contain"
        transition={1000}
      />
    </HoldContainer>
  );

  return (
    <Container>
      <NoticeContainer>
        <NoticeText>[가벼운동기부여]🥳 빨랑 끝내자 sh~~</NoticeText>
      </NoticeContainer>
      <GymContainer
        resizeMode="cover"
        source={require("@/constants/images/wall.png")}
      >
        <FlatList
          data={emojis}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
          scrollEnabled={false}
          style={{ width: "100%", height: "100%" }}
        />
      </GymContainer>
      <ButtonContainer>
        <Button>
          <ButtonText>Button 1</ButtonText>
        </Button>
        <Button>
          <ButtonText>Button 2</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props) => props.theme.containerColor};
  margin: 0 auto;
  padding: 10px;
  width: 100%;
`;
const GymContainer = styled.ImageBackground`
  padding: 10px;
  width: 100%;
  aspect-ratio: 1;
  max-width: 500px;
  margin: 0 auto;
`;

const HoldContainer = styled.View`
  width: 50px;
  height: 50px;
  /* background-color: #f0f0f0; */
  border-radius: 10px;
`;

const Emoji = styled.Text`
  font-size: 24px;
`;

const NoticeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-top: 100px; */
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: #f0f0f0;
  padding: 10px 20px;
  border-radius: 10px;
  flex: 1;
  max-width: 150px;
  align-items: center;
`;

const NoticeText = styled.Text`
  padding: 10px 20px;
  font-size: 20px;
  /* color: #888; */
  color: ${(props) => props.theme.titleColor};
  background-color: ${(props) => props.theme.backgroundColor};
  /* background-color: #a0f0f0; */
  margin-bottom: 20px;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export default EmojiGrid;
