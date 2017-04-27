// jshint esversion: 6
/**
 * http://usejsdoc.org/
 */

'use strict';

function getOption(options, property, defaultValue)
{
	return options && options.hasOwnProperty(property) ? options[property] : defaultValue;
}

function N(val)
{
	return typeof(val) === 'number' ? val : 0;
}

module.exports = {
		getOption: getOption,
		N: N
};
