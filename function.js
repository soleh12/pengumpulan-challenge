
function bandingkansaja(angka1, angka2){
	if (angka2===angka1){
		return -1
	}else if (angka2>angka1){
		return true
	}
	return false
	angka2<angka1
	}
console.log(bandingkansaja(5, 5))//-1
console.log(bandingkansaja(10, 5))//false
console.log(bandingkansaja(2, 5))//true
console.log(bandingkansaja(2, 2))//-1
console.log(bandingkansaja(50, 100))//true