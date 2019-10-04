// https://api.songkick.com/api/3.0/events.json?apikey={your_api_key}
// https://api.spotify.com/v1/search?q=sanctuary




 var tempAccessToken = "BQCtFx51zrTxklP31x-WhaAevCFBxEOLo8NdBSEYJ4SxfEIhY9rStSQ83VEABA2o-8-V_9gwTOiD9LegjMpgDby3G3CuOVq1ziP2_jbpTVNoVe0hfmsVdg-TuPmn8Z_DbPcPf31a_4UX";

var firebaseConfig = {
    apiKey: "AIzaSyAou9EbBPi4eOU0V7oAWqJ1gEsaWgqft10",
    authDomain: "api-keys-1f80d.firebaseapp.com",
    databaseURL: "https://api-keys-1f80d.firebaseio.com",
    projectId: "api-keys-1f80d",
    storageBucket: "",
    messagingSenderId: "803840728508",
    appId: "1:803840728508:web:4164b4960a51dd14681fb9",
    measurementId: "G-T5L4502HKC"
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

//   database.ref().push("test");
//   database.ref().push("test2");

var spotifyClientId;
var spotifySecreyKey;

database.ref().once("value", function(snapshot) {

    spotifyClientId = snapshot.child('spotify-client-id').val();
    spotifySecreyKey = snapshot.child('spotify-secret-key').val();

    console.log(spotifyClientId);
    console.log(spotifySecreyKey);
    
    $.ajax({
        url: "https://accounts.spotify.com/api/token",

        method: "POST",
        beforeSend: setHeader,
        form: {
          "grant_type": 'client_credentials'
        },

    }).done(function(response) {
        console.log(response);
        console.log("responded");   
    })
});

function setHeader(xhr) {
    xhr.setRequestHeader("Authorization" , 'Basic ' + spotifyClientId + ":" + spotifySecreyKey);
}
//ajax object using temporary generated key
// $.ajax({
//     url: "https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V" ,
//     method: "GET",
//     headers:{"Authorization": "Bearer " + "BQAnbcr29gAv9ejmCEbDOFgyC_zWt4lSeIoHaVHH2Cn4G2MmpPbVQAFuSZVre9LkVBRsuxz_v1AHu0SvnuF15xA0idDv8XipzQJwrSKJ7n3FYG1vjir33yR_sfVT2rhz6xkihBuNw-EIZUsSYeHghQ"},
// })
// .done(function(response) {
//     console.log(response);
//     console.log("api object with temp key^^^");
// })




// curl --location --request POST "https://accounts.spotify.com/api/token" \
//   --header "Authorization: Basic {{client_credentials}}" \
//   --data "grant_type=refresh_token&refresh_token="


database.ref().once("value", function(snapshot) {
    var data = snapshot.child("objects").child("data").val();
    console.log(data);
});