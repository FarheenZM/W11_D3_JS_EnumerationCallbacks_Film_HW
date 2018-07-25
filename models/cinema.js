const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  return this.films.map(function(film){
    return film.title;
  })
};

Cinema.prototype.findFilmByTitle = function(title){
  return this.films.find(function(film){
    return film.title === title;
  })
};

Cinema.prototype.filterByGenre = function(genre){
  return this.films.filter(function(film){
    return film.genre === genre;
  })
};

Cinema.prototype.filmsByYear = function(year){
  return this.films.some(function(film){
    return film.year === year;
  })
};

Cinema.prototype.filmsNotForAYear = function(year){
  return this.films.every(function(film){
    return film.year !== year;
  })
};

Cinema.prototype.allFilmsOverAParticularLength = function(length){
  return this.films.every(function(film){
    return film.length > length;
  })
};

Cinema.prototype.calculateTotalRunningTime = function(){
  return this.films.reduce(function(total, film){
    console.log("total = ", total);
    console.log("film = ", film);
    return total += film.length;
  }, 0)

  // let total = 0;
  // this.films.forEach(function(film){
  //   total += film.length;
  // })
  // return total;

};

Cinema.prototype.filmsByProperty = function(propertyName, propertyValue){
  return this.films.filter(function(film){
    return film[propertyName] === propertyValue;
  })
}

module.exports = Cinema;
