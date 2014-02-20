/**
 *
 * CoolFace JS parser
 * @author Brandon Ryall
 * @version 0.1
 **/

(function(global) {
	"use strict";
	var CoolFace = function() {
		this.parse = function( cf ) {
			var output = {};
			cf = cf.replace( /(\(:)/, '');
			cf = cf.replace( /(:\))/, '');
			var result, exR,
				r = new RegExp( "([^\t]+)", "g" ),
				n = new RegExp( "(.*)(.=\\).)(.*)" );
			while( (result = r.exec(cf)) !== null ) {
				exR = n.exec( result[0] );
				if( exR !== null ) {
					output[ exR[1] ] = exR[3];
				}
			}

			return output;
		};
	};
	var c = new CoolFace();
	global.CoolFace = c;
})(window);
