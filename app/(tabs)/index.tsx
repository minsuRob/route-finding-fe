import React from "react";
import styled from "styled-components/native";
import { FlatList, Text } from "react-native";

const EmojiGrid = () => {
  const emojis = [
    "😀1",
    "😂2",
    "😍3",
    "🥳4",
    "🤩5",
    "😎6",
    "🤔7",
    "😴8",
    "😇",
    "🥺9",
    "😡10",
    "🤯11",
    "🤗12",
    "🤪13",
    "🤓14",
    "😱15",
    "😭16",
    "😅17",
    "🙃18",
    "🤤19",
    "😀20",
    "😂21",
    "😍22",
    "🥳23",
    "🤩24",
    "😀25",
    "😂26",
    "😍27",
    "🥳28",
    "🤩29",
  ];

  const renderItem = ({ item }: { item: string }) => (
    <EmojiContainer>
      <Emoji>{item}</Emoji>
    </EmojiContainer>
  );

  return (
    <Container>
      <NoticeContainer>
        <NoticeText>🥳 빨랑 끝내자 sh~~</NoticeText>
      </NoticeContainer>
      <GymContainer>
        <FlatList
          data={emojis}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={5}
          contentContainerStyle={{ alignItems: "center" }}
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
  background-color: #fff;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
`;
const GymContainer = styled.View`
  background-color: red;
  padding: 10px;
`;

const EmojiContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  border-radius: 10px;
  shadow-color: #000;
  /* shadow-offset: { width: 0, height: 2 }; */
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 2;
`;

const Emoji = styled.Text`
  font-size: 24px;
`;

const NoticeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
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
  color: #333;
  background-color: #f0f0f0;
  margin-bottom: 20px;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export default EmojiGrid;
