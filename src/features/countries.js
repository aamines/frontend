import axios from "axios";

export default axios.create({
  baseURL: "https://www.universal-tutorial.com/api/countries/",
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_COUNTRIES_API_KEY,
  },
});
