import $ from 'jquery'

class Modal {
	constructor() {
		this.contact = $('.site-header__contact');
		this.modal = $('.modal');
		this.modalX = $('.modal__close');

		this.events();

		let show = this.modal;
		// console.log(show);
	}

	events(){
		this.open();
		this.close();
		this.escape();
	}

	open(){
		const clss = this;
		this.contact.on('click', function() {
			clss.modal.addClass('modal--visible');
		})
	}
	
	close(){
		const clss = this;
		this.modalX.on('click', function(){
			clss.modal.removeClass('modal--visible');
		})
	}

	escape(){
		const  clss = this;
		$(document).on('keyup', function(e){
			if(e.keyCode == 27){
				clss.modal.removeClass('modal--visible');
			}
		})
	}

}

export default Modal;