import { Link } from "react-router-dom";
import teams from "../data/teams";
import "../styles/TeamSquare.css";
// import { useParams } from "react-router-dom";

export default function TeamSquare({ id, name, points }) {
  // const { id } = useParams();

  return (
    <Link to={`/team/${id}`}>
      <div className="square">
        <div className="name">{name}</div>
        <div className="points">{points}</div>
      </div>
    </Link>
  );
}
