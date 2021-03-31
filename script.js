const nama = document.querySelector('.nama');

const klikNama = nama.addEventListener('click', function(){
		const getNama = nama.className;
		console.log(getNama);
	})

const gambar = document.querySelector('img');

const klikGambar = gambar.addEventListener('click', function(){
		const getGambar = gambar.className;
		console.log(getGambar);
	})




// if (klikNama == 'nama' && klikGambar == 'gambar') {
// 	alert('kamu benar');
// } else {
// 	alert('kamu salah');
// }