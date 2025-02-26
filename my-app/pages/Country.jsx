import "../style/style.css";
function Country({key,NativeName}) {
  return (
    <main>
      <button className="back-button" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
      </button>
      <div className="country-details">
        <img src="https://flagcdn.com/gs.svg" alt="Iceland Flag" className="country-details-img" />
        <div className="detail-text-container">
          <h1>Iceland</h1>
          <div className="detail-text">
            <p><b>Native Name:</b> {NativeName}</p>
            <p><b>Population:</b> 368,792</p>
            <p><b>Region:</b> Northern Europe</p>
            <p><b>Capital:</b> Reykjavík</p>
            <p><b>Top Level Domain:</b> .is</p>
            <p><b>Currencies:</b> Icelandic Króna (ISK)</p>
            <p><b>Language:</b> Icelandic</p>
          </div>
          <div className="border-country">
            <p><b>Border Countries:</b> None (Island Nation)</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Country;



