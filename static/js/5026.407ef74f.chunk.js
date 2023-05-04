"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5026],{49215:function(e,t,r){var n;r.d(t,{i:function(){return n}}),function(e){e[e.PROJECT_VERTICES=1]="PROJECT_VERTICES"}(n||(n={}))},60480:function(e,t,r){r.d(t,{g:function(){return n}});var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},15026:function(e,t,r){r.r(t),r.d(t,{default:function(){return U}});var n=r(1413),a=r(37762),s=r(93433),u=r(74165),i=r(15671),o=r(43144),l=r(60136),c=r(29388),d=r(15861),p=r(27366),f=(r(59486),r(52639)),h=r(19545),y=r(76200),v=r(62044),m=r(10064),b=r(93169),Z=r(43404),g=r(54472),x=r(92026),R=r(18202),F=r(66978),k=r(35995),w=r(49861),I=(r(25243),r(63780),r(69912)),q=r(53866),_=r(77981),S=r(49215),E=r(63543),O=r(27676),T=r(25899),A=r(62204),C=r(78952),D=new Z.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"});function J(e){return N.apply(this,arguments)}function N(){return(N=(0,d.Z)((0,u.Z)().mark((function e(t){var r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!=typeof t){e.next=3;break}return r=(0,k.sJ)(t),e.abrupt("return",r||{data:t});case 3:return e.abrupt("return",new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e((0,k.sJ)(n.result))},n.onerror=function(e){return r(e)}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=new Set(["Feature Layer","Table"]),M=new Z.X({Started:"published",Publishing:"publishing",Stopped:"unavailable"}),Q=function(e){(0,l.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,i.Z)(this,r),(e=t.apply(this,arguments)).type="feature-layer",e.refresh=(0,F.Ds)((0,d.Z)((0,u.Z)().mark((function t(){var r,n,a,s;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:if(null!=(a=null===(r=e.sourceJSON.editingInfo)||void 0===r?void 0:r.lastEditDate)){t.next=5;break}return t.abrupt("return",{dataChanged:!0,updates:{}});case 5:return t.prev=5,t.next=8,e._fetchService(null);case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(5),t.abrupt("return",{dataChanged:!0,updates:{}});case 13:return s=a!==(null===(n=e.sourceJSON.editingInfo)||void 0===n?void 0:n.lastEditDate),t.abrupt("return",{dataChanged:s,updates:s?{editingInfo:e.sourceJSON.editingInfo,extent:e.sourceJSON.extent}:null});case 15:case"end":return t.stop()}}),t,null,[[5,10]])})))),e}return(0,o.Z)(r,[{key:"load",value:function(e){var t=(0,x.pC)(e)?e.signal:null,r=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(r,t)),Promise.resolve(this)}},{key:"queryTask",get:function(){var e,t,r=this.layer,n=r.capabilities,a=r.parsedUrl,s=r.dynamicDataSource,u=r.infoFor3D,i=r.gdbVersion,o=r.spatialReference,l=r.fieldsIndex,c=(0,b.Z)("featurelayer-pbf")&&(null===n||void 0===n?void 0:n.query.supportsFormatPBF)&&(0,x.Wi)(u),d=null!==(e=null===n||void 0===n||null===(t=n.operations)||void 0===t?void 0:t.supportsQueryAttachments)&&void 0!==e&&e;return new O.Z({url:a.path,pbfSupported:c,fieldsIndex:l,infoFor3D:u,dynamicDataSource:s,gdbVersion:i,sourceSpatialReference:o,queryAttachmentsSupported:d})}},{key:"addAttachment",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){var n,a,s,i,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return n=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+n+"/addAttachment",s=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(r,s.query),e.prev=3,e.next=6,(0,y.default)(a,{body:i});case 6:return o=e.sent,e.abrupt("return",this._createFeatureEditResult(o.data.addAttachmentResult));case 10:throw e.prev=10,e.t0=e.catch(3),this._createAttachmentErrorResult(n,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateAttachment",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r,n){var a,s,i,o,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return a=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:r}}),o=this._getFormDataForAttachment(n,i.query),e.prev=3,e.next=6,(0,y.default)(s,{body:o});case 6:return l=e.sent,e.abrupt("return",this._createFeatureEditResult(l.data.updateAttachmentResult));case 10:throw e.prev=10,e.t0=e.catch(3),this._createAttachmentErrorResult(a,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){var i,o,l,c,d,p,f,v,m,b,Z,g,R,F,k,w,I,q,_,S,E,O,T,C,J,N,j,M,Q,U,P,G,z,B,V,L,H,W,X,Y,$,K,ee,te,re,ne,ae,se,ue,ie,oe,le,ce,de,pe,fe,he=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:g=this.layer.infoFor3D,R=(0,x.pC)(g),F=R||null!==(i=null===r||void 0===r?void 0:r.globalIdUsed)&&void 0!==i&&i,k=null!==(o=null===(l=t.addFeatures)||void 0===l?void 0:l.map((function(e){return he._serializeFeature(e,g)})).filter(x.pC))&&void 0!==o?o:[],w=null!==(c=null===(d=t.updateFeatures)||void 0===d?void 0:d.map((function(e){return he._serializeFeature(e,g)})).filter(x.pC))&&void 0!==c?c:[],I=this._getFeatureIds(t.deleteFeatures,F),(0,A.P)(k,w,this.layer.spatialReference),q=[],_=[],S=(0,s.Z)(null!==(p=t.deleteAttachments)&&void 0!==p?p:[]),E=(0,a.Z)(null!==(b=t.addAttachments)&&void 0!==b?b:[]),e.prev=6,E.s();case 8:if((O=E.n()).done){e.next=17;break}return T=O.value,e.t0=q,e.next=13,this._serializeAttachment(T);case 13:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 15:e.next=8;break;case 17:e.next=22;break;case 19:e.prev=19,e.t2=e.catch(6),E.e(e.t2);case 22:return e.prev=22,E.f(),e.finish(22);case 25:C=(0,a.Z)(null!==(Z=t.updateAttachments)&&void 0!==Z?Z:[]),e.prev=26,C.s();case 28:if((J=C.n()).done){e.next=37;break}return N=J.value,e.t3=_,e.next=33,this._serializeAttachment(N);case 33:e.t4=e.sent,e.t3.push.call(e.t3,e.t4);case 35:e.next=28;break;case 37:e.next=42;break;case 39:e.prev=39,e.t5=e.catch(26),C.e(e.t5);case 42:return e.prev=42,C.f(),e.finish(42);case 45:if(j=q.length||_.length||S.length?{adds:q,updates:_,deletes:S}:null,Q=null,!R){e.next=56;break}Q=new Map,P=[],G=(0,a.Z)(null!==(U=t.addAssets)&&void 0!==U?U:[]);try{for(G.s();!(z=G.n()).done;)B=z.value,P.push(this._serializeAssetMapEditAndUploadAssets(B,Q))}catch(u){G.e(u)}finally{G.f()}return e.next=54,Promise.all(P);case 54:V=e.sent,M=V.length?{adds:V,updates:[],deletes:[]}:void 0;case 56:return L={gdbVersion:(null===r||void 0===r?void 0:r.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null===r||void 0===r?void 0:r.rollbackOnFailureEnabled,useGlobalIds:F,returnEditMoment:null===r||void 0===r?void 0:r.returnEditMoment,usePreviousEditMoment:null===r||void 0===r?void 0:r.usePreviousEditMoment,sessionId:null===r||void 0===r?void 0:r.sessionId},null!==r&&void 0!==r&&r.returnServiceEditsOption?(L.edits=JSON.stringify([{id:this.layer.layerId,adds:k,updates:w,deletes:I,attachments:j,assetMaps:(0,x.Wg)(M)}]),L.returnServiceEditsOption=D.toJSON(null===r||void 0===r?void 0:r.returnServiceEditsOption),L.returnServiceEditsInSourceSR=null===r||void 0===r?void 0:r.returnServiceEditsInSourceSR):(L.adds=k.length?JSON.stringify(k):null,L.updates=w.length?JSON.stringify(w):null,L.deletes=I.length?F?JSON.stringify(I):I.join(","):null,L.attachments=j&&JSON.stringify(j),L.assetMaps=(0,x.pC)(M)?JSON.stringify(M):void 0),H=this._getLayerRequestOptions({method:"post",query:L}),W=null!==r&&void 0!==r&&r.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,e.next=62,(0,y.default)(W+"/applyEdits",H);case 62:if(X=e.sent,null!==(f=this.layer.capabilities.operations)&&void 0!==f&&f.supportsEditing||null===(v=this.layer.effectiveCapabilities)||void 0===v||null===(m=v.operations)||void 0===m||!m.supportsEditing){e.next=67;break}return Y=null===h.id||void 0===h.id?void 0:h.id.findCredential(this.layer.url),e.next=67,null===Y||void 0===Y?void 0:Y.refreshToken();case 67:if(!R||null==X.data||null==X.data.assetMaps){e.next=78;break}$=X.data,K=this.layer.objectIdField,ee=[],te=(0,a.Z)($.addResults);try{for(te.s();!(re=te.n()).done;)(ne=re.value).success&&ee.push(ne.objectId)}catch(u){te.e(u)}finally{te.f()}ae=(0,a.Z)($.updateResults);try{for(ae.s();!(se=ae.n()).done;)(ue=se.value).success&&ee.push(ue.objectId)}catch(u){ae.e(u)}finally{ae.f()}return ie=this._createRequestQueryOptions(),e.next=76,(0,y.default)(W+"/query",(0,n.Z)((0,n.Z)({},ie),{},{query:{f:"json",formatOf3DObjects:"3D_glb",where:"OBJECTID IN (".concat(ee.join(","),")"),outFields:"".concat(K)}}));case 76:if((oe=e.sent)&&oe.data&&oe.data.assetMaps&&(0,x.pC)(Q)){le=oe.data.assetMaps,ce=(0,a.Z)(le);try{for(ce.s();!(de=ce.n()).done;)pe=de.value,fe=Q.get(pe.parentGlobalId).geometry,(0,x.pC)(fe)&&"mesh"===fe.type&&fe.updateExternalSource({source:[{name:pe.assetName,source:pe.assetName}],extent:fe.extent})}catch(u){ce.e(u)}finally{ce.f()}}case 78:return e.abrupt("return",this._createEditsResult(X));case 79:case"end":return e.stop()}}),e,this,[[6,19,22,25],[26,39,42,45]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteAttachments",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){var n,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return n=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+n+"/deleteAttachments",e.prev=3,e.next=6,(0,y.default)(a,this._getLayerRequestOptions({query:{attachmentIds:r.join(",")},method:"post"}));case 6:return e.abrupt("return",e.sent.data.deleteAttachmentResults.map(this._createFeatureEditResult));case 9:throw e.prev=9,e.t0=e.catch(3),this._createAttachmentErrorResult(n,e.t0);case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.signal;return this.load({signal:r}).then((0,d.Z)((0,u.Z)().mark((function r(){var a,s,i,o,l,c,d,p,f,h,m;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e._getLayerRequestOptions((0,n.Z)((0,n.Z)({},t),{},{query:{returnUpdates:!0}})),s=e.layer,i=s.layerId,o=s.url,r.next=6,(0,y.default)("".concat(o,"/").concat(i),a);case 6:return l=r.sent,c=l.data,d=c.id,p=c.extent,f=c.fullExtent,h=c.timeExtent,m=p||f,r.abrupt("return",{id:d,fullExtent:m&&q.Z.fromJSON(m),timeExtent:h&&v.Z.fromJSON({start:h[0],end:h[1]})});case 14:case"end":return r.stop()}}),r)}))))}},{key:"queryAttachments",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t){var r,n,a=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,this.load();case 3:return n=this._getLayerRequestOptions(r),e.abrupt("return",this.queryTask.executeAttachmentQuery(t,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.execute(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeaturesJSON",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeJSON(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForIds(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForCount(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForExtent(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeatures",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQuery(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeaturesCount",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQueryForCount(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopFeatures",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeTopFeaturesQuery(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopObjectIds",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopIds(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopExtents",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopExtents(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopCount",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopCount(t,(0,n.Z)((0,n.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchPublishingStatus",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(){var t,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,T.M8)(this.layer.url)){e.next=2;break}return e.abrupt("return","unavailable");case 2:return t=(0,k.v_)(this.layer.url,"status"),e.next=5,(0,y.default)(t,{query:{f:"json"}});case 5:return r=e.sent,e.abrupt("return",M.fromJSON(r.data.status));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_createRequestQueryOptions",value:function(e){var t=(0,n.Z)((0,n.Z)({},this.layer.customParameters),{},{token:this.layer.apiKey},null===e||void 0===e?void 0:e.query);return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}},{key:"_fetchService",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){var n,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,(0,y.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,b.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:r}));case 3:n=e.sent,a=n.data,t=a;case 6:if(this.sourceJSON=this._patchServiceJSON(t),s=t.type,j.has(s)){e.next=10;break}throw new m.Z("feature-layer-source:unsupported-type",'Source type "'.concat(s,'" is not supported'));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_patchServiceJSON",value:function(e){var t;if("Table"!==e.type&&e.geometryType&&(null===e||void 0===e||null===(t=e.drawingInfo)||void 0===t||!t.renderer)&&!e.defaultSymbol){var r=(0,E.bU)(e.geometryType).renderer;(0,R.RB)("drawingInfo.renderer",r,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}},{key:"_serializeFeature",value:function(e,t){var r=e.geometry,a=e.attributes;if((0,x.pC)(t)&&(0,x.pC)(e.geometry)&&"mesh"===e.geometry.type){var s=(0,n.Z)({},a),u=e.geometry,i=u.origin,o=u.transform;if(s[t.transformFieldRoles.originX]=i.x,s[t.transformFieldRoles.originY]=i.y,s[t.transformFieldRoles.originZ]=i.z,(0,x.pC)(o)){var l=o.translation,c=o.scale,d=o.rotation;s[t.transformFieldRoles.translationX]=l[0],s[t.transformFieldRoles.translationY]=-l[2],s[t.transformFieldRoles.translationZ]=l[1],s[t.transformFieldRoles.scaleX]=c[0],s[t.transformFieldRoles.scaleY]=c[1],s[t.transformFieldRoles.scaleZ]=c[2],s[t.transformFieldRoles.rotationX]=d[0],s[t.transformFieldRoles.rotationY]=d[2],s[t.transformFieldRoles.rotationZ]=d[1],s[t.transformFieldRoles.rotationDeg]=d[3]}return{geometry:null,attributes:s}}return(0,x.Wi)(r)?{attributes:a}:"mesh"===r.type||"extent"===r.type?null:{geometry:r.toJSON(),attributes:a}}},{key:"_serializeAttachment",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t){var r,n,a,s,i,o,l,c,d;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.feature,n=t.attachment,a=n.globalId,s=n.name,i=n.contentType,o=n.data,l=n.uploadId,c={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null},r&&(c.parentGlobalId="attributes"in r?r.attributes&&r.attributes[this.layer.globalIdField]:r.globalId),!l){e.next=5;break}c.uploadId=l,e.next=10;break;case 5:if(!o){e.next=10;break}return e.next=8,J(o);case 8:(d=e.sent)&&(c.contentType=d.mediaType,c.data=d.data),o instanceof File&&(c.name=o.name);case 10:return e.abrupt("return",(s&&(c.name=s),i&&(c.contentType=i),c));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_serializeAssetMapEditAndUploadAssets",value:function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t,r){var n,a,s,i,o,l,c,d,p,f,h,v,b;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.layer.url,a=null,e.prev=2,s=new Blob([t.data],{type:t.mimeType}),(i=new FormData).append("f","json"),i.append("file",s,"".concat(t.assetName)),o={body:i,method:"post",responseType:"json"},e.next=8,(0,y.default)("".concat(n,"/uploads/upload"),o);case 8:if(l=e.sent,(c=l.data).success){e.next=12;break}throw new m.Z("feature-layer-source:upload-failure","Expected upload to be successfull.");case 12:a={assetType:t.assetType,assetUploadId:c.item.itemID},e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),a=null;case 18:if(!(0,x.Wi)(a)){e.next=25;break}return e.next=21,J(new Blob([t.data]));case 21:if((d=e.sent).isBase64){e.next=24;break}throw new m.Z("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.");case 24:a={assetType:t.assetType,assetData:d.data};case 25:if(!(0,x.Wi)(a)){e.next=27;break}throw new m.Z("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.");case 27:return p={method:"post",query:{f:"json",assets:JSON.stringify([a])},responseType:"json"},e.next=30,(0,y.default)((0,k.v_)(this.layer.parsedUrl.path,"uploadAssets"),p);case 30:if(1===(f=e.sent).data.uploadResults.length&&f.data.uploadResults[0].success){e.next=33;break}throw new m.Z("feature-layer-source:uploadAssets-failure","Bad response.");case 33:return h=f.data.uploadResults[0].assetHash,v=[],t.flags&S.i.PROJECT_VERTICES&&v.push("PROJECT_VERTICES"),b={globalId:t.assetMapGlobalId,parentGlobalId:t.featureGlobalId,assetName:t.assetName,assetHash:h,flags:v},e.abrupt("return",(r.set(t.featureGlobalId,t.feature),b));case 37:case"end":return e.stop()}}),e,this,[[2,15]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getFeatureIds",value:function(e,t){var r=null===e||void 0===e?void 0:e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}},{key:"_getIdsFromFeatures",value:function(e){var t=this.layer.objectIdField;return e.map((function(e){return e.attributes&&e.attributes[t]}))}},{key:"_canUseGlobalIds",value:function(e,t){return e&&"globalId"in t[0]}},{key:"_getObjectIdsFromFeatureIdentifier",value:function(e){return e.map((function(e){return e.objectId}))}},{key:"_getGlobalIdsFromFeatureIdentifier",value:function(e){return e.map((function(e){return e.globalId}))}},{key:"_createEditsResult",value:function(e){var t,r,n,s,u,i,o,l,c,d,p,f=this,h=e.data,y=this.layer.layerId,v=[],m=null;if(Array.isArray(h)){var b,Z=(0,a.Z)(h);try{for(Z.s();!(b=Z.n()).done;){var g,x,R,F=b.value;v.push({id:F.id,editedFeatures:F.editedFeatures}),F.id===y&&(m={addResults:null!==(g=F.addResults)&&void 0!==g?g:[],updateResults:null!==(x=F.updateResults)&&void 0!==x?x:[],deleteResults:null!==(R=F.deleteResults)&&void 0!==R?R:[],attachments:F.attachments,editMoment:F.editMoment})}}catch(S){Z.e(S)}finally{Z.f()}}else m=h;var k=null===(t=m)||void 0===t?void 0:t.attachments,w={addFeatureResults:null!==(r=null===(n=m)||void 0===n||null===(s=n.addResults)||void 0===s?void 0:s.map(this._createFeatureEditResult,this))&&void 0!==r?r:[],updateFeatureResults:null!==(u=null===(i=m)||void 0===i||null===(o=i.updateResults)||void 0===o?void 0:o.map(this._createFeatureEditResult,this))&&void 0!==u?u:[],deleteFeatureResults:null!==(l=null===(c=m)||void 0===c||null===(d=c.deleteResults)||void 0===d?void 0:d.map(this._createFeatureEditResult,this))&&void 0!==l?l:[],addAttachmentResults:k&&k.addResults?k.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:k&&k.updateResults?k.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:k&&k.deleteResults?k.deleteResults.map(this._createFeatureEditResult,this):[]};if(null!==(p=m)&&void 0!==p&&p.editMoment&&(w.editMoment=m.editMoment),v.length>0){w.editedFeatureResults=[];var I,q=(0,a.Z)(v);try{var _=function(){var e,t,r,n=I.value,a=n.editedFeatures,s=null!==a&&void 0!==a&&a.spatialReference?new C.Z(a.spatialReference):null;w.editedFeatureResults.push({layerId:n.id,editedFeatures:{adds:(null===a||void 0===a||null===(e=a.adds)||void 0===e?void 0:e.map((function(e){return f._createEditedFeature(e,s)})))||[],updates:(null===a||void 0===a||null===(t=a.updates)||void 0===t?void 0:t.map((function(e){return{original:f._createEditedFeature(e[0],s),current:f._createEditedFeature(e[1],s)}})))||[],deletes:(null===a||void 0===a||null===(r=a.deletes)||void 0===r?void 0:r.map((function(e){return f._createEditedFeature(e,s)})))||[],spatialReference:s}})};for(q.s();!(I=q.n()).done;)_()}catch(S){q.e(S)}finally{q.f()}}return w}},{key:"_createEditedFeature",value:function(e,t){return new f.Z({attributes:e.attributes,geometry:(0,_.im)((0,n.Z)((0,n.Z)({},e.geometry),{},{spatialReference:t}))})}},{key:"_createFeatureEditResult",value:function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}},{key:"_createAttachmentErrorResult",value:function(e,t){var r=t.details.messages&&t.details.messages[0]||t.message,n=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new m.Z("feature-layer-source:attachment-failure",r,{code:n})}}},{key:"_getFormDataForAttachment",value:function(e,t){var r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(var n in t){var a=t[n];null!=a&&(r.set?r.set(n,a):r.append(n,a))}return r}},{key:"_getLayerRequestOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.layer,r=t.parsedUrl,a=t.gdbVersion,s=t.dynamicDataSource;return(0,n.Z)((0,n.Z)({},e),{},{query:(0,n.Z)((0,n.Z)({gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0},r.query),{},{f:"json"},this._createRequestQueryOptions(e)),responseType:"json"})}}]),r}(g.Z);(0,p._)([(0,w.Cb)()],Q.prototype,"type",void 0),(0,p._)([(0,w.Cb)({constructOnly:!0})],Q.prototype,"layer",void 0),(0,p._)([(0,w.Cb)({readOnly:!0})],Q.prototype,"queryTask",null);var U=Q=(0,p._)([(0,I.j)("esri.layers.graphics.sources.FeatureLayerSource")],Q)},63543:function(e,t,r){r.d(t,{Dm:function(){return p},Hq:function(){return f},MS:function(){return h},bU:function(){return l}});var n=r(4942),a=r(1413),s=r(93169),u=r(84652),i=r(60480),o=r(76115);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}var c=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,d=1;function p(e,t){if((0,s.Z)("esri-csp-restrictions"))return function(){return(0,a.Z)((0,n.Z)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var u in e)r+="this".concat(c.test(u)?".".concat(u):'["'.concat(u,'"]')," = ").concat(JSON.stringify(e[u]),";");var i=new Function("\n      return class AttributesClass$".concat(d++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return function(){return new i}}catch(o){return function(){return(0,a.Z)((0,n.Z)({},t,null),e)}}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,u.d9)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=5026.407ef74f.chunk.js.map