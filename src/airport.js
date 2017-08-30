
DEFAULT_AIRPORT_CAPACITY = 5

function Airport(capacity = DEFAULT_AIRPORT_CAPACITY){
  this.hangar = []
  this.capacity = capacity
}

Airport.prototype.land = function(plane, clear = isClear()) {
  if (this.hangar.length >= this.capacity) {
    return "Airport full!"
  }
  if (clear && !this.hangar.includes(plane)) {
    this.hangar.push(plane)
    console.log(this.hangar)
    return plane + " has landed.";
  }
  return plane + " could not land."
};

Airport.prototype.takeoff = function(plane, clear = isClear()) {
  if (clear) {
    var planeIndex = this.hangar.indexOf(plane);
  // The indexOf method returns -1 if the value to search for never occurs."
    if(planeIndex !== -1) {
        this.hangar.splice(planeIndex, 1);
    }
    return plane + " has taken off.";
  }
  return plane + " could not take off."
};

function isClear() {
  var WEATHER = ["stormy", "clear", "clear", "clear", "clear", "clear"];
  return WEATHER[Math.floor(Math.random() * WEATHER.length)] === "clear";
};
