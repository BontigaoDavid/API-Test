// https://api.songkick.com/api/3.0/events.json?apikey={your_api_key}
// https://api.spotify.com/v1/search?q=sanctuary

var spotifyClientId = "8f07791019f9423caf915b8b6c00c3b7";
var spotifySecreyKey = "64e9950cd61f47b799b0002d864b61d5";
var tempAccessToken = "BQCtFx51zrTxklP31x-WhaAevCFBxEOLo8NdBSEYJ4SxfEIhY9rStSQ83VEABA2o-8-V_9gwTOiD9LegjMpgDby3G3CuOVq1ziP2_jbpTVNoVe0hfmsVdg-TuPmn8Z_DbPcPf31a_4UX";

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://accounts.spotify.com/api/token",
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json"
    },
    "data": {
      "client_id": spotifyClientId,
      "client_secret": spotifySecreyKey,
      "grant_type": "client_credentials"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

// $.ajax({
//     async: true,
//     crossDomain: true,
//     url: "https://accounts.spotify.com/api/token",
//     method: "POST",
//     headers: {'content-type': 'application/x-www-form-urlencoded'},
//     data: {
//       grant_type: 'client_credentials',
//       client_id: spotifyClientId,
//       client_secret: spotifySecreyKey
//     }
// }).done(function(response) {
//     console.log("access token response: " +response);
// })


// $.ajax({
//     url: "https://api.spotify.com/v1/search?q=sanctuary",
//     method: "GET",
//     headers:{"Authorization": "Bearer " + spotifyClientId+":"+spotifySecreyKey},
//     data: {
//         "command": "on"
//     },   
// }).done(function(response) {
//     console.log("search response: " +response);
// })

// curl --location --request POST "https://accounts.spotify.com/api/token" \
//   --header "Authorization: Basic {{client_credentials}}" \
//   --data "grant_type=refresh_token&refresh_token="