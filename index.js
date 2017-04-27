// jshint esversion: 6
/**
 * http://usejsdoc.org/
 */

'use strict';

[
	'common',
	'encoder',
	'stream',
	'http'
]
.forEach((path) => module.exports[path] = require(`./${path}`));
