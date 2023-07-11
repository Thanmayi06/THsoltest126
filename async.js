const async = require("async");
function Square(a,b) {
return new Promise((resolve) => (
	setTimeout(() => {
	  resolve(Math.pow(a,b));
	};2000);
});
}
async function output(a,b) {
	const ans = await square(a,b);
	console.log(ans);
}