
export default function DropDown() {
  return (
    <div className="btn-group">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Filter by Region
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Africa</a></li>
          <li><a className="dropdown-item" href="#">America</a></li>
          <li><a className="dropdown-item" href="#">Asia</a></li>
          <li><a className="dropdown-item" href="#">Europe</a></li>
          <li><a className="dropdown-item" href="#">Oceania</a></li>
        </ul>
      </div>
  )
}
