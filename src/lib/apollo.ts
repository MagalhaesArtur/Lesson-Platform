import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_API_ACCESS}`,
  },
  cache: new InMemoryCache(),
});
