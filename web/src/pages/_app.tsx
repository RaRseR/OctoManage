import "./../styles/index.scss";
import type { AppProps } from "next/app";
import client from "../utils/apollo"
import { ApolloProvider } from "@apollo/client/react";

export default function App({ Component, pageProps }: AppProps) {
    return <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>;
}
