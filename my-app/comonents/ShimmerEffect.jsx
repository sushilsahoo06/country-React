// import "./style/ShimmerEffect.css"

export const ShimmerEffect = () => {
  // new array(10).fill('')
  
  return (
    <div className="countries-container">
      {
        Array.from({length:40}).map((_,index)=>(
          <div key={index} className="country-card shimmer-card"></div>
        ))
      }
    </div>
  )
}
