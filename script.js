const hasil = document.querySelectorAll('.jwb');
const menu = document.querySelector('.menu');
const btnHewan = document.querySelector('.hewan');
const btnBuah = document.querySelector('.buah');
const btnNext = document.querySelectorAll('.next');
const btnPrev = document.querySelectorAll('.prev');
const btnKeluar = document.querySelectorAll('.close');
const soalHewan = document.querySelectorAll('.soal-hewan');
const hwSatu = document.querySelector('#hw-satu');


btnHewan.addEventListener('click', function () {
	menu.setAttribute("hidden", true);

	hwSatu.removeAttribute("hidden");
})

btnBuah.addEventListener('click', function () {
	btnHewan.setAttribute("hidden", true);
	btnBuah.setAttribute("hidden", true);
})

function getHasil(e) {
	// const pilihan = document.querySelector('li');
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