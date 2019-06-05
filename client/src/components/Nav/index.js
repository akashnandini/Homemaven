import React from "react";
import "./nav.css";


function clearStorage(){
  // remove
  console.log("clearing storage");
  localStorage.removeItem('userName');
    
     // remove all
  localStorage.clear();
}
function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary home">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">      
      <a className="navbar-brand" href="/">
        HomeMaven
      </a>
      </li>
      <li className="nav-item">
      <a className="navbar-brand" href="/search">
        Search Home
      </a>
      </li>
      <li className="nav-item">
      <a className="navbar-brand" href="/save">
        Saved Homes
      </a>
      </li>
      </ul>
      <ul className="navbar-nav">
      <li className="nav-item">
      <a className="navbar-brand" href="/contact">
        Contact
      </a>
      </li>
      <li className="nav-item">
      <a className="navbar-brand" href="/login">
        Login
      </a>
      </li>
      <li className="nav-item">
      <a className="navbar-brand" href="/" onClick={clearStorage}>
        Logout
      </a>
      {localStorage.getItem("name")?<span style={{color:"white"}}>Welcome {localStorage.getItem("name")}</span>:""}
      </li>
      </ul>
     
    </nav>
  );
}

export default Nav;
