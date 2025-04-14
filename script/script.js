const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const sidenavLinks = document.getElementsByClassName("sidenav-link");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

for (let i = 0; i < sidenavLinks.length; i++) {
  sidenavLinks[i].onclick = closeNav;
}

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

function showMoreProjects() {
  document.querySelectorAll('.project').forEach(p => p.style.display = 'block');
  document.querySelector('.show-more-btn').style.display = 'none';
}