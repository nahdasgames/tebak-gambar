function getHasil(e) {
	// const pilihan = document.querySelector('li');
	const jawaban = e.target.className;
	if (jawaban == 'benar') {alert('anda benar')} else {alert('anda salah')};
	
}

const hasil = document.querySelectorAll('li');
hasil.forEach(function(pil) {
		pil.addEventListener('click', getHasil);
})

const next = document.querySelector('.next');
next.addEventListener('click', function() {
	const satu = document.querySelector('.soalSatu');
	satu.style.display = 'none';

	const dua = document.querySelector('.soalDua');
	dua.style.display = 'block';
})

const prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
	const satu = document.querySelector('.soalSatu');
	satu.style.display = 'block';

	const dua = document.querySelector('.soalDua');
	dua.style.display = 'none';
})