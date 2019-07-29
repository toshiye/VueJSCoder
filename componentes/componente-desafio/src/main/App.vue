<template>
	<v-app>
		<app-menu/>

		<app-toolbar/>

		<v-content>
			<app-carrousel/>
		</v-content>

		<app-footer/>
	</v-app>
</template>

<script>
	import Footer from "../components/template/Footer";
	import Carrousel from "../components/widget/Carrousel";
	import Toolbar from "../components/template/Toolbar";
	import Menu from "../components/template/Menu";

	export default {
		components: {
			Carrousel,
			'app-footer': Footer,
			'app-carrousel': Carrousel,
			'app-toolbar': Toolbar,
			'app-menu': Menu
		}
	}
</script>
