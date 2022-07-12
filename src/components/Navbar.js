import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BlockchainContext } from "../context/BlockchainContext";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const { connectWallet, currentAccount, isOwner } = useContext(BlockchainContext);


  let navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.200", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            fontWeight={900}
            fontSize={"x-large"}
          >
            <Link to="/">BikeRental</Link>
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            onClick={() => handleClick("admin")}
            display={{ md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.500"}
            href={"/admin"}
            _hover={{
              bg: "pink.600",
            }}
          >
            Admin
          </Button>

          <Button
            onClick={connectWallet}
            display={{ md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.500"}
            href={"#"}
            _hover={{
              bg: "pink.600",
            }}
          >
            {!currentAccount
              ? "Connect Wallet"
              : `${currentAccount.slice(0, 5)}...${currentAccount.slice(
                  currentAccount.length - 4
                )}`}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
