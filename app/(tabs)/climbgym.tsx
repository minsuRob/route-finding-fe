import { View, FlatList, useColorScheme } from "react-native";

import styled from "styled-components/native";
import gymData from "@/tools/downloaded/gym.json";
import Gym from "@/components/Gym";
import { useForm } from "react-hook-form";
import { Screen } from "@/ignite/Screen";

export default function climbgym() {
  const { setValue, register, watch, handleSubmit } = useForm();

  const renderGym = ({ item: gym }: any) => {
    // console.log(photo);
    return <Gym {...gym} />;
  };
  const Input = styled.TextInput`
    background-color: rgba(255, 255, 255, 1);
    color: black;
    padding: 5px 10px;
    border-radius: 7px;
  `;
  const SearchBox = () => (
    <Input
      returnKeyLabel="Search"
      returnKeyType="search"
      autoCorrect={false}
      placeholder="Search Photos"
      placeholderTextColor="rgba(0,0,0,0.8)"
      onChangeText={(text) => setValue("keyword", text)}
      // onSubmitEditing={handleSubmit(onvalid)}
    />
  );

  return (
    <Screen preset="scroll">
      <SearchBox />
      <FlatList renderItem={renderGym} data={gymData} />
    </Screen>
  );
}
