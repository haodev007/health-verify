import {
  Flex,
  Box,
  Text,
  Button,
  Container,
  Heading,
  Stack,
  ListItem,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"

import { useAccount, useConnect } from "wagmi"
import SelectWalletModal from "../components/SelectWalletModal"
import { Certifications } from "../components/certifications"

const Home: NextPage = () => {
  const { data: account } = useAccount()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Head>
        <title>Health Verify</title>
        <meta
          name="Health Verify"
          content="Health Verify remembers your certifications"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex alignItems="center" justifyContent="center">
        {account ? (
          <Certifications />
        ) : (
          <Container maxW={"3xl"}>
            <Stack
              as={Box}
              textAlign={"center"}
              spacing={{ base: 8, md: 14 }}
              py={{ base: 20, md: 36 }}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                Never verify your health certifications <br />
                <Text as={"span"} color={"green.400"}>
                  AGAIN
                </Text>
              </Heading>
              <Text fontSize={"2xl"}>
                With Health Verify, you can easily verify your health
                certifications by following the steps below.
              </Text>
              <UnorderedList listStyleType="none">
                <ListItem>{`Click 'Start' to connect your wallet.`}</ListItem>
                <ListItem>{`If you don't have a wallet, create a Coinbase Wallet by selecting Coinbase Wallet`}</ListItem>
                <ListItem>Select a certification to verify</ListItem>
                <ListItem>Enter your Certification ID</ListItem>
                <ListItem>
                  Wait for our team to verify your certification
                </ListItem>
              </UnorderedList>
              <Stack
                direction={"column"}
                spacing={3}
                align={"center"}
                alignSelf={"center"}
                position={"relative"}
              >
                <Button
                  colorScheme={"green"}
                  bg={"green.400"}
                  rounded={"full"}
                  onClick={onOpen}
                  px={6}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Start
                </Button>
              </Stack>
            </Stack>
          </Container>
        )}
      </Flex>
      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </>
  )
}

export default Home
