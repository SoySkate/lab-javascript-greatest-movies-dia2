const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);
  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });
  return cleanList;
}
console.log(`1.A list of directors of this data is ${getAllDirectors(movies)}`);
// ---------------------------------------------------------------------------------------
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) { } (((ho faig amb arrow)))
const howManyMovies = (moviesArray) => {
  const searchSteven = moviesArray.filter((movie) => {
    return movie.director === "Steven Spielberg";
  });
  const searchDramaSteven = searchSteven.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return searchDramaSteven;
};
console.log(howManyMovies(movies));
// ---------------------------------------------------------------------------------------
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) { }
const scoresAverage = (moviesArray) => {
  const searchScore = moviesArray.map((movie) => movie.score);
  let totalScore = 0;
  searchScore.forEach((score) => {
    return (totalScore += score);
  });
  return (totalScore / searchScore.length).toFixed(2);
};

// function scoresAverage(moviesArray) {
//   return (
//     moviesArray.reduce((totalSum, currentValue) => {
//       return totalSum += currentValue.score;
//     }, 0) / moviesArray.length
//   ).toFixed(2);
// }
console.log(scoresAverage(movies));
// ---------------------------------------------------------------------------------------
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  const scores = drama.reduce((total, movie) => {
    return (total += movie.score);
  }, 0);
  const totalDramaScore = scores / drama.length;
  return totalDramaScore.toFixed(2); /////NO FUNCIONA
}
console.log(dramaMoviesScore(movies));

// ---------------------------------------------------------------------------------------
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  //    NO SE RESOLVERLO RALLADO YA
  const orderedList = moviesArray.sort((a, b) => {
    return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year;
  });
  return orderedList;
}
// console.log(orderByYear(movies));

// ---------------------------------------------------------------------------------------
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  // const orderedByAlphabet = moviesArray.sort((a, b) => {
  //   return a.title.localeCompare(b.title);
  // });
  // return orderedByAlphabet;
}
console.log(
  `Hola boy este es mi log de movies alphabet`,
  orderAlphabetically(movies)
);
// ---------------------------------------------------------------------------------------
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  //NOSE COMO SE HACE
  // const hourToMinutes = moviesArray.map((movie) => {
  //   const posicionDurationHour = parseInt(movie.duration[]) * 60;
  //   console.log('This is hours position convert',posicionDurationHour);
  //   const posicionDurationMinutes = parseInt(movie.duration[1]);
  //   return;
  // });
  // return hourToMinutes;
}
console.log("Hello I0m turning hours to minutes", turnHoursToMinutes(movies));

// ---------------------------------------------------------------------------//NOSE COMO SE HACE y NO TENGO TIEMPO ;(
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
88;
