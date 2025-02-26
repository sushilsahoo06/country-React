import "../style/style.css";

export default function Card({ flags, name, population, region, capital }) {
  return (
    
      <a href={`/country?name=${name}`} className="country-card">
        <img src={flags} alt={name} />
        <div className="card-text">
          <h3>{name}</h3>
          <p><b>Population:</b> {population.toLocaleString("en-IN")}</p>
          <p><b>Region:</b> {region}</p>
          <p><b>Capital:</b> {capital ? capital : "N/A"}</p>
        </div>
      </a>
    
  );
}

