import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BlockchainContext } from "../../context/BlockchainContext";

export default function WithdrawForm() {
  const { ownerWithdraw } = useContext(BlockchainContext);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    await ownerWithdraw();
  };

  return (
    <>
      <Text
        fontFamily={"heading"}
        fontSize={"x-large"}
        textAlign={"center"}
        mt={7}
        fontWeight={600}
      >
        Withdraw your earnings.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center>
          <Button
            mt={4}
            colorScheme="pink"
            isLoading={isSubmitting}
            type="submit"
          >
            Withdraw
          </Button>
        </Center>
      </form>
    </>
  );
}
