default:
	uglifyjs my.js -m -c > my.min.js
	cat d3.v3.min.js topojson.v1.min.js datamaps.world.min.js my.min.js > build.min.js
	rm -f my.min.js

