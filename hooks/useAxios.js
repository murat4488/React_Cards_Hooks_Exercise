import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { v1 as uuid } from "uuid";

const useAxios = (baseURL) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  //const [url, setUrl] = useState(baseURL);

  async function fetchData(name) {
    let url = !name ? baseURL : baseURL + name;
    //setUrl();

    try {
      const res = await axios.get(url);
      setResponse((oldState) => [...oldState, { ...res.data, id: uuid() }]);
    } catch (error) {
      setError(error);
    }
  }

  return [response, fetchData];
};
export default useAxios;
