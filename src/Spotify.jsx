const clientID = "dff5c2078e6242ce882b3bbcd1b0a52e";
const redirectURI = "https://amats817.github.io/spotify-playlist-maker/callback";
const scope = "playlist-modify-private playlist-modify-public";

export function loginToSpotify() {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scope}`;
}
