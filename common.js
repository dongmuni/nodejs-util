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

function ipv4(address)
{
	return (address && (typeof address) === 'string') ? address.replace(/^::ffff:/i, '') : address;
}

module.exports = {
		getOption: getOption,
		N: N,
		ipv4: ipv4
};
