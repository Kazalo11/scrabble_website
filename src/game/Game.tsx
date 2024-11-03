import { Button, Heading, List, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Turn } from "./Turn";

export function Game() {
  const location = useLocation();
  const { names } = location.state || { names: [] };

  const [scores, setScores] = useState<{ [name: string]: number[] }>({});
  const [turnNumber, setTurnNumber] = useState(1);

  return (
    <>
      <Stack align="center">
        <Heading>Let's play scrabble</Heading>
        <Heading>Players:</Heading>
        <List.Root>
          {names.map((name: string, index: number) => (
            <List.Item key={index}>{name}</List.Item>
          ))}
        </List.Root>
      </Stack>
      <Stack align="center">
        <Turn
          names={names}
          turn={turnNumber}
          scores={scores}
          setScores={setScores}
        />
        <Button onClick={() => setTurnNumber(turnNumber + 1)}>End turn</Button>
      </Stack>
    </>
  );
}
