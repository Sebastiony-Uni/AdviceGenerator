import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-e7f1de78.js","imports":["_app/immutable/start-e7f1de78.js","_app/immutable/chunks/index-702a074c.js","_app/immutable/chunks/singletons-68d6f7be.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/getquote",
				pattern: /^\/api\/getquote\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/getquote/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
