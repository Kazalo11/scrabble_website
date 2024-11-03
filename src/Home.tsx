import { Flex, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { ScrabbleForm } from "./components/form/ScrabbleForm";
import { Button } from "./components/ui/button";
import { useColorModeValue } from "./components/ui/color-mode";

function HomePage() {
  const [form, setForm] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack mx={"auto"} width="xl">
        <Stack align={"center"}>
          <Heading>Scrabble Game</Heading>
        </Stack>
        <Button onClick={() => setForm(true)}>Start a new scrabble game</Button>
        <Stack>{form && <ScrabbleForm />}</Stack>
      </Stack>
    </Flex>
  );
}

export default HomePage;
