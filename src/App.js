import { useState } from "react";
import axios from "axios";
import "./App.css";
import Weather from "./components/Weather";

const api_key = `e6bf9f995f0142648e7185158220912 `;
const api_method = `/current.json`;
const api_url = `http://api.weatherapi.com/v1`;
const api = `${api_url}${api_method}?key=${api_key}&q=`;
function App() {
  const [search, setSearch] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const handleSearch = (e) => {
    setSearch(e.target.value);
    switch (e.keyCode) {
      case 13:
        setIsLoading(true);
        axios
          .get(`${api} ${search}`)
          .then((response) => {
            setData(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
            setData(undefined);
            setIsLoading(false);
          });
        e.target.value = "";
        break;
    }
  };
  return (
    <div className="App" style={{ margin: "20px 0" }}>
      <input
        type="search"
        placeholder="Search country/city"
        onKeyUp={handleSearch}
      />
      {isLoading ? (
        <p>Loading data..</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        data && <Weather data={data} />
      )}
    </div>
  );
}

export default App;
