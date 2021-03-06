(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormFileInput = require('./libs/storm-file-input');

var _stormFileInput2 = _interopRequireDefault(_stormFileInput);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var onDOMContentLoadedTasks = [function () {
  _stormFileInput2.default.init('input[type=file]');
}];

if ('addEventListener' in window) window.addEventListener('DOMContentLoaded', function () {
  onDOMContentLoadedTasks.forEach(function (fn) {
    return fn();
  });
});

},{"./libs/storm-file-input":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @name storm-file-input: Tests support for and wraps file input to style and display filename
 * @version 0.1.1: Fri, 10 Mar 2017 15:31:51 GMT
 * @author stormid
 * @license MIT
 */
var defaults = {
	message: '',
	fileClassName: 'filename',
	noSupportClassName: 'no--fileinput'
};

var test = exports.test = function test() {
	var isFileInputSupported = function () {
		var ua = window.navigator.userAgent;
		if (ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
			return false;
		}
		if (!!ua.match(/iPad/i) || !!ua.match(/iPhone/i) || !!ua.match(/CriOS/i)) {
			return false;
		}
		var el = document.createElement('input');
		el.type = 'file';
		return !el.disabled;
	}();

	if (isFileInputSupported) return true;

	document.documentElement.classList.add(defaults.noSupportClassName);
	return false;
};

var init = function init(sel) {
	var els = [].slice.call(document.querySelectorAll(sel));

	if (!els.length) throw new Error('File input cannot be initialised, no inputs found');

	if (!test()) return;

	[].slice.call(els).forEach(function (input) {
		var fileNameHolder = document.createElement('span'),
		    ref = void 0;

		fileNameHolder.className = defaults.fileClassName;
		ref = input.parentNode.appendChild(fileNameHolder);
		ref.innerHTML = '';
		input.addEventListener('change', function () {
			var fileNameContent = input.value.replace(/^.*[\\\/]/, '') === '' ? defaults.message : input.files ? [].slice.call(input.files).reduce(function (accumulator, current) {
				return [accumulator, current.name].join(' ');
			}, 'Selected file(s): ') : 'Selected file: ' + input.value.replace(/^.*[\\\/]/, '');
			ref.innerHTML = fileNameContent;
		});
	});
};

exports.default = { init: init };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLWZpbGUtaW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7OztBQUVBLElBQU0sMkJBQTJCLFlBQU0sQUFDdEM7MkJBQUEsQUFBVSxLQUFWLEFBQWUsQUFDZjtBQUZELEFBQWdDLENBQUE7O0FBSWhDLElBQUcsc0JBQUgsQUFBeUIsZUFBUSxBQUFPLGlCQUFQLEFBQXdCLG9CQUFvQixZQUFNLEFBQUU7MEJBQUEsQUFBd0IsUUFBUSxjQUFBO1dBQUEsQUFBTTtBQUF0QyxBQUE4QztBQUFsRyxDQUFBOzs7Ozs7OztBQ05qQzs7Ozs7O0FBTUEsSUFBTTtVQUFXLEFBQ1AsQUFDVDtnQkFGZ0IsQUFFRCxBQUNmO3FCQUhELEFBQWlCLEFBR0k7QUFISixBQUNoQjs7QUFLTSxJQUFNLHNCQUFPLFNBQVAsQUFBTyxPQUFNLEFBQ3pCO0tBQUksbUNBQW9DLEFBQ3ZDO01BQUksS0FBSyxPQUFBLEFBQU8sVUFBaEIsQUFBMEIsQUFDMUI7TUFBSSxHQUFBLEFBQUcsTUFBUCxBQUFJLEFBQVMsMElBQTBJLEFBQ3RKO1VBQUEsQUFBTyxBQUNQO0FBQ0Q7TUFBSyxDQUFDLENBQUMsR0FBQSxBQUFHLE1BQUwsQUFBRSxBQUFTLFlBQVksQ0FBQyxDQUFDLEdBQUEsQUFBRyxNQUE3QixBQUEwQixBQUFTLGNBQWUsQ0FBQyxDQUFDLEdBQUEsQUFBRyxNQUEzRCxBQUF3RCxBQUFTLFdBQVcsQUFDM0U7VUFBQSxBQUFPLEFBQ1A7QUFDRDtNQUFJLEtBQUssU0FBQSxBQUFTLGNBQWxCLEFBQVMsQUFBdUIsQUFDaEM7S0FBQSxBQUFHLE9BQUgsQUFBVSxBQUNWO1NBQU8sQ0FBQyxHQUFSLEFBQVcsQUFDWDtBQVhELEFBQTJCLEFBYTNCLEVBYjRCOztLQWE1QixBQUFJLHNCQUFzQixPQUFBLEFBQU8sQUFFakM7O1VBQUEsQUFBUyxnQkFBVCxBQUF5QixVQUF6QixBQUFtQyxJQUFJLFNBQXZDLEFBQWdELEFBQ2hEO1FBQUEsQUFBTyxBQUVQO0FBbkJNOztBQXFCUCxJQUFNLE9BQU8sU0FBUCxBQUFPLFVBQU8sQUFDbkI7S0FBSSxNQUFNLEdBQUEsQUFBRyxNQUFILEFBQVMsS0FBSyxTQUFBLEFBQVMsaUJBQWpDLEFBQVUsQUFBYyxBQUEwQixBQUVsRDs7S0FBRyxDQUFDLElBQUosQUFBUSxRQUFRLE1BQU0sSUFBQSxBQUFJLE1BQVYsQUFBTSxBQUFVLEFBRWhDOztLQUFJLENBQUosQUFBSyxRQUFRLEFBRWI7O0lBQUEsQUFBRyxNQUFILEFBQVMsS0FBVCxBQUFjLEtBQWQsQUFBbUIsUUFBUSxpQkFBUyxBQUNuQztNQUFJLGlCQUFpQixTQUFBLEFBQVMsY0FBOUIsQUFBcUIsQUFBdUI7TUFDM0MsV0FERCxBQUdBOztpQkFBQSxBQUFlLFlBQVksU0FBM0IsQUFBb0MsQUFDcEM7UUFBTSxNQUFBLEFBQU0sV0FBTixBQUFpQixZQUF2QixBQUFNLEFBQTZCLEFBQ25DO01BQUEsQUFBSSxZQUFKLEFBQWdCLEFBQ2hCO1FBQUEsQUFBTSxpQkFBTixBQUF1QixVQUFVLFlBQU0sQUFDdEM7T0FBSSxrQkFBa0IsTUFBQSxBQUFNLE1BQU4sQUFBWSxRQUFaLEFBQW9CLGFBQXBCLEFBQWlDLFFBQWpDLEFBQXlDLEtBQUssU0FBOUMsQUFBdUQsZ0JBQVUsQUFBTSxXQUFRLEFBQUcsTUFBSCxBQUFTLEtBQUssTUFBZCxBQUFvQixPQUFwQixBQUEyQixPQUFPLFVBQUEsQUFBQyxhQUFELEFBQWMsU0FBWSxBQUNoSztXQUFPLENBQUEsQUFBQyxhQUFhLFFBQWQsQUFBc0IsTUFBdEIsQUFBNEIsS0FBbkMsQUFBTyxBQUFpQyxBQUN4QztBQUZvRyxJQUFBLEVBQWQsQUFBYyxBQUVsRyxxQkFGb0YsR0FFNUQsb0JBQW9CLE1BQUEsQUFBTSxNQUFOLEFBQVksUUFBWixBQUFvQixhQUZuRSxBQUUrQyxBQUFpQyxBQUNoRjtPQUFBLEFBQUksWUFBSixBQUFnQixBQUNoQjtBQUxELEFBTUE7QUFiRCxBQWNBO0FBckJEOztrQkF1QmUsRUFBRSxNLEFBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEZpbGVJbnB1dCBmcm9tICcuL2xpYnMvc3Rvcm0tZmlsZS1pbnB1dCc7XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZFRhc2tzID0gWygpID0+IHtcblx0RmlsZUlucHV0LmluaXQoJ2lucHV0W3R5cGU9ZmlsZV0nKTtcbn1dO1xuICAgIFxuaWYoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7IG9uRE9NQ29udGVudExvYWRlZFRhc2tzLmZvckVhY2goZm4gPT4gZm4oKSk7IH0pO1xuIiwiLyoqXG4gKiBAbmFtZSBzdG9ybS1maWxlLWlucHV0OiBUZXN0cyBzdXBwb3J0IGZvciBhbmQgd3JhcHMgZmlsZSBpbnB1dCB0byBzdHlsZSBhbmQgZGlzcGxheSBmaWxlbmFtZVxuICogQHZlcnNpb24gMC4xLjE6IEZyaSwgMTAgTWFyIDIwMTcgMTU6MzE6NTEgR01UXG4gKiBAYXV0aG9yIHN0b3JtaWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5jb25zdCBkZWZhdWx0cyA9IHtcblx0bWVzc2FnZTogJycsXG5cdGZpbGVDbGFzc05hbWU6ICdmaWxlbmFtZScsXG5cdG5vU3VwcG9ydENsYXNzTmFtZTogJ25vLS1maWxlaW5wdXQnXG59O1xuXG5leHBvcnQgY29uc3QgdGVzdCA9ICgpID0+IHtcblx0dmFyIGlzRmlsZUlucHV0U3VwcG9ydGVkID0gKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHRpZiAodWEubWF0Y2goLyhBbmRyb2lkICgxLjB8MS4xfDEuNXwxLjZ8Mi4wfDIuMSkpfChXaW5kb3dzIFBob25lIChPUyA3fDguMCkpfChYQkxXUCl8KFp1bmVXUCl8KHcoZWIpP09TQnJvd3Nlcil8KHdlYk9TKXwoS2luZGxlXFwvKDEuMHwyLjB8Mi41fDMuMCkpLykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCghIXVhLm1hdGNoKC9pUGFkL2kpIHx8ICEhdWEubWF0Y2goL2lQaG9uZS9pKSkgfHwgISF1YS5tYXRjaCgvQ3JpT1MvaSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRlbC50eXBlID0gJ2ZpbGUnO1xuXHRcdHJldHVybiAhZWwuZGlzYWJsZWQ7XG5cdH0pKCk7XG5cblx0aWYgKGlzRmlsZUlucHV0U3VwcG9ydGVkKSByZXR1cm4gdHJ1ZTtcblx0XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRlZmF1bHRzLm5vU3VwcG9ydENsYXNzTmFtZSk7XG5cdHJldHVybiBmYWxzZTtcblx0XG59O1xuXG5jb25zdCBpbml0ID0gc2VsID0+IHtcblx0bGV0IGVscyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpKTtcblxuXHRpZighZWxzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKCdGaWxlIGlucHV0IGNhbm5vdCBiZSBpbml0aWFsaXNlZCwgbm8gaW5wdXRzIGZvdW5kJyk7XG5cdFxuXHRpZiAoIXRlc3QoKSkgcmV0dXJuO1xuXG5cdFtdLnNsaWNlLmNhbGwoZWxzKS5mb3JFYWNoKGlucHV0ID0+IHtcblx0XHRsZXQgZmlsZU5hbWVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG5cdFx0XHRyZWY7XG5cblx0XHRmaWxlTmFtZUhvbGRlci5jbGFzc05hbWUgPSBkZWZhdWx0cy5maWxlQ2xhc3NOYW1lO1xuXHRcdHJlZiA9IGlucHV0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZmlsZU5hbWVIb2xkZXIpO1xuXHRcdHJlZi5pbm5lckhUTUwgPSAnJztcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRsZXQgZmlsZU5hbWVDb250ZW50ID0gaW5wdXQudmFsdWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpID09PSAnJyA/IGRlZmF1bHRzLm1lc3NhZ2UgOiBpbnB1dC5maWxlcyA/IFtdLnNsaWNlLmNhbGwoaW5wdXQuZmlsZXMpLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0cmV0dXJuIFthY2N1bXVsYXRvciwgY3VycmVudC5uYW1lXS5qb2luKCcgJyk7XG5cdFx0XHR9LCAnU2VsZWN0ZWQgZmlsZShzKTogJykgOiAnU2VsZWN0ZWQgZmlsZTogJyArIGlucHV0LnZhbHVlLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcblx0XHRcdHJlZi5pbm5lckhUTUwgPSBmaWxlTmFtZUNvbnRlbnQ7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07Il19
