import { use } from "react";
import { AuthContex } from "../contex/AuthContex";

const useAuth = () => {
  const userInfo = use(AuthContex);
  return userInfo;
};
export default useAuth;
