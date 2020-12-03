import React, { useState } from "react";
import UserService from "../../shared/apis/service/UserService.js";

export const HomeView = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const fetchDataFromExternalAPI = () => {
    UserService.searchForUser(search.toLowerCase())
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));

    /* Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLocaleLowerCase()}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error)); */
  };

  const displayData = () => {
    if (data) {
      return (
        <div>
          <h1>username: {data.username}</h1>
          <h1>email: {data.email}</h1>
          <h1>telephone: {data.telephone}</h1>
        </div>
      );
    }
  };

  return (
    <div>
      <span>search for user</span>
      <input onChange={(event) => setSearch(event.target.value)} />

      <br />
      <h1>I am the home</h1>
      <button onClick={() => fetchDataFromExternalAPI()}>Make API call</button>
      {displayData()}
    </div>
  );
};
