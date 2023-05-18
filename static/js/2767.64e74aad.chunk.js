"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2767],{36700:function(e,t,r){r.d(t,{x:function(){return p}});var n=r(1413),i=r(15671),a=r(43144),o=r(60136),s=r(29388),u=r(95122),c=r(75691),d=r(61309),p=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(e){return(0,i.Z)(this,r),t.call(this,(0,n.Z)((0,n.Z)({},e),{},{constraint:new u.Hk(e.targetPoint)}))}return(0,a.Z)(r,[{key:"hints",get:function(){return[new d.n(this.targetPoint,this.isDraped,this.domain)]}}]),r}(c.a)},92767:function(e,t,r){r.r(t),r.d(t,{SceneLayerSnappingSource:function(){return I}});var n=r(74165),i=r(15861),a=r(15671),o=r(43144),s=r(60136),u=r(29388),c=r(27366),d=r(85015),p=r(92026),l=r(66978),f=r(49861),h=(r(25243),r(63780),r(69912)),v=r(41691),y=r(42537),w=r(7494),k=r(37762),_=r(71353),g=r(46798),Z=r(23470),b=r(1700),S=r(95905),C=r(36700),m=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).availability=0,n._ids=new Set,n}return(0,o.Z)(r,[{key:"destroy",value:function(){this._workerHandle.destroy(),this._workerHandle=null}},{key:"initialize",value:function(){var e=this;this._workerHandle=new x(this.schedule,{fetchAllEdgeLocations:function(t,r){return e._fetchAllEdgeLocations(t,r)}})}},{key:"fetchCandidates",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,a,o,s,u,c,d=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.coordinateHelper,a=t.point,o=L,this.renderCoordsHelper.toRenderCoords(a,i.spatialReference,o),s=t.distance,u="number"==typeof s?s:s.distance,e.next=6,this._workerHandle.invoke({bounds:(0,Z.f)(o[0],o[1],o[2],u),types:t.types},r);case 6:return c=e.sent,e.abrupt("return",(c.candidates.sort((function(e,t){return e.distance-t.distance})),c.candidates.map((function(e){return d._convertCandidate(i,e)}))));case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"add",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._ids.add(t.id),e.next=3,this._workerHandle.invokeMethod("add",t,r);case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._ids.delete(t.id),e.next=3,this._workerHandle.invokeMethod("remove",t,r);case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_convertCandidate",value:function(e,t){switch(t.type){case"edge":return new S.L({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new C.x({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}},{key:"_convertRenderCoordinate",value:function(e,t){var r=e.spatialReference,n=(0,_.c)();return this.renderCoordsHelper.fromRenderCoords(t,n,r),(0,b.uc)(n)}},{key:"_fetchAllEdgeLocations",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var a,o,s,u,c,d=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],o=[],s=(0,k.Z)(t.components),e.prev=2,c=(0,n.Z)().mark((function e(){var t,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u.value,s=t.id,c=t.uid,d._ids.has(s)&&a.push((0,i.Z)((0,n.Z)().mark((function e(){var t,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.fetchEdgeLocations(s,r.signal);case 2:return t=e.sent,i=t.locations.buffer,e.abrupt("return",(o.push(i),{id:s,uid:c,objectIds:t.objectIds,locations:i,origin:t.origin,type:t.type}));case 5:case"end":return e.stop()}}),e)})))());case 2:case"end":return e.stop()}}),e)})),s.s();case 5:if((u=s.n()).done){e.next=9;break}return e.delegateYield(c(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e.catch(2),s.e(e.t1);case 14:return e.prev=14,s.f(),e.finish(14);case 17:return e.next=19,Promise.all(a);case 19:return e.t2=e.sent.filter((function(e){var t=e.id;return d._ids.has(t)})),e.t3={components:e.t2},e.t4=o,e.abrupt("return",{result:e.t3,transferList:e.t4});case 23:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(v.r);(0,c._)([(0,f.Cb)({constructOnly:!0})],m.prototype,"renderCoordsHelper",void 0),(0,c._)([(0,f.Cb)({constructOnly:!0})],m.prototype,"fetchEdgeLocations",void 0),(0,c._)([(0,f.Cb)({constructOnly:!0})],m.prototype,"schedule",void 0),(0,c._)([(0,f.Cb)({readOnly:!0})],m.prototype,"availability",void 0),m=(0,c._)([(0,h.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],m);var x=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e,n){return(0,a.Z)(this,r),t.call(this,"SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:n})}return(0,o.Z)(r)}(g.q),L=(0,_.c)(),H=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).availability=1,n._abortController=new AbortController,n}return(0,o.Z)(r,[{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"destroy",value:function(){this._tracker=(0,p.hw)(this._tracker),this._abortController=(0,p.IM)(this._abortController)}},{key:"initialize",value:function(){var e=this,t=this.view.resourceController;this._edgeWorker=new w.D((function(e){return t.immediate.schedule(e)})),this._workerHandle=new m({renderCoordsHelper:this.view.renderCoordsHelper,schedule:function(e){return t.immediate.schedule(e)},fetchEdgeLocations:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(r,i){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,p.Wi)(e._tracker)){t.next=2;break}throw new Error("tracker-not-initialized");case 2:return t.abrupt("return",e._tracker.fetchEdgeLocations(r,e._edgeWorker,i));case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([(0,y.ed)(this._workerHandle),(0,y.ed)(this._edgeWorker)])}},{key:"fetchCandidates",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._workerHandle.fetchCandidates(t,r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){}},{key:"_setupLayerView",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,r,i=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.destroyed){e.next=2;break}return e.abrupt("return");case 2:return t=(0,p.yw)(this._abortController,(function(e){return e.signal})),e.next=5,this.getLayerView();case 5:r=e.sent,(0,p.Wi)(r)||(0,l.Hc)(t)||(this._tracker=r.trackSnappingSources({add:function(e,r){i.updatingHandles.addPromise(i._workerHandle.add({id:e,bounds:r},t))},remove:function(e){i.updatingHandles.addPromise(i._workerHandle.remove({id:e},t))}}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(v.r);(0,c._)([(0,f.Cb)({constructOnly:!0})],H.prototype,"getLayerView",void 0),(0,c._)([(0,f.Cb)({constructOnly:!0})],H.prototype,"view",void 0),(0,c._)([(0,f.Cb)({readOnly:!0})],H.prototype,"updating",null),(0,c._)([(0,f.Cb)({readOnly:!0})],H.prototype,"availability",void 0),H=(0,c._)([(0,h.j)("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],H);var I=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).availability=1,n._i3sSources=[],n}return(0,o.Z)(r,[{key:"updating",get:function(){return this._i3sSources.some((function(e){return e.updating}))}},{key:"destroy",value:function(){this._i3sSources.forEach((function(e){return e.destroy()})),this._i3sSources.length=0}},{key:"initialize",value:function(){var e=this.view,t=this.layerSource.layer;this._i3sSources="building-scene"===t.type?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}},{key:"fetchCandidates",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this._i3sSources.map((function(e){return e.fetchCandidates(t,r)})));case 2:return i=e.sent,e.abrupt("return",((0,l.k_)(r),i.flat()));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){this._i3sSources.forEach((function(e){return e.refresh()}))}},{key:"_getBuildingSceneI3SSources",value:function(e,t){return t.allSublayers.toArray().map((function(r){return"building-component"===r.type?new H({getLayerView:function(){var a=(0,i.Z)((0,n.Z)().mark((function i(){return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.whenLayerView(t);case 2:return n.abrupt("return",n.sent.whenSublayerView(r));case 3:case"end":return n.stop()}}),i)})));return function(){return a.apply(this,arguments)}}(),view:e}):null})).filter(p.pC)}},{key:"_getSceneLayerI3SSource",value:function(e,t){return new H({getLayerView:function(){var r=(0,i.Z)((0,n.Z)().mark((function r(){var i;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.whenLayerView(t);case 2:return i=r.sent,r.abrupt("return","scene-layer-graphics-3d"===i.type?void 0:i);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),view:e})}}]),r}(d.Z);(0,c._)([(0,f.Cb)({constructOnly:!0})],I.prototype,"layerSource",void 0),(0,c._)([(0,f.Cb)({constructOnly:!0})],I.prototype,"view",void 0),(0,c._)([(0,f.Cb)({readOnly:!0})],I.prototype,"updating",null),(0,c._)([(0,f.Cb)({readOnly:!0})],I.prototype,"availability",void 0),I=(0,c._)([(0,h.j)("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],I)}}]);
//# sourceMappingURL=2767.64e74aad.chunk.js.map