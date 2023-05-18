"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6627],{43244:function(e,t,r){r.d(t,{Z:function(){return s}});var i=r(37762),n=r(15671),a=r(43144),o=r(92026),s=function(){function e(t){(0,n.Z)(this,e),this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}return(0,a.Z)(e,[{key:"entries",get:function(){return this._buffer}},{key:"enqueue",value:function(e){if(this.size===this.maxSize){var t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}},{key:"dequeue",value:function(){if(0===this.size)return null;var e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}},{key:"peek",value:function(){return 0===this.size?null:this._buffer[this._start]}},{key:"find",value:function(e){if(0===this.size)return null;var t,r=(0,i.Z)(this._buffer);try{for(r.s();!(t=r.n()).done;){var n=t.value;if((0,o.pC)(n)&&e(n))return n}}catch(a){r.e(a)}finally{r.f()}return null}},{key:"clear",value:function(e){for(var t=this.dequeue();(0,o.pC)(t);)e&&e(t),t=this.dequeue()}}]),e}()},76151:function(e,t,r){r.d(t,{Qo:function(){return l}});var i=r(37762),n=r(15671),a=r(43144),o=r(43244),s=r(16889),u=r(92026),c="__esri_timestamp__",l=function(){function e(t,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:128;(0,n.Z)(this,e),this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=i,this._purgeOptions=a,this.store=t,this.objectIdField=r,this.purgeInterval=o,this._useGeneratedIds="__esri_stream_id__"===this.objectIdField}return(0,a.Z)(e,[{key:"removeById",value:function(e){this._removed.push(e)}},{key:"removeByTrackId",value:function(e){var t=this._trackIdToObservations.get(e);if(t){var r,n=(0,i.Z)(t.entries);try{for(n.s();!(r=n.n()).done;){var a=r.value;this._removed.push(a)}}catch(o){n.e(o)}finally{n.f()}}}},{key:"add",value:function(e){var t;if(this._useGeneratedIds){var r=this._nextId();e.attributes[this.objectIdField]=r,e.objectId=r}else e.objectId=e.attributes[this.objectIdField];var i=e.objectId;if(this._addOrUpdated.set(i,e),this._maxAge=Math.max(this._maxAge,e.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return(0,u.Wi)(this._trackIdLessObservations)&&(this._trackIdLessObservations=new o.Z(1e5)),void this._trackIdLessObservations.enqueue(i);var n=e.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(n)){var a=(0,u.pC)(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1e3,c=(0,s.uZ)(a,0,1e3);this._trackIdToObservations.set(n,new o.Z(c))}var l=null===(t=this._trackIdToObservations.get(n))||void 0===t?void 0:t.enqueue(i);(0,u.pC)(l)&&(this._addOrUpdated.has(l)?this._addOrUpdated.delete(l):this._removed.push(l))}},{key:"checkForUpdates",value:function(){var e=this._getToAdd(),t=this._getToRemove(),r=performance.now();r-this._lastPurge>=this.purgeInterval&&(this._purge(r),this._lastPurge=r);var n=[];if((0,u.pC)(t)){var a,o=(0,i.Z)(t);try{for(o.s();!(a=o.n()).done;){var s=a.value,l=this.store.removeById(s);(0,u.pC)(l)&&n.push(l)}}catch(_){o.e(_)}finally{o.f()}}var d=[];if((0,u.pC)(e)){var h,f=new Set((0,u.Pt)(t,[])),v=(0,i.Z)(e);try{for(v.s();!(h=v.n()).done;){var p=h.value;f.has(p.objectId)||(p.attributes[c]=r,this.store.add(p),d.push(p))}}catch(_){v.e(_)}finally{v.f()}}(d.length||(null===n||void 0===n?void 0:n.length))&&this.store.update(d,n)}},{key:"_getToAdd",value:function(){if(!this._addOrUpdated.size)return null;var e=new Array(this._addOrUpdated.size),t=0;return this._addOrUpdated.forEach((function(r){return e[t++]=r})),this._addOrUpdated.clear(),e}},{key:"_getToRemove",value:function(){var e=this._removed;return this._removed.length?(this._removed=[],e):null}},{key:"_nextId",value:function(){var e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e}},{key:"_purge",value:function(e){var t=this._purgeOptions;(0,u.pC)(t)&&(this._purgeSomeByDisplayCount(t),this._purgeByAge(t),this._purgeByAgeReceived(e,t),this._purgeTracks())}},{key:"_purgeSomeByDisplayCount",value:function(e){if(e.displayCount){var t=this.store.size;if(t>e.displayCount){if(this._timeInfo.trackIdField){var r,n=(0,i.Z)(this._trackIdToObservations.values());try{for(n.s();!(r=n.n()).done;){var a=r.value;if(t>e.displayCount&&a.size){var o=(0,u.Wg)(a.dequeue());this._removed.push(o),t--}}}catch(l){n.e(l)}finally{n.f()}}if((0,u.pC)(this._trackIdLessObservations))for(var s=t-e.displayCount;s-- >0;){var c=this._trackIdLessObservations.dequeue();(0,u.pC)(c)&&this._removed.push(c)}}}}},{key:"_purgeByAge",value:function(e){var t,r=this,i=null===(t=this._timeInfo)||void 0===t?void 0:t.startTimeField;if(e.age&&i){var n=60*e.age*1e3,a=this._maxAge-n;this.store.forEach((function(e){e.attributes[i]<a&&r._removed.push(e.objectId)}))}}},{key:"_purgeByAgeReceived",value:function(e,t){var r=this;if(t.ageReceived){var i=e-60*t.ageReceived*1e3;this.store.forEach((function(e){e.attributes[c]<i&&r._removed.push(e.objectId)}))}}},{key:"_purgeTracks",value:function(){var e=this;this._trackIdToObservations.forEach((function(t,r){0===t.size&&e._trackIdToObservations.delete(r)}))}}]),e}()},87072:function(e,t,r){function i(e){var t,r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?a(e.view.floors,r.floorInfo.floorField):null}function n(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?a(e,t.floorInfo.floorField):null}function a(e,t){if(null===e||void 0===e||!e.length)return null;var r=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,{c:function(){return i},f:function(){return n}})},3082:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var i=r(15671),n=r(43144),a=r(60136),o=r(29388),s=r(27366),u=r(10064),c=r(94172),l=r(49861),d=(r(25243),r(63780),r(69912)),h=r(37762),f=(r(59486),r(52639)),v=r(85015),p=r(41691),_=r(92026),y=r(67426),m=r(76151),g=r(97463),I=r(5198),k=r(27823),b=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,n.Z)(r,[{key:"getObjectId",value:function(){return this.objectId}}]),r}(f.Z);(0,s._)([(0,l.Cb)({type:Number,json:{read:!0}})],b.prototype,"objectId",void 0),b=(0,s._)([(0,d.j)("esri.layers.graphics.controllers.StreamGraphic")],b);var C=function(){function e(t){(0,i.Z)(this,e),this.onUpdate=t,this._idToGraphic=new Map}return(0,n.Z)(e,[{key:"destroy",value:function(){this._idToGraphic.clear()}},{key:"add",value:function(e){this._idToGraphic.set(e.objectId,e)}},{key:"get",value:function(e){return this._idToGraphic.get(e)}},{key:"forEach",value:function(e){this._idToGraphic.forEach(e)}},{key:"removeById",value:function(e){var t=this._idToGraphic.get(e);return t?(t.sourceLayer=t.layer=null,this._idToGraphic.delete(e),t):null}},{key:"update",value:function(e,t){this.onUpdate(e,t)}},{key:"size",get:function(){return this._idToGraphic.size}}]),e}(),O=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,i.Z)(this,r),(e=t.apply(this,arguments)).isPaused=!1,e.graphics=new I.g,e._updateInfo={websocket:0,client:0},e._updateIntervalId=null,e._outSpatialReference=null,e}return(0,n.Z)(r,[{key:"initialize",value:function(){var e=this;this.addResolvingPromise(this.layer.when((function(){return e._startup()})))}},{key:"destroy",value:function(){this.clear()}},{key:"_clearInterval",value:function(){null!==this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}},{key:"clear",value:function(){this._clearInterval(),this.connection=(0,_.SC)(this.connection),this.store=(0,_.SC)(this.store),this.graphics.clear(),this.handles.removeAll()}},{key:"updating",get:function(){return!this.connection||"connected"===this.connection.connectionStatus}},{key:"_startup",value:function(){var e=this,t=this.layer,r=this.layerView,i=t.spatialReference,n=t.definitionExpression,a=t.geometryDefinition,o=t.objectIdField,s=t.timeInfo,u=t.purgeOptions,l=t.maxReconnectionAttempts,d=t.maxReconnectionInterval,h=t.customParameters,f=t.geometryType?k.M.toJSON(t.geometryType):null,v=i,p=r.view.spatialReference,_={geometry:a,where:n};this.clear(),this._set("connection",(0,g.createConnection)(t.parsedUrl,v,p,f,_,l,d,null!==h&&void 0!==h?h:void 0)),this._outSpatialReference=p.toJSON(),this.store=new C(this._onUpdate.bind(this)),this.featuresManager=new m.Qo(this.store,o,s.toJSON(),u);var y="startup-watches";this.handles.remove(y),this.handles.add([t.on("send-message-to-socket",(function(t){return e.connection.sendMessageToSocket(t)})),t.on("send-message-to-client",(function(t){return e.connection.sendMessageToClient(t)})),this.connection.on("data-received",(function(t){return e._onFeature(t)})),this.connection.on("message-received",(function(t){return e._onWebSocketMessage(t)})),(0,c.YP)((function(){return[t.definitionExpression,t.geometryDefinition,t.purgeOptions]}),(function(){return e._startup()}))],y),this._initUpdateInterval()}},{key:"_onWebSocketMessage",value:function(e){var t=this;if(this.layerView.emit("message-received",e),"type"in e)switch(e.type){case"delete":if(e.objectIds){var r,i=(0,h.Z)(e.objectIds);try{for(i.s();!(r=i.n()).done;){var n=r.value;this.featuresManager.removeById(n)}}catch(u){i.e(u)}finally{i.f()}}if(e.trackIds){var a,o=(0,h.Z)(e.trackIds);try{for(o.s();!(a=o.n()).done;){var s=a.value;this.featuresManager.removeByTrackId(s)}}catch(u){o.e(u)}finally{o.f()}}break;case"clear":this.store.forEach((function(e){return t.featuresManager.removeById(e.objectId)}))}}},{key:"_onFeature",value:function(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{(0,_.pC)(e.geometry)&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._outSpatialReference);var t=b.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch(r){}}},{key:"_onUpdate",value:function(e,t){(0,_.pC)(t)&&this.graphics.removeMany(t),(0,_.pC)(e)&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}},{key:"_initUpdateInterval",value:function(){var e=this;this._clearInterval();var t=this.layer.updateInterval,r=performance.now();this._updateIntervalId=setInterval((function(){var t=performance.now(),i=t-r;if(i>2500){r=t;var n=Math.round(e._updateInfo.client/(i/1e3)),a=Math.round(e._updateInfo.websocket/(i/1e3));e._updateInfo.client=0,e._updateInfo.websocket=0,e.layerView.emit("update-rate",{client:n,websocket:a})}e.featuresManager.checkForUpdates()}),t)}},{key:"pauseStream",value:function(){this.isPaused=!0,this._clearInterval()}},{key:"resumeStream",value:function(){this.isPaused=!1,this._initUpdateInterval()}}]),r}((0,p.p)((0,y.v)(v.Z)));(0,s._)([(0,l.Cb)()],O.prototype,"isPaused",void 0),(0,s._)([(0,l.Cb)({constructOnly:!0})],O.prototype,"layer",void 0),(0,s._)([(0,l.Cb)({constructOnly:!0})],O.prototype,"layerView",void 0),(0,s._)([(0,l.Cb)()],O.prototype,"connection",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],O.prototype,"updating",null),O=(0,s._)([(0,d.j)("esri.layers.graphics.controllers.StreamController")],O);var w=r(86638),Z=r(43682),S=r(42069),T=r(78485),j=r(67581),U=r(18661),z=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,i.Z)(this,r),(e=t.apply(this,arguments)).type="stream-3d",e.updatePolicy=T.j.ASYNC,e.hasZ=!0,e.hasM=!1,e._isUserPaused=!1,e}return(0,n.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add((0,c.YP)((function(){return e.suspended}),(function(t){e.controller&&(t?e.controller.pauseStream():e._isUserPaused||e.controller.resumeStream())})))}},{key:"connectionError",get:function(){var e=this.get("controller.connection.errorString");if(e)return new u.Z("stream-controller",e)}},{key:"pause",value:function(){this._isUserPaused=!0,this.controller.pauseStream()}},{key:"resume",value:function(){this._isUserPaused=!1,this.controller.resumeStream()}},{key:"createQuery",value:function(){return new w.Z({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}},{key:"queryLatestObservations",value:function(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}},{key:"createController",value:function(){return new O({layer:this.layer,layerView:this})}},{key:"beforeSetController",value:function(){}}]),r}(function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,i.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).connectionError=null,e.filter=null,e}return(0,n.Z)(r,[{key:"connectionStatus",get:function(){var e,t,r,i;return null!==(e=this.controller)&&void 0!==e&&e.isPaused?"paused":null!==(t=null===(r=this.controller)||void 0===r||null===(i=r.connection)||void 0===i?void 0:i.connectionStatus)&&void 0!==t?t:"disconnected"}}]),r}(e);return(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"connectionError",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"connectionStatus",null),(0,s._)([(0,l.Cb)({type:U.Z})],t.prototype,"filter",void 0),t=(0,s._)([(0,d.j)("esri.layers.mixins.StreamLayerView")],t)}((0,Z.R)((0,S.A)(j.Z))));(0,s._)([(0,l.Cb)({readOnly:!0})],z.prototype,"updatePolicy",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],z.prototype,"connectionError",null),(0,s._)([(0,l.Cb)()],z.prototype,"controller",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],z.prototype,"hasZ",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],z.prototype,"hasM",void 0);var M=z=(0,s._)([(0,d.j)("esri.views.3d.layers.StreamLayerView3D")],z)}}]);
//# sourceMappingURL=6627.bef19414.chunk.js.map