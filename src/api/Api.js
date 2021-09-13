import axios from "axios";

export default axios.create({
  // baseURL: "https://api.vtheatres.com/vtheatre/v1",
  baseURL: "http://localhost:8080/wiseful/v2",
});
