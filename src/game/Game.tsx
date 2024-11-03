import { useLocation } from "react-router-dom";

export function Game() {
  const location = useLocation();
  const { names } = location.state || { names: [] };
  return (
    <div>
      <h1>Create Game</h1>
      <h2>Players:</h2>
      <ul>
        {names.map((name: string, index: number) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
