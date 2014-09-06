(function(){

var $  = document.getElementById.bind(document);
var $$ = document.querySelectorAll.bind(document);

var App = function($el){
  this.$el = $el;
  this.load();

  this.$el.addEventListener(
    'submit', this.submit.bind(this)
  );

  if (this.dob) {
    this.renderAgeLoop();
  } else {
    this.renderChoose();
  }
};

App.fn = App.prototype;

App.fn.load = function(){
  var value;

  if (value = localStorage.dob)
    this.dob = new Date(parseInt(value));
};

App.fn.save = function(){
  if (this.dob)
    localStorage.dob = this.dob.getTime();
};

App.fn.submit = function(e){
  e.preventDefault();

  var input = this.$$('input')[0];
  if ( !input.valueAsDate ) return;

  this.dob = input.valueAsDate;
  this.save();
  this.renderAgeLoop();
};

App.fn.renderChoose = function(){
  this.html(this.view('dob')());
  // this.html.this.view('gender')());
};

App.fn.renderAgeLoop = function(){
  this.interval = setInterval(this.renderAge.bind(this), 100);
};

App.fn.renderAge = function(){
  var now        = new Date
  var deathAge;
  var currentAge = now - this.dob;

  // FEMALE: Set Death Date based on 2010 Actuarial tables and current age in years rounded down
  switch(Math.floor(currentAge / 31556900000)) {
    case 0:
      deathAge = 80.94;
      break;
    case 1:
      deathAge = 81.39;
      break;
    case 2:
      deathAge = 81.43;
      break;
    case 3:
      deathAge = 81.44;
      break;
    case 4:
      deathAge = 81.46;
      break;
    case 5:
      deathAge = 81.47;
      break;
    case 6:
      deathAge = 81.47;
      break;
    case 7:
      deathAge = 81.48;
      break;
    case 8:
      deathAge = 81.49;
      break;
    case 9:
      deathAge = 81.50;
      break;
    case 10:
      deathAge = 81.50;
      break;
    case 11:
      deathAge = 81.51;
      break;
    case 12:
      deathAge = 81.52;
      break;
    case 13:
      deathAge = 81.52;
      break;
    case 14:
      deathAge = 81.53;
      break;
    case 15:
      deathAge = 81.54;
      break;
    case 16:
      deathAge = 81.56;
      break;
    case 17:
      deathAge = 81.57;
      break;
    case 18:
      deathAge = 81.59;
      break;
    case 19:
      deathAge = 81.61;
      break;
    case 20:
      deathAge = 81.63;
      break;
    case 21:
      deathAge = 81.66;
      break;
    case 22:
      deathAge = 81.68;
      break;
    case 23:
      deathAge = 81.71;
      break;
    case 24:
      deathAge = 81.74;
      break;
    case 25:
      deathAge = 81.77;
      break;
    case 26:
      deathAge = 81.79;
      break;
    case 27:
      deathAge = 81.82;
      break;
    case 28:
      deathAge = 81.85;
      break;
    case 29:
      deathAge = 81.88;
      break;
    case 30:
      deathAge = 81.92;
      break;
    case 31:
      deathAge = 81.95;
      break;
    case 32:
      deathAge = 81.98;
      break;
    case 33:
      deathAge = 82.02;
      break;
    case 34:
      deathAge = 82.06;
      break;
    case 35:
      deathAge = 82.10;
      break;
    case 36:
      deathAge = 82.14;
      break;
    case 37:
      deathAge = 82.18;
      break;
    case 38:
      deathAge = 82.23;
      break;
    case 39:
      deathAge = 82.27;
      break;
    case 40:
      deathAge = 82.32;
      break;
    case 41:
      deathAge = 82.38;
      break;
    case 42:
      deathAge = 82.43;
      break;
    case 43:
      deathAge = 82.50;
      break;
    case 44:
      deathAge = 82.56;
      break;
    case 45:
      deathAge = 82.63;
      break;
    case 46:
      deathAge = 82.71;
      break;
    case 47:
      deathAge = 82.79;
      break;
    case 48:
      deathAge = 82.88;
      break;
    case 49:
      deathAge = 82.97;
      break;
    case 50:
      deathAge = 83.07;
      break;
    case 51:
      deathAge = 83.18;
      break;
    case 53:
      deathAge = 83.40;
      break;
    case 54:
      deathAge = 83.52;
      break;
    case 55:
      deathAge = 83.65;
      break;
    case 56:
      deathAge = 83.77;
      break;
    case 57:
      deathAge = 83.91;
      break;
    case 58:
      deathAge = 84.04;
      break;
    case 59:
      deathAge = 84.19;
      break;
    case 60:
      deathAge = 84.34;
      break;
    case 61:
      deathAge = 84.49;
      break;
    case 62:
      deathAge = 84.65;
      break;
    case 63:
      deathAge = 84.83;
      break;
    case 64:
      deathAge = 85.01;
      break;
    case 65:
      deathAge = 85.20;
      break;
    case 66:
      deathAge = 85.40;
      break;
    case 67:
      deathAge = 85.62;
      break;
    case 68:
      deathAge = 85.84;
      break;
    case 69:
      deathAge = 86.08;
      break;
    case 70:
      deathAge = 86.33;
      break;
    case 71:
      deathAge = 86.59;
      break;
    case 72:
      deathAge = 86.87;
      break;
    case 73:
      deathAge = 87.16;
      break;
    case 74:
      deathAge = 87.46;
      break;
    case 75:
      deathAge = 87.77;
      break;
    case 76:
      deathAge = 88.11;
      break;
    case 77:
      deathAge = 88.46;
      break;
    case 78:
      deathAge = 88.83;
      break;
    case 79:
      deathAge = 89.21;
      break;
    case 80:
      deathAge = 89.61;
      break;
    case 81:
      deathAge = 90.03;
      break;
    case 82:
      deathAge = 90.47;
      break;
    case 83:
      deathAge = 90.93;
      break;
    case 84:
      deathAge = 91.41;
      break;
    case 85:
      deathAge = 91.91;
      break;
    case 86:
      deathAge = 92.44;
      break;
    case 87:
      deathAge = 92.99;
      break;
    case 88:
      deathAge = 93.56;
      break;
    case 89:
      deathAge = 94.17;
      break;
    case 90:
      deathAge = 94.80;
      break;
    case 91:
      deathAge = 95.45;
      break;
    case 92:
      deathAge = 96.13;
      break;
    case 93:
      deathAge = 96.84;
      break;
    case 94:
      deathAge = 97.58;
      break;
    case 95:
      deathAge = 98.34;
      break;
    case 96:
      deathAge = 99.13;
      break;
    case 97:
      deathAge = 99.94;
      break;
    case 98:
      deathAge = 100.76;
      break;
    case 99:
      deathAge = 101.60;
      break;
    case 100:
      deathAge = 102.45;
      break;
    case 101:
      deathAge = 103.31;
      break;
    case 102:
      deathAge = 104.17;
      break;
    case 103:
      deathAge = 105.03;
      break;
    case 104:
      deathAge = 105.91;
      break;
    case 105:
      deathAge = 106.79;
      break;
    case 106:
      deathAge = 107.67;
      break;
    case 107:
      deathAge = 108.56;
      break;
    case 108:
      deathAge = 109.45;
      break;
    case 109:
      deathAge = 110.35;
      break;
    case 110:
      deathAge = 111.26;
      break;
    case 111:
      deathAge = 112.17;
      break;
    case 112:
      deathAge = 113.08;
      break;
    case 113:
      deathAge = 114.00;
      break;
    case 114:
      deathAge = 114.92;
      break;
    case 115:
      deathAge = 115.84;
      break;
    case 116:
      deathAge = 116.77;
      break;
    case 117:
      deathAge = 117.71;
      break;
    case 118:
      deathAge = 118.66;
      break;
    case 119:
      deathAge = 119.60;
      break;
    default:
      deathAge = currentAge / 31556900000;
      break;
  }

  var duration   = (deathAge * 31556900000) - currentAge;
  var days       = duration / 86400000;

  var majorMinor = days.toFixed(6).toString().split('.');

  requestAnimationFrame(function(){
    this.html(this.view('countdown')({
      day:         majorMinor[0],
      seconds:     majorMinor[1]
    }));
  }.bind(this));
};

App.fn.$$ = function(sel){
  return this.$el.querySelectorAll(sel);
};

App.fn.html = function(html){
  this.$el.innerHTML = html;
};

App.fn.view = function(name){
  var $el = $(name + '-template');
  return Handlebars.compile($el.innerHTML);
};

window.app = new App($('app'))

})();
