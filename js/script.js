"use scrict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов уже смотрели?", '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов уже смотрели?", '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const lastFilm = prompt("Один из последних просмотренных фильмов?");
		const mark = prompt("На сколько оцените его?");
		while ((lastFilm.length === 0 || lastFilm.length > 50 || lastFilm == null) && (mark.length === 0 || mark.length > 50 || mark == null)) {
			const lastFilm = prompt("Один из последних просмотренных фильмов?");
			const mark = prompt("На сколько оцените его?");
		}
		personalMovieDB.movies[lastFilm] = mark;
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count < 31 && personalMovieDB.count > 9) {
		alert("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		alert("Вы - киноман!");
	}
	else {
		alert("Произошла ошибка");
	}
}
detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB.movies);
	} else {
		console.log("I can not do this, cause DataBase is privat");
	}
}

showMyDB();

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDB.genres[i] = prompt("Ваш любимый жанр под номером " + (++i));
	}
}
writeYourGenres();