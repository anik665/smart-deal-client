import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const { user, signOuts } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const axiosInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        console.log("intercepted request", config);
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user?.accessToken}`;
          return config;
        }
      },
    );
    //response interceptor
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const status = error.response.status;
        console.log("intercepted response error", error);

        if (status === 401 || status === 403) {
          signOuts();
          navigate("/resister");
        }
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(axiosInterceptor);
    };
  }, [user, signOuts, navigate]);
  return axiosInstance;
};
export default useAxiosSecure;
