let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let siteBody = document.getElementById("site-body");

  if (scrollTop > lastScrollTop && scrollTop > 500) {
    siteBody.classList.add("header-hidden");
  } else {
    siteBody.classList.remove("header-hidden");
  }

  lastScrollTop = scrollTop;
});
