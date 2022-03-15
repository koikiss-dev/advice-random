import { useState, useEffect } from "react";
import axios from "axios";
const useRandom = () => {
  const [data, useData] = useState([]);
  const RandomAdvice = async () => {
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    const result = await data.slip;
    console.log(result);
    useData(result);
  };
  useEffect(() => {
    RandomAdvice();
  }, []);
  return [data, RandomAdvice];
};

export default useRandom;
