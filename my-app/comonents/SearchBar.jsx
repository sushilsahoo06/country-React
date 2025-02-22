import "../style/style.css"
export default function SearchBar() {
  return (
    <div className="input-group flex-nowrap">
      <span className="input-group-text" id="addon-wrapping">
        <i className="fa-solid fa-magnifying-glass" ></i>
      </span>
        <input type="text" className="form-control" placeholder="Search for a country.." aria-label="Username" aria-describedby="addon-wrapping"/>       
    </div>
  );
}
