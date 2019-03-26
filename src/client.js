import * as sapper from '../__sapper__/client.js';
import { Store } from 'svelte/store.js';

sapper.start({
	target: document.querySelector('#sapper'),
	store: data => {
		return new Store(data);
	}
});