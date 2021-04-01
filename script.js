function getHasil(name, pict) {
	if (name == 'nama' && pict == 'gambar') {alert('oke');} else {alert('maaf salah')};
};

// function pilNama(e) {
// 	document.querySelector('.nama');
// 	const getNama = e.target.className;
// 	// console.log(getNama);
// 	// return getNama;
// }

const pilihan = document.querySelectorAll('.pilihan');
pilihan.forEach(function(nama) {
	nama.addEventListener('click', function(){
	// document.querySelector('.gambar');
	const tes = document.querySelector('.nama');
	const tos = document.querySelector('.gambar');
	const getNama = tes.className;
	const getGambar = tos.className;

	getHasil(getNama, getGambar);
	});	
})




// function pilGambar(e) {
// 	document.querySelector('.gambar');
// 	const getGambar = e.target.className;
// 		// console.log(getGambar);
// 		return getGambar;
// }

// const gambar = document.querySelector('.gambar');
// 	gambar.addEventListener('click', pilGambar);


