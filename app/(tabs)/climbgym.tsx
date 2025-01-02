import { View, FlatList, useColorScheme, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import gymData from "@/tools/downloaded/gym.json";
import Gym from "@/components/Gym";
import { useForm } from "react-hook-form";
import { Screen } from "@/ignite/Screen";
import { router } from "expo-router";
import { useState } from "react";

const categories = [
  { id: "all", name: "전체" },
  { id: "natural", name: "자연암벽" },
  { id: "indoor", name: "실내암장" },
  { id: "outdoor", name: "실외암장" },
];

export default function climbgym() {
  const [selectedCategory, setSelectedCategory] = useState("all");
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

  const CategoryItem = styled.TouchableOpacity<{ isSelected: boolean }>`
    padding: 8px 16px;
    margin-right: 8px;
    border-radius: 20px;
    background-color: ${props => props.isSelected ? '#333' : '#f5f5f5'};
  `;

  const CategoryText = styled.Text<{ isSelected: boolean }>`
    color: ${props => props.isSelected ? 'white' : 'black'};
    font-size: 14px;
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

  const renderCategory = ({ item }: { item: typeof categories[0] }) => (
    <CategoryItem 
      isSelected={selectedCategory === item.id}
      onPress={() => setSelectedCategory(item.id)}
    >
      <CategoryText isSelected={selectedCategory === item.id}>{item.name}</CategoryText>
    </CategoryItem>
  );

  return (
    <Screen preset="fixed">
      <SearchBox />
      <View style={{ paddingVertical: 10 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />
      </View>
      <FlatList
        renderItem={renderGym}
        data={gymData}
        contentContainerStyle={{ padding: 10 }}
      />
    </Screen>
  );
}
