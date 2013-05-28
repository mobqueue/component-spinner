
/**
 * Dependencies
 */

var Spinner = require('spin.js');

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
  className: 'component-spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};

/**
 * Create the element the spinner will use
 */

var frag = document.createDocumentFragment()
  , div = document.createElement('div');

div.style.display = 'none';
frag.appendChild(div);
document.body.appendChild(frag);

/**
 * Create the spinner
 */

var spinner = new Spinner(opts);

/**
 * Start
 */

function start(timeout) {
  spinner.spin(div);
  div.style.display = '';
  if (timeout) {
    setTimeout(stop, timeout);
  }
}

/**
 * Stop
 */

function stop() {
  spinner.stop();
  div.style.display = 'none';
}

/**
 * Expose `start` and `stop`
 */

module.exports.start = start;
module.exports.stop = stop;
