import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LOCALSTORAGE_TOKEN } from "./constants";

// const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
// export const isLoggedInVar = makeVar(Boolean(token));
// export const authTokenVar = makeVar(token);

const httpLink = createHttpLink({ uri: "http://localhost:4000/graphql" });
export const darkModeVar = makeVar(false);
const DARK_MODE = "dark_mode";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // "x-jwt": authTokenVar() || "",
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

export const toggleDarkMode = async () => {
  if (Boolean(await AsyncStorage.getItem(DARK_MODE))) {
    await AsyncStorage.removeItem(DARK_MODE);
    darkModeVar(false);
  } else {
    await AsyncStorage.setItem(DARK_MODE, "enabled");
    darkModeVar(true);
  }
};
