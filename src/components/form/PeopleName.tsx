import { Input } from "@chakra-ui/react";

export type PeopleNameProps = {
  setNames: React.Dispatch<React.SetStateAction<string[]>>;
  names: string[];
  people: number;
};

export function PeopleName({ setNames, people, names }: PeopleNameProps) {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    const updatedNames = [...names];
    updatedNames[index] = e.target.value;
    setNames(updatedNames);
  };
  return (
    <>
      {Array.from({ length: people }, (_, index) => (
        <Input
          key={index}
          placeholder="Enter a name"
          onBlur={(e) => handleBlur(e, index)}
        />
      ))}
    </>
  );
}
