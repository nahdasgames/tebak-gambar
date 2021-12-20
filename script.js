const hasil = document.querySelectorAll('.jwb');
const menu = document.querySelector('.menu');
const btnHewan = document.querySelector('.hewan');
const btnBuah = document.querySelector('.buah');
const btnNext = document.querySelectorAll('.btn-next');
const btnPrev = document.querySelectorAll('.btn-prev');
const btnKeluar = document.querySelectorAll('.btn-close');
const soalHewan = document.querySelectorAll('.soal-hewan');
const hwSatu = document.querySelector('#hw-satu');
const hwDua = document.querySelector('#hw-dua');
const hwTiga = document.querySelector('#hw-tiga');
const hwEmpat = document.querySelector('#hw-empat');
const soalBuah = document.querySelectorAll('.soal-buah');
const buSatu = document.querySelector('#bu-satu');
const buDua = document.querySelector('#bu-dua');
const buTiga = document.querySelector('#bu-tiga');
const buEmpat = document.querySelector('#bu-empat');
const facts = document.querySelectorAll('.facts');
const btnClsFacts = document.querySelectorAll('.close-facts');
const nama = document.querySelectorAll('.nama');
const github = document.querySelector('.github');

btnHewan.addEventListener('click', function () {
	menu.setAttribute("hidden", true);
	hwSatu.removeAttribute("hidden");
})

btnBuah.addEventListener('click', function () {
	menu.setAttribute("hidden", true);
	buSatu.removeAttribute("hidden");
})

function getHasil(e) {
	const jawaban = e.target.value;
	if (jawaban === 'benar') {
		for (let fact of facts) {
			fact.removeAttribute("hidden");
		}

		for (let namas of nama) {
			namas.innerHTML = e.target.textContent;
		}
	} else {
		alert('anda salah');
	};
}

btnClsFacts.forEach(function (close) {
	close.addEventListener('click', function () {
		for (let fact of facts) {
			fact.setAttribute("hidden", true);
		}
	})
})


hasil.forEach(function (pil) {
	pil.addEventListener('click', getHasil);
})

btnKeluar.forEach(function (keluar) {
	keluar.addEventListener('click', function () {
		menu.removeAttribute("hidden");

		for (let hewan of soalHewan) {
			hewan.setAttribute("hidden", true);
		}

		for (let buah of soalBuah) {
			buah.setAttribute("hidden", true);
		}
	})
})

function nextPrev(hilang, muncul) {
	hilang.setAttribute("hidden", true);
	muncul.removeAttribute("hidden");
	for (let fact of facts) {
		fact.setAttribute("hidden", true);
	}
}

btnNext.forEach(function (next) {
	next.addEventListener('click', function () {
		if (next.value === "next1") {
			nextPrev(hwSatu, hwDua);
		} else if (next.value === "next2") {
			nextPrev(hwDua, hwTiga);
		} else if (next.value === "next3") {
			nextPrev(hwTiga, hwEmpat);
		} else if (next.value === "next4") {
			nextPrev(hwEmpat, hwSatu);
		}
	})
})

btnPrev.forEach(function (prev) {
	prev.addEventListener('click', function () {
		if (prev.value === "prev1") {
			nextPrev(hwSatu, hwEmpat);
		} else if (prev.value === "prev2") {
			nextPrev(hwDua, hwSatu);
		} else if (prev.value === "prev3") {
			nextPrev(hwTiga, hwDua);
		} else if (prev.value === "prev4") {
			nextPrev(hwEmpat, hwTiga);
		}
	})

})

btnNext.forEach(function (next) {
	next.addEventListener('click', function () {
		if (next.value === "next5") {
			nextPrev(buSatu, buDua);
		} else if (next.value === "next6") {
			nextPrev(buDua, buTiga);
		} else if (next.value === "next7") {
			nextPrev(buTiga, buEmpat);
		} else if (next.value === "next8") {
			nextPrev(buEmpat, buSatu);
		}
	})
})

btnPrev.forEach(function (prev) {
	prev.addEventListener('click', function () {
		if (prev.value === "prev5") {
			nextPrev(buSatu, buEmpat);
		} else if (prev.value === "prev6") {
			nextPrev(buDua, buSatu);
		} else if (prev.value === "prev7") {
			nextPrev(buTiga, buDua);
		} else if (prev.value === "prev8") {
			nextPrev(buEmpat, buTiga);
		}
	})

})