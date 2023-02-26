import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <title>Mealer</title>
            <meta name="description" content="Mealer is an app that simplifies the meal-planning and grocery shopping experience while helping to solve the global hunger crisis." />
            <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />
        </Head>

        <Header className={inter.className} />

        <main className={inter.className}>
            <Component {...pageProps} />
        </main>

        <Footer className={inter.className} />
    </>;
}
