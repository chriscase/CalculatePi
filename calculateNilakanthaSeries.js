console.log('calculate Pi');
var pi = 3;
var denominator = 0;
var series = 'pi = ';
for ( var i = 0; i < 500000; i++ ) {
	var d1 = 2 + denominator;
	var d2 = 3 + denominator;
	var d3 = 4 + denominator;
	if(i % 2 != 0) {
		pi = pi - (4/(d1 * d2 * d3));
		//series += ' - 4/(' + d1 + ' x ' + d2 + ' x ' + d3 + ')';
	} else {
		pi = pi + (4/(d1 * d2 * d3));
		//series += ' + 4/(' + d1 + ' x ' + d2 + ' x ' + d3 + ')';
	}
	//console.log(series + '=' + pi);
	console.log(i + ') pi=' + pi);
	denominator += 2;
}
