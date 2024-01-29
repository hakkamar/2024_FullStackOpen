const NaytaMaa = ({ luvattuMaa }) => {
  const maanKielet = luvattuMaa.languages;

  return (
    <div>
      <h3>
        {luvattuMaa.name.common} {"("}
        {luvattuMaa.translations.fin.official}
        {")"}
      </h3>
      <h4>continent: {luvattuMaa.continents}</h4>
      <h4>
        {" "}
        capital: {luvattuMaa.capital} {"("}
        lat:{" "}
        {luvattuMaa.capitalInfo.latlng !== undefined
          ? luvattuMaa.capitalInfo.latlng[0]
          : "-"}{" "}
        long:{" "}
        {luvattuMaa.capitalInfo.latlng !== undefined
          ? luvattuMaa.capitalInfo.latlng[1]
          : "-"}
        {")"}
      </h4>
      {}
      <h4>population: {luvattuMaa.population.toLocaleString("fi-FI")}</h4>
      <h2>languages: </h2>
      <div>
        {Object.values(maanKielet).map((kieli) => (
          <li key={kieli}>{kieli}</li>
        ))}
      </div>
      <br></br>
      <img
        src={luvattuMaa.flags.png}
        width="300"
        border="1"
        alt={luvattuMaa.flags.alt}
      />
    </div>
  );
};

export default NaytaMaa;
