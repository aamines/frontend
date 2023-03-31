import axios from "axios";

export default axios.create({
  baseURL: "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_COUNTRIES_API_KEY}`,
    "X-RapidAPI-Host": "ajayakv-rest-countries-v1.p.rapidapi.com",
  },
});
