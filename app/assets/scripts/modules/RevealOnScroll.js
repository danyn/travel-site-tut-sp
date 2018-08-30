import $ from 'jquery';
import Waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';

class RevealOnScroll {
	constructor(selector, offset) {
		this.selected = $(selector)
		this.offset = offset
		this.showObject();
		this.hide();
		this.createWaypoints();

	}

	hide() {
		this.selected.addClass('reveal reveal--hidden');
	}

	createWaypoints() {
		let offset = this.offset;
		this.selected.each( function(){
			let elem = this;
			new Waypoint({
				element: elem,
				handler: function() {
					$(elem).removeClass('reveal--hidden')
				},
				offset: offset
			})
		})
	}

	showObject(){
		// console.dir(this.selected)

		this.selected.each(function(){
			// console.dir(this);
		})
	}

}

export default RevealOnScroll;