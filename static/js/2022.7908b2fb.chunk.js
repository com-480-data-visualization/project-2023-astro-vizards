"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2022],{39383:function(e,t,i){i.d(t,{T:function(){return I}});var r=i(37762),a=i(74165),n=i(15861),s=i(15671),l=i(43144),o=i(11752),u=i(61120),v=i(60136),c=i(29388),h=i(66978),f=i(43e3),d=i(26885),p=i(55067),y=i(1413),_=i(92026),m=i(17842),b=i(68860),g=i(49229),k=i(84319),Z=i(10435),S=i(98029),R=i(90316);function x(e,t){var i=t.length;if(e<t[0].value||1===i)return t[0].size;for(var r=1;r<i;r++)if(e<t[r].value){var a=(e-t[r-1].value)/(t[r].value-t[r-1].value);return t[r-1].size+a*(t[r].size-t[r-1].size)}return t[i-1].size}var V=function(){function e(){(0,s.Z)(this,e),this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=Z.v}return(0,l.Z)(e,[{key:"getSizeVVFieldStops",value:function(e){var t=this._vvSizeFieldStops;if(t)switch(t.type){case"static":return t;case"level-dependent":return(0,_.Pt)(t.levels[e],(function(){var i=1/0,r=0;for(var a in t.levels){var n=parseFloat(a),s=Math.abs(e-n);s<i&&(i=s,r=n)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};var l=Math.pow(2,(e-r)/2),o=(0,_.Wg)(t.levels[r]),u=new Float32Array(o.values);return u[2]*=l,u[3]*=l,{sizes:(0,_.Wg)(o.sizes),values:u}}));default:return}}},{key:"vvMaterialParameters",get:function(){return this._vvMaterialParameters}},{key:"update",value:function(e){(0,_.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}},{key:"setInfo",value:function(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=(0,S.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}},{key:"getVariation",value:function(){return(0,y.Z)((0,y.Z)({},this._technique.getVariation(this.rendererSchema)),{},{outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,R.hc)("2d").supportsTextureFloat})}},{key:"getVariationHash",value:function(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}},{key:"_updateEffects",value:function(e){(0,_.pC)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}},{key:"_updateVisualVariables",value:function(e,t){var i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,e){var r=e.size;if(r){if(i.vvSizeEnabled=!0,r.minMaxValue){var a,n,s=r.minMaxValue;if((0,k.$K)(s.minSize)&&(0,k.$K)(s.maxSize))if((0,k.hj)(s.minSize)&&(0,k.hj)(s.maxSize))a=(0,m.F2)(s.minSize),n=(0,m.F2)(s.maxSize);else{var l=t.scale;a=(0,m.F2)(x(l,s.minSize.stops)),n=(0,m.F2)(x(l,s.maxSize.stops))}this.vvSizeMinMaxValue.set([s.minDataValue,s.maxDataValue,a,n])}if(r.scaleStops&&(this.vvSizeScaleStopsValue=(0,m.F2)(x(t.scale,r.scaleStops.stops))),r.unitValue){var o=(0,b.c9)(t.spatialReference)/g.a[r.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=o/t.resolution}r.fieldStops&&(this._vvSizeFieldStops=r.fieldStops)}var u=e.color;u&&(i.vvColorEnabled=!0,this.vvColorValues.set(u.values),this.vvColors.set(u.colors));var v=e.opacity;v&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(v.values),this.vvOpacities.set(v.opacities));var c=e.rotation;c&&(i.vvRotationEnabled=!0,i.vvRotationType=c.type)}}}]),e}(),I=function(e){(0,v.Z)(i,e);var t=(0,c.Z)(i);function i(e){var r;return(0,s.Z)(this,i),(r=t.call(this,e))._rendererInfo=new V,r._materialItemsRequestQueue=new f.Z,r.attributeView=new d.H((function(){return r.onAttributeStoreUpdate()})),r}return(0,l.Z)(i,[{key:"destroy",value:function(){this.children.forEach((function(e){return e.destroy()})),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}},{key:"setRendererInfo",value:function(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}},{key:"getMaterialItems",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t,i){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&0!==t.length){e.next=2;break}return e.abrupt("return",[]);case 2:return r=(0,h.hh)(),e.abrupt("return",(this._materialItemsRequestQueue.push({items:t,abortOptions:i,resolver:r}),this.requestRender(),r.promise));case 4:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"doRender",value:function(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0)for(var t=this._materialItemsRequestQueue.pop();t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop();(0,o.Z)((0,u.Z)(i.prototype),"doRender",this).call(this,e)}},{key:"renderChildren",value:function(e){var t,a=(0,r.Z)(this.children);try{for(a.s();!(t=a.n()).done;){t.value.commit(e)}}catch(n){a.e(n)}finally{a.f()}this._rendererInfo.update(e.state),(0,o.Z)((0,u.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"updateTransforms",value:function(e){if(this.children.some((function(e){return e.hasData}))){var t,i=(0,r.Z)(this.children);try{for(i.s();!(t=i.n()).done;){t.value.setTransform(e)}}catch(a){i.e(a)}finally{i.f()}}}},{key:"createRenderParams",value:function(e){var t=(0,o.Z)((0,u.Z)(i.prototype),"createRenderParams",this).call(this,e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}},{key:"onAttributeStoreUpdate",value:function(){}},{key:"_processMaterialItemRequest",value:function(e,t){var i=this,r=t.items,a=t.abortOptions,n=t.resolver,s=e.painter,l=e.pixelRatio,o=r.map((function(e){return s.textureManager.rasterizeItem(e.symbol,l,e.glyphIds,a)}));Promise.all(o).then((function(e){if(i.stage){var t=e.map((function(e,t){return{id:r[t].id,mosaicItem:e}}));n.resolve(t)}else n.reject()}),n.reject)}}]),i}(p.Z)},55067:function(e,t,i){i.d(t,{Z:function(){return y}});var r=i(37762),a=i(15671),n=i(43144),s=i(11752),l=i(61120),o=i(60136),u=i(29388),v=i(93169),c=i(80613),h=i(64510),f=i(52424),d=i(40655),p=function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col},y=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(e){var r;return(0,a.Z)(this,i),(r=t.call(this))._tileInfoView=e,r}return(0,n.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"renderChildren",value:function(e){this.sortChildren(p),this.setStencilReference(e),(0,s.Z)((0,l.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=e.state,r=(0,s.Z)((0,l.Z)(i.prototype),"createRenderParams",this).call(this,e);return r.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,r.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),r}},{key:"prepareRenderPasses",value:function(e){var t=this,r=(0,s.Z)((0,l.Z)(i.prototype),"prepareRenderPasses",this).call(this,e);return r.push(e.registerRenderPass({name:"stencil",brushes:[d.Z],drawPhase:c.jx.DEBUG|c.jx.MAP|c.jx.HIGHLIGHT,target:function(){return t.getStencilTarget()}})),(0,v.Z)("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[f.Z],drawPhase:c.jx.DEBUG,target:function(){return t.children}})),r}},{key:"getStencilTarget",value:function(){return this.children}},{key:"setStencilReference",value:function(e){var t,i=1,a=(0,r.Z)(this.children);try{for(a.s();!(t=a.n()).done;){t.value.stencilRef=i++}}catch(n){a.e(n)}finally{a.f()}}}]),i}(h.Z)},82022:function(e,t,i){i.d(t,{Z:function(){return x}});var r=i(37762),a=i(15671),n=i(43144),s=i(11752),l=i(61120),o=i(60136),u=i(29388),v=i(92026),c=i(39383),h=i(22753),f=i(23588),d=i(15245),p=i(8229),y=i(91340),_=i(87422),m=i(84319),b=i(44070),g=i(8548),k=i(45412),Z=Math.PI/180,S=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(e){var r;return(0,a.Z)(this,i),(r=t.call(this))._program=null,r._vao=null,r._vertexBuffer=null,r._indexBuffer=null,r._dvsMat3=(0,f.c)(),r._localOrigin={x:0,y:0},r._getBounds=e,r}return(0,n.Z)(i,[{key:"destroy",value:function(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,v.M2)(this._program)}},{key:"doRender",value:function(e){var t=e.context,i=this._getBounds();if(!(i.length<1)){this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(g.zi.ONE,g.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);var r=this._program;t.bindVAO(this._vao),t.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(g.MX.LINES,8*i.length,g.g.UNSIGNED_INT,0),t.bindVAO()}}},{key:"_createTransforms",value:function(){return{dvs:(0,f.c)()}}},{key:"_createShaderProgram",value:function(e){if(!this._program){this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",R().attributes)}}},{key:"_updateMatricesAndLocalOrigin",value:function(e){var t=e.state,i=t.displayMat3,r=t.size,a=t.resolution,n=t.pixelRatio,s=t.rotation,l=t.viewpoint,o=Z*s,u=l.targetGeometry,v=u.x,c=u.y,f=(0,y.or)(v,t.spatialReference);this._localOrigin.x=f,this._localOrigin.y=c;var _=n*r[0],m=n*r[1],b=a*_,g=a*m,k=(0,h.g)(this._dvsMat3);(0,h.m)(k,k,i),(0,h.h)(k,k,(0,d.f)(_/2,m/2)),(0,h.d)(k,k,(0,p.f)(r[0]/b,-m/g,1)),(0,h.r)(k,k,-o)}},{key:"_updateBufferData",value:function(e,t){var i,a=this._localOrigin,n=a.x,s=a.y,l=8*t.length,o=new Float32Array(l),u=new Uint32Array(8*t.length),v=0,c=0,h=(0,r.Z)(t);try{for(h.s();!(i=h.n()).done;){var f=i.value;f&&(o[2*v+0]=f[0]-n,o[2*v+1]=f[1]-s,o[2*v+2]=f[0]-n,o[2*v+3]=f[3]-s,o[2*v+4]=f[2]-n,o[2*v+5]=f[3]-s,o[2*v+6]=f[2]-n,o[2*v+7]=f[1]-s,u[c+0]=v+0,u[c+1]=v+3,u[c+2]=v+3,u[c+3]=v+2,u[c+4]=v+2,u[c+5]=v+1,u[c+6]=v+1,u[c+7]=v+0,v+=4,c+=8)}}catch(p){h.e(p)}finally{h.f()}if(this._vertexBuffer?this._vertexBuffer.setData(o.buffer):this._vertexBuffer=b.f.createVertex(e,g.l1.DYNAMIC_DRAW,o.buffer),this._indexBuffer?this._indexBuffer.setData(u):this._indexBuffer=b.f.createIndex(e,g.l1.DYNAMIC_DRAW,u),!this._vao){var d=R();this._vao=new k.U(e,d.attributes,d.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}]),i}(_.s),R=function(){return(0,m.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:g.g.FLOAT}]})},x=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(e){var r;return(0,a.Z)(this,i),(r=t.call(this,e)).hasHighlight=function(){return!0},r}return(0,n.Z)(i,[{key:"destroy",value:function(){(0,s.Z)((0,l.Z)(i.prototype),"destroy",this).call(this),this._boundsRenderer=(0,v.SC)(this._boundsRenderer)}},{key:"enableRenderingBounds",value:function(e){this._boundsRenderer=new S(e),this.requestRender()}},{key:"hasLabels",get:function(){return!1}},{key:"onTileData",value:function(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}},{key:"onTileError",value:function(e){e.clear(),this.contains(e)||this.addChild(e)}},{key:"_renderChildren",value:function(e,t){var i,a=(0,r.Z)(this.children);try{for(a.s();!(i=a.n()).done;){var n=i.value;n.isReady&&n.hasData&&(n.commit(e),e.context.setStencilFunction(g.wb.EQUAL,n.stencilRef,255),n.getDisplayList().replay(e,n,t))}}catch(s){a.e(s)}finally{a.f()}}}]),i}(c.T)}}]);
//# sourceMappingURL=2022.7908b2fb.chunk.js.map