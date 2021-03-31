const pilihan = document.querySelector('.nama, .gambar');

pilihan.addEventListener('click', function(nama, gambar){
		const getNama = nama.className;
		const getGambar = gambar.className;
		// console.log(nama);	
		if(nama == 'nama' || gambar == 'gambar') {
		alert('anda menang');	
	}
})

const gambar = document.querySelector('.gambar');

gambar.addEventListener('click', function(){
		const getGambar = gambar.className;
		console.log(getGambar);
	})

// function getHasil(nama, gambar) {
// 	if(nama == 'nama' && gambar == 'gambar') {
// 		alert('anda menang');
// 	} 
// }

// getHasil(getNama,getGambar);