var decks = [60,80,50,20,40]
var width = 500;
var height = 500;

var widthScale = d3.scale.linear().domain([0,90]).range([0,width]);

console.log("hola");

var color = d3.scale.linear().domain([0,90]).range(["red","blue"]);

var axis = d3.svg.axis().scale(widthScale)

var canvas = d3.select("div.estadistica").append("svg").attr("width", width).attr("height", height).append("g").attr("transform","translate(20,0)");


var bars = canvas.selectAll("rect").data(decks).enter().append("rect").attr("width", function(d){return widthScale(d);}).attr("height",50).attr("fill", function(d){return color(d);}).attr("y", function(d,i){return i*100 });

canvas.append("g").attr("transform", "translate(0,400)").call(axis);

			 