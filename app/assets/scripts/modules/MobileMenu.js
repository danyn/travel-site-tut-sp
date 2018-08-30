import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.header = $('.site-header')
		this.content = $('.site-header__content')
		this.ham = $('.site-header__ham')
		this.events()
	}

	events(){
		this.ham.on('click', this.toggleHam.bind(this))
	}

	toggleHam() {
		this.header.toggleClass('site-header--mobile')
		this.content.toggleClass('site-header__content--mobile')
		this.ham.toggleClass('site-header__ham--clicked')
	}
}


export default MobileMenu