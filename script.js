
let p1 = new Promise((resolve) => {
						setTimeout(()=>{
							resolve("inside promise 1")
						},3000);
					});

let p2 = new Promise((resolve) => {
						setTimeout(()=>{
							resolve("inside promise 2")
						},5000);
					});
let p3 = new Promise((resolve) => {
						setTimeout(()=>{
							resolve("inside promise 3")
						},1000);
					});
let p4 = new Promise((resolve) => {
						setTimeout(()=>{
							resolve("inside promise 4")
						},2000);
					});

let p5 = new Promise((resolve) => {
						setTimeout(()=>{
							resolve("inside promise 5")
						},4000);
					});

window.promises = [p1,p2,p3,p4,p5];

Promise.any(promises).then((data) => {
	console.log(data);
});
// Do not change the code above this
// add your promises to the array `promises`
