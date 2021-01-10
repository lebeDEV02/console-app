"use scrict";


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt("Сколько фильмов уже смотрели?", '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов уже смотрели?", '');
		}
	},
	detectPersonalLevel: function () {
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
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const lastFilm = prompt("Один из последних просмотренных фильмов?");
			const mark = prompt("На сколько оцените его?");
			while ((lastFilm.length === 0 || lastFilm.length > 50 || lastFilm == null) && (mark.length === 0 || mark.length > 50 || mark == null)) {
				const lastFilm = prompt("Один из последних просмотренных фильмов?");
				const mark = prompt("На сколько оцените его?");
			}
			personalMovieDB.movies[lastFilm] = mark;
		}
	},
	detectPersonalLevel: function () {
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
	},
	showMyDB: function () {
		if (personalMovieDB.privat == false) {
			console.log(personalMovieDB.movies);
		} else {
			console.log("I can not do this, cause DataBase is privat");
		}
	},
	writeYourGenres: function () {
		for (let i = 0; i < 3; i++) {
			personalMovieDB.genres[i] = prompt("Ваш любимый жанр под номером " + (i + 1));
			if (personalMovieDB.genres[i] === null || personalMovieDB.genres[i] === "") {
				i--;
			}
		}
		personalMovieDB.genres.forEach((item, q) => {
			console.log(`Любимый жанр по номеру ${q + 1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat === false) {
			personalMovieDB.privat = true;
		} else {
			personalMovieDB.privat = false;
		}
	}
};
personalMovieDB.writeYourGenres();
