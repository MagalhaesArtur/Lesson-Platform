import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6b7huob0txn01t4c12u8b0z/master",
  cache: new InMemoryCache(),
});
