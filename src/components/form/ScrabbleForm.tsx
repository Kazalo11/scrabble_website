import { Box, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { People } from "./People";
import { PeopleName } from "./PeopleName";

export function ScrabbleForm() {
  const [people, setPeople] = useState<number>(0);
  const [names, setNames] = useState<string[]>([]);

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/create", { state: { names } });
  };

  return (
    <Box>
      <Stack width="xl" paddingBottom="2">
        <People setPeople={setPeople} />
      </Stack>
      {people != 0 && (
        <Stack width="xl">
          <PeopleName people={people} setNames={setNames} names={names} />
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={onClick}
          >
            Start Game
          </Button>
        </Stack>
      )}
    </Box>
  );
}
