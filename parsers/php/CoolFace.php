<?php
/*
 * CoolFace PHP parser
 * Ralph Mancinelli
 */

// Match all characters up to =) '/[\s\S]+(?==\))/'
// Get 2 subgroups before and after '/([\s\S]+)\s=\)\s([\s\S]+)/'


class CoolFace {

	const OBJECT_ARRAY_PATTERN = '/(\s+|\A)(\(:|\[:)\z/';

	// Check if new object or array
	protected function isNewObjectArray( $line ) {
		$matches = [];
		preg_match_all( static::OBJECT_ARRAY_PATTERN, $line, $matches );

		if( current( $matches[0] ) == "(:" ) {
			return 1;
		} elseif( current( $matches[0] ) == "[:" ) {
			return 2;
		} else {
			return 0;
		}
	}

	// Check for special characters and return type.
	protected function getType( $value ) {
		switch( $value[0] ) {
			case "#":
				return "integer";
				break;
			case "!":
				return "boolean";
				break;
			case "@":
				return "null";
				break;
		}

		switch( $value[0].$value[1] ) {
			case "(:":
				return "object";
				break;
			case "[:":
				return "array";
				break;
		}

		return "string";
	}

	public static function coolface_encode( $coolData ) {
		return $coolData;
	}

	public static function coolface_decode( $coolData ) {

		$pattern = '/\t+([\s\S]+)\s=\)\s([\s\S]+)/';

		$lines = explode( "\n", $coolData );

		print_r($lines);

		$matches = [];
		foreach( $lines as $line ) {
			// Detect new object or array.
			echo $type = static::isNewObjectArray( $line ).PHP_EOL;

			preg_match_all( $pattern, $line, $matches );

			// Detect type.
			echo static::getType( current( $matches[2] ) ).PHP_EOL;

			print_r($matches);

		}		

		return $coolData;
	}

}

?>
