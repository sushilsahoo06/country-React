export default function DropDown({ setQuery }) {
  const handleSelect = (e) => {
    const region = e.target.getAttribute("data-value"); // Get region from data-value
    if (region) setQuery(region.toLowerCase()); // Set query in lowercase
  };

  return (
    <div className="btn-group">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by Region
      </button>
      <ul className="dropdown-menu" onClick={handleSelect}>
        <li><a className="dropdown-item" href="#" data-value="Africa">Africa</a></li>
        <li><a className="dropdown-item" href="#" data-value="Americas">Americas</a></li>
        <li><a className="dropdown-item" href="#" data-value="Asia">Asia</a></li>
        <li><a className="dropdown-item" href="#" data-value="Europe">Europe</a></li>
        <li><a className="dropdown-item" href="#" data-value="Oceania">Oceania</a></li>
      </ul>
    </div>
  );
}

