import React from "react";
import axios from "axios";

const SpotifyPlaylist = () => {
    return (
        <>
        <div className="row">
        <div className="col">
          <iframe
            // src="https://open.spotify.com/embed/playlist/2DsYfCPWDxZtFzHRj9mO4h"
            src="https://embed.spotify.com/follow/1/?uri=spotify:artist:4ikPJGH7I7IyhdBJs1GMhh&size=detail&theme=light"
            width="500"
            height="75"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <iframe
            src="https://open.spotify.com/embed/playlist/2DsYfCPWDxZtFzHRj9mO4h"
            // src="https://embed.spotify.com/follow/1/?uri=spotify:artist:4ikPJGH7I7IyhdBJs1GMhh&size=detail&theme=light"
            width="500"
            height="500"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div> 
      </>
    )
};

export default SpotifyPlaylist;