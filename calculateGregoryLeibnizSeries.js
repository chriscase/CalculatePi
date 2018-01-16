console.log('calculate Pi');
var pi = 0;
var denominator = 1;
var series = 'pi = ';
for ( var i = 0; i < 500000; i++ ) {
	if(i % 2 != 0) {
		pi = pi - (4/denominator);
		//series += ' - 4/' + denominator;
	} else {
		pi = pi + (4/denominator);
		//series += ' + 4/' + denominator;
	}
	//console.log(series + '=' + pi);
	console.log(i + ') pi=' + pi);
	denominator += 2;
}
