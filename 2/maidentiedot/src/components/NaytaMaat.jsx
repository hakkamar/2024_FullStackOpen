import NaytaMaa from "./NaytaMaa";

function pieniksi(merkit) {
  return merkit.toLowerCase();
}

const NaytaMaat = ({ maat, handleClick, onkoJotainValittu }) => {
  //console.log("maita: ", maat);
  const klikattuMaa =
    onkoJotainValittu === ""
      ? null
      : maat.filter((x) =>
          pieniksi(x.name.common).includes(pieniksi(onkoJotainValittu))
        );

  switch (true) {
    case maat.length == 0:
      return <p> hakuehdolla ei löydy mitään... </p>;
    case maat.length == 1 || onkoJotainValittu !== "":
      if (maat.length == 1) {
        return (
          <div>
            <NaytaMaa luvattuMaa={maat[0]} />
          </div>
        );
      } else {
        return (
          <div>
            <NaytaMaa luvattuMaa={klikattuMaa[0]} />
          </div>
        );
      }
    case maat.length < 11:
      return (
        <div>
          {maat.map((x) => (
            <div key={x.name.common}>
              <div>
                {x.name.common} {}
                <button onClick={handleClick} value={x.name.common}>
                  Show
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    default:
      return <p>Too many matches, specify another filtter</p>;
  }
};

export default NaytaMaat;
