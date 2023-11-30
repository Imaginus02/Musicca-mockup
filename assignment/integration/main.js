let mobileMenuBtn = document.querySelector(".burger-logo")

mobileMenuBtn.addEventListener("click", () => {
	document.querySelector(".nav-menu").classList.toggle("active");
	mobileMenuBtn.classList.toggle("active");
	console.log("Button Clicked")
})