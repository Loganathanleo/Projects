// nav //

const toggleButton = document.querySelector(".toggle-button");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close-button");

toggleButton.addEventListener("click", function () {
  mobileMenu.style.display = "flex";
});

closeButton.addEventListener("click", function () {
  mobileMenu.style.display = "none";
  console.log("yes");
});

function checkScreenWidth() {
  if (window.innerWidth > 750) {
    mobileMenu.style.display = "none";
  }
}

checkScreenWidth();

window.addEventListener("resize", checkScreenWidth);

// animation //
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("show-items");
    }else {
        entry.target.classList.remove("show-items");
    }
});
});
const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

// modal //
$('#exampleModal').on('shown.bs.modal', function () {
    $('#exampleModal').trigger('focus')
})

