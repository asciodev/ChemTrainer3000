function TemperatureCard({ min_temp } : { min_temp : number}) {
  function celsius(temp: number) {
    return temp - 273.15;
  }
  return <div className="reagent temperature card">
    <span className="name">Min Temp</span>
    <hr></hr>
    <span className="number"><ruby>{min_temp} K<rp>(</rp><rt>{celsius(min_temp)}°C</rt><rp>)</rp></ruby></span>
  </div>
}

export default TemperatureCard
