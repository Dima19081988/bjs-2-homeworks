function parseCount(count) {
	let parsedCount = Number.parseFloat(count);
	if (Number.isNaN(parsedCount)) {
		throw new Error("Невалидное значение")
	}
	return parsedCount;
}

function validateCount(count) {
	try {
		return parseCount(count);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (a > b + c || b > a + c || c > a + b) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}
	get perimeter() {
		return parseFloat((this.a + this.b + this.c).toFixed(3));
	}
	get area() {
		let p = this.perimeter / 2;
		let area = parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
		return area;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}