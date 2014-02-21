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
			var output = {},
				result, 
				r = new RegExp( "([^\n]+)(.*)(.=\\).)(.*)", "g" );
			while( (result = r.exec(cf)) !== null ) {
				output[ result[1] ] = this.typeCheck( result[4] );
			}

			return output;
		};

		this.typeCheck = function( v ) {
			var out = v;
			switch( v.charAt(0) ) {
				case '#':
					v = v.substr(1);
					out = parseInt( v, 10 );
					break;
				case '!':
					v = v.substr(1);
					out = v == 'true';
					break;
				case '@':
					v = v.substr(1);
					out = null;
					break;
			}
			return out;
		};
	};
	var c = new CoolFace();
	global.CoolFace = c;
})(window);
