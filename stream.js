// jshint esversion: 6
/**
 * http://usejsdoc.org/
 */

'use strict';

const Transform = require('stream').Transform;

class ByteCounter extends Transform
{
	constructor(finishCallback)
	{
		super({});
		this.bytesPiped = 0;
		if ( finishCallback )
		{
			this.on('finish', finishCallback);
		}
	}
	
	_transform(chunk, encoding, callback)
	{
		this.bytesPiped += chunk.length;
		callback(null, chunk);
	}
}

module.exports = {
		ByteCounter: ByteCounter
};