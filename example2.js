// Xem đoạn code sau có vấn đề gì với JS

let value = "123";

if (value == 123) {
  console.log('The comparison is true!');
}


// fix
if (value === 123) {
  console.log('The comparison is true!');
} else {
  console.log('The comparison is false!');
}