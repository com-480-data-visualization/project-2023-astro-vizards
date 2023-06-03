"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6547],{56547:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(37762),o=r(15671),i=r(43144),a=r(92026),u=r(18722),f=r(48976),c=r(4582),l=r(11186),s=r(8229),d=r(79803),v=r(78952),b=r(74432),y=function(){function e(){(0,o.Z)(this,e)}return(0,i.Z)(e,[{key:"transform",value:function(e){var t=this._transform(e),r=[t.points.buffer,t.rgb.buffer];(0,a.pC)(t.pointIdFilterMap)&&r.push(t.pointIdFilterMap.buffer);var o,i=(0,n.Z)(t.attributes);try{for(i.s();!(o=i.n()).done;){var f=o.value;"buffer"in f.values&&(0,u.eP)(f.values.buffer)&&f.values.buffer!==t.rgb.buffer&&r.push(f.values.buffer)}}catch(c){i.e(c)}finally{i.f()}return Promise.resolve({result:t,transferList:r})}},{key:"_transform",value:function(e){var t=(0,b.Ym)(e.schema,e.geometryBuffer),r=t.length/3,o=null,i=[],u=(0,b.dH)(e.primaryAttributeData,t,r);(0,a.pC)(e.primaryAttributeData)&&u&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:u});var f=(0,b.dH)(e.modulationAttributeData,t,r);(0,a.pC)(e.modulationAttributeData)&&f&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:f});var c=(0,b.aE)(e.rendererInfo,u,f,r);if(e.filterInfo&&e.filterInfo.length>0&&(0,a.pC)(e.filterAttributesData)){var l=e.filterAttributesData.filter(a.pC).map((function(e){var n=(0,b.dH)(e,t,r),o={attributeInfo:e.attributeInfo,values:n};return i.push(o),o}));o=new Uint32Array(r),r=(0,b.hv)(t,c,o,e.filterInfo,l)}var s,d=(0,n.Z)(e.userAttributesData);try{for(d.s();!(s=d.n()).done;){var y=s.value,g=(0,b.dH)(y,t,r);i.push({attributeInfo:y.attributeInfo,values:g})}}catch(p){d.e(p)}finally{d.f()}3*r<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(t,r,e.elevationOffset);var h=this._transformCoordinates(t,r,e.obb,v.Z.fromJSON(e.inSR),v.Z.fromJSON(e.outSR));return{obb:e.obb,points:h,rgb:c,attributes:i,pointIdFilterMap:o}}},{key:"_transformCoordinates",value:function(e,t,r,n,o){if(!(0,d.CM)(e,n,0,e,o,0,t))throw new Error("Can't reproject");var i=(0,s.f)(r.center[0],r.center[1],r.center[2]),a=(0,s.c)(),u=(0,s.c)();(0,f.c)(g,r.quaternion);for(var c=new Float32Array(3*t),v=0;v<t;v++)a[0]=e[3*v]-i[0],a[1]=e[3*v+1]-i[1],a[2]=e[3*v+2]-i[2],(0,l.q)(u,a,g),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(u[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(u[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(u[2])),c[3*v]=a[0],c[3*v+1]=a[1],c[3*v+2]=a[2];return c}},{key:"_applyElevationOffsetInPlace",value:function(e,t,r){if(0!==r)for(var n=0;n<t;n++)e[3*n+2]+=r}}]),e}(),g=(0,c.c)();function h(){return new y}},28278:function(e,t,r){r.d(t,{Es:function(){return p},I_:function(){return b},W7:function(){return h},qM:function(){return m}});var n=r(1413),o=r(37762),i=r(10064),a=r(84652),u=r(32718),f=r(2821),c=r(4760),l=u.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function s(e,t,r){for(var n="",o=0;o<r;){var a=e[t+o];if(a<128)n+=String.fromCharCode(a),o++;else if(a>=192&&a<224){if(o+1>=r)throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var u=(31&a)<<6|63&e[t+o+1];n+=String.fromCharCode(u),o+=2}else if(a>=224&&a<240){if(o+2>=r)throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var f=(15&a)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];n+=String.fromCharCode(f),o+=3}else{if(!(a>=240&&a<248))throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(o+3>=r)throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var c=(7&a)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(c>=65536){var l=55296+(c-65536>>10),s=56320+(1023&c);n+=String.fromCharCode(l,s)}else n+=String.fromCharCode(c);o+=4}}return n}function d(e,t){for(var r={byteOffset:0,byteCount:0,fields:Object.create(null)},n=0,o=0;o<t.length;o++){var i=t[o],a=i.valueType||i.type,u=U[a];r.fields[i.property]=u(e,n),n+=C[a].BYTES_PER_ELEMENT}return r.byteCount=n,r}function v(e,t,r){var n,o,a=[],u=0;for(o=0;o<e;o+=1){if((n=t[o])>0){if(a.push(s(r,u,n-1)),0!==r[u+n-1])throw new i.Z("string-array-error","Invalid string array: missing null termination.")}else a.push(null);u+=n}return a}function b(e,t){return new(0,C[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function y(e,t,r){for(var n=null!=t.header?d(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)},u=n.byteCount,f=0;f<t.ordering.length;f++){var c,l,s=t.ordering[f],v=(0,a.d9)(t[s]);if(v.count=null!==(c=n.fields.count)&&void 0!==c?c:0,"String"===v.valueType){if(v.byteOffset=u,v.byteCount=n.fields[s+"ByteCount"],"UTF-8"!==v.encoding)throw new i.Z("unsupported-encoding","Unsupported String encoding.",{encoding:v.encoding});if(v.timeEncoding&&"ECMA_ISO8601"!==v.timeEncoding)throw new i.Z("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:v.timeEncoding})}else{if(!I(v.valueType))throw new i.Z("unsupported-value-type","Unsupported binary valueType",{valueType:v.valueType});var b=Z(v.valueType);u+=u%b!=0?b-u%b:0,v.byteOffset=u,v.byteCount=b*v.valuesPerElement*v.count}u+=null!==(l=v.byteCount)&&void 0!==l?l:0,o.entries[s]=v}return o.byteCount=u-o.byteOffset,o}function g(e,t,r){if(t!==e&&l.error("Invalid ".concat(r," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new i.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function h(e,t){var r,i=d(e,t&&t.header),a=i.byteCount,u={isDraco:!1,header:i,byteOffset:i.byteCount,byteCount:0,vertexAttributes:{}},f=i.fields,c=null!=f.vertexCount?f.vertexCount:f.count,l=(0,o.Z)(t.ordering);try{for(l.s();!(r=l.n()).done;){var s=r.value;if(t.vertexAttributes[s]){var v=(0,n.Z)((0,n.Z)({},t.vertexAttributes[s]),{},{byteOffset:a,count:c}),b=w[s]?w[s]:"_"+s;u.vertexAttributes[b]=v,a+=Z(v.valueType)*v.valuesPerElement*c}}}catch(k){l.e(k)}finally{l.f()}var y=f.faceCount;if(t.faces&&y){u.faces={};var h,p=(0,o.Z)(t.ordering);try{for(p.s();!(h=p.n()).done;){var m=h.value;if(t.faces[m]){var C=(0,n.Z)((0,n.Z)({},t.faces[m]),{},{byteOffset:a,count:y});u.faces[m]=C,a+=Z(C.valueType)*C.valuesPerElement*y}}}catch(k){p.e(k)}finally{p.f()}}var U=f.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&U){u.featureAttributes={};var I,A=(0,o.Z)(t.featureAttributeOrder);try{for(A.s();!(I=A.n()).done;){var M=I.value;if(t.featureAttributes[M]){var O=(0,n.Z)((0,n.Z)({},t.featureAttributes[M]),{},{byteOffset:a,count:U});u.featureAttributes[M]=O,a+=("UInt64"===O.valueType?8:Z(O.valueType))*O.valuesPerElement*U}}}catch(k){A.e(k)}finally{A.f()}}return g(a,e.byteLength,"geometry"),u.byteCount=a-u.byteOffset,u}function p(e,t){return e&&e.compressedAttributes&&"draco"===e.compressedAttributes.encoding?function(e){var t,r={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1},n=(0,o.Z)(e);try{for(n.s();!(t=n.n()).done;){switch(t.value){case"position":break;case"normal":r.normal=!0;break;case"uv0":r.uv0=!0;break;case"color":r.color=!0;break;case"uv-region":r.uvRegion=!0;break;case"feature-index":r.featureIndex=!0}}}catch(i){n.e(i)}finally{n.f()}return r}(e.compressedAttributes.attributes):e?function(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}(e):function(e){var t,r={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1},n=(0,o.Z)(e.ordering);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(e.vertexAttributes[i])switch(i){case"position":break;case"normal":r.normal=!0;break;case"color":r.color=!0;break;case"uv0":r.uv0=!0;break;case"region":r.uvRegion=!0}}}catch(a){n.e(a)}finally{n.f()}return e.featureAttributes&&e.featureAttributeOrder&&(r.featureIndex=!0),r}(t)}var w={position:c.T.POSITION,normal:c.T.NORMAL,color:c.T.COLOR,uv0:c.T.UV0,region:c.T.UVREGION};function m(e,t,r){if("lepcc-rgb"===e.encoding)return(0,f.IT)(t);if("lepcc-intensity"===e.encoding)return(0,f.ti)(t);if(null!=e.encoding&&""!==e.encoding)throw new i.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(l.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(l.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var n=y(t,e,r);g(n.byteOffset+n.byteCount,t.byteLength,"attribute");var o=n.entries.attributeValues||n.entries.objectIds;if(o){if("String"===o.valueType){var a=n.entries.attributeByteCounts,u=b(t,a),c=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return o.timeEncoding?function(e,t,r){return v(e,t,r).map((function(e){var t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(a.count,u,c):v(a.count,u,c)}return b(t,o)}throw new i.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}var C={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},U={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}};function I(e){return C.hasOwnProperty(e)}function Z(e){return I(e)?C[e].BYTES_PER_ELEMENT:0}},2821:function(e,t,r){r.d(t,{Gi:function(){return c},IT:function(){return b},ti:function(){return h}});var n=r(10064),o=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function a(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+i.identifierOffset,i.identifierLength)),version:t.getUint16(r+i.versionOffset,o),checksum:t.getUint32(r+i.checksumOffset,o)}}var u={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function f(e,t){return{sizeLo:e.getUint32(t+u.sizeLo,o),sizeHi:e.getUint32(t+u.sizeHi,o),minX:e.getFloat64(t+u.minX,o),minY:e.getFloat64(t+u.minY,o),minZ:e.getFloat64(t+u.minZ,o),maxX:e.getFloat64(t+u.maxX,o),maxY:e.getFloat64(t+u.maxY,o),maxZ:e.getFloat64(t+u.maxZ,o),errorX:e.getFloat64(t+u.errorX,o),errorY:e.getFloat64(t+u.errorY,o),errorZ:e.getFloat64(t+u.errorZ,o),count:e.getUint32(t+u.count,o),reserved:e.getUint32(t+u.reserved,o)}}function c(e){var t=new DataView(e,0),r=0,o=a(e,t,r),c=o.identifier,s=o.version;if(r+=i.byteCount,"LEPCC     "!==c)throw new n.Z("lepcc-decode-error","Bad identifier");if(s>1)throw new n.Z("lepcc-decode-error","Unknown version");var d=f(t,r);if(r+=u.byteCount,d.sizeHi*Math.pow(2,32)+d.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");var v=new Float64Array(3*d.count),b=[],y=[],g=[],h=[];if(r=l(e,r,b),r=l(e,r,y),r=l(e,r,g),(r=l(e,r,h))!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad length");for(var p=0,w=0,m=0;m<b.length;m++){w+=b[m];for(var C=0,U=0;U<y[m];U++){C+=g[p];var I=h[p];v[3*p]=Math.min(d.maxX,d.minX+2*d.errorX*C),v[3*p+1]=Math.min(d.maxY,d.minY+2*d.errorY*w),v[3*p+2]=Math.min(d.maxZ,d.minZ+2*d.errorZ*I),p++}}return{errorX:d.errorX,errorY:d.errorY,errorZ:d.errorZ,result:v}}function l(e,t,r){var n=[];t=s(e,t,n);for(var o=[],i=0;i<n.length;i++){o.length=0,t=s(e,t,o);for(var a=0;a<o.length;a++)r.push(o[a]+n[i])}return t}function s(e,t,r){var i=new DataView(e,t),a=i.getUint8(0),u=31&a,f=!!(32&a),c=(192&a)>>6,l=0;if(0===c)l=i.getUint32(1,o),t+=5;else if(1===c)l=i.getUint16(1,o),t+=3;else{if(2!==c)throw new n.Z("lepcc-decode-error","Bad count type");l=i.getUint8(1),t+=2}if(f)throw new n.Z("lepcc-decode-error","LUT not implemented");for(var s=Math.ceil(l*u/8),d=new Uint8Array(e,t,s),v=0,b=0,y=0,g=-1>>>32-u,h=0;h<l;h++){for(;b<u;)v|=d[y]<<b,b+=8,y+=1;r[h]=v&g,v>>>=u,(b-=u)+u>32&&(v|=d[y-1]>>8-b)}return t+y}var d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function v(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,o),sizeHi:e.getUint32(t+d.sizeHi,o),count:e.getUint32(t+d.count,o),colorMapCount:e.getUint16(t+d.colorMapCount,o),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function b(e){var t=new DataView(e,0),r=0,o=a(e,t,r),u=o.identifier,f=o.version;if(r+=i.byteCount,"ClusterRGB"!==u)throw new n.Z("lepcc-decode-error","Bad identifier");if(f>1)throw new n.Z("lepcc-decode-error","Unknown version");var c=v(t,r);if(r+=d.byteCount,c.sizeHi*Math.pow(2,32)+c.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");if((2===c.lookupMethod||1===c.lookupMethod)&&0===c.compressionMethod){if(3*c.colorMapCount+c.count+r!==e.byteLength||c.colorMapCount>256)throw new n.Z("lepcc-decode-error","Bad count");for(var l=new Uint8Array(e,r,3*c.colorMapCount),s=new Uint8Array(e,r+3*c.colorMapCount,c.count),b=new Uint8Array(3*c.count),y=0;y<c.count;y++){var g=s[y];b[3*y]=l[3*g],b[3*y+1]=l[3*g+1],b[3*y+2]=l[3*g+2]}return b}if(0===c.lookupMethod&&0===c.compressionMethod){if(3*c.count+r!==e.byteLength||0!==c.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(c.lookupMethod<=2&&1===c.compressionMethod){if(r+3!==e.byteLength||1!==c.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");for(var h=t.getUint8(r),p=t.getUint8(r+1),w=t.getUint8(r+2),m=new Uint8Array(3*c.count),C=0;C<c.count;C++)m[3*C]=h,m[3*C+1]=p,m[3*C+2]=w;return m}throw new n.Z("lepcc-decode-error","Bad method "+c.lookupMethod+","+c.compressionMethod)}var y={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function g(e,t){return{sizeLo:e.getUint32(t+y.sizeLo,o),sizeHi:e.getUint32(t+y.sizeHi,o),count:e.getUint32(t+y.count,o),scaleFactor:e.getUint16(t+y.scaleFactor,o),bitsPerPoint:e.getUint8(t+y.bitsPerPoint),reserved:e.getUint8(t+y.reserved)}}function h(e){var t=new DataView(e,0),r=0,o=a(e,t,r),u=o.identifier,f=o.version;if(r+=i.byteCount,"Intensity "!==u)throw new n.Z("lepcc-decode-error","Bad identifier");if(f>1)throw new n.Z("lepcc-decode-error","Unknown version");var c=g(t,r);if(r+=y.byteCount,c.sizeHi*Math.pow(2,32)+c.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");var l=new Uint16Array(c.count);if(8===c.bitsPerPoint){if(c.count+r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var d=new Uint8Array(e,r,c.count),v=0;v<c.count;v++)l[v]=d[v]*c.scaleFactor}else if(16===c.bitsPerPoint){if(2*c.count+r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var b=new Uint16Array(e,r,c.count),h=0;h<c.count;h++)l[h]=b[h]*c.scaleFactor}else{var p=[];if(s(e,r,p)!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var w=0;w<c.count;w++)l[w]=p[w]*c.scaleFactor}return l}},74432:function(e,t,r){r.d(t,{Ym:function(){return s},aE:function(){return l},dH:function(){return d},et:function(){return v},hv:function(){return b}});var n=r(37762),o=r(92026),i=r(21134),a=r(89431),u=r(87005),f=r(28278),c=r(2821);function l(e,t,r,n){var o=e.rendererJSON,f=e.isRGBRenderer,c=null,l=null;if(t&&f)c=t;else if(t&&"pointCloudUniqueValueRenderer"===(null===o||void 0===o?void 0:o.type)){var s=(l=u.Z.fromJSON(o)).colorUniqueValueInfos;c=new Uint8Array(3*n);for(var d=y(l.fieldTransformType),v=0;v<n;v++)for(var b=(d?d(t[v]):t[v])+"",g=0;g<s.length;g++)if(s[g].values.includes(b)){c[3*v]=s[g].color.r,c[3*v+1]=s[g].color.g,c[3*v+2]=s[g].color.b;break}}else if(t&&"pointCloudStretchRenderer"===(null===o||void 0===o?void 0:o.type)){var h=(l=a.Z.fromJSON(o)).stops;c=new Uint8Array(3*n);for(var p=y(l.fieldTransformType),w=0;w<n;w++){var m=p?p(t[w]):t[w],C=h.length-1;if(m<h[0].value)c[3*w]=h[0].color.r,c[3*w+1]=h[0].color.g,c[3*w+2]=h[0].color.b;else if(m>=h[C].value)c[3*w]=h[C].color.r,c[3*w+1]=h[C].color.g,c[3*w+2]=h[C].color.b;else for(var U=1;U<h.length;U++)if(m<h[U].value){var I=(m-h[U-1].value)/(h[U].value-h[U-1].value);c[3*w]=h[U].color.r*I+h[U-1].color.r*(1-I),c[3*w+1]=h[U].color.g*I+h[U-1].color.g*(1-I),c[3*w+2]=h[U].color.b*I+h[U-1].color.b*(1-I);break}}}else if(t&&"pointCloudClassBreaksRenderer"===(null===o||void 0===o?void 0:o.type)){var Z=(l=i.Z.fromJSON(o)).colorClassBreakInfos;c=new Uint8Array(3*n);for(var A=y(l.fieldTransformType),M=0;M<n;M++)for(var O=A?A(t[M]):t[M],k=0;k<Z.length;k++)if(O>=Z[k].minValue&&O<=Z[k].maxValue){c[3*M]=Z[k].color.r,c[3*M+1]=Z[k].color.g,c[3*M+2]=Z[k].color.b;break}}else{c=new Uint8Array(3*n);for(var z=0;z<c.length;z++)c[z]=255}if(r&&l&&l.colorModulation)for(var T=l.colorModulation.minValue,F=l.colorModulation.maxValue,L=0;L<n;L++){var x=r[L],B=x>=F?1:x<=T?.3:.3+.7*(x-T)/(F-T);c[3*L]=B*c[3*L],c[3*L+1]=B*c[3*L+1],c[3*L+2]=B*c[3*L+2]}return c}function s(e,t){if(null==e.encoding||""===e.encoding){var r=(0,f.W7)(t,e);if((0,o.Wi)(r.vertexAttributes.position))return;for(var n=(0,f.I_)(t,r.vertexAttributes.position),i=r.header.fields,a=[i.offsetX,i.offsetY,i.offsetZ],u=[i.scaleX,i.scaleY,i.scaleZ],l=n.length/3,s=new Float64Array(3*l),d=0;d<l;d++)s[3*d]=n[3*d]*u[0]+a[0],s[3*d+1]=n[3*d+1]*u[1]+a[1],s[3*d+2]=n[3*d+2]*u[2]+a[2];return s}if("lepcc-xyz"===e.encoding)return(0,c.Gi)(t).result}function d(e,t,r){return(0,o.pC)(e)&&e.attributeInfo.useElevation?t?v(t,r):null:(0,o.pC)(e)&&e.attributeInfo.storageInfo?(0,f.qM)(e.attributeInfo.storageInfo,e.buffer,r):null}function v(e,t){for(var r=new Float64Array(t),n=0;n<t;n++)r[n]=e[3*n+2];return r}function b(e,t,r,o,i){for(var a=e.length/3,u=0,f=0;f<a;f++){for(var c=!0,l=0;l<o.length&&c;l++){var s=o[l].filterJSON,d=i[l].values[f];switch(s.type){case"pointCloudValueFilter":var v="exclude"===s.mode;s.values.includes(d)===v&&(c=!1);break;case"pointCloudBitfieldFilter":var b=g(s.requiredSetBits),y=g(s.requiredClearBits);(d&b)===b&&0==(d&y)||(c=!1);break;case"pointCloudReturnFilter":var h,p=15&d,w=d>>>4&15,m=w>1,C=1===p,U=p===w,I=!1,Z=(0,n.Z)(s.includedReturns);try{for(Z.s();!(h=Z.n()).done;){var A=h.value;if("last"===A&&U||"firstOfMany"===A&&C&&m||"lastOfMany"===A&&U&&m||"single"===A&&!m){I=!0;break}}}catch(M){Z.e(M)}finally{Z.f()}I||(c=!1)}}c&&(r[u]=f,e[3*u]=e[3*f],e[3*u+1]=e[3*f+1],e[3*u+2]=e[3*f+2],t[3*u]=t[3*f],t[3*u+1]=t[3*f+1],t[3*u+2]=t[3*f+2],u++)}return u}function y(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}function g(e){var t,r=0,o=(0,n.Z)(e||[]);try{for(o.s();!(t=o.n()).done;){r|=1<<t.value}}catch(i){o.e(i)}finally{o.f()}return r}}}]);
//# sourceMappingURL=6547.e8f32b1d.chunk.js.map