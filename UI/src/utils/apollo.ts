import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
    // typePolicies: {
    //     Dashboard: {
    //         keyFields: [""],
    //     },
    //     Projects: {
    //         keyFields: [""],
    //     },
    //     Notifications: {
    //         keyFields: [""],
    //     },
    //     Files: {
    //         keyFields: [""],
    //     },
    //     Staff: {
    //         keyFields: [""],
    //     },
    //     User: {
    //         keyFields: [""],
    //     },
    // },
});

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache,
});

export default client;
