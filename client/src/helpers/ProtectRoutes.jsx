import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const Location = useLocation();
  const navigate=useNavigate()
  const {  LogInStatus, token } = useSelector(
    (store) => store.userLogInDetails
  );
  console.log(LogInStatus)
  return LogInStatus === true && token != "" ? (
    children
  ) : (
  <Navigate to={"/con_access"}replace state={{path:location.pathname}} ></Navigate>
  );
};
