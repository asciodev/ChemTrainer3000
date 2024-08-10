function TemperatureCard({ t0temp } : { t0temp : string}) {
  function kelvin(temp: string) {
    const re = temp.match(/T0C \+ (\d+)/);
    return re ? Number(re[1]) + 273.15 + " K" : "???";
  }
  function celsius(temp: string) {
    const re = temp.match(/T0C \+ (\d+)/);
    return re ? Number(re[1]) + "°C" : "???"
  }
  return <div className="reagent temperature card">
    <span className="name">Min Temp</span>
    <hr></hr>
    <span className="number"><ruby>{kelvin(t0temp)}<rp>(</rp><rt>{celsius(t0temp)}</rt><rp>)</rp></ruby></span>
  </div>
}

export default TemperatureCard
