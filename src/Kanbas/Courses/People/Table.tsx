import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PeopleDetails from "./Details";
import * as client from "../client";
import * as help from "../../Account/client";

export default function PeopleTable({ users: initialUsers = [] }: { users?: any[] }) {
  const { cid } = useParams();
  const [users, setUsers] = useState(initialUsers); // Use state to track users

  const fetchUsers = async () => {
    if (cid) {
      const usersInCourse = await client.findUsersForCourse(cid);
      setUsers(usersInCourse); // Update state
    } else {
      const allUsers = await help.findAllUsers();
      setUsers(allUsers); // Update state
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]); // Re-run effect when cid changes

  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName} </span>
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
