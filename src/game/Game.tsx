import { Button, Heading, List, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Results } from "../types";
import { Score } from "./Score";
import { Turn } from "./Turn";

export function Game() {
  const location = useLocation();
  const { names } = location.state || { names: [] };
  const [turnNumber, setTurnNumber] = useState(1);

  const createInitialScores = (names: string[]) => {
    return names.reduce(
      (acc, name) => {
        acc[name] = [];
        return acc;
      },
      {} as { [name: string]: number[] }
    );
  };

  const endTurn = () => {
    setTurnNumber(turnNumber + 1);
  };

  const [scores, setScores] = useState<Results>(createInitialScores(names));

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
          key={turnNumber}
          names={names}
          turn={turnNumber}
          scores={scores}
          setScores={setScores}
        />
        <Button onClick={endTurn}>End turn</Button>
      </Stack>
      <Score key={turnNumber} scores={scores} turn={turnNumber} />
    </>
  );
}
