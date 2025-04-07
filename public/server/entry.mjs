import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_pr5q2iay.mjs';
import { manifest } from './manifest_DjgmTX18.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/add/api.astro.mjs');
const _page2 = () => import('./pages/add.astro.mjs');
const _page3 = () => import('./pages/resources/_slug_.astro.mjs');
const _page4 = () => import('./pages/resources.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/add/api.ts", _page1],
    ["src/pages/add/index.astro", _page2],
    ["src/pages/resources/[slug].astro", _page3],
    ["src/pages/resources/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/public/client/",
    "server": "file:///Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/public/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
