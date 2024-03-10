"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, album, tracks) {
    let song;
    song = {
        song_artist: artist,
        song_album: album,
        song_tracks: tracks,
    };
    return song;
}
let song1 = make_album("artist1", "album1");
console.log(song1.song_artist + ", " + song1.song_album);
let song2 = make_album("artist2", "album2");
console.log(song2.song_artist + ", " + song2.song_album);
let song3 = make_album("artist3", "album3");
console.log(song3.song_artist + ", " + song3.song_album);
let song4 = make_album("artist4", "album4", 5);
console.log(song4.song_artist + ", " + song4.song_album + ", " + song4.song_tracks);
