import App from './App.svelte';
import '../node_modules/spectre.css/dist/spectre.min.css';
import '../node_modules/spectre.css/dist/spectre-icons.min.css';
import '../node_modules/spectre.css/dist/spectre-exp.min.css';


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;