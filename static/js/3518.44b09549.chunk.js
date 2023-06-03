"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3518],{47991:function(e,t,n){n.d(t,{SR:function(){return v},Ui:function(){return f}});var i=n(43144),r=n(15671),a=n(37762),s=n(29439),u=n(92026),o=n(65156),l=n(376),h=n(69662),c=n(77981),p=n(76335),d=n(92975);function f(e){return y(e,!0)}function v(e){return y(e,!1)}function y(e,t){if((0,u.Wi)(e))return null;var n=e.spatialReference,i=(0,d.C5)(n),r="toJSON"in e?e.toJSON():e;if(!i)return r;var a=(0,d.sS)(n)?102100:4326,s=p.UZ[a].maxX,o=p.UZ[a].minX;if((0,c.wp)(r))return m(r,s,o);if((0,c.aW)(r))return r.points=r.points.map((function(e){return m(e,s,o)})),r;if((0,c.YX)(r))return _(r,i);if((0,c.oU)(r)||(0,c.l9)(r)){var h=(0,l.$P)(C,r),f={xmin:h[0],ymin:h[1],xmax:h[2],ymax:h[3]},v=(0,p.XZ)(f.xmin,o)*(2*s),y=0===v?r:(0,p.Sy)(r,v);return f.xmin+=v,f.xmax+=v,f.xmax>s?Z(y,s,t):f.xmin<o?Z(y,o,t):y}return r}function _(e,t){if(!t)return e;var n=function(e,t){var n=[],i=e.ymin,r=e.ymax,a=e.xmin,u=e.xmax,o=e.xmax-e.xmin,l=(0,s.Z)(t.valid,2),h=l[0],c=l[1],p=g(e.xmin,t),d=p.x,f=p.frameId,v=g(e.xmax,t),y=v.x,_=v.frameId,m=d===y&&o>0;if(o>2*c){var k={xmin:a<u?d:y,ymin:i,xmax:c,ymax:r},Z={xmin:h,ymin:i,xmax:a<u?y:d,ymax:r},C={xmin:0,ymin:i,xmax:c,ymax:r},w={xmin:h,ymin:i,xmax:0,ymax:r},b=[],I=[];x(k,C)&&b.push(f),x(k,w)&&I.push(f),x(Z,C)&&b.push(_),x(Z,w)&&I.push(_);for(var P=f+1;P<_;P++)b.push(P),I.push(P);n.push(new S(k,[f]),new S(Z,[_]),new S(C,b),new S(w,I))}else d>y||m?n.push(new S({xmin:d,ymin:i,xmax:c,ymax:r},[f]),new S({xmin:h,ymin:i,xmax:y,ymax:r},[_])):n.push(new S({xmin:d,ymin:i,xmax:y,ymax:r},[f]));return n}(e,t).map((function(e){return e.extent}));return n.length<2?n[0]||e:n.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:n.map((function(e){return[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]}))}}function m(e,t,n){if(Array.isArray(e)){var i=e[0];if(i>t){var r=(0,p.XZ)(i,t);e[0]=i+r*(-2*t)}else if(i<n){var a=(0,p.XZ)(i,n);e[0]=i+a*(-2*n)}}else{var s=e.x;if(s>t){var u=(0,p.XZ)(s,t);e.x+=u*(-2*t)}else if(s<n){var o=(0,p.XZ)(s,n);e.x+=o*(-2*n)}}return e}function g(e,t){var n,i=(0,s.Z)(t.valid,2),r=i[0],a=i[1],u=2*a,o=0;return e>a?(e-=(n=Math.ceil(Math.abs(e-a)/u))*u,o=n):e<r&&(e+=(n=Math.ceil(Math.abs(e-r)/u))*u,o=-n),{x:e,frameId:o}}function x(e,t){var n=t.xmin,i=t.ymin,r=t.xmax,a=t.ymax;return k(e,n,i)&&k(e,n,a)&&k(e,r,a)&&k(e,r,i)}function k(e,t,n){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax}function Z(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(0,c.l9)(e);if(i&&(0,h.Zy)(e),n)return(new w).cut(e,t);for(var r=i?e.rings:e.paths,s=i?4:2,u=r.length,o=-2*t,l=0;l<u;l++){var p=r[l];if(p&&p.length>=s){var d,f=[],v=(0,a.Z)(p);try{for(v.s();!(d=v.n()).done;){var y=d.value;f.push([y[0]+o,y[1]])}}catch(_){v.e(_)}finally{v.f()}r.push(f)}}return i?e.rings=r:e.paths=r,e}var S=(0,i.Z)((function e(t,n){(0,r.Z)(this,e),this.extent=t,this.frameIds=n})),C=(0,o.Ue)(),w=function(){function e(){(0,r.Z)(this,e),this._linesIn=[],this._linesOut=[]}return(0,i.Z)(e,[{key:"cut",value:function(e,t){var n;if(this._xCut=t,e.rings)this._closed=!0,n=e.rings,this._minPts=4;else{if(!e.paths)return null;this._closed=!1,n=e.paths,this._minPts=2}var i,r=(0,a.Z)(n);try{for(r.s();!(i=r.n()).done;){var s=i.value;if(s&&!(s.length<this._minPts)){var u,o=!0,l=(0,a.Z)(s);try{for(l.s();!(u=l.n()).done;){var h=u.value;o?(this.moveTo(h),o=!1):this.lineTo(h)}}catch(x){l.e(x)}finally{l.f()}this._closed&&this.close()}}}catch(x){r.e(x)}finally{r.f()}this._pushLineIn(),this._pushLineOut(),n=[];var c,p=(0,a.Z)(this._linesIn);try{for(p.s();!(c=p.n()).done;){var d=c.value;d&&d.length>=this._minPts&&n.push(d)}}catch(x){p.e(x)}finally{p.f()}var f,v=-2*this._xCut,y=(0,a.Z)(this._linesOut);try{for(y.s();!(f=y.n()).done;){var _=f.value;if(_&&_.length>=this._minPts){var m,g=(0,a.Z)(_);try{for(g.s();!(m=g.n()).done;){m.value[0]+=v}}catch(x){g.e(x)}finally{g.f()}n.push(_)}}}catch(x){y.e(x)}finally{y.f()}return this._closed?e.rings=n:e.paths=n,e}},{key:"moveTo",value:function(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}},{key:"lineTo",value:function(e){var t=this._side(e[0]);if(t*this._prevSide==-1){var n=this._intersect(this._prevPt,e);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}},{key:"close",value:function(){var e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}},{key:"_moveTo",value:function(e,t,n){this._closed?(this._lineIn.push([n<=0?e:this._xCut,t]),this._lineOut.push([n>=0?e:this._xCut,t])):(n<=0&&this._lineIn.push([e,t]),n>=0&&this._lineOut.push([e,t]))}},{key:"_lineTo",value:function(e,t,n){this._closed?(this._addPolyVertex(this._lineIn,n<=0?e:this._xCut,t),this._addPolyVertex(this._lineOut,n>=0?e:this._xCut,t)):n<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([e,t])):n>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([e,t])):this._prevSide<0?(this._lineIn.push([e,t]),this._lineOut.push([e,t])):this._prevSide>0&&(this._lineOut.push([e,t]),this._lineIn.push([e,t]))}},{key:"_addPolyVertex",value:function(e,t,n){var i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=n:e.push([t,n])}},{key:"_checkClosingPt",value:function(e){var t=e.length;t>3&&e[0][0]===this._xCut&&e[t-2][0]===this._xCut&&e[1][0]===this._xCut&&(e[0][1]=e[t-2][1],e.pop())}},{key:"_side",value:function(e){return e<this._xCut?-1:e>this._xCut?1:0}},{key:"_intersect",value:function(e,t){var n=(this._xCut-e[0])/(t[0]-e[0]);return e[1]+n*(t[1]-e[1])}},{key:"_pushLineIn",value:function(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}},{key:"_pushLineOut",value:function(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}]),e}()},36700:function(e,t,n){n.d(t,{x:function(){return c}});var i=n(1413),r=n(15671),a=n(43144),s=n(60136),u=n(29388),o=n(95122),l=n(75691),h=n(61309),c=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(e){return(0,r.Z)(this,n),t.call(this,(0,i.Z)((0,i.Z)({},e),{},{constraint:new o.Hk(e.targetPoint)}))}return(0,a.Z)(n,[{key:"hints",get:function(){return[new h.n(this.targetPoint,this.isDraped,this.domain)]}}]),n}(l.a)},33518:function(e,t,n){n.r(t),n.d(t,{GraphicsSnappingSource:function(){return M}});var i=n(4942),r=n(29439),a=n(93433),s=n(37762),u=n(74165),o=n(15861),l=n(15671),h=n(43144),c=n(60136),p=n(29388),d=n(27366),f=n(85015),v=n(63780),y=n(14921),_=n(41691),m=n(92026),g=n(66978),x=n(94172),k=n(49861),Z=(n(25243),n(69912)),S=n(80885),C=n(79803),w=n(47991),b=n(27823),I=n(83406),P=n(3182),O=n(68928),E=n(14e3),F=n(74509),L=n(74579),R=n(64674),A=n(52824),G=n(59877),W=n(53580),T=n(48817),H="graphics-collections",M=function(e){(0,c.Z)(n,e);var t=(0,p.Z)(n);function n(e){var i;return(0,l.Z)(this,n),(i=t.call(this,e)).availability=1,i._sources={multipoint:null,point:null,polygon:null,polyline:null},i._loadedWkids=new Set,i._loadedWkts=new Set,i._pendingAdds=[],i._extrudedPolygonSymbolsCount=0,i}return(0,h.Z)(n,[{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"_hasZ",get:function(){var e=this.view;return(0,m.pC)(e)&&"3d"===e.type&&"map-notes"!==this.layerSource.layer.type}},{key:"_snappingElevationAligner",get:function(){var e=this.view,t=this.layerSource.layer,n=(0,m.pC)(e)&&"3d"===e.type;if(!n||"map-notes"===t.type)return(0,G.p)();var i=function(){var n=(0,o.Z)((0,u.Z)().mark((function n(i,r){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,g.Hl)(e.whenLayerView(t),r);case 2:return n.abrupt("return",n.sent.elevationAlignPointsInFeatures(i,r));case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,G.p)(n,{elevationInfo:t.elevationInfo,alignPointsInFeatures:i,spatialReference:e.spatialReference})}},{key:"_snappingElevationFilter",get:function(){var e=this.view,t=(0,m.pC)(e)&&"3d"===e.type&&"map-notes"!==this.layerSource.layer.type;return(0,W.c)(t)}},{key:"_symbologySnappingFetcher",get:function(){var e=this.view,t=this.layerSource.layer,n=(0,m.pC)(e)&&"3d"===e.type,i=this._extrudedPolygonSymbolsCount>0;return n&&"map-notes"!==t.type&&i?(0,T.k)(i,function(){var n=(0,o.Z)((0,u.Z)().mark((function n(i,r){var a;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.whenLayerView(t);case 2:return a=n.sent,n.abrupt("return",((0,g.k_)(r),a.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},r)));case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()):(0,T.k)()}},{key:"destroy",value:function(){var e,t=this,n=(0,s.Z)(this._pendingAdds);try{for(n.s();!(e=n.n()).done;){e.value.task.abort()}}catch(i){n.e(i)}finally{n.f()}this._pendingAdds.length=0,this._mapSources((function(e){return t._destroySource(e)}))}},{key:"initialize",value:function(){var e=this;this.updatingHandles.add((function(){return e.getGraphicsLayers()}),(function(t){e.updatingHandles.removeHandles(H);var n,i=(0,s.Z)(t);try{var r=function(){var t=n.value;e._addMany(t.graphics.toArray()),e.handles.add([t.on("graphic-update",(function(t){return e._onGraphicUpdate(t)})),e.updatingHandles.addOnCollectionChange((function(){return t.graphics}),(function(t){return e._onGraphicsChanged(t)}))],H)};for(i.s();!(n=i.n()).done;)r()}catch(a){i.e(a)}finally{i.f()}}),x.nn);var t=this.view,n=this.layerSource.layer;(0,m.pC)(t)&&"3d"===t.type&&"map-notes"!==n.type&&this.addHandles([t.elevationProvider.on("elevation-change",(function(t){var i=t.context;(0,F.W_)(i,n.elevationInfo)&&e._snappingElevationAligner.notifyElevationSourceChange()})),(0,x.YP)((function(){return n.elevationInfo}),(function(){return e._snappingElevationAligner.notifyElevationSourceChange()}),x.nn),(0,x.on)((function(){return n}),["edits","apply-edits","graphic-update"],(function(){return e._symbologySnappingFetcher.notifySymbologyChange()}))])}},{key:"fetchCandidates",value:function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t,n){var i,r,a,s,o=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.point,e.next=3,(0,g.WW)(this._mapSources((function(e){return o._fetchCandidatesForSource(e,t,n)})));case 3:return r=e.sent,(0,g.k_)(n),a=this._getGroundElevation,s=r.flat().map((function(e){return(0,A.X)(e,a)})),e.abrupt("return",((0,R.lQ)(i,s),s));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_getGroundElevation",get:function(){return(0,A.g)(this.view)}},{key:"_fetchCandidatesForSource",value:function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t,n,i){var r,s,o,l,h,c,p;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,R.rh)(n,null!==(r=null===(s=(0,m.Wg)(this.view))||void 0===s?void 0:s.type)&&void 0!==r?r:"2d"),e.next=3,t.queryEngine.executeQueryForSnapping(o,i);case 3:return l=e.sent,(0,g.k_)(i),e.next=7,this._snappingElevationAligner.alignCandidates(l.candidates,i);case 7:return h=e.sent,(0,g.k_)(i),e.next=11,this._symbologySnappingFetcher.fetch(h,i);case 11:return c=e.sent,(0,g.k_)(i),p=0===c.length?h:[].concat((0,a.Z)(h),(0,a.Z)(c)),e.abrupt("return",this._snappingElevationFilter.filter(o,p));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,i){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){}},{key:"_onGraphicUpdate",value:function(e){if(this.getGraphicsLayers().some((function(t){return t.graphics.includes(e.graphic)})))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}},{key:"_onGraphicsChanged",value:function(e){var t,n=(0,s.Z)(e.removed);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._remove(i)}}catch(r){n.e(r)}finally{n.f()}this._addMany(e.added)}},{key:"_addMany",value:function(e){var t,n=[],i=new Map,r=(0,s.Z)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;(0,m.Wi)(a.geometry)||(this._needsInitializeProjection(a.geometry.spatialReference)?(n.push(a.geometry.spatialReference),i.set(a.uid,a)):this._add(a))}}catch(u){r.e(u)}finally{r.f()}this._createPendingAdd(n,i)}},{key:"_createPendingAdd",value:function(e,t){var n=this;if(e.length){var i=(0,y.vr)(function(){var i=(0,o.Z)((0,u.Z)().mark((function i(a){var o,l,h,c;return(0,u.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,C.iQ)(e.map((function(e){return{source:e,dest:n.spatialReference}})),{signal:a});case 2:n._markLoadedSpatialReferences(e),o=(0,s.Z)(t);try{for(o.s();!(l=o.n()).done;)h=(0,r.Z)(l.value,2),c=h[1],n._add(c)}catch(u){o.e(u)}finally{o.f()}case 5:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}());this.updatingHandles.addPromise(i.promise);var a={task:i,graphics:t},l=function(){return(0,v.e$)(n._pendingAdds,a)};i.promise.then(l,l),this._pendingAdds.push(a)}}},{key:"_markLoadedSpatialReferences",value:function(e){var t,n=(0,s.Z)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;null!=i.wkid&&this._loadedWkids.add(i.wkid),null!=i.wkt&&this._loadedWkts.add(i.wkt)}}catch(r){n.e(r)}finally{n.f()}}},{key:"_add",value:function(e){if(!(0,m.Wi)(e.geometry)&&e.visible){var t=e.geometry;if("mesh"!==t.type){"extent"===t.type&&(t=S.Z.fromExtent(t));var n=this._ensureSource(t.type);if(!(0,m.Wi)(n)){var i=this._createOptimizedFeature(e.uid,t);(0,m.Wi)(i)||(n.featureStore.add(i),(0,L.QL)(e.symbol)&&this._extrudedPolygonSymbolsCount++)}}}}},{key:"_needsInitializeProjection",value:function(e){return(null==e.wkid||!this._loadedWkids.has(e.wkid))&&(null==e.wkt||!this._loadedWkts.has(e.wkt))&&!(0,C.Up)(e,this.spatialReference)}},{key:"_createOptimizedFeature",value:function(e,t){var n=(0,C.iV)((0,w.SR)(t),this.spatialReference);if(!n)return null;var r=this._ensureGeometryHasZ(n),a=(0,I.GH)(r,this._hasZ,!1);return new P.u_(a,(0,i.Z)({},j,e),null,e)}},{key:"_ensureGeometryHasZ",value:function(e){var t;if(!this._hasZ)return e;var n=function(e){for(;e.length<3;)e.push(0)},i=e.clone();switch(i.hasZ=!0,i.type){case"point":i.z=null!==(t=i.z)&&void 0!==t?t:0;break;case"multipoint":i.points.forEach(n);break;case"polyline":i.paths.forEach((function(e){return e.forEach(n)}));break;case"polygon":i.rings.forEach((function(e){return e.forEach(n)}))}return i}},{key:"_ensureSource",value:function(e){var t=this._sources[e];if((0,m.pC)(t))return t;var n=this._createSource(e);return this._sources[e]=n,n}},{key:"_createSource",value:function(e){var t=b.M.toJSON(e),n=this._hasZ,i=new O.Z({geometryType:t,hasZ:n,hasM:!1});return{featureStore:i,queryEngine:new E.q({featureStore:i,fields:[{name:j,type:"esriFieldTypeOID",alias:j}],geometryType:t,hasM:!1,hasZ:n,objectIdField:j,spatialReference:this.spatialReference,scheduler:(0,m.pC)(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:e}}},{key:"_remove",value:function(e){var t=this;this._mapSources((function(n){return t._removeFromSource(n,e)}));var n,i=(0,s.Z)(this._pendingAdds);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.graphics.delete(e.uid),0===r.graphics.size&&r.task.abort()}}catch(a){i.e(a)}finally{i.f()}}},{key:"_removeFromSource",value:function(e,t){var n=t.uid;e.featureStore.has(n)&&(e.featureStore.removeById(t.uid),(0,L.QL)(t.symbol)&&this._extrudedPolygonSymbolsCount--)}},{key:"_destroySource",value:function(e){e.queryEngine.destroy(),this._sources[e.type]=null}},{key:"_mapSources",value:function(e){var t=this._sources,n=t.point,i=t.polygon,r=t.polyline,a=t.multipoint,s=[];return(0,m.pC)(n)&&s.push(e(n)),(0,m.pC)(i)&&s.push(e(i)),(0,m.pC)(r)&&s.push(e(r)),(0,m.pC)(a)&&s.push(e(a)),s}}]),n}((0,_.p)(f.Z));(0,d._)([(0,k.Cb)()],M.prototype,"getGraphicsLayers",void 0),(0,d._)([(0,k.Cb)({constructOnly:!0})],M.prototype,"layerSource",void 0),(0,d._)([(0,k.Cb)({constructOnly:!0})],M.prototype,"spatialReference",void 0),(0,d._)([(0,k.Cb)({constructOnly:!0})],M.prototype,"view",void 0),(0,d._)([(0,k.Cb)({readOnly:!0})],M.prototype,"updating",null),(0,d._)([(0,k.Cb)({readOnly:!0})],M.prototype,"availability",void 0),(0,d._)([(0,k.Cb)()],M.prototype,"_hasZ",null),(0,d._)([(0,k.Cb)()],M.prototype,"_snappingElevationAligner",null),(0,d._)([(0,k.Cb)()],M.prototype,"_snappingElevationFilter",null),(0,d._)([(0,k.Cb)()],M.prototype,"_symbologySnappingFetcher",null),(0,d._)([(0,k.Cb)()],M.prototype,"_extrudedPolygonSymbolsCount",void 0),(0,d._)([(0,k.Cb)()],M.prototype,"_getGroundElevation",null),M=(0,d._)([(0,Z.j)("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],M);var j="OBJECTID"},52824:function(e,t,n){n.d(t,{X:function(){return h},g:function(){return c}});var i=n(92026),r=n(71353),a=n(1700),s=n(97760),u=n(95905),o=n(36700);function l(e){var t=e.x,n=e.y,i=e.z;return(0,a.uc)((0,r.f)(t,n,null!==i&&void 0!==i?i:0))}function h(e,t){switch(e.type){case"edge":return e.draped?new s.k({edgeStart:l(e.start),edgeEnd:l(e.end),targetPoint:l(e.target),objectId:e.objectId,getGroundElevation:t}):new u.L({edgeStart:l(e.start),edgeEnd:l(e.end),targetPoint:l(e.target),objectId:e.objectId,isDraped:!1});case"vertex":return new o.x({targetPoint:l(e.target),objectId:e.objectId,isDraped:!1})}}function c(e){return(0,i.pC)(e)&&"3d"===e.type?function(t,n,i){return e.elevationProvider.getElevation(t,n,null!==i&&void 0!==i?i:0,e.spatialReference,"ground")}:function(){return null}}}}]);
//# sourceMappingURL=3518.44b09549.chunk.js.map