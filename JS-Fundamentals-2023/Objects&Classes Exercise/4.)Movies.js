//Task: Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:

// · "addMovie {movie name}" – add the movie

// · "{movie name} directedBy {director}" – check if the movie exists and then add the director

// · "{movie name} onDate {date}" – check if the movie exists and then add the date

// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.

//Solution:

function manageMovies(arr) {
  let movies = [];

  for (let command of arr) {
    if (command.includes("addMovie")) {
      let movieName = command.split("addMovie ")[1];
      let movieObj = { name: movieName };
      movies.push(movieObj);
    } else if (command.includes("directedBy")) {
      let [movieName, director] = command.split(" directedBy ");
      //if statement for arrays
      let movie = movies.find((movie) => movie.name == movieName);

      if (movie) {
        movie.director = director;
      }
    } else if (command.includes("onDate")) {
      let [movieName, date] = command.split(" onDate ");
      //if statement for arrays
      let movie = movies.find((movie) => movie.name == movieName);

      if (movie) {
        movie.date = date;
      }
    }
  }
  for (let movie of movies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}
manageMovies([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);
