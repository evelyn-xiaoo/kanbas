import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="alice" placeholder="username" id="wd-username" className="form-control mb-2"/>
      <input defaultValue="123" placeholder="password" type="password" id="wd-password" className="form-control mb-2"/>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="form-control mb-2"/>
      <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="form-control mb-2"/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" className="form-control mb-2"/>
      <input defaultValue="alice@wonderland.com" type="email" id="wd-email" className="form-control mb-2"/>
      <select defaultValue="USER" id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link to="/Kanbas/Account/Signin" className="btn btn-primary w-100">Sign out</Link>
    </div>
);}
