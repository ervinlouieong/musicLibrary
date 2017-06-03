function library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function playlist(name) {
  this.name = name;
  this.tracks = [];
}

function track(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}

let musicLibrary = new library("myLibrary", "ervin");

let playlist1 = new playlist("playlist1");

let track1 = new track("track1", 3, 200);
let track2 = new track("track2", 4, 180);
let track3 = new track("track3", 1, 240);

musicLibrary.playlists.push(playlist1);
playlist1.tracks.push(track1, track2, track3);

playlist.prototype.overallRating = function() {
  let ratings = this.tracks.map((track) => {
    return track.rating;
  });
  let sumRatings = ratings.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  let avgRating = sumRatings/ratings.length;
  avgRating = Math.round(avgRating * 100) / 100;
  return avgRating;
}

playlist.prototype.totalDuration = function() {
  let durations = this.tracks.map((track) => {
    return track.length;
  });
  let totalDuration = durations.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return totalDuration;
}

console.log(musicLibrary);
console.log("==============================");
console.log(playlist1);
console.log("==============================");
console.log(`overall rating (${playlist1.name}) : ${playlist1.overallRating()}`); 
console.log("==============================");
console.log(`total duration (${playlist1.name}) : ${playlist1.totalDuration()}`);
