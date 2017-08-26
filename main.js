#!/usr/bin/env node

console.log("Running GMod Packager...");

var MergeTrees = require('merge-trees');
 
var sources = [];

const node_modules = 'node_modules/';
const fs = require('fs');

fs.readdirSync(node_modules).forEach(file => {
	var path_string = "node_modules/" + file;
	var path_lua = path_string + "/lua";

const rmdir = require('rimraf');
rmdir('dist', function(error){});
fs.mkdirSync("dist");

try {
if (!fs.lstatSync(path_string).isDirectory() || !fs.lstatSync(path_lua).isDirectory()) {
return;
}
}catch(e){
if(e.code == 'ENOENT'){
return;
}else {
throw(e);
}
}
	sources.push(path_string);
	console.log(" \tAdding: " + path_string);
})

var mergeTrees = new MergeTrees(
  sources,
  'dist',
  { overwrite: true });
 
mergeTrees.merge()