let button = document.querySelector("button");
let task = document.querySelector(".task");

button.onclick = () => {
	let mainBox = document.querySelector(".box2");
	let tasktext = document.querySelector("input");
	let task = document.createElement("div"); // Create new div
	task.className = "task"; // give the div class 'task'
	task.innerHTML = ` 
        <input type='checkbox'>
        <div class="taskDes">${tasktext.value}</div>
        <div class="delete"><img src="delete.png" alt="delete"></div>
    `; // appedn the otehr elements to the div
	// console.log(task) // Log for test
	mainBox.appendChild(task); // Append task element that we have created
	let delIm = document.querySelectorAll(".delete");
	for (let x of delIm) {
		x.addEventListener("click", () => {
			x.parentElement.remove();
		});
	}
	const checkboxs = document.querySelectorAll(".box2 input");
	let lastCheked;
	function handlefun(e) {
		let inbe = false;
		if (e.shiftKey && this.checked) {
			checkboxs.forEach((box) => {
				if (box === this || box === lastCheked) {
					inbe = !inbe;
				}
				if (inbe) {
					box.checked = true;
				}
			});
		}
		lastCheked = this;
	}

	checkboxs.forEach((box) => box.addEventListener("click", handlefun));
	tasktext.value = "";
};
