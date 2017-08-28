#!/usr/bin/env node

console.log("Running GMod Packager...");

const packlist = require('npm-packlist');
const ignore = require('ignore');
var fs = require('fs-extra');
const path = require('path');
const targetpath = 'dist';

const ig = ignore().add(['package.json',targetpath]);

function flatten_modulepath(mpath) 
{
	return mpath.replace(/^.*node_modules[\/\\][^\/\\][^\/\\]*[\/\\]/gi, '');
}

packlist({ path: "." }).then(function(paths) {

	ig
	
	.filter(paths)
	.reduce(function(_, src) {
		var dest = targetpath+"/"+flatten_modulepath(src);
		console.log(src,dest);
		var destpath = path.dirname(dest);
		fs.ensureDirSync(destpath);
		fs.copySync(src, dest,{"preserveTimestamps":true});

		return _;
	}, {})
	
});