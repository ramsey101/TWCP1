const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");
const yearSpan = document.getElementById("year");

if (yearSpan) {
	yearSpan.textContent = new Date().getFullYear();
}

if (menuBtn && mobileNav) {
	menuBtn.addEventListener("click", () => {
		mobileNav.classList.toggle("hidden");
	});

	mobileNav.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			mobileNav.classList.add("hidden");
		});
	});
}
