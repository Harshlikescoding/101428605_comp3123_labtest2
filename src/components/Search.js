import React, { useState } from "react";

function Search({ setCityName }) {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      setCityName(city); // Send the city name to the parent component
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
