import 'kleur/colors';
import { k as decodeKey } from './chunks/astro/server_gYFNe4Q4.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B-BMHHz5.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/","cacheDir":"file:///Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/node_modules/.astro/","outDir":"file:///Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/public/","srcDir":"file:///Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/","publicDir":"file:///Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/static/","buildClientDir":"file:///Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/public/client/","buildServerDir":"file:///Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/public/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"add/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/add","isIndex":true,"type":"page","pattern":"^\\/add\\/?$","segments":[[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/add/index.astro","pathname":"/add","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"resources/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources","isIndex":true,"type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources/index.astro","pathname":"/resources","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/add/api","isIndex":false,"type":"endpoint","pattern":"^\\/add\\/api\\/?$","segments":[[{"content":"add","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/add/api.ts","pathname":"/add/api","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/pages/resources/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/lib/resourceUtils.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/resources/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/add/api@_@ts":"pages/add/api.astro.mjs","\u0000@astro-page:src/pages/add/index@_@astro":"pages/add.astro.mjs","\u0000@astro-page:src/pages/resources/[slug]@_@astro":"pages/resources/_slug_.astro.mjs","\u0000@astro-page:src/pages/resources/index@_@astro":"pages/resources.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DjgmTX18.mjs","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_1pJjpB1w.mjs","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_W49C19ii.mjs","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/components/Add/AddScreen.vue":"_astro/AddScreen.9AKIqh9f.js","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/components/SingleResource.vue":"_astro/SingleResource.BMrlz-Ex.js","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/components/Sidebar.vue":"_astro/Sidebar.uQ8V-UIo.js","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/components/Nav.vue":"_astro/Nav.BzAahaRP.js","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/components/ResourceList.vue":"_astro/ResourceList.CFHMVTzp.js","@astrojs/vue/client.js":"_astro/client.CDykPJss.js","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/pages/add/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.1TishdO7.js","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DBIOfxtD.js","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.CWm1iGLC.js","/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/layouts/Layout.astro?astro&type=script&index=2&lang.ts":"_astro/Layout.astro_astro_type_script_index_2_lang.Cc7pvJ1K.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/pages/add/index.astro?astro&type=script&index=0&lang.ts","window.location.href=\"/\";"],["/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","\"serviceWorker\"in navigator&&navigator.serviceWorker.register(\"/sw.js\");"],["/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts","const e=localStorage.getItem(\"selectedTheme\")||0;document.body.classList.add(`theme-${e}`);"],["/Users/mytchallbransgrove/Desktop/mytch/resources.mytchall.dev/src/layouts/Layout.astro?astro&type=script&index=2&lang.ts","window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-WQDF9VCNHS\");"]],"assets":["/_astro/logo-github.D67spf7u.svg","/_astro/index.D2FivuRH.css","/favicon.svg","/manifest.json","/sw.js","/_astro/AddScreen.9AKIqh9f.js","/_astro/Nav.BzAahaRP.js","/_astro/ResourceList.CFHMVTzp.js","/_astro/Sidebar.uQ8V-UIo.js","/_astro/SingleResource.BMrlz-Ex.js","/_astro/_plugin-vue_export-helper.DlAUqK2U.js","/_astro/client.CDykPJss.js","/_astro/index.TCghISVm.css","/_astro/methods.Cah4eFpR.js","/_astro/runtime-core.esm-bundler.BHkGTCOb.js","/_astro/runtime-dom.esm-bundler.Druf4bRG.js","/_astro/utils.-yB8Vte5.js","/images/bruno.webp","/images/fusejs.webp","/images/reaper.jpg","/images/statamic.webp","/images/umami.jpg","/images/whocanuse.webp","/images/icons/icon-128x128.png","/images/icons/icon-144x144.png","/images/icons/icon-152x152.png","/images/icons/icon-180x180.png","/images/icons/icon-192x192.png","/images/icons/icon-256x256.png","/images/icons/icon-384x384.png","/images/icons/icon-48x48.png","/images/icons/icon-512x512.png","/images/icons/icon-72x72.png","/images/icons/icon-96x96.png","/add/index.html","/resources/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"WW2TGsIEC7tIgy3bqWSUyK1+JjjITLF31BrYF8KBeiY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
