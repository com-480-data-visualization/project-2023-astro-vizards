"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2078],{62078:function(e,r,t){t.r(r),t.d(r,{addOrUpdateResource:function(){return f},contentToBlob:function(){return y},fetchResources:function(){return p},getSiblingOfSameType:function(){return g},getSiblingOfSameTypeI:function(){return k},removeAllResources:function(){return m},removeResource:function(){return h},splitPrefixFileNameAndExtension:function(){return w}});var n=t(74165),a=t(29439),s=t(15861),u=t(76200),o=t(10064),c=t(92026),i=t(35995);function p(e){return l.apply(this,arguments)}function l(){return l=(0,s.Z)((0,n.Z)().mark((function e(r){var t,a,s,u,o,p,l,f,d,h,v,m,x=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.length>1&&void 0!==x[1]?x[1]:{},a=x.length>2?x[2]:void 0,e.next=4,r.load(a);case 4:return s=(0,i.v_)(r.itemUrl,"resources"),u=t.start,o=void 0===u?1:u,p=t.num,l=void 0===p?10:p,f=t.sortOrder,d=void 0===f?"asc":f,h=t.sortField,v={query:{start:o,num:l,sortOrder:d,sortField:void 0===h?"created":h,token:r.apiKey},signal:(0,c.U2)(a,"signal")},e.next=16,r.portal.request(s,v);case 16:return m=e.sent,e.abrupt("return",{total:m.total,nextStart:m.nextStart,resources:m.resources.map((function(e){var t=e.created,n=e.size,a=e.resource;return{created:new Date(t),size:n,resource:r.resourceFromPath(a)}}))});case 18:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function f(e,r,t,n){return d.apply(this,arguments)}function d(){return d=(0,s.Z)((0,n.Z)().mark((function e(r,t,s,u){var p,l,f,d,h,v,m,x;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new o.Z("portal-item-resource-".concat(t,":invalid-path"),"Resource does not have a valid path");case 2:return p=r.portalItem,e.next=5,p.load(u);case 5:return l=(0,i.v_)(p.userItemUrl,"add"===t?"addResources":"updateResources"),f=Z(r.path),d=(0,a.Z)(f,2),h=d[0],v=d[1],e.next=12,y(s);case 12:return m=e.sent,x=new FormData,h&&"."!==h&&x.append("resourcesPrefix",h),(0,c.pC)(u)&&u.compress&&x.append("compress","true"),x.append("fileName",v),x.append("file",m,v),x.append("f","json"),(0,c.pC)(u)&&u.access&&x.append("access",u.access),e.next=22,p.portal.request(l,{method:"post",body:x,signal:(0,c.U2)(u,"signal")});case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function h(e,r,t){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)((0,n.Z)().mark((function e(r,t,a){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new o.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,r.load(a);case 4:return s=(0,i.v_)(r.userItemUrl,"removeResources"),e.next=7,r.portal.request(s,{method:"post",query:{resource:t.path},signal:(0,c.U2)(a,"signal")});case 7:t.portalItem=null;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,r){return x.apply(this,arguments)}function x(){return(x=(0,s.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load(t);case 2:return a=(0,i.v_)(r.userItemUrl,"removeResources"),e.abrupt("return",r.portal.request(a,{method:"post",query:{deleteAll:!0},signal:(0,c.U2)(t,"signal")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){var r=e.lastIndexOf("/");return-1===r?[".",e]:[e.slice(0,r),e.slice(r+1)]}function w(e){var r=function(e){var r=(0,i.Ml)(e);return(0,c.Wi)(r)?[e,""]:[e.slice(0,e.length-r.length-1),".".concat(r)]}(e),t=(0,a.Z)(r,2),n=t[0],s=t[1],u=Z(n),o=(0,a.Z)(u,2);return[o[0],o[1],s]}function y(e){return b.apply(this,arguments)}function b(){return(b=(0,s.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r instanceof Blob)){e.next=2;break}return e.abrupt("return",r);case 2:return e.next=4,(0,u.default)(r.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,r){if(!e.hasPath())return null;var t=w(e.path),n=(0,a.Z)(t,3),s=n[0],u=n[2];return e.portalItem.resourceFromPath((0,i.v_)(s,r+u))}function k(e,r){if(!e.hasPath())return null;var t=w(e.path),n=(0,a.Z)(t,3),s=n[0],u=n[2];return e.portalItem.resourceFromPath((0,i.v_)(s,r+u))}}}]);
//# sourceMappingURL=2078.7ad43c13.chunk.js.map