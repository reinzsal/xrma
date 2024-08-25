import './css.css'
import Head from "next/head";

export const metadata = {
    title: 'XR.MA | Home'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        {/*<title>My page title</title>*/}
        {/*<meta property="og:title" content="My page title" key="title"/>*/}
        <meta property="og:httpEquiv" content="My page title" key="title"/>
    </Head>
    <head>

    </head>

    <body>{children}</body>
    </html>
  );
}
