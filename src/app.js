// Ứng dụng mẫu
function sum(a, b) {
	return a + b;
}

if (require.main === module) {
	console.log('App started. sum(1,2)=', sum(1, 2));
}

module.exports = { sum };
