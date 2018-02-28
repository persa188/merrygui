(function() {
  "use strict";

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

}());
