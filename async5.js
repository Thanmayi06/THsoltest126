const async = require("async");
function expo() {
return new Promise((resolve) => {
	setTimeout(() => {
	   resolve(Math.pow(a,b));
	},2000);
});
}
async function output(i,j) {
	const ans = await expo (i,j);
	console.log(ans);
}
