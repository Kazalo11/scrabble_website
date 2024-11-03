import { Box, Heading, Table } from "@chakra-ui/react";
import { Results } from "../types";

type ScoreProps = {
  scores: Results;
  turn: number;
};

export function Score({ scores, turn }: ScoreProps) {
  const names = Object.keys(scores);
  return (
    <Box
      position="fixed"
      right={0}
      top={0}
      width="40vh"
      height="100vh"
      bg="gray.200"
      p={4}
      overflowY="auto"
    >
      <Heading textAlign="center">Total Score</Heading>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader key="turn">Turn</Table.ColumnHeader>
            {names.map((name, index) => {
              return (
                <Table.ColumnHeader key={index}>{name}</Table.ColumnHeader>
              );
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {turn > 1 &&
            Array.from({ length: turn }, (_, index) => (
              <Table.Row key={index}>
                <Table.Cell>{index + 1}</Table.Cell>
                {names.map((name) => (
                  <Table.Cell key={name}>
                    {scores[name][index] !== undefined
                      ? scores[name][index]
                      : 0}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
