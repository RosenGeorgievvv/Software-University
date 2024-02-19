//Task: Define a class Song, which holds the following information about songs: typeList, name, and time.

// You will receive the input as an array.

// The first element n will be the number of songs. Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the last element will be typeList / "all".

// Print only the names of the songs, which have the same typeList (obtained as the last parameter). If the value of the last element is "all", print the names of all the songs.

//Solution:
function songsTask(arr) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
    
  }

  let songs = [];
  let numberOfSongs = arr.shift();
  let typeofSong = arr.pop();

  for (let i = 0; i < numberOfSongs; i++) {
    let [type, name, time] = arr[i].split("_");
    let currentSong = new Song(type, name, time);
    songs.push(currentSong);
  }
  if(typeofSong === 'all'){
    songs.forEach((i) => console.log(i.name));
  }else{
    let filtered = songs.filter((i) => i.type === typeofSong);
    filtered.forEach((i) => console.log(i.name));
  }
}
songsTask([
  3,

  "favourite_DownTown_3:14",

  "favourite_Kiss_4:16",

  "favourite_Smooth Criminal_4:01",

  "favourite",
]);
