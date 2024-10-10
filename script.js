window.promises = [new Promise((resolve) => {
						setTimeout(()=>{
							resolve("inside promise 1")
						},3000);
					}),
				   new Promise((resolve) => {
						setTimeout(()=>{
							resolve("inside promise 2")
						},5000);
					}),
				   new Promise((resolve) => {
						setTimeout(()=>{
							resolve("inside promise 3")
						},1000);
					}),
				   new Promise((resolve) => {
						setTimeout(()=>{
							resolve("inside promise 4")
						},2000);
					}),
				   new Promise((resolve) => {
						setTimeout(()=>{
							resolve("inside promise 5")
						},4000);
					})];

Promise.any(promises).then((data) => {
	console.log(data);
});
// Do not change the code above this
// add your promises to the array `promises`
