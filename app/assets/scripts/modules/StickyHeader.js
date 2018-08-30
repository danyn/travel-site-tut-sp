
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';
import smoothScroll from 'jquery-smooth-scroll'



class StickyHeader {
	constructor() {
		this.lazyImages = $('.lazyload');
		this.header = $('.site-header');
		this.trigger = $('.large-hero__title');
		this.inPageNavItems = $('.section');
		this.navItems = $('.site-header__link');
		this.refreshWaypoints();
		this.smoothScrolling();
		this.observeHeader();
		this.scrollSpy();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		})
	}

	smoothScrolling(){
		this.navItems.smoothScroll();
	}

	observeHeader() {
		const clss = this 
		
		new Waypoint({
			element: this.trigger[0],
			handler: function(d) {
				if(d==="down"){
					clss.header.addClass('site-header--scrolled')
				}else{
					clss.header.removeClass('site-header--scrolled')
				}
			}
		})

	}

	scrollSpy() {

		const clss = this;

		this.inPageNavItems.each( function (){
			let spied = $(this).attr("data-a");
			new Waypoint({
				element:$(this)[0],
				handler: function(){
					clss.navItems.removeClass('site-header__link--active');
					$(spied).addClass('site-header__link--active');
				}
			})
		})
	}
}

export default StickyHeader;