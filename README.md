CoolFace Serialization
======================

CFS is a serialization format that uses human-readable text to transmit key=)value pairs. The primary purpose is for passing large data sets between applications, but is not limited, and can be utilized in place of XML or JSON.

CFS is not bound to any particular language, however, in order for a language to use CFS must have both a parser and encoder for transmission.

CFS files are distinguished by the `.cool` file extension.

Data Types and Syntax
---------------------

The first thing to understand about CFS is that it is strongly typed.

By default, CFS will handle every value as a `string` unless otherwise indicated.

CFS currently supports the following data types:
* `String`
* `Integer`
* `Boolean`
* `Object`
* `Array`
* `null`

### String
By default, CFS will handle every value as a string. What this means is that regardless of what type of value you may have - if you do not indicate it is of another data type, it will automatically be handled as a string.

With this, you no longer have a need to add quotes or any other characters to indicate its type.

##### String Example
```
(:
	name =) Brandon Ryall
:)
```

### Integer
In order for you to define an integer you must add a pound `#` sign in front of the number.

##### Integer Example
```
(:
	age =) #25
:)
```

### Boolean
To define a boolean within CFS, you must include a `!` sign in front of your bool.

##### Boolean Example
```
(:
	over18 =) !true
:)
```

### Object
An object is define by opening and closing parens + colon. An object may be defined as any value, but CFS requires that all CFS data structures also begin as an object.

##### Object Example
```
(:
	myObject =) (:
		name =) Ralph Mancinelli
		age =) 23
		over18 =) !true
	:)
:)
```
