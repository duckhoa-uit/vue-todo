<template>
	<alert v-if="getError['show']" :message="getError['message']" :color="getError['color']" />
	<router-view />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Alert from './components/Alert.vue';

export default {
	components: { Alert },
	name: 'App',
	computed: mapGetters(['getAccount', 'getError']),
	watch: {
		getAccount(newValue, oldValue) {
			console.log('In Watch getAccount in App.vue');
			if (newValue === null) {
				this.$router.replace('/');
			} else {
				this.$router.replace('/todos');
			}
		},
	},
	methods: mapActions(['fetchAccount']),
	created() {
		if (!this.getAccount) this.fetchAccount();
	},
};
</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
