/**
 *
 * CoolFace JS parser
 * @author Brandon Ryall
 * @version 0.1
 **/

(function(global) {
	var CoolFace = function() {
		"use strict";
		this.parse = function( cf ) {
			var lines = cf.split( "\n" ),
				len = lines.length,
				i = 0,
				output = {},
				patt = /([\s\S]+)(.*)(.=\).)(.*)/g,
				//patt = /([\s\S]+)\s=\)\s([\s\S]+)/g,
				result = null,
				t = null,
				r = new RegExp( patt ),
				isObj = false,
				isArr = false;

			while( i < len ) {
				result = r.exec( lines[i] );
				if( result !== null ) {
					t = this.typeCheck( result[4] );
					
					if( isObj === false && isArr === false ) {
						if( t instanceof Object ) {
							isObj = result[1];
						} else if( t instanceof Array ) {
							isArr = result[1];
						}
						output[ result[1] ] = t;
					} else if( isObj !== false && isObj in output && output[isObj] instanceof Object ) {
						if( t !== 'END' ) {
							output[ isObj ][ result[1] ] = t;
						} else {
							isObj = false;
						}
					} else if( isArr !== false && output[isArr] instanceof Array ) {
						if( t !== 'END' ) {
							output[ isArr ].push( t );
						} else {
							isArr = false;
						}
					}
				} else {
					console.log(lines[i]);
				}
				i++;
			}			

			//,
			//result, 
			//r = new RegExp( "([^\n]+)(.*)(.=\\).)(.*)", "g" );
			//while( (result = r.exec(cf)) !== null ) {
			//	output[ result[1] ] = this.typeCheck( result[4] );
			//}

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
				case '(':
					out = {};
					break;
				case '[':
					out = [];
					break;
				case ':':
					out = 'END';
					break;
			}
			return out;
		};
	};
	var c = new CoolFace();
	global.CoolFace = c;
})(window);
