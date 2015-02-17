// Generated by CoffeeScript 1.8.0
(function() {
  var Arm;

  Arm = (function() {
    Arm.prototype._armString = {
      0: 'unknown',
      1: 'right',
      2: 'left'
    };

    Arm.prototype._xdirString = {
      0: 'unknown',
      1: 'toward_wrist',
      2: 'toward_elbow'
    };

    function Arm(arm) {
      this.arm = arm[0];
      this.xdir = arm[1];
    }

    Arm.prototype.xdirString = function() {
      return this._xdirString[this.xdir];
    };

    Arm.prototype.armString = function() {
      return this._armString[this.arm];
    };

    return Arm;

  })();

  Arm.Arm = {
    UNKNOWN: 0,
    RIGHT: 1,
    LEFT: 2
  };

  Arm.XDir = {
    UNKNOWN: 0,
    X_TOWARD_WRIST: 1,
    X_TOWARD_ELBOW: 2
  };

  module.exports = Arm;

}).call(this);