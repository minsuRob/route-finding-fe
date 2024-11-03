import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import "@/constants/i18n";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useReactiveVar,
} from "@apollo/client";
import { client, isLoggedInVar, tokenVar } from "@/constants/apollo/apollo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import { Platform } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const isDarkmode = () => {
  if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  } else {
    console.log("Media-Queries are not supported");
  }
};

// token pre load.
const preLoad = async () => {
  // const isLoggedIn = useReactiveVar(isLoggedInVar);
  const token = await AsyncStorage.getItem("token");
  if (token) {
    isLoggedInVar(true);
    tokenVar(token);
  }
};

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);

  let colorScheme = useColorScheme();
  if (Platform.OS === "web") {
    colorScheme = isDarkmode();
  }

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (loading) {
    return (
      <AppLoading
        startAsync={preLoad}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ApolloProvider client={client}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ApolloProvider>
    </ThemeProvider>
  );
}

/*
  useEffect(() => {
    const loadTheme = async () => {
      // await AsyncStorage.removeItem('theme');
      const stored = (await AsyncStorage.getItem("theme")) as ThemeOptions;
      if (stored) {
        setColorScheme(stored);
      } else {
        // Default to light if nothing or unexpected value is stored
        setColorScheme("light");
      }
    };

    loadTheme();
  }, [colorScheme]);
*/
