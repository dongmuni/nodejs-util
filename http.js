// jshint esversion: 6
/**
 * http://usejsdoc.org/
 */

'use strict';

const ignoreHeaderNames = ['connection', 'proxy-connection', 'transfer-encoding', 'expect'];

function rawHeadersToMap(rawHeaders)
{
	var ignoreHeaders = {};
	ignoreHeaderNames.forEach((key) => ignoreHeaders[key] = true);
	
	var headers = {};
	
	for ( var i = 0 ; i < rawHeaders.length ; i += 2 )
	{
		var key = rawHeaders[i];
		var val = rawHeaders[i+1];
		
		if ( !key )
		{
			continue;
		}
		
		key = key.replace(/\s+/g, '-');
		
		if ( !ignoreHeaders.hasOwnProperty(key.toLowerCase()) )
		{
			if ( headers.hasOwnProperty(key) )
			{
				if ( Array.isArray(headers[key]) )
				{
					headers[key].push(val);
				}
				else
				{
					headers[key] = [headers[key], val];
				}
			}
			else
			{
				headers[key] = val;
			}
		}
	}
	
	return headers;
}

module.exports = {
		rawHeadersToMap: rawHeadersToMap	
};