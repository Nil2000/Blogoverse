import React from "react";
import "./Register.css";
export default function Register() {
    return (
        <div className="login">
            <span className="loginTitle">Register</span>
            <form className="loginForm">
                <label>Username</label>
                <input
                    className="loginInput"
                    type="text"
                    placeholder="Enter your username..."
                />
                <label>Email</label>
                <input
                    className="loginInput"
                    type="text"
                    placeholder="Enter your email..."
                />
                <label>Password</label>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="Enter your password..."
                />
                <button className="loginButton">Register</button>
            </form>
            <button className="loginRegisterButton">Login</button>
        </div>
    );
}
