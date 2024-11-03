import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input";

type TurnProps = {
  turn: number;
  names: string[];
  scores: { [name: string]: number[] };
  setScores: React.Dispatch<React.SetStateAction<{ [name: string]: number[] }>>;
};

export function Turn({ turn, names, scores, setScores }: TurnProps) {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, name: string) => {
    const updatedScores = { ...scores };
    updatedScores[name][turn] = e.target.valueAsNumber;
    setScores(updatedScores);
  };
  return (
    <VStack align="start">
      <Heading>{`Turn ${turn}`}</Heading>
      <HStack>
        {names.map((name, index) => (
          <VStack key={index} align="center" padding="2px">
            <Text>{` ${name}, please enter your score`}</Text>
            <NumberInputRoot defaultValue="0">
              <NumberInputField onBlur={(e) => handleBlur(e, name)} />
            </NumberInputRoot>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
