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
	pictHilang.setAttribute("hidden", true);

	muncul.removeAttribute("hidden");
	pictMuncul.removeAttribute("hidden");
	pictMuncul.style.animation = "slidePictHilang .5s";
	for (let fact of facts) {
		fact.setAttribute("hidden", true);
	}
}

btnNext.forEach(function (next) {
	next.addEventListener('click', function () {
		if (next.value === "next1") {
			nextPrev(hwSatu, gambar[0], hwDua, gambar[1]);
		} else if (next.value === "next2") {
			nextPrev(hwDua, gambar[1], hwTiga, gambar[2]);
		} else if (next.value === "next3") {
			nextPrev(hwTiga, gambar[2], hwEmpat, gambar[3]);
		} else if (next.value === "next4") {
			nextPrev(hwEmpat, gambar[3], hwSatu, gambar[0]);
		}
	})
})

btnPrev.forEach(function (prev) {
	prev.addEventListener('click', function () {
		if (prev.value === "prev1") {
			nextPrev(hwSatu, gambar[0], hwEmpat, gambar[3]);
		} else if (prev.value === "prev2") {
			nextPrev(hwDua, gambar[1], hwSatu, gambar[0]);
		} else if (prev.value === "prev3") {
			nextPrev(hwTiga, gambar[2], hwDua, gambar[1]);
		} else if (prev.value === "prev4") {
			nextPrev(hwEmpat, gambar[3], hwTiga, gambar[2]);
		}
	})

})

btnNext.forEach(function (next) {
	next.addEventListener('click', function () {
		if (next.value === "next5") {
			nextPrev(buSatu, gambar[4], buDua, gambar[5]);
		} else if (next.value === "next6") {
			nextPrev(buDua, gambar[5], buTiga, gambar[6]);
		} else if (next.value === "next7") {
			nextPrev(buTiga, gambar[6], buEmpat, gambar[7]);
		} else if (next.value === "next8") {
			nextPrev(buEmpat, gambar[7], buSatu, gambar[4]);
		}
	})
})

btnPrev.forEach(function (prev) {
	prev.addEventListener('click', function () {
		if (prev.value === "prev5") {
			nextPrev(buSatu, gambar[4], buEmpat, gambar[7]);
		} else if (prev.value === "prev6") {
			nextPrev(buDua, gambar[5], buSatu, gambar[4]);
		} else if (prev.value === "prev7") {
			nextPrev(buTiga, gambar[6], buDua, gambar[5]);
		} else if (prev.value === "prev8") {
			nextPrev(buEmpat, gambar[7], buTiga, gambar[6]);
		}
	})

})