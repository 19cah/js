var moonPhase = 'full';
var foggyNight = false;

if (moonPhase === 'full' || foggyNight === true) {
	console.log('full');
}
else if (moonPhase === 'mostly full') {
	console.log('Arms and legs are getting hairier');
}
else if (moonPhase === 'mostly new') {
	console.log('Back on two feet');
} else {
	console.log('Invalid moon phase');
}
