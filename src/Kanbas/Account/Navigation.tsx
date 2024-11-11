import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const {pathname} = useLocation()
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to={`/Kanbas/Account/Signin`} className={`list-group-item border border-0 ${pathname.includes("Signin") ? "active" : "text-danger"}`} > Signin  </Link> <br/>
      <Link to={`/Kanbas/Account/Signup`} className={`list-group-item border border-0 ${pathname.includes("Signup") ? "active" : "text-danger"}`}> Signup  </Link> <br/>
      <Link to={`/Kanbas/Account/Profile`} className={`list-group-item border border-0 ${pathname.includes("Profile") ? "active" : "text-danger"}`}> Profile </Link> <br/>
    </div>
);}
