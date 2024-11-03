import { View, FlatList, useColorScheme } from "react-native";

import styled from "styled-components/native";
import gymData from "@/tools/downloaded/gym.json";
import Gym from "@/components/Gym";

export default function Flat() {
  const renderGym = ({ item: gym }: any) => {
    // console.log(photo);
    return <Gym {...gym} />;
  };
  return (
    <View className="flex justify-around">
      <View className="grid md:grid-cols-3 gap-x-5 gap-y-10 mt-16">
        <FlatList renderItem={renderGym} data={gymData} />
      </View>
    </View>
  );
}
