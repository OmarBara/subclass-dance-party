var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
    Dancer.call(this,top, left, timeBetweenSteps);
  
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};
