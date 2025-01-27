class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;

	}
	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCountr) {
		super(author, name, releaseDate, pagesCountr);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		let bookIndex = this.books.findIndex(book => book.name === bookName);
		if (bookIndex !== -1) {
			let bookFromLibrary = this.books[bookIndex];
			this.books.splice(bookFromLibrary, 1);
			return bookFromLibrary;
		} else {
			return null;
		}
	}
}

/**/

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}
	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		}
		if (!this.marks[subject]) {
			this.marks[subject] = [];
		}
		this.marks[subject].push(mark);
	}
	getAverageBySubject(subject) {
		if (this.marks.hasOwnProperty(subject) === false) {
			return 0;
		}
		return this.marks[subject].reduce((acc, ind) => acc + ind, 0) / this.marks[subject].length;
	}

	getAverage() {
		if (Object.keys(this.marks).length === 0) {
			return 0;
		};
		let subjects = Object.keys(this.marks);
		let averageMark = 0;
		for (let subject of subjects) {
			averageMark += this.getAverageBySubject(subject);
		}
		return averageMark / subjects.length;
	}
}