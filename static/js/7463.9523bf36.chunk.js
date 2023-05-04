"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7463],{97463:function(e,t,r){r.r(t),r.d(t,{createConnection:function(){return T}});var n=r(37762),s=r(74165),o=r(15861),i=r(1413),a=r(15671),c=r(43144),u=r(60136),l=r(29388),f=r(27366),d=(r(59486),r(76200)),h=r(10064),p=r(32718),v=r(92026),g=r(66978),y=r(35995),k=(r(25243),r(63780),r(93169),r(69912)),_=r(11752),w=r(61120),Z=r(49861),b=r(93501),m=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"destroy",value:function(){this.emit("destroy")}},{key:"connectionError",get:function(){return this.errorString?new h.Z("stream-connection",this.errorString):null}},{key:"onFeature",value:function(e){this.emit("data-received",e)}},{key:"onMessage",value:function(e){this.emit("message-received",e)}}]),r}(r(91505).Z.EventedAccessor);(0,f._)([(0,Z.Cb)({readOnly:!0})],m.prototype,"connectionError",null);var S,C,x=m=(0,f._)([(0,k.j)("esri.layers.support.StreamConnection")],m);(C=S||(S={}))[C.CONNECTING=0]="CONNECTING",C[C.OPEN=1]="OPEN",C[C.CLOSING=2]="CLOSING",C[C.CLOSED=3]="CLOSED";var F=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;(0,a.Z)(this,r),(n=t.call(this))._outstandingMessages=[],n.errorString=null;var s=e.geometryType,o=e.spatialReference,i=e.sourceSpatialReference;return n._config=e,n._featureZScaler=(0,b.k)(s,i,o),n._open(),n}return(0,c.Z)(r,[{key:"_open",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._tryCreateWebSocket();case 2:if(e.t0=this.destroyed,e.t0){e.next=6;break}return e.next=6,this._handshake();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){(0,_.Z)((0,w.Z)(r.prototype),"destroy",this).call(this),(0,v.pC)(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}},{key:"connectionStatus",get:function(){if((0,v.Wi)(this._websocket))return"disconnected";switch(this._websocket.readyState){case S.CONNECTING:case S.OPEN:return"connected";case S.CLOSING:case S.CLOSED:return"disconnected"}}},{key:"sendMessageToSocket",value:function(e){(0,v.Wi)(this._websocket)?this._outstandingMessages.push(e):this._websocket.send(JSON.stringify(e))}},{key:"sendMessageToClient",value:function(e){this._onMessage(e)}},{key:"updateCustomParameters",value:function(e){this._config.customParameters=e,(0,v.pC)(this._websocket)&&this._websocket.close()}},{key:"_tryCreateWebSocket",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var t,r,n,o,i,a,c=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:this._config.source.path,r=c.length>1&&void 0!==c[1]?c[1]:1e3,n=c.length>2&&void 0!==c[2]?c[2]:0,e.prev=3,!this.destroyed){e.next=6;break}return e.abrupt("return");case 6:return i=(0,y.fl)(t,null!==(o=this._config.customParameters)&&void 0!==o?o:{}),e.next=9,this._createWebSocket(i);case 9:this._websocket=e.sent,this.notifyChange("connectionStatus"),e.next=25;break;case 13:if(e.prev=13,e.t0=e.catch(3),a=r/1e3,!(this._config.maxReconnectionAttempts&&n>=this._config.maxReconnectionAttempts)){e.next=20;break}e.t1=(p.Z.getLogger(this.declaredClass).error(new h.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()),e.next=24;break;case 20:return p.Z.getLogger(this.declaredClass).error(new h.Z("websocket-connection","Failed to connect. Attempting to reconnect in ".concat(a,"s"),e.t0)),e.next=23,(0,g.e4)(r);case 23:e.t1=this._tryCreateWebSocket(t,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),n+1);case 24:return e.abrupt("return",e.t1);case 25:case"end":return e.stop()}}),e,this,[[3,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"_setWebSocketJSONParseHandler",value:function(e){var t=this;e.onmessage=function(e){try{var r=JSON.parse(e.data);t._onMessage(r)}catch(n){return void p.Z.getLogger(t.declaredClass).error(new h.Z("websocket-connection","Failed to parse message, invalid JSON",{error:n}))}}}},{key:"_createWebSocket",value:function(e){var t=this;return new Promise((function(r,n){var s=new WebSocket(e);s.onopen=function(){if(s.onopen=null,t.destroyed)return s.onclose=null,void s.close();s.onclose=function(e){return t._onClose(e)},s.onerror=function(e){return t._onError(e)},t._setWebSocketJSONParseHandler(s),r(s)},s.onclose=function(e){s.onopen=s.onclose=null,n(e)}}))}},{key:"_handshake",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var t,r,o,i,a,c,u,l,f=this,d=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=d.length>0&&void 0!==d[0]?d[0]:1e4,r=this._websocket,!(0,v.Wi)(r)){e.next=4;break}return e.abrupt("return");case 4:return o=(0,g.hh)(),i=r.onmessage,a=this._config,c=a.filter,u=a.outFields,l=a.spatialReference,e.abrupt("return",(o.timeout(t),r.onmessage=function(e){var t,s=null;try{s=JSON.parse(e.data)}catch(m){}s&&"object"==typeof s||(p.Z.getLogger(f.declaredClass).error(new h.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),o.reject(),f.destroy()),(null===(t=s.spatialReference)||void 0===t?void 0:t.wkid)!==(null===l||void 0===l?void 0:l.wkid)&&(p.Z.getLogger(f.declaredClass).error(new h.Z("websocket-connection","Protocol violation. Handshake failed - expected wkid of ".concat(l.wkid),e.data)),o.reject(),f.destroy()),"json"!==s.format&&(p.Z.getLogger(f.declaredClass).error(new h.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),o.reject(),f.destroy()),c&&s.filter!==c&&p.Z.getLogger(f.declaredClass).error(new h.Z("websocket-connection","Tried to set filter, but server doesn't support it")),u&&s.outFields!==u&&p.Z.getLogger(f.declaredClass).error(new h.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),r.onmessage=i;var a,d=(0,n.Z)(f._outstandingMessages);try{for(d.s();!(a=d.n()).done;){var v=a.value;r.send(JSON.stringify(v))}}catch(g){d.e(g)}finally{d.f()}f._outstandingMessages=[],o.resolve()},r.send(JSON.stringify({filter:c,outFields:u,format:"json",spatialReference:{wkid:l.wkid}})),o.promise));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_onMessage",value:function(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":var t,r=(0,n.Z)(e.features);try{for(r.s();!(t=r.n()).done;){var s=t.value;(0,v.pC)(this._featureZScaler)&&this._featureZScaler(s.geometry),this.onFeature(s)}}catch(o){r.e(o)}finally{r.f()}}}},{key:"_onError",value:function(e){var t="Encountered an error over WebSocket connection";this._set("errorString",t),p.Z.getLogger(this.declaredClass).error("websocket-connection",t)}},{key:"_onClose",value:function(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&p.Z.getLogger(this.declaredClass).error("websocket-connection","WebSocket closed unexpectedly with error code ".concat(e.code)),this.destroyed||this._open()}}]),r}(x);(0,f._)([(0,Z.Cb)()],F.prototype,"connectionStatus",null),(0,f._)([(0,Z.Cb)()],F.prototype,"errorString",void 0),F=(0,f._)([(0,k.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],F);var R=r(5192),N=r(86638),L=r(77981),O=r(78952),W={maxQueryDepth:5,maxRecordCountFactor:3},E=function(e){(0,u.Z)(f,e);var t=(0,l.Z)(f);function f(e){var r;return(0,a.Z)(this,f),(r=t.call(this,(0,i.Z)((0,i.Z)({},W),e)))._buddyServicesQuery=null,r._relatedFeatures=null,r}return(0,c.Z)(f,[{key:"_open",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var t,r,n,o,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchServiceDefinition(this._config.source);case 2:return(t=e.sent).timeInfo.trackIdField||p.Z.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect."),r=this._fetchWebSocketUrl(t.streamUrls,this._config.spatialReference),this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),e.next=8,this._buddyServicesQuery;case 8:return e.next=10,this._tryCreateWebSocket(r);case 10:n=this._config,o=n.filter,i=n.outFields,this.destroyed||this._setFilter(o,i);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_onMessage",value:function(e){if("attributes"in e){var t;try{t=this._enrich(e),(0,v.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(r){return void p.Z.getLogger(this.declaredClass).error(new h.Z("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}},{key:"_fetchServiceDefinition",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){var r,n,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,i.Z)({f:"json"},this._config.customParameters),n=(0,d.default)(t.path,{query:r,responseType:"json"}),e.next=4,n;case 4:return o=e.sent.data,e.abrupt("return",(this._serviceDefinition=o,o));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchWebSocketUrl",value:function(e,t){var r=e[0],n=r.urls,s=r.token,o=this._inferWebSocketBaseUrl(n);return(0,y.fl)("".concat(o,"/subscribe"),{outSR:""+t.wkid,token:s})}},{key:"_inferWebSocketBaseUrl",value:function(e){if(1===e.length)return e[0];var t,r=(0,n.Z)(e);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(s.includes("wss"))return s}}catch(o){r.e(o)}finally{r.f()}return p.Z.getLogger(this.declaredClass).error(new h.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}},{key:"_setFilter",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t,r){var n,o,i,a,c,u,l=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._websocket,!((0,v.Wi)(n)||(0,v.Wi)(t)&&(0,v.Wi)(r))){e.next=3;break}return e.abrupt("return");case 3:return o=JSON.stringify({filter:this._serializeFilter(t,r)}),i=!1,a=(0,g.hh)(),c=function(){i||(l.destroyed||l._websocket!==n||p.Z.getLogger(l.declaredClass).error(new h.Z("geoevent-connection","Server timed out when setting filter")),a.reject())},u=function(e){var t=JSON.parse(e.data);t.filter&&(t.error&&(p.Z.getLogger(l.declaredClass).error(new h.Z("geoevent-connection","Failed to set service filter",t.error)),l._set("errorString","Could not set service filter - ".concat(t.error)),a.reject(t.error)),l._setWebSocketJSONParseHandler(n),i=!0,a.resolve())},e.abrupt("return",(n.onmessage=u,n.send(o),setTimeout(c,1e4),a.promise));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_serializeFilter",value:function(e,t){var r={};if((0,v.Wi)(e)&&(0,v.Wi)(t))return r;if((0,v.pC)(e)&&e.geometry)try{var n=(0,L.im)(e.geometry);if("extent"!==n.type)throw new h.Z("Expected extent but found type ".concat(n.type));r.geometry=JSON.stringify(n.shiftCentralMeridian())}catch(s){p.Z.getLogger(this.declaredClass).error(new h.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return(0,v.pC)(e)&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(r.where=e.where),(0,v.pC)(t)&&(r.outFields=t.join(",")),r}},{key:"_enrich",value:function(e){if(!this._relatedFeatures)return e;var t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],n=this._relatedFeatures.get(r);if(!n)return p.Z.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;var s=n.attributes,o=n.geometry;for(var i in s)e.attributes[i]=s[i];return o&&(e.geometry=o),e.geometry||e.centroid||p.Z.getLogger(this.declaredClass).error(new h.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}},{key:"_queryBuddyServices",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var t,r,o,i,a,c,u,l,f;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this._serviceDefinition,r=t.relatedFeatures,o=t.keepLatestArchive,i=this._queryRelatedFeatures(r),a=this._queryArchive(o),e.next=4,i;case 4:return e.next=6,a;case 6:if(c=e.sent){e.next=9;break}return e.abrupt("return");case 9:u=(0,n.Z)(c.features);try{for(u.s();!(l=u.n()).done;)f=l.value,this.onFeature(this._enrich(f))}catch(s){u.e(s)}finally{u.f()}e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),p.Z.getLogger(this.declaredClass).error(new h.Z("geoevent-connection","Encountered an error when querying buddy services",{error:e.t0}));case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"_queryRelatedFeatures",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this._queryBuddy(t.featuresUrl);case 4:r=e.sent,this._addRelatedFeatures(r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_queryArchive",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",this._queryBuddy(t.featuresUrl));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_queryBuddy",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){var n,o,i,a,c,u,l,f,d,h,p;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(r,64326));case 2:return e.t0=e.sent.default,e.t1={url:t},n=new e.t0(e.t1),e.next=7,n.load();case 7:if(o=e.sent,i=o.capabilities,a=i.query.supportsMaxRecordCountFactor,c=i.query.supportsPagination,u=i.query.supportsCentroid,l=this._config.maxRecordCountFactor,f=n.capabilities.query.maxRecordCount,d=a?f*l:f,(h=new N.Z).outFields=(0,v.Pt)(this._config.outFields,["*"]),h.where=(0,v.Pt)((0,v.U2)(this._config.filter,"where"),"1=1"),h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=O.Z.fromJSON(this._config.spatialReference),u&&(h.returnCentroid=!0),a&&(h.maxRecordCountFactor=l),!c){e.next=18;break}return e.abrupt("return",(h.num=d,n.destroy(),this._queryPages(t,h)));case 18:return e.next=20,(0,R.JT)(t,h,this._config.sourceSpatialReference);case 20:return p=e.sent,e.abrupt("return",(n.destroy(),p.data));case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_queryPages",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t,r){var n,o,i,a,c,u=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>2&&void 0!==u[2]?u[2]:[],i=u.length>3&&void 0!==u[3]?u[3]:0,r.start=(0,v.pC)(r.num)?i*r.num:null,e.next=5,(0,R.JT)(t,r,this._config.sourceSpatialReference);case 5:return a=e.sent,c=a.data,e.abrupt("return",c.exceededTransferLimit&&i<(null!==(n=this._config.maxQueryDepth)&&void 0!==n?n:0)?(c.features.forEach((function(e){return o.push(e)})),this._queryPages(t,r,o,i+1)):(o.forEach((function(e){return c.features.push(e)})),c));case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_addRelatedFeatures",value:function(e){var t,r=new Map,s=e.features,o=this._serviceDefinition.relatedFeatures.joinField,i=(0,n.Z)(s);try{for(i.s();!(t=i.n()).done;){var a=t.value,c=a.attributes[o];r.set(c,a)}}catch(u){i.e(u)}finally{i.f()}this._relatedFeatures=r}}]),f}(F),P=E=(0,f._)([(0,k.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],E),M=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;(0,a.Z)(this,r),(n=t.call(this)).connectionStatus="connected",n.errorString=null;var s=e.geometryType,o=e.spatialReference,i=e.sourceSpatialReference;return n._featureZScaler=(0,b.k)(s,i,o),n}return(0,c.Z)(r,[{key:"updateCustomParameters",value:function(e){}},{key:"sendMessageToSocket",value:function(e){}},{key:"sendMessageToClient",value:function(e){if("type"in e)switch(e.type){case"features":case"featureResult":var t,r=(0,n.Z)(e.features);try{for(r.s();!(t=r.n()).done;){var s=t.value;(0,v.pC)(this._featureZScaler)&&this._featureZScaler(s.geometry),this.onFeature(s)}}catch(o){r.e(o)}finally{r.f()}}this.onMessage(e)}}]),r}(x);function T(e,t,r,n,s,o,i,a){var c={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:n,filter:s,maxReconnectionAttempts:o,maxReconnectionInterval:i,customParameters:a};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new F(c):new P(c):new M(c)}(0,f._)([(0,Z.Cb)()],M.prototype,"connectionStatus",void 0),(0,f._)([(0,Z.Cb)()],M.prototype,"errorString",void 0),M=(0,f._)([(0,k.j)("esri.layers.support.ClientSideConnection")],M)}}]);
//# sourceMappingURL=7463.9523bf36.chunk.js.map