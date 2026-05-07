import axios from "axios";

const useAxiosInstance = () => {
  const instace = axios.create({
    baseURL: "http://localhost:3000",
  });
  return instace;
};
export default useAxiosInstance;
