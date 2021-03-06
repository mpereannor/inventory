import Head from "next/head";
import Image from "next/image";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Counter } from "../src/features/counter/Counter";

import { Container } from "@chakra-ui/layout";
import Profile from "../src/features/auth/Profile";
export function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Counter /> */}
        <Profile/>
      </main>
    </Container>
  );
}

export default Home;
// export default withAuthenticator( Home, {
//   includeGreetings: true
// })
