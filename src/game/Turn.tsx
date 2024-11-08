import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input";
import { Results } from "../types";

type TurnProps = {
  turn: number;
  names: string[];
  scores: { [name: string]: number[] };
  setScores: React.Dispatch<React.SetStateAction<Results>>;
};

export function Turn({ turn, names, scores, setScores }: TurnProps) {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, name: string) => {
    const updatedScores = { ...scores };
    const score = Number(e.target.value);
    if (updatedScores[name]?.length < turn - 1) {
      updatedScores[name].push(score);
    } else {
      updatedScores[name][turn - 1] = score;
    }
    setScores(updatedScores);
  };
  return (
    <VStack align="start">
      <Heading>{`Turn ${turn}`}</Heading>
      <HStack>
        {names.map((name, index) => (
          <VStack key={index} align="center" padding="2px">
            <Text>{` ${name}, please enter your score`}</Text>
            <NumberInputRoot defaultValue="0" min={0}>
              <NumberInputField onBlur={(e) => handleBlur(e, name)} />
            </NumberInputRoot>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
