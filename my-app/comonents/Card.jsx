import "../style/style.css";
import {Link} from 'react-router-dom'
export default function Card({ flags, name, population, region, capital,data}) {
  return (
    <Link to={`/country?name=${name}`} className="country-card" state={data}>
      <img src={flags} alt={name} />
      <div className="card-text">
        <h3>{name}</h3>
        <p><b>Population:</b> {population.toLocaleString("en-IN")}</p>
        <p><b>Region:</b> {region}</p>
        <p><b>Capital:</b> {capital ? capital : "N/A"}</p>
      </div>

    </Link>
    
  );
}

