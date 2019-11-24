app.feed = {
	options: {
		items: document.querySelectorAll('.feed__item .feed__container')
	},
	openItem() {
		this.options.items.forEach(item => item.addEventListener('click', event => {
			const title = item.querySelector('.feed__name-link');
			if (event.target !== title ) {
				item.parentNode.parentNode.classList.toggle('feed__item_active');
			}
		}), true);
	}
};
