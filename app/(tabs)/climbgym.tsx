import { View, FlatList, useColorScheme, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import gymData from "@/tools/downloaded/gym.json";
import Gym from "@/components/Gym";
import { useForm } from "react-hook-form";
import { Screen } from "@/ignite/Screen";
import { router } from "expo-router";

export default function climbgym() {
  const { setValue, register, watch, handleSubmit } = useForm();

  const renderGym = ({ item: gym }: any) => {
    return <Gym {...gym} />;
  };

  const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    background-color: white;
    border-bottom-width: 1px;
    border-bottom-color: #eee;
  `;

  const Input = styled.TextInput`
    flex: 1;
    background-color: #f5f5f5;
    color: black;
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
  `;

  const SearchBox = () => (
    <HeaderContainer>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
      <Input
        returnKeyLabel="Search"
        returnKeyType="search"
        autoCorrect={false}
        placeholder="운동 시설을 검색하세요"
        placeholderTextColor="rgba(0,0,0,0.6)"
        onChangeText={(text) => setValue("keyword", text)}
      />
    </HeaderContainer>
  );

  return (
    <Screen preset="fixed">
      <SearchBox />
      <FlatList
        renderItem={renderGym}
        data={gymData}
        contentContainerStyle={{ padding: 10 }}
      />
    </Screen>
  );
}
