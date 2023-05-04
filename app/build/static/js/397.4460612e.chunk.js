"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[397],{50397:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(74165),i=r(15861),a=r(1413),s=r(15671),o=r(43144),u=r(11752),c=r(61120),l=r(60136),p=r(29388),y=r(27366),d=r(10064),f=r(42537),h=r(92026),v=r(94172),m=r(49861),_=(r(25243),r(63780),r(69912)),S=r(49818),g=r(50244),Z=r(31666);function k(e,t){if((0,h.Wi)(e)&&(0,h.Wi)(t))return null;var r={};return(0,h.pC)(t)&&(r.geometry=t.toJSON()),(0,h.pC)(e)&&(r.where=e),r}var O=function(e){(0,l.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments))._enabledEventTypes=new Set,e._isUserPaused=!1,e.errorString=null,e.connectionStatus="disconnected",e}return(0,o.Z)(r,[{key:"initialize",value:function(){var e=this;this.addHandles([(0,v.YP)((function(){return e.layer.customParameters}),(function(t){return e._proxy.updateCustomParameters(t)})),this.layer.on("send-message-to-socket",(function(t){return e._proxy.sendMessageToSocket(t)})),this.layer.on("send-message-to-client",(function(t){return e._proxy.sendMessageToClient(t)})),(0,v.YP)((function(){return e.layer.purgeOptions}),(function(){return e._update()})),(0,v.YP)((function(){return e.suspended}),(function(t){t?e._proxy.pauseStream():e._isUserPaused||e._proxy.resumeStream()}))],"constructor")}},{key:"connectionError",get:function(){if(this.errorString)return new d.Z("stream-controller",this.errorString)}},{key:"pause",value:function(){this._isUserPaused=!0,this._proxy.pauseStream()}},{key:"resume",value:function(){this._isUserPaused=!1,this._proxy.resumeStream()}},{key:"on",value:function(e,t){var n=this;if(Array.isArray(e))return(0,f.AL)(e.map((function(e){return n.on(e,t)})));var i=["data-received","message-received"].includes(e);i&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));var a=(0,u.Z)((0,c.Z)(r.prototype),"on",this).call(this,e,t),s=this;return{remove:function(){a.remove(),i&&(s._proxy.closed||s.hasEventListener(e)||s._proxy.enableEvent(e,!1))}}}},{key:"queryLatestObservations",value:function(e,t){var r,n,i,a=this;if(!(null!==(r=this.layer.timeInfo)&&void 0!==r&&r.endField||null!==(n=this.layer.timeInfo)&&void 0!==n&&n.startField||null!==(i=this.layer.timeInfo)&&void 0!==i&&i.trackIdField))throw new d.Z("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((function(e){var t=S.Z.fromJSON(e);return t.features.forEach((function(e){e.layer=a.layer,e.sourceLayer=a.layer})),t}))}},{key:"detach",value:function(){(0,u.Z)((0,c.Z)(r.prototype),"detach",this).call(this),this.connectionStatus="disconnected"}},{key:"_createClientOptions",value:function(){var e=this;return(0,a.Z)((0,a.Z)({},(0,u.Z)((0,c.Z)(r.prototype),"_createClientOptions",this).call(this)),{},{setProperty:function(t){e.set(t.propertyName,t.value)}})}},{key:"_createTileRendererHash",value:function(e){var t="".concat(JSON.stringify(this.layer.purgeOptions),".").concat(JSON.stringify(k(this.layer.definitionExpression,this.layer.geometryDefinition)),")");return(0,u.Z)((0,c.Z)(r.prototype),"_createTileRendererHash",this).call(this,e)+t}},{key:"_createServiceOptions",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,r,i,a,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.layer,r=t.objectIdField,i=t.fields.map((function(e){return e.toJSON()})),a=(0,Z.oq)(t.geometryType),s=t.timeInfo&&t.timeInfo.toJSON()||null,o=t.spatialReference?t.spatialReference.toJSON():null,e.abrupt("return",{type:"stream",fields:i,geometryType:a,objectIdField:r,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:k(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:t.customParameters});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(g.default);(0,y._)([(0,m.Cb)()],O.prototype,"errorString",void 0),(0,y._)([(0,m.Cb)({readOnly:!0})],O.prototype,"connectionError",null),(0,y._)([(0,m.Cb)()],O.prototype,"connectionStatus",void 0);var b=O=(0,y._)([(0,_.j)("esri.views.2d.layers.StreamLayerView2D")],O)}}]);
//# sourceMappingURL=397.4460612e.chunk.js.map