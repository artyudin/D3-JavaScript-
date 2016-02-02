$(document).ready(function(){
var data = [4, 8, 15, 16, 23, 42];

	var x = d3.scale.linear() /// Scales are functions that map from an input domain to an output range
	    .domain([0, d3.max(data)]) /// a function that returns the scaled display value in the range for a given data value in the domain
	    .range([0, 420]); /// these dependencies are only implicit in the value 10

	d3.select(".chart") ///data join concept, is a general pattern that can be used to create, update or destroy elements whenever data changes
	  .selectAll("div") ///selection to which we will join data
	    .data(data) ///join the data (defined previously) to the selection
	  .enter().append("div") ///instantiate these missing elements by appending to the enter selection
	    .style("width", function(d) { return x(d) + "px"; })
	    .text(function(d) { return d; }); ///set the width of each new bar as a multiple of the associated data value, d
});