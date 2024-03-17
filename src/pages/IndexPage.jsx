import React from "react";
import { Link } from "react-router-dom";
import "./IndexPage.css";

export default function IndexPage() {
  return (
    <div className='login'>
      <h1 className='login-title'>Login Page</h1>
      <Link to="/Leader"><button className='user-button'>Leader</button></Link>
      <Link to="/Member"><button className='user-button'>Member</button></Link>
    </div>
  );
      
}
