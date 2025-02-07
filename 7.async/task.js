class AlarmClock {
	constructor(alarmCollection, intervalId) {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === undefined || callback === undefined) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		if (this.alarmCollection.find(item => item.time === time)) {
			console.warn("Уже присутствует звонок на это же время");
			return;
		}
		this.alarmCollection.push({
			time,
			callback,
			canCall: true,
		})
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
	}

	getCurrentFormattedTime() {
		let date = new Date();
		return `${date.getHours()}:${date.getMinutes()}`;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}
		this.intervalId = setInterval(() => {
			let currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(item => {
				if (item.time === currentTime && item.canCall) {
					item.canCall = false;
					item.callback;
				}
			})
		}, 1000)
	}

	stop() {
		if (this.intervalId === null) {
			return;
		}
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(item => item.canCall === true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}