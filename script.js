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


btnHewan.addEventListener('click', function () {
	menu.setAttribute("hidden", true);

	hwSatu.removeAttribute("hidden");
})

btnBuah.addEventListener('click', function () {
	btnHewan.setAttribute("hidden", true);
	btnBuah.setAttribute("hidden", true);
})

function getHasil(e) {
	const jawaban = e.target.value;
	if (jawaban == 'benar') {
		alert('anda benar')
	} else {
		alert('anda salah')
	};

}

hasil.forEach(function (pil) {
	pil.addEventListener('click', getHasil);
})

btnKeluar.forEach(function (keluar) {
	keluar.addEventListener('click', function () {
		menu.removeAttribute("hidden");

		for (let hewan of soalHewan) {
			hewan.setAttribute("hidden", true);
		}
	})
})

btnNext.forEach(function (next) {
	next.addEventListener('click', function () {
		if (next.value === "next1") {
			hwSatu.setAttribute("hidden", true);
			hwDua.removeAttribute("hidden");
		} else if (next.value === "next2") {
			hwDua.setAttribute("hidden", true);
			hwTiga.removeAttribute("hidden");
		} else if (next.value === "next3") {
			hwTiga.setAttribute("hidden", true);
			hwSatu.removeAttribute("hidden");
		}
	})

})

btnPrev.forEach(function (prev) {
	prev.addEventListener('click', function () {
		if (prev.value === "prev1") {
			hwSatu.setAttribute("hidden", true);
			hwTiga.removeAttribute("hidden");
		} else if (prev.value === "prev2") {
			hwDua.setAttribute("hidden", true);
			hwSatu.removeAttribute("hidden");
		} else if (prev.value === "prev3") {
			hwTiga.setAttribute("hidden", true);
			hwDua.removeAttribute("hidden");
		}
	})

})