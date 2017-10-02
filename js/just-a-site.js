import jQuery from 'jquery';
import Popper from 'popper.js';

window.$ = window.jQuery = jQuery;
window.Popper = Popper;

require('bootstrap/dist/js/bootstrap.js');
require('./site');
require('./vue');
