// jshint esversion: 6

'use strict';

function encodeText(value)
{
	if ( !value )
	{
		return '%00';
	}
	else if ( Array.isArray(value) )
	{
		return value.map(e => encodeText(e)).join(' ');
	}
	else
	{
		var type = typeof value;
		// console.log('type: ' + type);

		if ( type === 'string' )
		{
			return value.replace(/%/g, '%25')
				.replace(/ /g, '%20')
				.replace(/\t/g, '%09')
				.replace(/\n/g, '%0a')
				.replace(/\r/g, '%0d');
		}
		else if ( type === 'number' )
		{
			return value.toString();
		}
		else if ( type === 'object' )
		{
			return encodeText(JSON.stringify(value));
		}
		else
		{
			return encodeText(`${value}`);
		}
	}
}

function decodeText(value)
{
	if ( Array.isArray(value) )
	{
		return value.map(e => decodeURI(e));
	}
	else
	{
		return decodeURI(value);
	}
}

function encodeArgs(args)
{
	if ( args === undefined  || args === null )
	{
		return '';
	}
	else if ( Array.isArray(args) )
	{
		if ( args.length > 0 )
		{
			return ' ' + encodeText(args);
		}
		else
		{
			return '';
		}
	}
	else
	{
		return ' ' + encodeText(args);
	}
}

module.exports = {
		encodeText: encodeText,
		decodeText: decodeText,
		encodeArgs: encodeArgs
};
