import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  FlatList,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CalendarScreen from "@/components/calendar/calendarScreen";

export default function HomeScreen() {
  return (
    <View className="flex justify-around">
      <CalendarScreen />
    </View>
  );
}

const Comp = () => {
  return (
    <View className="flex flex-col">
      <View className="bg-cover bg-center mb-3 py-28 bg-red-500"></View>
      <Text className="text-xl text-white">Name</Text>
      <Text className="border-t mt-2 py-2 text-xs opacity-50 border-gray-400 text-white">
        CaTe
      </Text>
    </View>
  );
};
