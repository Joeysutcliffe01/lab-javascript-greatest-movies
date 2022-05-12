function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramasBySpielberg = movies.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return dramasBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;

  const moviesThatHaveScores = movies.filter(
    (movie) => movie.score !== undefined
  );
  const averageScore =
    moviesThatHaveScores.reduce((totalScore, movie) => {
      return totalScore + movie.score;
    }, 0) / movies.length;

  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const onlyDramas = movies.filter((movie) => movie.genre.includes('Drama'));
  return scoresAverage(onlyDramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const copy = deepCopy(movies);
  return copy.sort((movie1, movie2) => {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.year < movie2.year) {
      return -1;
    } else {
      if (movie1.title > movie2.title) {
        return 1;
      } else if (movie1.title < movie2.title) {
        return -1;
      }
      return 0;
    }
  });
}

function deepCopy(element) {
  return JSON.parse(JSON.stringify(element));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const copy = deepCopy(movies);
  const sorted = copy.sort((movie1, movie2) => {
    if (movie1.title > movie2.title) {
      return 1;
    } else if (movie1.title < movie2.title) {
      return -1;
    }
    return 0;
  });
  const mapped = sorted.map((movie) => movie.title);
  return mapped.filter((_, index) => index <= 19);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  function convertHours(hourString) {
    let calculateHour = hourString.split('h');

    return Number(calculateHour[0]) * 60;
  }

  function convertMinutes(minuteString) {
    let calculateMinutes = minuteString.split('min');

    return Number(calculateMinutes[0]);
  }

  function convertDuration(duration) {
    let timePieces = duration.split(' ');

    let minutes = timePieces.reduce((sum, onePiece) => {
      if (onePiece.includes('h')) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);

    return minutes;
  }

  let moviesHoursToMinArr = movies.map(function (eachMovie) {
    let fixedMovie = JSON.parse(JSON.stringify(eachMovie));

    fixedMovie.duration = convertDuration(fixedMovie.duration);
    return fixedMovie;
  });

  return moviesHoursToMinArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length) return null;

  let masterObject = {};

  movies.forEach((eachMovie) => {
    if (!masterObject[eachMovie.year]) {
      masterObject[eachMovie.year] = [eachMovie];
    } else {
      masterObject[eachMovie.year].push(eachMovie);
    }
  });

  let highest = 0;
  let theActualYear;

  for (let theYear in masterObject) {
    if (ratesAverage(masterObject[theYear]) > highest) {
      highest = ratesAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  return `The best year was ${theActualYear} with an average rate of ${highest}`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
