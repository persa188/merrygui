function submenu_expand() {
  $(".first-level").click(function () {
    console.log("hey");
    if ($(this).find(".submenu").hasClass("visible")) {
      $(this).find(".submenu").removeClass("visible");
    } else {
      $(this).find(".submenu").addClass("visible");
    }
  });
}
$(document).ready(function() {
  "use strict";
  submenu_expand();
  document.querySelector("#snt").addEventListener("click", function() {
    var sidenav = document.getElementById("sn");
    var mc = document.getElementById("mc");
    if (sidenav.style.display == "none") {
      sidenav.style.display = "flex";
      mc.classList.add("nav-visible");
    } else {
      sidenav.style.display = "none";
      mc.classList.remove("nav-visible");
    }


  });
});
