function Airport(){
  this.hangar = []
}

Airport.prototype.land = function(plane) {
  this.hangar.push(plane)
  console.log(this.hangar)
  return plane + " has landed.";
};

Airport.prototype.takeoff = function(plane) {
  var planeIndex = this.hangar.indexOf(plane);
// The indexOf method returns -1 if the value to search for never occurs."
  if(planeIndex !== -1) {
      this.hangar.splice(planeIndex, 1);
  }
  return plane + " has taken off.";
};
