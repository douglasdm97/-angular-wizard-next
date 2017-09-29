import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';
export var Animation = trigger(
	'enterAnimation', [
	transition(':enter', [
		style({height:'0', overflow:'hidden'}),
		animate(300, style({height:'*', marginTop:'*', marginBottom: '*'})) 
		]),
	transition(':leave', [
		style({overflow:'hidden'}),
		animate(300, style({height:0, marginTop:0, marginBottom: 0})) 
		])
	]
	);