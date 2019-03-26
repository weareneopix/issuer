import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '../__sapper__/server.js';
import { Store } from 'svelte/store.js';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			store: request => {
				return new Store({
					ref: request.headers.referrer || request.headers.referer
				})
			}
		})
	);

if (process.env.NOW_REGION) {
	module.exports = app
} else {
	app.listen(PORT, err => {
		if (err) console.log('error', err)
	})
}
