import { NavLink } from "react-router-dom";

export const ActiveLink = (props) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active" : "notActive")}
      {...props}
    ></NavLink>
  );
};
