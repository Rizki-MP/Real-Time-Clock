const hourEl = document.getElementById('hour')
const minutesEl = document.getElementById('minutes')
const secondEl = document.getElementById('second')
const ampmEl = document.getElementById('ampm')

function updateClock() {
	const h = new Date().getHours()
	const m = new Date().getMinutes()
	const s = new Date().getSeconds()
	ampm = "AM"

	if (h > 12) {
		ampm = "PM"
		ampmEl.innerHTML = ampm
	}

	hourEl.innerHTML = h
	minutesEl.innerHTML = m
	secondEl.innerHTML = s

	setTimeout(function(){
		updateClock()
	}, 1000)
}

updateClock()