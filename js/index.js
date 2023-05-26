//remove
if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

//Sidebar
/*open*/
function openSidebar(){
  document.getElementById("sidebar").classList.remove("hidden");
  document.getElementById("closeSidebar").classList.remove("hidden");
  document.getElementById("openSidebar").classList.remove("active");
  document.querySelector(".mapboxgl-canvas").classList.add("full")
}
/*close*/
function closeSidebar(){
  document.getElementById("openSidebar").classList.add("active");
  document.getElementById("sidebar").classList.add("hidden");
  document.getElementById("closeSidebar").classList.add("hidden");
  document.querySelector(".mapboxgl-canvas").classList.add("full")
}