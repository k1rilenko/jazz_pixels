app.nav = {
	eventIcon: document.querySelectorAll('.events'),
	eventStyle() {
		this.eventIcon.forEach( el => {
			if (el.textContent.length > 2) {
				el.style = 'width: 24px; border-radius: 25%/50%; right: 13px;';
			}
		});
	}
};
