"use strict";

//constructor function for Weather object
function Weather(cityName, description) {
  this.cityName = cityName;
  this.description = description;
  this._temperature = " ";
}

//add a property with its own get and set function
Object.defineProperty(Weather.prototype, 'temperature', {
  get: function() {
    return this._temperature;
  },
  
  set: function(value) {
    this._temperature = value + 'C.';
    
  }
  
})