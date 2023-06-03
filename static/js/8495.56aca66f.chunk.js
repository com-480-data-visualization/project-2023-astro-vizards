"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8495],{87072:function(e,t,r){function n(e){var t,r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?a(e.view.floors,r.floorInfo.floorField):null}function i(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?a(e,t.floorInfo.floorField):null}function a(e,t){if(null===e||void 0===e||!e.length)return null;var r=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,{c:function(){return n},f:function(){return i}})},74937:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(37762),i=r(74165),a=r(15861),u=r(93433),l=r(15671),o=r(43144),s=r(11752),c=r(61120),f=r(60136),p=r(29388),d=r(27366),h=r(10064),y=r(32718),v=r(92026),m=r(66978),b=r(94172),x=r(49861),F=(r(25243),r(63780),r(69912)),g=r(45948),w=r(83444),k=r(18661),Z=r(80031),I=r(87072),E=r(86638),C=r(819),_=r(24405),R="esri.views.layers.FeatureLayerView",q=y.Z.getLogger(R),P=function(e){var t=function(e){(0,f.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;(0,l.Z)(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i)))._updatingRequiredFieldsPromise=null,e.filter=null,e.timeExtent=null,e.layer=null,e.requiredFields=[],e.view=null,e}return(0,o.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add([(0,b.YP)((function(){var t,r=e.layer;return[null===r||void 0===r||null===(t=r.elevationInfo)||void 0===t?void 0:t.featureExpressionInfo,r&&"displayField"in r?r.displayField:null,r&&"timeInfo"in r&&r.timeInfo,r&&"renderer"in r&&r.renderer,r&&"labelingInfo"in r&&r.labelingInfo,r&&"floorInfo"in r&&r.floorInfo,e.filter,e.featureEffect,e.timeExtent]}),(function(){return e._handleRequiredFieldsChange()}),b.tX),(0,b.on)((function(){var t;return null===(t=e.view)||void 0===t?void 0:t.floors}),"change",(function(){return e._handleRequiredFieldsChange()})),(0,b.on)((function(){var t=e.layer;return t&&"sublayers"in t?t.sublayers:null}),"change",(function(){return e._handleRequiredFieldsChange()}))])}},{key:"availableFields",get:function(){var e=this.layer,t=this.layer.fieldsIndex,r=this.requiredFields;return"outFields"in e&&e.outFields?(0,Z.Q0)(t,[].concat((0,u.Z)((0,Z.Lk)(t,e.outFields)),(0,u.Z)(r))):(0,Z.Q0)(t,r)}},{key:"featureEffect",get:function(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null},set:function(e){this._override("featureEffect",e)}},{key:"maximumNumberOfFeatures",get:function(){return 0},set:function(e){q.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}},{key:"maximumNumberOfFeaturesExceeded",get:function(){return!1}},{key:"highlight",value:function(e){throw new Error("missing implementation")}},{key:"createQuery",value:function(){var e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=(0,v.pC)(this.filter)?this.filter.createQuery(e):new E.Z(e);if("feature"===this.layer.type){var r=(0,I.c)(this);(0,v.pC)(r)&&(t.where=t.where?"(".concat(t.where,") AND (").concat(r,")"):r)}return(0,v.pC)(this.timeExtent)&&(t.timeExtent=(0,v.pC)(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}},{key:"createAggregateQuery",value:function(){var e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new E.Z(e)}},{key:"queryFeatures",value:function(e,t){throw new Error("missing implementation")}},{key:"queryObjectIds",value:function(e,t){throw new Error("missing implementation")}},{key:"queryFeatureCount",value:function(e,t){throw new Error("missing implementation")}},{key:"queryExtent",value:function(e,t){throw new Error("missing implementation")}},{key:"fetchPopupFeatures",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=this.validateFetchPopupFeatures(r))){e.next=3;break}throw n;case 3:return e.abrupt("return",this.fetchClientPopupFeatures(r));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_loadArcadeModules",value:function(e){return e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((function(e){return"expression"===e.type}))?(0,C.LC)():Promise.resolve()}},{key:"_handleRequiredFieldsChange",value:function(){var e=this,t=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",t),t.then((function(){e._updatingRequiredFieldsPromise===t&&e._set("_updatingRequiredFieldsPromise",null)}))}},{key:"_updateRequiredFields",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,r,a,u,l,o,s,c,f,p,d,h,y,b,x;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.layer&&this.view){e.next=2;break}return e.abrupt("return");case 2:return t="3d"===this.view.type,r=this.layer,a=this.layer,u=a.fieldsIndex,l=a.objectIdField,o="renderer"in r&&r.renderer,s="orderBy"in r&&r.orderBy,c="featureReduction"in r?r.featureReduction:null,f=new Set,e.next=13,(0,m.as)([o?o.collectRequiredFields(f,u):null,(0,Z.Mu)(f,r),t?(0,Z.vl)(f,r):null,(0,v.pC)(this.filter)?(0,Z.Ll)(f,r,this.filter):null,(0,v.pC)(this.featureEffect)?(0,Z.Ll)(f,r,this.featureEffect.filter):null,c?(0,Z.ZV)(f,r,c):null,s?(0,Z.Qj)(f,r,s):null]);case 13:if(p=e.sent,"timeInfo"in r&&r.timeInfo&&this.timeExtent&&(0,Z.gd)(f,r.fieldsIndex,[r.timeInfo.startField,r.timeInfo.endField]),"feature"===r.type&&(r.floorInfo&&(0,Z.gd)(f,r.fieldsIndex,[r.floorInfo.floorField]),t&&(0,v.pC)(r.infoFor3D)&&(null==r.globalIdField&&q.error("globalIdField missing on 3DObjectFeatureLayer"),(0,Z.gd)(f,r.fieldsIndex,[r.globalIdField]))),"subtype-group"!==r.type){e.next=19;break}return(0,Z.AB)(f,u,r.subtypeField),d=r.sublayers.map((function(e){var t;return Promise.all([null===(t=e.renderer)||void 0===t?void 0:t.collectRequiredFields(f,u),(0,Z.Mu)(f,e)])})),e.next=19,(0,m.as)(d);case 19:h=(0,n.Z)(p);try{for(h.s();!(y=h.n()).done;)(b=y.value).error&&q.error(b.error)}catch(i){h.e(i)}finally{h.f()}(0,Z.AB)(f,u,l),t&&"displayField"in r&&r.displayField&&(0,Z.AB)(f,u,r.displayField),x=Array.from(f).sort(),this._set("requiredFields",x);case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateFetchPopupFeatures",value:function(e){var t;if((0,v.Wi)(e))return null;var r,i=(0,n.Z)(null!==(t=e.clientGraphics)&&void 0!==t?t:[]);try{for(i.s();!(r=i.n()).done;){var a=r.value,u=a.layer;if("popupEnabled"in u&&!u.popupEnabled)return new h.Z("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:u});if(a.isAggregate){var l="featureReduction"in u?u.featureReduction:null;if(!(l&&"popupTemplate"in l&&l.popupEnabled&&l.popupTemplate))return new h.Z("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:u})}else if("popupTemplate"in u&&!(0,_.V)(u,e))return new h.Z("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:u})}}catch(o){i.e(o)}finally{i.f()}}},{key:"fetchClientPopupFeatures",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,a,u,l,o,s,c,f,p,d,h,y,m,b,x,F,g;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=(0,v.pC)(t)?t.clientGraphics:null)&&0!==r.length){e.next=3;break}return e.abrupt("return",[]);case 3:return a=new Array(r.length),u=new Map,e.next=7,this.createPopupQuery(t);case 7:l=e.sent,o=0;case 9:if(!(o<r.length)){e.next=27;break}if(!(s=r[o]).isAggregate){e.next=14;break}return a[o]=s,e.abrupt("continue",24);case 14:if("popupEnabled"in(c=s.layer)){e.next=17;break}return e.abrupt("continue",24);case 17:if(f=(0,Z.Lk)(this.layer.fieldsIndex,l.outFields),p=(0,_.V)(c,t),!(0,v.Wi)(p)){e.next=20;break}return e.abrupt("continue",24);case 20:return e.next=22,this._loadArcadeModules(p);case 22:(d=e.sent)&&d.arcadeUtils.hasGeometryOperations(p)||!(0,Z.R9)(f,s)?u.set(s.getObjectId(),{graphic:s,index:o}):a[o]=s;case 24:o++,e.next=9;break;case 27:if("stream"!==this.layer.type&&0!==u.size){e.next=29;break}return e.abrupt("return",a.filter(Boolean));case 29:return l.objectIds=Array.from(u.keys()),e.prev=30,e.next=33,this.layer.queryFeatures(l);case 33:h=e.sent,y=(0,n.Z)(h.features);try{for(y.s();!(m=y.n()).done;)b=m.value,x=u.get(b.getObjectId()),F=x.graphic.geometry,g=x.index,b.geometry||(b.geometry=F),a[g]=b}catch(i){y.e(i)}finally{y.f()}e.next=40;break;case 38:e.prev=38,e.t0=e.catch(30);case 40:return e.abrupt("return",a.filter(Boolean));case 41:case"end":return e.stop()}}),e,this,[[30,38]])})));return function(t){return e.apply(this,arguments)}}()},{key:"createPopupQuery",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,a,u,l,o,s,c,f,p,d,h,y,m,b,x;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=this.layer.createQuery(),a=new Set,u=!1,l=(0,v.pC)(t)&&t.clientGraphics?t.clientGraphics.map((function(e){return e.layer})):[this.layer],o=(0,n.Z)(l),e.prev=4,o.s();case 6:if((s=o.n()).done){e.next=25;break}if("popupEnabled"in(c=s.value)){e.next=10;break}return e.abrupt("continue",23);case 10:if(f=(0,_.V)(c,t),!(0,v.Wi)(f)){e.next=13;break}return e.abrupt("continue",23);case 13:return e.next=15,this._loadArcadeModules(f);case 15:return p=e.sent,d=p&&p.arcadeUtils.hasGeometryOperations(f),u=!("point"!==this.layer.geometryType&&!d),e.next=20,(0,_.e)(this.layer,f);case 20:h=e.sent,y=(0,n.Z)(h);try{for(y.s();!(m=y.n()).done;)b=m.value,a.add(b)}catch(i){y.e(i)}finally{y.f()}case 23:e.next=6;break;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(4),o.e(e.t0);case 30:return e.prev=30,o.f(),e.finish(30);case 33:return r.returnGeometry=u,r.returnZ=u,r.returnM=u,r.outFields=Array.from(a),r.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type&&(x=(0,I.c)(this),(0,v.pC)(x)&&(r.where=r.where?"(".concat(r.where,") AND (").concat(x,")"):x)),e.abrupt("return",r);case 35:case"end":return e.stop()}}),e,this,[[4,27,30,33]])})));return function(t){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){return!!(0,s.Z)((0,c.Z)(r.prototype),"canResume",this).call(this)&&(!(0,v.pC)(this.timeExtent)||!this.timeExtent.isEmpty)}}]),r}(e);return(0,d._)([(0,x.Cb)()],t.prototype,"_updatingRequiredFieldsPromise",void 0),(0,d._)([(0,x.Cb)({readOnly:!0})],t.prototype,"availableFields",null),(0,d._)([(0,x.Cb)({type:w.Z})],t.prototype,"featureEffect",null),(0,d._)([(0,x.Cb)({type:k.Z})],t.prototype,"filter",void 0),(0,d._)([(0,x.Cb)(g.qG)],t.prototype,"timeExtent",void 0),(0,d._)([(0,x.Cb)()],t.prototype,"layer",void 0),(0,d._)([(0,x.Cb)({type:Number})],t.prototype,"maximumNumberOfFeatures",null),(0,d._)([(0,x.Cb)({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),(0,d._)([(0,x.Cb)({readOnly:!0})],t.prototype,"requiredFields",void 0),(0,d._)([(0,x.Cb)()],t.prototype,"suspended",void 0),(0,d._)([(0,x.Cb)()],t.prototype,"view",void 0),t=(0,d._)([(0,F.j)(R)],t),t}},13107:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(15671),i=r(43144),a=r(60136),u=r(29388),l=r(27366),o=r(32718),s=r(66978),c=r(94172),f=r(49861),p=(r(25243),r(63780),r(69912)),d=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add((0,c.on)((function(){return e.layer}),"refresh",(function(t){e.doRefresh(t.dataChanged).catch((function(t){(0,s.D_)(t)||o.Z.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),r}(e);return(0,l._)([(0,f.Cb)()],t.prototype,"layer",void 0),t=(0,l._)([(0,p.j)("esri.layers.mixins.RefreshableLayerView")],t)}},24405:function(e,t,r){r.d(t,{V:function(){return c},e:function(){return o}});var n=r(74165),i=r(93433),a=r(15861),u=r(92026),l=r(80031);function o(e){return s.apply(this,arguments)}function s(){return s=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o,s,c,f,p,d,h,y,v,m=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=m.length>1&&void 0!==m[1]?m[1]:t.popupTemplate,!(0,u.Wi)(o)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,o.getRequiredFields(t.fieldsIndex);case 5:if(s=e.sent,c=o.lastEditInfoEnabled,f=t.objectIdField,p=t.typeIdField,d=t.globalIdField,h=t.relationships,!s.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!c){e.next=19;break}return e.next=16,(0,l.CH)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return y=e.t0,v=(0,l.Q0)(t.fieldsIndex,[].concat((0,i.Z)(s),(0,i.Z)(y))),e.abrupt("return",(p&&v.push(p),v&&f&&null!==(r=t.fieldsIndex)&&void 0!==r&&r.has(f)&&!v.includes(f)&&v.push(f),v&&d&&null!==(a=t.fieldsIndex)&&void 0!==a&&a.has(d)&&!v.includes(d)&&v.push(d),h&&h.forEach((function(e){var r,n=e.keyField;v&&n&&(null===(r=t.fieldsIndex)||void 0===r?void 0:r.has(n))&&!v.includes(n)&&v.push(n)})),v));case 23:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function c(e,t){return e.popupTemplate?e.popupTemplate:(0,u.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,u.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=8495.56aca66f.chunk.js.map