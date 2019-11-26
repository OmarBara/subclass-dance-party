var salsaDance = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function salsaDance
    Dancer.call(this,top, left, timeBetweenSteps);
    this.$node = $('<span class="Jiggly"></span>');
    this.setPosition(top, left);
};

salsaDance.prototype = Object.create(Dancer.prototype); 
salsaDance.prototype.constructor = salsaDance;

var oldStep = Dancer.prototype.step;

salsaDance.prototype.step = function () {
  oldStep.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};

salsaDance.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };