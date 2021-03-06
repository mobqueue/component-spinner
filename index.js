
/**
 * Dependencies
 */

var Spinner = require('spin.js');

/**
 * Expose `start` and `stop`
 */

module.exports.start = start;
module.exports.stop = stop;

/**
 * Spinner options
 */

var opts = {
  lines: 13, // The number of lines to draw
  length: 7, // The length of each line
  width: 4, // The line thickness
  radius: 10, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  color: '#000', // #rgb or #rrggbb
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: true, // Whether to use hardware acceleration
  className: 'component-spinner-inner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};

/**
 * Create the spinner
 */

var spinner = new Spinner(opts);

/**
 * Start
 */

function start(timeout) {
  spinner.spin(createDiv());
  if (timeout) {
    setTimeout(stop, timeout);
  }
}

/**
 * Stop
 */

function stop() {
  var el = document.getElementById('component-spinner');
  el && el.parentNode.removeChild(el);
}

/**
 * Create div
 */

function createDiv() {
  var frag = document.createDocumentFragment();
  
  var div = document.createElement('div');
  div.id = 'component-spinner';
  frag.appendChild(div);

  div.style.height = window.innerHeight;
  div.style.width = window.innerWidth;

  document.body.appendChild(frag);

  return div;
}
