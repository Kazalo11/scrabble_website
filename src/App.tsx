// App.js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Home";
import { Game } from "./game/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
