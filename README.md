# gmod-packager
NPM module to package other NPM GLua modules into a single addon

## Operating principle and definitions

Addons depend on other repos/packages that can depend on other repos/packages. Root addon bundles the latest version of every repo/package by merging them all with itself into a `dist` folder

 - **Root addon**: bundles all dependencies and can be uploaded to workshop or used by a server. 
    - SRCDS/Game should not have overlapping root addons but a new root addon should be made that includes all other "root" addons. 
	- If you have multiple and they have overlapping files it cannot be guaranteed which file gets loaded (old files might get loaded)
 - Does not support multiple versions of the same package, within itself or across root addons. It is assumed that root addons are kept up to date or accessible from github. Server operator can then make a root addon out of "root addons" based on github repos that then bundle the latest versions of every dependency. This is ugly, but there is no other way presently. (No GMod library that I am aware of supports running multiple versions of itself.)
 

## Disclaimer

This is horribly ugly. 

### Alternatives include

 - RECOMMENDED: Git subrepos (must have non-conflicting library architecture). See for example: https://github.com/h3xcat/gmod-mappatcher/tree/master/lua/mappatcher 
    - drawbacks: libraries are bundled multiple times 
 - Live loader: https://github.com/notcake/carrier
 - Bundling every lua file manually and making them non-conflicting and keeping manually up to date: https://github.com/CapsAdmin/pac3/blob/master/lua/pac3/libraries/luadata.lua
 - Central library: https://github.com/notcake/glib /  https://steamcommunity.com/sharedfiles/filedetails/?id=1153306104
 
## Used by

 - [Outfitter](https://github.com/Metastruct/outfitter/blob/dev/package.json)
 - [Glua_utilities](https://github.com/Metastruct/glua_utilities/blob/master/package.json)