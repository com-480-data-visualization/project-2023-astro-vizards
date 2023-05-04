"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7676],{27676:function(e,t,r){r.d(t,{Z:function(){return H}});var n=r(37762),a=r(29439),i=r(74165),o=r(15861),u=r(15671),s=r(43144),c=r(60136),f=r(29388),l=r(27366),h=r(85015),p=r(10064),d=r(93169),y=r(92026),m=r(66978),v=r(35995),_=r(49861),Z=(r(25243),r(63780),r(69912)),b=r(64020),k=r(23084),x=r(34211),g=r(1413),C=(r(59486),r(5192)),S=r(86638),F=r(53866);function D(){return D=(0,o.Z)((0,i.Z)().mark((function e(t,r,n){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,k.en)(t),e.abrupt("return",(0,C.Vr)(a,S.Z.from(r),(0,g.Z)({},n)).then((function(e){return{count:e.data.count,extent:F.Z.fromJSON(e.data.extent)}})));case 2:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}var P=r(24246),w=r(77946),G=r(93501),R=r(83406);function O(e,t){return t}function T(e,t,r,n){switch(r){case 0:return A(e,t+n,0);case 1:return"lowerLeft"===e.originPosition?A(e,t+n,1):function(e,t,r){var n=e.translate,a=e.scale;return n[r]-t*a[r]}(e,t+n,1)}}function I(e,t,r,n){return 2===r?A(e,t,2):T(e,t,r,n)}function V(e,t,r,n){return 2===r?A(e,t,3):T(e,t,r,n)}function q(e,t,r,n){return 3===r?A(e,t,3):I(e,t,r,n)}function A(e,t,r){var n=e.translate,a=e.scale;return n[r]+t*a[r]}var M=function(){function e(t){(0,u.Z)(this,e),this._options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=O,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=function(){return(0,s.Z)((function e(){(0,u.Z)(this,e)}))}()}return(0,s.Z)(e,[{key:"createFeatureResult",value:function(){return{fields:[],features:[]}}},{key:"finishFeatureResult",value:function(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=function(){return(0,s.Z)((function e(){(0,u.Z)(this,e)}))}(),this._coordinateBuffer=null,this._lengths.length=0,e.hasZ){var t=(0,G.k)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(!(0,y.Wi)(t)){var r,a=(0,n.Z)(e.features);try{for(a.s();!(r=a.n()).done;){t(r.value.geometry)}}catch(i){a.e(i)}finally{a.f()}}}}},{key:"createSpatialReference",value:function(){return{}}},{key:"addField",value:function(e,t){var r=e.fields;(0,y.O3)(r),r.push(t);var a=r.map((function(e){return e.name}));this._attributesConstructor=function(){var e,t=(0,n.Z)(a);try{for(t.s();!(e=t.n()).done;){this[e.value]=null}}catch(r){t.e(r)}finally{t.f()}}}},{key:"addFeature",value:function(e,t){e.features.push(t)}},{key:"prepareFeatures",value:function(e){var t=this;switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=function(e,r,n){return t.addCoordinatePoint(e,r,n)},this.createGeometry=function(e){return t.createPointGeometry(e)};break;case"esriGeometryPolygon":this.addCoordinate=function(e,r,n){return t._addCoordinatePolygon(e,r,n)},this.createGeometry=function(e){return t._createPolygonGeometry(e)};break;case"esriGeometryPolyline":this.addCoordinate=function(e,r,n){return t._addCoordinatePolyline(e,r,n)},this.createGeometry=function(e){return t._createPolylineGeometry(e)};break;case"esriGeometryMultipoint":this.addCoordinate=function(e,r,n){return t._addCoordinateMultipoint(e,r,n)},this.createGeometry=function(e){return t._createMultipointGeometry(e)}}}},{key:"createFeature",value:function(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}},{key:"allocateCoordinates",value:function(){}},{key:"addLength",value:function(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}},{key:"addQueryGeometry",value:function(e,t){var r=t.queryGeometry,n=t.queryGeometryType,a=(0,R.$g)(r.clone(),r,!1,!1,this._transform),i=(0,R.di)(a,n,!1,!1);e.queryGeometryType=n,e.queryGeometry=(0,g.Z)({},i)}},{key:"createPointGeometry",value:function(e){var t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}},{key:"addCoordinatePoint",value:function(e,t,r){var n=(0,y.s3)(this._transform,"transform");switch(t=this._applyTransform(n,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}},{key:"_transformPathLikeValue",value:function(e,t){var r=0;t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e);var n=(0,y.s3)(this._transform,"transform");return this._applyTransform(n,e,t,r)}},{key:"_addCoordinatePolyline",value:function(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}},{key:"_addCoordinatePolygon",value:function(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}},{key:"_addCoordinateMultipoint",value:function(e,t,r){0===r&&e.points.push([]);var n=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)}},{key:"_createPolygonGeometry",value:function(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_createPolylineGeometry",value:function(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_createMultipointGeometry",value:function(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_dehydratedAddPointsCoordinate",value:function(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);var n=this._transformPathLikeValue(t,r),a=e[e.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),a.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=n}},{key:"_deriveApplyTransform",value:function(e){var t=e.hasZ,r=e.hasM;return t&&r?q:t?I:r?V:T}}]),e}(),Q=r(49818);function j(e,t,r){return z.apply(this,arguments)}function z(){return z=(0,o.Z)((0,i.Z)().mark((function e(t,r,n){var a,o,u,s,c,f;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,k.en)(t),o=(0,g.Z)({},n),u=S.Z.from(r),s=!u.quantizationParameters,e.next=6,(0,C.qp)(a,u,new M({sourceSpatialReference:u.sourceSpatialReference,applyTransform:s}),o);case 6:return c=e.sent,f=c.data,e.abrupt("return",f);case 9:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}var B=function(e){(0,c.Z)(l,e);var t=(0,f.Z)(l);function l(e){var r;return(0,u.Z)(this,l),(r=t.call(this,e)).dynamicDataSource=null,r.fieldsIndex=null,r.gdbVersion=null,r.infoFor3D=null,r.pbfSupported=!1,r.queryAttachmentsSupported=!1,r.sourceSpatialReference=null,r.url=null,r}return(0,s.Z)(l,[{key:"parsedUrl",get:function(){return(0,v.mN)(this.url)}},{key:"execute",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.executeJSON(t,r);case 2:return n=e.sent,e.abrupt("return",this.featureSetFromJSON(t,n,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeJSON",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a,o,u,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this._normalizeQuery(t),o=null!=(null===(n=t.outStatistics)||void 0===n?void 0:n[0]),u=(0,d.Z)("featurelayer-pbf-statistics"),s=!o||u,!this.pbfSupported||!s){e.next=13;break}return e.prev=2,e.next=5,j(this.url,a,r);case 5:c=e.sent,e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(2),"query:parsing-pbf"===e.t0.name){e.next=12;break}throw e.t0;case 12:this.pbfSupported=!1;case 13:if(e.t1=this.pbfSupported&&s,e.t1){e.next=18;break}return e.next=17,(0,w.F)(this.url,a,r);case 17:c=e.sent;case 18:return this._normalizeFields(c.fields),e.abrupt("return",c);case 20:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"featureSetFromJSON",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n,a){var o,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._queryIs3DObjectFormat(t)&&!(0,y.Wi)(this.infoFor3D)&&n.assetMaps&&n.features&&n.features.length){e.next=2;break}return e.abrupt("return",Q.Z.fromJSON(n));case 2:return e.next=4,(0,m.Hl)(Promise.all([r.e(5158),r.e(7898),r.e(8236)]).then(r.bind(r,58236)),a);case 4:return o=e.sent,u=o.meshFeatureSetFromJSON,e.abrupt("return",u(t,this.infoFor3D,n));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"executeForCount",value:function(e,t){return(0,x.P)(this.url,this._normalizeQuery(e),t)}},{key:"executeForExtent",value:function(e,t){return function(e,t,r){return D.apply(this,arguments)}(this.url,this._normalizeQuery(e),t)}},{key:"executeForIds",value:function(e,t){return(0,P.G)(this.url,this._normalizeQuery(e),t)}},{key:"executeRelationshipQuery",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var o,u,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(Promise.all([Promise.resolve().then(r.bind(r,99086)),r.e(2964).then(r.bind(r,12964))]),n);case 2:return o=e.sent,u=(0,a.Z)(o,2),s=u[0].default,c=u[1].executeRelationshipQuery,e.abrupt("return",(t=s.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),c(this.url,t,n)));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeRelationshipQueryForCount",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var o,u,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(Promise.all([Promise.resolve().then(r.bind(r,99086)),r.e(2964).then(r.bind(r,12964))]),n);case 2:return o=e.sent,u=(0,a.Z)(o,2),s=u[0].default,c=u[1].executeRelationshipQueryForCount,e.abrupt("return",(t=s.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),c(this.url,t,n)));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeAttachmentQuery",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var a,o,u,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(r.e(9301).then(r.bind(r,59301)),n);case 2:return a=e.sent,o=a.executeAttachmentQuery,u=a.fetchAttachments,s=a.processAttachmentQueryResult,c=(0,k.en)(this.url),e.t0=s,e.t1=c,e.next=11,this.queryAttachmentsSupported?o(c,t,n):u(c,t,n);case 11:return e.t2=e.sent,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 13:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeTopFeaturesQuery",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(r.e(2200).then(r.bind(r,82200)),n);case 2:return a=e.sent,o=a.executeTopFeaturesQuery,e.abrupt("return",o(this.parsedUrl,t,this.sourceSpatialReference,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeForTopIds",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(r.e(5182).then(r.bind(r,75182)),n);case 2:return a=e.sent,o=a.executeForTopIds,e.abrupt("return",o(this.parsedUrl,t,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeForTopExtents",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(r.e(5641).then(r.bind(r,55641)),n);case 2:return a=e.sent,o=a.executeForTopExtents,e.abrupt("return",o(this.parsedUrl,t,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeForTopCount",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(r.e(9406).then(r.bind(r,19406)),n);case 2:return a=e.sent,o=a.executeForTopCount,e.abrupt("return",o(this.parsedUrl,t,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_normalizeQuery",value:function(e){var t=S.Z.from(e);if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&((t=t===e?t.clone():t).gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?b.n.from(e.dynamicDataSource):this.dynamicDataSource),(0,y.pC)(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){(t=t===e?t.clone():t).formatOf3DObjects=null;var r,a=(0,n.Z)(this.infoFor3D.queryFormats);try{for(a.s();!(r=a.n()).done;){var i=r.value;if("3D_glb"===i){t.formatOf3DObjects=i;break}"3D_gltf"!==i||t.formatOf3DObjects||(t.formatOf3DObjects=i)}}catch(g){a.e(g)}finally{a.f()}if(!t.formatOf3DObjects)throw new p.Z("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if((0,y.Wi)(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,(0,y.Wi)(t.outFields)&&(t.outFields=[]);var o=this.infoFor3D.transformFieldRoles,u=o.originX,s=o.originY,c=o.originZ,f=o.translationX,l=o.translationY,h=o.translationZ,d=o.scaleX,m=o.scaleY,v=o.scaleZ,_=o.rotationX,Z=o.rotationY,k=o.rotationZ,x=o.rotationDeg;t.outFields.push(u,s,c,f,l,h,d,m,v,_,Z,k,x)}}return t}},{key:"_normalizeFields",value:function(e){if((0,y.pC)(this.fieldsIndex)&&(0,y.pC)(e)){var t,r=(0,n.Z)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value,i=this.fieldsIndex.get(a.name);i&&Object.assign(a,i.toJSON())}}catch(o){r.e(o)}finally{r.f()}}}},{key:"_queryIs3DObjectFormat",value:function(e){return(0,y.pC)(this.infoFor3D)&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}}]),l}(h.Z);(0,l._)([(0,_.Cb)({type:b.n})],B.prototype,"dynamicDataSource",void 0),(0,l._)([(0,_.Cb)()],B.prototype,"fieldsIndex",void 0),(0,l._)([(0,_.Cb)()],B.prototype,"gdbVersion",void 0),(0,l._)([(0,_.Cb)()],B.prototype,"infoFor3D",void 0),(0,l._)([(0,_.Cb)({readOnly:!0})],B.prototype,"parsedUrl",null),(0,l._)([(0,_.Cb)()],B.prototype,"pbfSupported",void 0),(0,l._)([(0,_.Cb)()],B.prototype,"queryAttachmentsSupported",void 0),(0,l._)([(0,_.Cb)()],B.prototype,"sourceSpatialReference",void 0),(0,l._)([(0,_.Cb)({type:String})],B.prototype,"url",void 0);var H=B=(0,l._)([(0,Z.j)("esri.tasks.QueryTask")],B)},34211:function(e,t,r){r.d(t,{P:function(){return c}});var n=r(74165),a=r(1413),i=r(15861),o=r(23084),u=r(5192),s=r(86638);function c(e,t,r){return f.apply(this,arguments)}function f(){return f=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(0,o.en)(t),e.abrupt("return",(0,u.hH)(c,s.Z.from(r),(0,a.Z)({},i)).then((function(e){return e.data.count})));case 2:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}},24246:function(e,t,r){r.d(t,{G:function(){return c}});var n=r(74165),a=r(1413),i=r(15861),o=r(23084),u=r(5192),s=r(86638);function c(e,t,r){return f.apply(this,arguments)}function f(){return f=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(0,o.en)(t),e.abrupt("return",(0,u.Ev)(c,s.Z.from(r),(0,a.Z)({},i)).then((function(e){return e.data.objectIds})));case 2:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}}}]);
//# sourceMappingURL=7676.92ba4116.chunk.js.map