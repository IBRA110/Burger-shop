import {
	trigger,
	transition,
	style,
	query,
	group,
	animateChild,
	animate,
	keyframes,
} from "@angular/animations";

export const fader = 
trigger("routeAnimations", [
  transition("* <=> *", [
    query(":enter", [style({ opacity: 0 })], { optional: true }),
    query(
      ":leave",
      [style({ opacity: 1, position: 'absolute', width: '100%'}), 
				animate("0.5s", style({ opacity: 0 }))],
      { optional: true }
    ),

    query(
      ":enter",
      [style({ opacity: 0 }), animate("0.5s", style({ opacity: 1 }))],
      { optional: true }
    ),
  ]),
]);
