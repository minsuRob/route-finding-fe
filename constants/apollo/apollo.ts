import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LOCALSTORAGE_TOKEN } from "./constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
// export const isLoggedInVar = makeVar(Boolean(token));
// export const authTokenVar = makeVar(token);

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});
export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");
export const darkModeVar = makeVar(false);
const DARK_MODE = "dark_mode";

const authLink = setContext((_, { headers }) => {
  const token = tokenVar();
  return {
    headers: {
      ...headers,
      ...(token !== "" && { "x-token": token }),
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              // return isLoggedInVar();
            },
          },
          token: {
            read() {
              // return authTokenVar();
            },
          },
        },
      },
    },
  }),
});

const TOKEN = "token";
export const logUserIn = async (token: string) => {
  await AsyncStorage.setItem(TOKEN, JSON.stringify(token));
  isLoggedInVar(true);
  tokenVar(token);
};

export const logUserOut = async () => {
  await AsyncStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  tokenVar(undefined);
};

export const toggleDarkMode = async () => {
  if (Boolean(await AsyncStorage.getItem(DARK_MODE))) {
    await AsyncStorage.removeItem(DARK_MODE);
    darkModeVar(false);
  } else {
    await AsyncStorage.setItem(DARK_MODE, "enabled");
    darkModeVar(true);
  }
};
