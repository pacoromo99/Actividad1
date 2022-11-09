import TeamContainer from "./components/TeamContainer";
import TeamList from "./components/TeamList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import teams from "./data/teams";

function sumPoints(team) {
  let points = 0;
  team.actividades.forEach((actividad) => {
    console.log(actividad.puntos);
    points += actividad.puntos;
  });
  return points;
}

function App() {
  return (
    <div className="App">
      <h1>Solera Teams. Bootcamp 4</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<TeamContainer teams={teams} sumPoints={sumPoints} />}
          />
          {teams.map((team) => (
            <Route
              path={`team/${team.id}`}
              element={<TeamList team={team} sumPoints={sumPoints} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
