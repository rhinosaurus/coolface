<?php
/*
 * CoolFace PHP parser
 * Ralph Mancinelli
 */

// Match all characters up to =) '/[\s\S]+(?==\))/'
// Get 2 subgroups before and after '/([\s\S]+)\s=\)\s([\s\S]+)/'


class CoolFace {

	// Check for special characters and return type.
	protected function getType( $line ) {

	}

	public static function coolface_encode( $coolData ) {
		return $coolData
	}

	public static function coolface_decode( $coolData ) {

		$pattern = '/([\s\S]+)\s=\)\s([\s\S]+)/';

		$matches = [];
		preg_match_all( $pattern, $coolData, $matches );

		print_r($matches);

		return $coolData;
	}

}

?>