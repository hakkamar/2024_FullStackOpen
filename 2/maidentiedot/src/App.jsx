import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import NaytaMaat from "./components/NaytaMaat";

import "./App.css";

function pieniksi(merkit) {
  return merkit.toLowerCase();
}

const App = () => {
  const [kaikkiMaat, setKaikkiMaat] = useState([]);
  const [hakuValue, setValue] = useState("");
  const [valittu, setValittu] = useState("");

  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

  const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  };

  useEffect(() => {
    getAll().then((initialMaat) => {
      setKaikkiMaat(initialMaat);
    });
  }, []);

  const halututMaat =
    hakuValue === ""
      ? kaikkiMaat
      : kaikkiMaat.filter((x) =>
          pieniksi(x.name.common).includes(pieniksi(hakuValue))
        );

  const handleChange = (event) => {
    //console.log("handleChange ", event.target.value);
    setValue(event.target.value);
    onSearch(event);
    setValittu("");
  };

  const onSearch = (event) => {
    event.preventDefault();
  };

  const asetaValittu = (event) => {
    setValittu(event.target.value);
  };

  /*
const kunhanKokeilen = () => {
  console.log("kunhanKokeilen");
  haeSaa()
}

  const haeSaa = (lat, lon, part) => {
    //
    // APIKey?????????
    //
    console.log('haeSaa')
    //const request = axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API key}`);
    //return request.then((response) => response.data);
  };
*/
  return (
    <div>
      <h1>Maailman maat ja niiden tiedot</h1>
      <form>
        Find Countries: <input onChange={handleChange} />
      </form>
      {hakuValue == "" ? (
        <p>Kirjoita hakuehto... </p>
      ) : (
        <NaytaMaat
          maat={halututMaat}
          handleClick={asetaValittu}
          onkoJotainValittu={valittu}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
