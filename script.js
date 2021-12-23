const hasil = document.querySelectorAll('.jwb');
const menu = document.querySelector('.menu');
const btnHewan = document.querySelector('.hewan');
const btnBuah = document.querySelector('.buah');
const btnNext = document.querySelectorAll('.btn-next');
const btnPrev = document.querySelectorAll('.btn-prev');
const btnKeluar = document.querySelectorAll('.btn-close');
const gambar = document.querySelectorAll('.gambar');
const soalHewan = document.querySelectorAll('.soal-hewan');
const hwSatu = document.querySelector('#hw-satu ');
const hwDua = document.querySelector(' #hw-dua ');
const hwTiga = document.querySelector('#hw-tiga ');
const hwEmpat = document.querySelector('#hw-empat ');
const soalBuah = document.querySelectorAll('.soal-buah');
const buSatu = document.querySelector('#bu-satu');
const buDua = document.querySelector('#bu-dua');
const buTiga = document.querySelector('#bu-tiga');
const buEmpat = document.querySelector('#bu-empat');
const facts = document.querySelectorAll('.facts');
const btnClsFacts = document.querySelectorAll('.close-facts');
const nama = document.querySelectorAll('.nama');

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

function nextPrev(hilang, pictHilang, muncul, pictMuncul) {
	hilang.setAttribute("hidden", true);
	pictHilang.style.animation = "slidePictHilang .5s";
	pictHilang.setAttribute("hidden", true);

	muncul.removeAttribute("hidden");
	pictMuncul.style.animation = "slidePictMuncul .5s";
	for (let fact of facts) {
		fact.setAttribute("hidden", true);
	}
}

btnNext.forEach(function (next) {
	next.addEventListener('click', function () {
		if (next.value === "next1") {
			// gambar[0].style.animation = "slidePictHilang .7s";
			// gambar[1].style.animation = "slidePictMuncul .7s";
			nextPrev(hwSatu, gambar[0], hwDua, gambar[1]);
		} else if (next.value === "next2") {
			// gambar[1].style.animation = "slidePictHilang .7s";
			// gambar[2].style.animation = "slidePictMuncul .7s";
			nextPrev(hwDua, gambar[1], hwTiga, gambar[2]);
		} else if (next.value === "next3") {
			// gambar[2].style.animation = "slidePictHilang .7s";
			// gambar[3].style.animation = "slidePictMuncul .7s";
			nextPrev(hwTiga, gambar[2], hwEmpat, gambar[3]);
		} else if (next.value === "next4") {
			// gambar[3].style.animation = "slidePictHilang .7s";
			// gambar[0].style.animation = "slidePictMuncul .7s";
			nextPrev(hwEmpat, gambar[3], hwSatu, gambar[0]);
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