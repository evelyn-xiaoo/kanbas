import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const {pathname} = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "text-danger");
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
     {links.map((link) => (
       <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item border border-0 ${active(link)} `}> {link} </Link>
     ))}
     {currentUser && currentUser.role === "FACULTY" && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item border border-0 ${active("Users")}`}> Users </Link> )}
   </div>

);}
