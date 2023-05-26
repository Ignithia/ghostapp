
//remove
if (!("remove" in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
//AR scanner  
function showScanner(pic){
    const sceneEl = document.querySelector('a-scene');
    const arSystem = sceneEl.systems["mindar-image-system"];
    var img = document.getElementById('img');

    document.getElementById('map').classList.add("hidden")
    document.getElementById("sidebar").classList.add("hidden");
    img.src = './img/' + pic + '.png';
    document.getElementById('openSidebar').classList.add("hidden");
    document.getElementById('stop-ar').classList.add("visible");

    arSystem.start(); // start AR 
}

function stopScanner(){
    const sceneEl = document.querySelector('a-scene');
    const arSystem = sceneEl.systems["mindar-image-system"];

    document.getElementById('map').classList.remove("hidden")
    document.getElementById("sidebar").classList.remove("hidden");
    document.getElementById('openSidebar').classList.remove("hidden");
    document.getElementById('stop-ar').classList.remove("visible");
    document.getElementById('scan-overlay').classList.add("hidden")

    arSystem.stop(); // stop AR 
}


/*On button press activate ar scene*/
