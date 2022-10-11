//assinging endpoint

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "850667fec90641a8b8d1174e0f979d68";

//scopes

//this scopes are allowing us to crud functionalities it allow user only to read not able to delete

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
//to pull the access token from url
export const getTokenFromUrl =() =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial , item) => {
        //accesstoken = key&name = ldkfodnvodflaskm ------> substring , split functionalities
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}
//one line to login url for our application 
//token is a string that represents the authentication
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dailog=true`;