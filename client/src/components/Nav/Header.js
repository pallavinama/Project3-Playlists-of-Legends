import React from "react";



function Nav() {
    return ( 
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand">Playlist of Legends</a>
  <form className="form-inline">
    
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign in through spotify</button>
  </form>
  </nav>
    );
}


export default Nav;