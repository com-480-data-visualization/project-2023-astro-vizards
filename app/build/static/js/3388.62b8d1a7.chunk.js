"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3388],{74368:function(e,r,t){t.d(r,{V:function(){return i}});var n=t(74165),a=t(15861),u=t(41226);function i(e,r){return o.apply(this,arguments)}function o(){return o=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,i,o,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.T)(r,t);case 2:if((i=e.sent).layers=i.layers.filter(l),o={serviceJSON:i},!((null!==(a=i.currentVersion)&&void 0!==a?a:0)<10.5)){e.next=7;break}return e.abrupt("return",o);case 7:return e.next=9,(0,u.T)(r+"/layers",t);case 9:return s=e.sent,e.abrupt("return",(o.layersJSON={layers:s.layers.filter(l),tables:s.tables},o));case 11:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function l(e){return!e.type||"Feature Layer"===e.type}},32698:function(e,r,t){t.d(r,{Y:function(){return i},h:function(){return u}});var n=t(35995),a=t(70032);function u(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,n.mN)(e.itemUrl):null,portal:e.portal||a.Z.getDefault(),portalItem:e}}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return P},getNumLayersAndTables:function(){return J},getSubtypeGroupLayerIds:function(){return U},load:function(){return m},preprocessFSItemData:function(){return O}});var n=t(93433),a=t(29439),u=t(74165),i=t(15861),o=t(10064),l=t(30651),s=t(25899),p=t(74368),c=t(70032),d=t(98995),f=t(32698),y=t(73117),v=t(21371),b=t(41226);function m(e,r){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.instance.portalItem)||!n.id){e.next=6;break}return e.next=4,n.load(t);case 4:return x(r),e.abrupt("return",Z(r,t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var r=e.instance.portalItem;if(null===r||void 0===r||!r.type||!e.supportedTypes.includes(r.type))throw new o.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:null===r||void 0===r?void 0:r.type,expectedType:e.supportedTypes.join(", ")})}function Z(e,r){return g.apply(this,arguments)}function g(){return(g=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i,o,l,s,p;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.instance,i=a.portalItem){e.next=3;break}return e.abrupt("return");case 3:if(o=i.url,l=i.title,s=(0,f.h)(i),"group"!==a.type){e.next=6;break}return e.abrupt("return",(a.read({title:l},s),w(a,r)));case 6:return o&&a.read({url:o},s),e.next=9,D(r,t);case 9:return p=e.sent,e.abrupt("return",(p&&a.read(p,s),a.resourceReferences={portalItem:i,paths:null!==(n=s.readResourcePaths)&&void 0!==n?n:[]},"subtype-group"!==a.type&&a.read({title:l},s),(0,v.y)(a,s)));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,r){return k.apply(this,arguments)}function k(){return k=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,i,l,s,p,c,d,f,v,b,m,h,x;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=r.portalItem){e.next=3;break}return e.abrupt("return");case 3:s=l.type,p=t.layerModuleTypeMap,c=null!==(n=(0,y._$)(l,"Oriented Imagery Layer"))&&void 0!==n&&n,e.t0=s,e.next="Feature Service"===e.t0?7:"Stream Service"===e.t0?9:"Scene Service"===e.t0?11:"Feature Collection"===e.t0?13:15;break;case 7:return i=c?p.OrientedImageryLayer:p.FeatureLayer,e.abrupt("break",16);case 9:return i=p.StreamLayer,e.abrupt("break",16);case 11:return i=p.SceneLayer,e.abrupt("break",16);case 13:return i=p.FeatureLayer,e.abrupt("break",16);case 15:throw new o.Z("portal:unsupported-item-type-as-group","The item type '".concat(s,"' is not supported as a 'IGroupLayer'"));case 16:return e.next=18,Promise.all([i(),D(t)]);case 18:if(d=e.sent,f=(0,a.Z)(d,2),v=f[0],b=f[1],m=function(){return v},"Feature Service"!==s){e.next=46;break}if(!l.url){e.next=30;break}return e.next=27,O(b,l.url);case 27:e.t1=e.sent,e.next=31;break;case 30:e.t1={};case 31:if(!U(b=e.t1).length){e.next=38;break}return h=p.SubtypeGroupLayer,e.next=36,h();case 36:x=e.sent,m=function(e){return"SubtypeGroupLayer"===e.layerType?x:v};case 38:return e.t2=S,e.t3=r,e.t4=m,e.t5=b,e.next=44,j(l.url);case 44:return e.t6=e.sent,e.abrupt("return",(0,e.t2)(e.t3,e.t4,e.t5,e.t6));case 46:return e.abrupt("return",J(b)>0?S(r,m,b):I(r,m));case 47:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function I(e,r){return T.apply(this,arguments)}function T(){return(T=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(i=r.portalItem)&&void 0!==i&&i.url){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,b.T)(i.url);case 5:(o=e.sent)&&S(r,t,{layers:null===(n=o.layers)||void 0===n?void 0:n.map(L),tables:null===(a=o.tables)||void 0===a?void 0:a.map(L)});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return{id:e.id,name:e.name}}function S(e,r,t,n){var a,u=t.layers||[],i=t.tables||[];if("Feature Collection"===(null===(a=e.portalItem)||void 0===a?void 0:a.type)&&(u.forEach((function(e){var r;"Table"===(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)&&i.push(e)})),u=u.filter((function(e){var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))),"coverage"in t){var p=function(e){var r=e.coverage;if(!r)return null;var t=new URL(r);if(r.toLowerCase().includes("item.html")){var n=t.searchParams.get("id"),a=t.origin;return l.Z.fromPortalItem({portalItem:new d.default({id:n,url:a})})}if((0,s.B5)(r))return l.Z.fromArcGISServerUrl({url:r});throw new o.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(t);p&&e.add(p)}u.reverse().forEach((function(a){var u=F(e,r(a),t,a,null===n||void 0===n?void 0:n(a));e.add(u)})),i.reverse().forEach((function(a){var u=F(e,r(a),t,a,null===n||void 0===n?void 0:n(a));e.tables.add(u)}))}function F(e,r,t,n,a){var u=e.portalItem,i=new r({portalItem:u.clone(),layerId:n.id});if("sourceJSON"in i&&(i.sourceJSON=a),"subtype-group"!==i.type&&(i.sublayerTitleMode="service-name"),"Feature Collection"===u.type){var o={origin:"portal-item",portal:u.portal||c.Z.getDefault()};i.read(n,o);var l=t.showLegend;null!=l&&i.read({showLegend:l},o)}return i}function D(e,r){return N.apply(this,arguments)}function N(){return(N=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i,o,l,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==r.supportsData){e.next=2;break}return e.abrupt("return");case 2:if(n=r.instance,a=n.portalItem){e.next=5;break}return e.abrupt("return");case 5:return i=null,e.prev=6,e.next=9,a.fetchData("json",t);case 9:i=e.sent,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(6);case 14:if(!M(n)){e.next=18;break}return o=null,l=!0,i&&J(i)>0&&(null==n.layerId&&(s=U(i),n.layerId="subtype-group"===n.type?null===s||void 0===s?void 0:s[0]:P(i)),(o=C(i,n))&&(1===J(i)&&(l=!1),null!=i.showLegend&&(o.showLegend=i.showLegend))),e.abrupt("return",(l&&"service-name"!==n.sublayerTitleMode&&(n.sublayerTitleMode="item-title-and-service-name"),o));case 18:return e.abrupt("return",i);case 19:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}function O(e,r){return G.apply(this,arguments)}function G(){return(G=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(n=r)||void 0===n?void 0:n.layers)&&null!=(null===(a=r)||void 0===a?void 0:a.tables)){e.next=5;break}return e.next=3,(0,b.T)(t);case 3:i=e.sent,(r=r||{}).layers=r.layers||(null===i||void 0===i?void 0:i.layers),r.tables=r.tables||(null===i||void 0===i?void 0:i.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function C(e,r){var t,n,a=r.layerId,u=(null===(t=e.layers)||void 0===t?void 0:t.find((function(e){return e.id===a})))||(null===(n=e.tables)||void 0===n?void 0:n.find((function(e){return e.id===a})));return u&&function(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(u,r)?u:null}function J(e){var r,t,n,a;return(null!==(r=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(n=null===e||void 0===e||null===(a=e.tables)||void 0===a?void 0:a.length)&&void 0!==n?n:0)}function M(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}function U(e){var r,t=[];return null!==e&&void 0!==e&&null!==(r=e.layers)&&void 0!==r&&r.forEach((function(e){"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}function j(e){return E.apply(this,arguments)}function E(){return(E=(0,i.Z)((0,u.Z)().mark((function e(r){var t,a,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.V)(r);case 2:if(t=e.sent,a=t.layersJSON){e.next=6;break}return e.abrupt("return",null);case 6:return i=[].concat((0,n.Z)(a.layers),(0,n.Z)(a.tables)),e.abrupt("return",(function(e){return i.find((function(r){return r.id===e.id}))}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},41226:function(e,r,t){t.d(r,{T:function(){return o}});var n=t(74165),a=t(1413),u=t(15861),i=t(76200);function o(e,r){return l.apply(this,arguments)}function l(){return l=(0,u.Z)((0,n.Z)().mark((function e(r,t){var u,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.default)(r,{responseType:"json",query:(0,a.Z)((0,a.Z)({f:"json"},null===t||void 0===t?void 0:t.customParameters),{},{token:null===t||void 0===t?void 0:t.apiKey})});case 2:return u=e.sent,o=u.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}}}]);
//# sourceMappingURL=3388.62b8d1a7.chunk.js.map