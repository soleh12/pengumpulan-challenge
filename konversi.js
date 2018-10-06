function konversiwaktu(menit) {
  // you can only write your code here!
  var seconds = menit%60;
  var minutes = (menit - seconds)/60;
  if (String(seconds).length === 1){
     return minutes+':'+'0'+seconds;
  } else {
  return minutes+':'+seconds;
  }
  
}
console.log(konversiwaktu(64)); // 1:03
console.log(konversiwaktu(124)); // 2:04
console.log(konversiwaktu(53)); // 0:53
console.log(konversiwaktu(88)); // 1:28
console.log(konversiwaktu(120)); // 2:00