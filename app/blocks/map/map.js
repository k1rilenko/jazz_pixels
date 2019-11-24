/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
app.map = {
	mapContainer: document.querySelector('#map-block'),
	mapButtonEvents: document.querySelector('.map__button_events'),
	mapEventsList: document.querySelector('.feed_map'),
	mapClose: document.querySelector('.feed__text-block'),
	mapScrollContainer: document.querySelector('.feed_map .feed__list'),
	mapLoading() {
		if (this.mapContainer) {
			this.initMap();
		}
	},
	initMap() {
		const options = {
			coordinates: {
				lat: 46.701747,
				lng: 2.395849
			},
			markerImage: './assets/images/marker.svg',
			styles: [
				{
					'featureType': 'administrative.country',
					'elementType': 'labels',
					'stylers': [
						{
							'weight': 1
						}
					]
				},
				{
					'featureType': 'administrative.country',
					'elementType': 'labels.text',
					'stylers': [
						{
							'color': '#737373'
						}
					]
				},
				{
					'featureType': 'administrative.locality',
					'elementType': 'labels',
					'stylers': [
						{
							'color': '#999999'
						},
						{
							'weight': 0.5
						}
					]
				},
				{
					'featureType': 'administrative.province',
					'elementType': 'labels',
					'stylers': [
						{
							'color': '#999999'
						},
						{
							'weight': 0.5
						}
					]
				},
				{
					'featureType': 'landscape',
					'stylers': [
						{
							'color': '#333333'
						}
					]
				},
				{
					'featureType': 'poi.park',
					'stylers': [
						{
							'color': '#333333'
						}
					]
				},
				{
					'featureType': 'road',
					'stylers': [
						{
							'color': '#484848'
						}
					]
				},
				{
					'featureType': 'water',
					'stylers': [
						{
							'color': '#1d1d1d'
						}
					]
				}
			]
		};
		const map = new google.maps.Map(this.mapContainer, {
			center: options.coordinates,
			zoom: 5,
			disableDefaultUI: false
		});
		const marker = new google.maps.Marker({
			position: options.coordinates,
			map,
			animation: google.maps.Animation.DROP,
			icon: options.markerImage
		});
		map.setOptions({styles: options.styles});
	},
	showEvents() {
		if (this.mapButtonEvents) {
			this.mapButtonEvents.addEventListener('click', () => {
				this.mapEventsList.style = 'transform: translateX(0);';
			});
		}
	},
	closeEvents() {
		if (this.mapClose) {
			this.mapClose.addEventListener('click', () => {
				this.mapEventsList.style = '';
			});
		}
	},
	eventListControl() {
		this.showEvents();
		this.closeEvents();
	},
	scrollEventList() {
		if (app.map.mapClose) {
			const pageHeight = document.documentElement.clientHeight;
			const eventListHead = app.map.mapClose.clientHeight;
			const navHeight = 46;
			const listHeight = pageHeight - eventListHead - navHeight;
			app.map.mapScrollContainer.style = `height: ${listHeight}px;`;
		}
	},
	scrollEventListResize() {
		window.addEventListener('resize', () => {
			this.scrollEventList();
			this.reloadBaseVh();
		}
		);
	},
	reloadBaseVh() {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}
};
