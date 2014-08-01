var Counter = (function () {
 var no = 0;
 var getV = function() { return no; };
 var incrementV = function() { return no++; };
 var resetV = function() { no = 0; } ;
	
 return {
 	get : getV,
 	increment : incrementV,
 	reset : resetV
 };
 }());
  