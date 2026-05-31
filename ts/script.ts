const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const backToTop = document.getElementById("back-to-top");
const formMessage = document.getElementById("form-message");
const scrollProgress = document.getElementById("scroll-progress");

menuBtn?.addEventListener("click", () => {
	const isHidden = mobileMenu?.classList.toggle("hidden");
	if (!isHidden) {
		const items = mobileMenu?.querySelectorAll<HTMLElement>(".mobile-menu-item");
		items?.forEach((item) => {
			item.style.animation = "none";
			setTimeout(() => {
				item.style.animation = "";
			}, 10);
		});
	}
});

document.querySelectorAll<HTMLAnchorElement>("a[href^=\"#\"]").forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const targetId = this.getAttribute("href");
		if (targetId) {
			const target = document.querySelector<HTMLElement>(targetId);
			if (target) {
				target.scrollIntoView({ behavior: "smooth", block: "start" });
				mobileMenu?.classList.add("hidden");
			}
		}
	});
});

const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("in-view");
		}
	});
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const meterObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("is-visible");
			meterObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.35 });

document.querySelectorAll(".skill-meter-fill").forEach((meter) => meterObserver.observe(meter));

const counterObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const targetEl = entry.target as HTMLElement;
		if (entry.isIntersecting && !targetEl.dataset.animated) {
			targetEl.dataset.animated = "true";
			const target = Number.parseInt(targetEl.getAttribute("data-target") || "0", 10);
			const counter = targetEl;
			const duration = 700;
			const start = Date.now();

			const animate = () => {
				const now = Date.now();
				const progress = Math.min((now - start) / duration, 1);
				const current = Math.floor(progress * target);
				counter.textContent = current.toString();

				if (progress < 1) {
					requestAnimationFrame(animate);
				} else {
					counter.textContent = target.toString();
				}
			};

			animate();
			counterObserver.unobserve(targetEl);
		}
	});
}, { threshold: 0.5 });

document.querySelectorAll(".counter").forEach((counter) => counterObserver.observe(counter));

const navLinks = document.querySelectorAll(".nav-link");
const sectionIds = ["home", "services", "projects", "contact"];
const sections = sectionIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

const setActiveLink = () => {
	let activeId = "home";
	sections.forEach((section) => {
		if (section.getBoundingClientRect().top <= 140) activeId = section.id;
	});
	navLinks.forEach((link) => {
		link.classList.toggle("nav-link-active", link.getAttribute("href") === `#${activeId}`);
	});
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });

const parallaxItems = document.querySelectorAll<HTMLElement>("[data-parallax]");
const applyParallax = () => {
	parallaxItems.forEach((item) => {
		const speed = Number(item.getAttribute("data-parallax")) || 0;
		const rect = item.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom > 0) {
			const distance = rect.top - window.innerHeight * 0.5;
			item.style.transform = `translateY(${distance * speed * -0.08}px)`;
		}
	});
};

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 300) {
		backToTop?.classList.add("show");
	} else {
		backToTop?.classList.remove("show");
	}

	const scrollTop = window.scrollY;
	const docHeight = document.documentElement.scrollHeight - window.innerHeight;
	const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
	if (scrollProgress) {
		scrollProgress.style.transform = `scaleX(${progress})`;
	}

	applyParallax();
}, { passive: true });

applyParallax();
backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const contactForm = document.getElementById("contact-form") as HTMLFormElement | null;
contactForm?.addEventListener("submit", (e) => {
	e.preventDefault();
	const nameEl = document.getElementById("name") as HTMLInputElement | null;
	const emailEl = document.getElementById("email") as HTMLInputElement | null;
	const subjectEl = document.getElementById("subject") as HTMLInputElement | null;
	const messageEl = document.getElementById("message") as HTMLTextAreaElement | null;

	const name = nameEl?.value.trim() || "";
	const email = emailEl?.value.trim() || "";
	const subject = subjectEl?.value.trim() || "";
	const message = messageEl?.value.trim() || "";

	const mailtoLink = `mailto:yassen.mahmoud.hassen@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
	window.location.href = mailtoLink;

	if (formMessage) {
		formMessage.textContent = "Email client opened. Please send the message from there.";
		formMessage.className = "text-center text-sm text-emerald-400";
		setTimeout(() => {
			contactForm.reset();
			formMessage.className = "hidden";
		}, 2500);
	}
});

const tiltCards = document.querySelectorAll("[data-tilt]");
// 3D tilt disabled for performance

const addRipple = (event: MouseEvent) => {
	const btn = event.currentTarget as HTMLElement | null;
	if (!btn) return;
	const ripple = document.createElement("span");
	const rect = btn.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;

	ripple.style.width = "0";
	ripple.style.height = "0";
	ripple.style.borderRadius = "50%";
	ripple.style.background = "rgba(255, 255, 255, 0.5)";
	ripple.style.position = "absolute";
	ripple.style.left = x + "px";
	ripple.style.top = y + "px";
	ripple.style.pointerEvents = "none";
	ripple.style.transform = "translate(-50%, -50%)";

	btn.style.position = "relative";
	btn.style.overflow = "hidden";
	btn.appendChild(ripple);

	const size = Math.max(rect.width, rect.height);
	ripple.animate(
		[
			{ width: "0", height: "0", opacity: "0.7" },
			{ width: size + "px", height: size + "px", opacity: "0" }
		],
		{ duration: 600, easing: "ease-out" }
	);

	setTimeout(() => ripple.remove(), 600);
};

document.querySelectorAll<HTMLElement>(".btn-primary-premium, .btn-ghost-premium").forEach((btn) => {
	btn.addEventListener("click", addRipple);
});