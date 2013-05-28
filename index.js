
/**
 * Dependencies
 */

var Spinner = require('spin.js')
  , spinner = null
  , div = null;

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
 * Start
 */

function start(timeout) {
  if (!spinner || !div) createSpinner();

  spinner.spin(div);

  div.style['padding-top'] = div.style.height = window.innerHeight / 2;
  div.style['padding-left'] = div.style.width = window.innerWidth / 2;

  div.style.display = '';

  if (timeout) {
    setTimeout(stop, timeout);
  }
}

/**
 * Stop
 */

function stop() {
  if (!spinner || !div) createSpinner();

  spinner.stop();

  div.style.display = 'none';
}

/**
 * Create spinner
 */

function createSpinner() {
  var frag = document.createDocumentFragment();
  
  div = document.createElement('div');
  div.id = 'component-spinner';
  div.style.display = 'none';
  frag.appendChild(div);
  document.body.appendChild(frag);

  spinner = new Spinner(opts);
}

/**
 * Expose `start` and `stop`
 */

module.exports.start = start;
module.exports.stop = stop;
