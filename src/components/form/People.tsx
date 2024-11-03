import { createListCollection } from "@chakra-ui/react";
import React from "react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select";

export type PeopleProps = {
  setPeople: React.Dispatch<React.SetStateAction<number>>;
};

export function People({ setPeople }: PeopleProps) {
  const frameworks = createListCollection({
    items: [
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
    ],
  });

  return (
    <SelectRoot
      collection={frameworks}
      onValueChange={(e) => setPeople(Number(e.value[0]))}
    >
      <SelectLabel>Enter the number of people</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="Select the number of people" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.items.map((people) => (
          <SelectItem item={people} key={people.value}>
            {people.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
