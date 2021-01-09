"use scrict";

const numberOfFilms = prompt("Сколько фильмов уже смотрели?");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const lastFilm = prompt("Один из последних просмотренных фильмов?");
const mark1 = prompt("На сколько оцените его?");
const preFilm = prompt("Один из последних просмотренных фильмов?");
const mark2 = prompt("На сколько оцените его?");

personalMovieDB.movies[lastFilm] = mark1;
personalMovieDB.movies[preFilm] = mark2;

console.log(personalMovieDB);