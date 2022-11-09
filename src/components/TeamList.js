import Actividad from "./Actividad";
import { useLocation, Link } from "react-router-dom";

export default function TeamList({ team, sumPoints }) {
  // const query = new URLSearchParams(useLocation().search);
  // const id = query.get('id');
  // const team = teams[id];

  return (
    <div className="list">
      <h4><Link to="/">Volver</Link></h4>
      <table>
        <tr>
          <th className="team">{team.name}</th>
          <th className="team-points">{sumPoints(team)} puntos</th>
        </tr>
        {team.actividades.map((actividad) => (
          <Actividad name={actividad.name} points={actividad.puntos} />
        ))}
      </table>
    </div>
  );
}
