import jQuery from 'jquery';
import Popper from 'popper.js';

window.$ = window.jQuery = jQuery;
window.Popper = Popper;

require('bootstrap/dist/js/bootstrap.js');
require('./site');
require('./vue');

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
const observer = new IntersectionObserver(callback);
const hellaItems = document.querySelector('.hella-item');
if (hellaItems) {
  const target = document.querySelector('.hella-item');
  observer.observe(target);
}

