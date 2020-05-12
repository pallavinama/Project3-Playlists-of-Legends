import React from "react";



function Nav() {
    return ( 
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand">Playlist of Legends</a>
  <form className="form-inline">
  <button class="btn btn-sm btn-outline-secondary" type="button">Champions List</button>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign in through spotify</button>
  </form>
  </nav>
    );
}


export default Nav;