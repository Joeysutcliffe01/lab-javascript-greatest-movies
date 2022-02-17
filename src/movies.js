function getAllDirectors(movie) {

  directors = movie.map((dir) => {
    return dir.director
  })

  return directors
    
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {

  let result = 0;

   num = arr.map((dir) => {
    
      if(dir.director === 'Steven Spielberg' && drama.genre.includes('Drama'))

      return result++
  })

  // console.log(typeof result);

  return result

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieScore) {
   let total = 0;
  
  if(movieScore.length === 0){
    return 0
  }
   
   allScores = movieScore.map((scores) => {

    return scores.score    
  })

  for(let i = 0; i < allScores.length; i++){
    total += allScores[i]
  }

  total = (total / allScores.length)

  return Math.ceil(total)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(avg) {

  let numOfDrama = 0;

  const numOf = avg.filter((drama) => {
    hasDrama = drama.genre.includes('Drama');

    // console.log(numOfDrama);

    if(hasDrama === true){
      numOfDrama++
    }

  })

  return numOfDrama
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(byYear) {
  
  const sortByYear = [...byYear].sort((a,b) => {
    return a.year < b.year;
  })

  return sortByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(alph) {

  const sortByAlph = [...alph].sort((a,b) => {
    return a.alph > b.alph;
  })

  // if(sortByAlph === String){
  //   return sortByAlph
  // }

  return sortByAlph
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
    bestYearAvg,
  };
}
