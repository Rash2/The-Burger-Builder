import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-b06aa.firebaseio.com/"
});

export default instance;
