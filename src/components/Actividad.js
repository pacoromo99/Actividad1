import "../styles/Actividad.css";

export default function Actividad({ name, points }) {
  return (
    <tr>
      <td className="name">
        {name} 
      </td>
      <td className="puntos">
        {points} puntos
      </td>
    </tr>
  );
}
