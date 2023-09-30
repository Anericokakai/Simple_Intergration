import { NavLink } from "react-router-dom";

export const ActiveLink = (props) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active" : "notActive")}
      {...props}
    ></NavLink>
  );
};



// !show or hide passwords
export const showPassword = (input) => {
  if (input.type === "password") {
    return (input.type = "text");
  } else {
    input.type = "password";
  }
};
