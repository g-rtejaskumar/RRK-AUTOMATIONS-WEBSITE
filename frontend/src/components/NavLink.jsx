import { NavLink as RouterNavLink } from "react-router-dom";

export function NavLink({
  className = "",
  activeClassName = "",
  pendingClassName = "",
  to,
  ...props
}) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive, isPending }) =>
        [
          className,
          isActive ? activeClassName : "",
          isPending ? pendingClassName : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
      {...props}
    />
  );
}