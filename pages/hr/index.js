import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../../lib/Layout";
// import SocialPostContainer from "../components/SocialPost/SocialPostContainer";
const inter = Inter({ subsets: ["latin"] });
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import StatsCard from "../../components/StatsCard";
export default function Hr() {
  return (
    <Layout>
      <Head>
        <title>Weave - Zenroll</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box maxW="7xl" mx={"auto"} pt={1} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            py={10}
            fontWeight={"bold"}
          >
            Welcome to Zenroll for HR
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard title={"Total Openings"} stat={"10"} />
            <StatsCard title={"Total Applications"} stat={"300"} />
            <StatsCard title={"Projects with requirements"} stat={"5"} />
            <StatsCard
              title={"Total Requirements across projects"}
              stat={"10"}
            />
          </SimpleGrid>
        </Box>
      </main>
    </Layout>
  );
}