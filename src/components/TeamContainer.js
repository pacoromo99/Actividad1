import TeamSquare from "./TeamSquare";

export default function TeamContainer({ teams, sumPoints }) {
  return (
    <div>
      <div className="square-container">
        {teams.map((team) => (
          <TeamSquare id={team.id} name={team.name} points={sumPoints(team)} route />
        ))}
      </div>
    </div>
  );
}
