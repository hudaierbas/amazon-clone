import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-5ac2a.cloudfunctions.net/api",
});

export default instance;

//http://localhost:5001/clone-5ac2a/us-central1/api
