# react-educational-games
Fast, Fun, Interactive and Social Educational Games for the Classroom

* Bower package management
* Grunt Build Process
* NPM package management (required for Grunt)

# Installation

`these bits` should be run from the command line in the directory where you checked out this repo.

1. Clone this repo
1. If you don't have Node & NPM installed: http://nodejs.org/
1. If you don't have Grunt installed: `npm install -g grunt-cli`
1. If you don't have Bower installed: `npm install -g bower`
1. `bower install` to install the JS dependencies
1. `npm install` to install the Grunt dependencies
1. `grunt` to run a build, and check everything works. If you get errors you can't debug, post an issue on the public repository.

You should now be all set to start development, before you begin each session
run `grunt watch` to automatically run a build as you edit your files.

# Getting Strted
After you've read this readme and understand what all the various files do make sure
you can run Grunt.

Also read the comments in `/src/index.html` for more information on how the game is bootstrapped.

# Build Process
There are two options for building, `build_dev` and `build`, the latter uglifies
Javscript files while the former doesn't.

# File System
An explanation of the directories involved:

* `/src/` Holds all game-specific files
* `/public/` Created by the build process and filled with distributable files. **Warning: This directory gets deleted when the package is built, so don't store or change things here!**
* `/src/audio/` for storing audio files
* `/src/css/` in case you wish to include any css files.
* `/src/data/` A place for project data files, for example editable PSD files or other sources used to build assets.
* `/src/img/` For all images
* `/src/js/` All Javascript files go here, see below for more.
* `/src/lib/` external libraries (like Crafty and Zepto) go hee, bower is configured to put it's files here.
* `/src/index.html` Your games Index, loads everything else.

Some other files:

* `/.bowerrc` configures Bower Package Management, all I've set here is where to unpack libraries to.
* `/.gitignore` Tells Git to ignore the `public` and `node_modules` directory.
* `/bower.json` Project information for Bower 
* `/Gruntfile.js` Build configuration for Grunt 
* `/package.json` Project information for NPM (also used by Grunt) 
* `/readme.md` This file, which hopefully introduces you to the whole project 
