//document.querySelector('.bar-header').addEventListener('click', function() {
//    document.querySelector('.bar').classList.toggle('expanded');
//});

// var menuLinks = document.querySelectorAll('.menu-link');
// for (var i = 0; i < menuLinks.length; i++) {
//     menuLinks[i].addEventListener('click', function() {
//         document.querySelector('.bar').classList.remove('expanded');
//         for (var j = 0; j < menuLinks.length; j++) {
//             menuLinks[j].parentNode.classList.remove('active');
//         }
//         this.parentNode.classList.add('active');
//     });
// }

// Add a click event listener to the element with class 'bar-header'
document.querySelector(".bar-header").addEventListener("click", function () {
  // When the 'bar-header' is clicked, toggle the 'expanded' class on the 'bar' element
  document.querySelector(".bar").classList.toggle("expanded");
});

var currentYear = new Date().getFullYear();

// Update the content of the 'currentYear' span with the current year
document.getElementById("currentYear").innerText = currentYear;
// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  var submenuLinks = document.querySelectorAll(".has-submenu > a");
  submenuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
      }
      const isExpanded = link.classList.contains("open");

      const subMenuContent = link.nextElementSibling;

      if (isExpanded) {
        subMenuContent.style.height = "0";
        subMenuContent.style.overflow = "hidden";
        setTimeout(() => {
          subMenuContent.style.display = "none";
          subMenuContent.classList.remove("open");
          link.classList.remove("open");
        }, 300);
      } else {
        subMenuContent.style.display = "block";
        subMenuContent.style.height = "auto";
        const contentHeight = subMenuContent.scrollHeight;
        subMenuContent.style.height = "0";
        setTimeout(() => {
          subMenuContent.classList.add("open");
          link.classList.add("open");
          subMenuContent.style.height = contentHeight + "px";
        }, 0);
      }
    });
  });
});
