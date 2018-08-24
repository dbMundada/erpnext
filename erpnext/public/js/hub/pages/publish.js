import PublishPage from '../components/PublishPage.vue';

erpnext.hub.Publish = class Publish {
	constructor(parent) {
		this.$wrapper = $(`<div id="vue-area">`).appendTo($(parent));

		new Vue({
			render: h => h(PublishPage)
		}).$mount('#vue-area');
	}

	show() {
		$('[data-page-name="publish"]').show();
	}

	hide() {
		$('[data-page-name="publish"]').hide();
	}

}
