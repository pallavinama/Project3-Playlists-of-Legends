// const axios = require("axios");
// var request = require("request");

var https = require('follow-redirects').https;
var fs = require('fs');

var qs = require('querystring');

module.exports = {
  getToken: (req, res) => {
    const authorization_code = req.body.authorization_code;

    const client_id = process.env.REACT_APP_CLIENT_ID;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;
    const base64 = new Buffer(client_id + ":" + client_secret).toString(
      "base64"
    );

    var options = {
        'method': 'POST',
        'hostname': 'accounts.spotify.com',
        'path': '/api/token',
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': '__Host-device_id=AQDMsI3LtOexxy8iC8QlIoHXqxWdK7Z_CsbF80EyIJlpL3UwZ_-rx0ZkVW-KCf3S78zAwAMBgi9iqGmVNmBosPuCfhJ7bb0Ceyc'
        },
        'maxRedirects': 20
      };
      
      var req = https.request(options, function (response) {
        var chunks = [];
      
        response.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        response.on("end", function (chunk) {
          var body = Buffer.concat(chunks);
          res.json(body.toString());
        });
      
        response.on("error", function (error) {
          console.error(error);
        });
      });
      
      var postData = qs.stringify({
        'grant_type': 'authorization_code',
        'code': authorization_code,
        'redirect_uri': 'https://rocky-stream-45210.herokuapp.com/',
        'client_id': client_id,
        'client_secret': client_secret
      });
      
      req.write(postData);
      
      req.end();
  },
};
