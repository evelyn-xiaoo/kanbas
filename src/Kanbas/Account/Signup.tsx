import React, { useState } from "react";
import * as client from "./client";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import e from "express";

export default function Signup() {
    const [userType, setUserType] = useState<string>("student");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [verifyPassword, setVerifyPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();
    
    const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUserType(e.target.value);
    };
    const [credentials, setCredentials] = useState<any>({});

    const signup = async () => {
      const user = await client.signup(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      navigate("/Kanbas/Account/Profile");
    };

    const validateForm = () => {

        if (!username || !password || !verifyPassword || !firstName || !lastName || !email || !dob ) {
            setError("All fields are required.");
            return false;
        }
        
        if (password !== verifyPassword) {
            setError("Passwords do not match.");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format.");
            return false;
        }

        setCredentials({...credentials, username: username});
        setCredentials({...credentials, password: password});

        /*
        setCredentials({...credentials, userType: userType});
        setCredentials({...credentials, firstName: firstName});
        setCredentials({...credentials, lastName: lastName});
        setCredentials({...credentials, dob: dob});
        setCredentials({...credentials, email: email});
        */
       
        // push user to database and log into dashboard
        signup();
    };


    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <form onSubmit={validateForm}>
                <input 
                    id="wd-username"
                    placeholder="Username"
                    className="form-control mb-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input 
                    id="wd-password"
                    placeholder="Password"
                    type="password"
                    className="form-control mb-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input 
                    id="wd-verify-password"
                    placeholder="Verify Password"
                    type="password"
                    className="form-control mb-2"
                    value={verifyPassword}
                    onChange={(e) => setVerifyPassword(e.target.value)}
                    required
                />
                <input 
                    id="wd-first-name"
                    placeholder="First Name"
                    className="form-control mb-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input 
                    id="wd-last-name"
                    placeholder="Last Name"
                    className="form-control mb-2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input 
                    id="wd-email"
                    placeholder="Email"
                    type="email"
                    className="form-control mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    id="wd-dob"
                    placeholder="Date of Birth"
                    type="date"
                    className="form-control mb-2"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />
                <select 
                    id="wd-user-type" 
                    className="form-control mb-2"
                    value={userType}
                    onChange={handleUserTypeChange}
                >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                </select>
                <button type="submit" className="btn btn-primary w-100">
                    Sign in 
                </button>
                
            </form>
        </div>
    );
}
function dispatch(arg0: { payload: any; type: "account/setCurrentUser"; }) {
  throw new Error("Function not implemented.");
}

