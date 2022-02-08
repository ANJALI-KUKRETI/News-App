const search = document.querySelector(".search");
const searchBar = document.querySelector(".searchBar");

$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 100,
  items: 2,
  loop: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    750: {
      items: 2,
    },
  },
});

let flag = 1;
search.addEventListener("click", () => {
  if (flag) {
    searchBar.classList.remove("hidden");
    search.style.backgroundColor = "rgb(228, 15, 15)";
    flag = !flag;
  } else {
    searchBar.classList.add("hidden");
    search.style.backgroundColor = "";
    flag = !flag;
  }
});
