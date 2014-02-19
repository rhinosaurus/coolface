/**
 *
 * CoolFace JS parser
 *
 **/

(function(global) {
	"use strict";
	var CoolFace = function() {
		this.parse = function( cf ) {
			console.log(cf);
		};
	};
	var c = new CoolFace();
	global.CoolFace = c;
})(window);
