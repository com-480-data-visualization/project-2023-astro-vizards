"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[113],{11873:function(e,t,n){function r(){return[1,0,0,0,1,0,0,0,1]}function i(e,t,n,r,i,o,a,u,s){return[e,t,n,r,i,o,a,u,s]}function o(e,t){return new Float64Array(e,t,9)}n.d(t,{a:function(){return o},c:function(){return r},f:function(){return i}});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:r,createView:o,fromValues:i},Symbol.toStringTag,{value:"Module"}))},98131:function(e,t,n){function r(){return[0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3]]}function o(e,t){return new Float64Array(e,t,4)}n.d(t,{I:function(){return a},a:function(){return r},b:function(){return i},c:function(){return o}});var a=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:i,create:r,createView:o,fromValues:function(e,t,n,r){return[e,t,n,r]}},Symbol.toStringTag,{value:"Module"}))},85981:function(e,t,n){n.d(t,{Ue:function(){return s},nF:function(){return h},zk:function(){return c}});var r=n(16889),i=n(21530),o=n(11186),a=n(71353),u=n(11185);function s(e){return e?{origin:(0,a.a)(e.origin),vector:(0,a.a)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,o.c)(n.origin,e),(0,o.b)(n.vector,t,e),n}function h(e,t,n){return function(e,t,n,i,a){var s=e.vector,c=e.origin,h=(0,o.b)(u.WM.get(),t,c),d=(0,o.e)(s,h)/(0,o.p)(s);return(0,o.g)(a,s,(0,r.uZ)(d,n,i)),(0,o.a)(a,a,e.origin)}(e,t,0,1,n)}(0,a.c)(),(0,a.c)(),new i.x((function(){return s()}))},97731:function(e,t,n){n.d(t,{hu:function(){return a},yK:function(){return u}});var r=n(15671),i=n(43144),o=(n(6394),n(90045),(0,n(67077).c)(),function(){function e(t){(0,r.Z)(this,e),this.message=t}return(0,i.Z)(e,[{key:"toString",value:function(){return"AssertException: ".concat(this.message)}}]),e}());function a(e,t){if(!e){t=t||"Assertion";var n=new Error(t).stack;throw new o("".concat(t," at ").concat(n))}}function u(e,t,n,r){var i,o=(n[0]-e[0])/t[0],a=(r[0]-e[0])/t[0];o>a&&(i=o,o=a,a=i);var u=(n[1]-e[1])/t[1],s=(r[1]-e[1])/t[1];if(u>s&&(i=u,u=s,s=i),o>s||u>a)return!1;u>o&&(o=u),s<a&&(a=s);var c=(n[2]-e[2])/t[2],h=(r[2]-e[2])/t[2];return c>h&&(i=c,c=h,h=i),!(o>h||c>a)&&(h<a&&(a=h),!(a<0))}},10387:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var r=n(37762),i=n(74165),o=n(15861),a=n(15671),u=n(43144),s=n(27366),c=n(92026),h=n(66978),d=(n(32718),n(25243),n(63780),n(10064),n(93169),n(69912)),f=n(11186),l=n(71353),_=n(85981),v=n(71417),p=n(99987),m=n(13005),T=n(27546),g=n(21530),O=(n(14226),n(90045),n(67077)),b=n(40885);function y(e){return e?{ray:(0,b.Ue)(e.ray),c0:e.c0,c1:e.c1}:{ray:(0,b.Ue)(),c0:0,c1:Number.MAX_VALUE}}var E,R;new g.x((function(){return y()})),n(76146),n(11185);function k(e,t){for(var n=0;n<A.NUM;n++){var r=e[n];if(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]>=t[3])return!1}return!0}!function(e){e[e.LEFT=0]="LEFT",e[e.RIGHT=1]="RIGHT",e[e.BOTTOM=2]="BOTTOM",e[e.TOP=3]="TOP",e[e.NEAR=4]="NEAR",e[e.FAR=5]="FAR"}(E||(E={})),function(e){e[e.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",e[e.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",e[e.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",e[e.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",e[e.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",e[e.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",e[e.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",e[e.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(R||(R={}));var A,N;R.FAR_BOTTOM_RIGHT,R.NEAR_BOTTOM_RIGHT,R.NEAR_BOTTOM_LEFT,R.FAR_BOTTOM_LEFT,R.NEAR_BOTTOM_LEFT,R.NEAR_BOTTOM_RIGHT,R.NEAR_TOP_RIGHT,R.NEAR_TOP_LEFT,R.FAR_BOTTOM_RIGHT,R.FAR_BOTTOM_LEFT,R.FAR_TOP_LEFT,R.FAR_TOP_RIGHT,R.NEAR_BOTTOM_RIGHT,R.FAR_BOTTOM_RIGHT,R.FAR_TOP_RIGHT,R.NEAR_TOP_RIGHT,R.FAR_BOTTOM_LEFT,R.NEAR_BOTTOM_LEFT,R.NEAR_TOP_LEFT,R.FAR_TOP_LEFT,R.FAR_TOP_LEFT,R.NEAR_TOP_LEFT,R.NEAR_TOP_RIGHT,R.FAR_TOP_RIGHT;!function(e){e[e.NUM=6]="NUM"}(A||(A={})),function(e){e[e.NUM=8]="NUM"}(N||(N={}));(0,O.f)(-1,-1,-1,1),(0,O.f)(1,-1,-1,1),(0,O.f)(1,1,-1,1),(0,O.f)(-1,1,-1,1),(0,O.f)(-1,-1,1,1),(0,O.f)(1,-1,1,1),(0,O.f)(1,1,1,1),(0,O.f)(-1,1,1,1),new g.x(y),(0,l.c)(),(0,l.c)(),(0,l.c)(),(0,l.c)(),(0,l.c)(),(0,l.c)(),(0,l.c)(),(0,l.c)();var F=n(97731),S=function(){function e(t,n){(0,a.Z)(this,e),this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new x,this._objectCount=0,n&&(void 0!==n.maximumObjectsPerNode&&(this._maximumObjectsPerNode=n.maximumObjectsPerNode),void 0!==n.maximumDepth&&(this._maximumDepth=n.maximumDepth))}return(0,u.Z)(e,[{key:"bounds",get:function(){return this._root.bounds}},{key:"halfSize",get:function(){return this._root.halfSize}},{key:"root",get:function(){return this._root.node}},{key:"maximumObjectsPerNode",get:function(){return this._maximumObjectsPerNode}},{key:"maximumDepth",get:function(){return this._maximumDepth}},{key:"objectCount",get:function(){return this._objectCount}},{key:"destroy",value:function(){this._degenerateObjects.clear(),x.clearPool(),H[0]=null,U.prune(),Q.prune()}},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;this._objectCount+=t,this._grow(e,t);for(var n=x.acquire(),r=0;r<t;r++){var i=e[r];this._isDegenerate(i)?this._degenerateObjects.add(i):(n.init(this._root),this._add(i,n))}x.release(n)}},{key:"remove",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._objectCount-=e.length;var n,i=x.acquire(),o=(0,r.Z)(e);try{for(o.s();!(n=o.n()).done;){var a=n.value,u=(0,c.pC)(t)?t:(0,v.h)(this._objectToBoundingSphere(a),W);z(u[3])?(i.init(this._root),this._remove(a,u,i)):this._degenerateObjects.delete(a)}}catch(s){o.e(s)}finally{o.f()}x.release(i),this._shrink()}},{key:"update",value:function(e,t){if(z(t[3])||!this._isDegenerate(e)){var n=function(e){return H[0]=e,H}(e);this.remove(n,t),this.add(n)}}},{key:"forEachAlongRay",value:function(e,t,n){var r=this,i=(0,b.re)(e,t);this._forEachNode(this._root,(function(e){if(!r._intersectsNode(i,e))return!1;var t=e.node;return t.terminals.forAll((function(e){r._intersectsObject(i,e)&&n(e)})),null!==t.residents&&t.residents.forAll((function(e){r._intersectsObject(i,e)&&n(e)})),!0}))}},{key:"forEachAlongRayWithVerticalOffset",value:function(e,t,n,r){var i=this,o=(0,b.re)(e,t);this._forEachNode(this._root,(function(e){if(!i._intersectsNodeWithOffset(o,e,r))return!1;var t=e.node;return t.terminals.forAll((function(e){i._intersectsObjectWithOffset(o,e,r)&&n(e)})),null!==t.residents&&t.residents.forAll((function(e){i._intersectsObjectWithOffset(o,e,r)&&n(e)})),!0}))}},{key:"forEach",value:function(e){this._forEachNode(this._root,(function(t){var n=t.node;return n.terminals.forAll(e),null!==n.residents&&n.residents.forAll(e),!0})),this._degenerateObjects.forEach(e)}},{key:"forEachDegenerateObject",value:function(e){this._degenerateObjects.forEach(e)}},{key:"findClosest",value:function(e,t,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0,a=1/0,u=1/0,s=null,c=w(e,t),h=function(c){if(--o,i(c)){var h=r._objectToBoundingSphere(c);if(k(n,h)){var d=P(e,t,(0,v.g)(h)),f=d-h[3],l=d+h[3];f<a&&(a=f,u=l,s=c)}}};return this._forEachNodeDepthOrdered(this._root,(function(r){if(o<=0||!k(n,r.bounds))return!1;if((0,f.g)(G,c,r.halfSize),(0,f.a)(G,G,r.bounds),P(e,t,G)>u)return!1;var i=r.node;return i.terminals.forAll((function(e){return h(e)})),null!==i.residents&&i.residents.forAll((function(e){return h(e)})),!0}),e,t),s}},{key:"forEachInDepthRange",value:function(t,n,r,i,o,a,u){var s=this,c=-1/0,h=1/0,d={setRange:function(t){r===e.DepthOrder.FRONT_TO_BACK?(c=Math.max(c,t.near),h=Math.min(h,t.far)):(c=Math.max(c,-t.far),h=Math.min(h,-t.near))}};d.setRange(i);var l=P(n,r,t),_=w(n,r),p=w(n,-r),m=function(e){if(u(e)){var t=s._objectToBoundingSphere(e),i=(0,v.g)(t),f=P(n,r,i)-l,_=f-t[3],p=f+t[3];_>h||p<c||!k(a,t)||o(e,d)}};this._forEachNodeDepthOrdered(this._root,(function(e){if(!k(a,e.bounds))return!1;if((0,f.g)(G,_,e.halfSize),(0,f.a)(G,G,e.bounds),P(n,r,G)-l>h)return!1;if((0,f.g)(G,p,e.halfSize),(0,f.a)(G,G,e.bounds),P(n,r,G)-l<c)return!1;var t=e.node;return t.terminals.forAll((function(e){return m(e)})),null!==t.residents&&t.residents.forAll((function(e){return m(e)})),!0}),n,r)}},{key:"forEachNode",value:function(e){this._forEachNode(this._root,(function(t){return e(t.node,t.bounds,t.halfSize)}))}},{key:"forEachNeighbor",value:function(e,t){var n=this,r=(0,v.a)(t),i=(0,v.g)(t),o=function(t){var o=n._objectToBoundingSphere(t),a=(0,v.a)(o),u=r+a;return!((0,f.d)((0,v.g)(o),i)-u*u<=0)||e(t)},a=!0,u=function(e){a&&(a=o(e))};this._forEachNode(this._root,(function(e){var t=(0,v.a)(e.bounds),n=r+t;if((0,f.d)((0,v.g)(e.bounds),i)-n*n>0)return!1;var o=e.node;return o.terminals.forAll(u),a&&null!==o.residents&&o.residents.forAll(u),a})),a&&this.forEachDegenerateObject(u)}},{key:"_intersectsNode",value:function(e,t){return B(t.bounds,2*-t.halfSize,V),B(t.bounds,2*t.halfSize,q),(0,F.yK)(e.origin,e.direction,V,q)}},{key:"_intersectsNodeWithOffset",value:function(e,t,n){return B(t.bounds,2*-t.halfSize,V),B(t.bounds,2*t.halfSize,q),n.applyToMinMax(V,q),(0,F.yK)(e.origin,e.direction,V,q)}},{key:"_intersectsObject",value:function(e,t){var n=this._objectToBoundingSphere(t);return!(n[3]>0)||(0,v.j)(n,e)}},{key:"_intersectsObjectWithOffset",value:function(e,t,n){var r=this._objectToBoundingSphere(t);return!(r[3]>0)||(0,v.j)(n.applyToBoundingSphere(r),e)}},{key:"_forEachNode",value:function(e,t){for(var n=x.acquire().init(e),r=[n];0!==r.length;){if(t(n=r.pop())&&!n.isLeaf())for(var i=0;i<n.node.children.length;i++)n.node.children[i]&&r.push(x.acquire().init(n).advance(i));x.release(n)}}},{key:"_forEachNodeDepthOrdered",value:function(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.DepthOrder.FRONT_TO_BACK,o=x.acquire().init(t),a=[o];for(function(e,t,n){if(!Q.length)for(var r=0;r<8;++r)Q.push({index:0,distance:0});for(var i=0;i<8;++i){var o=L[i];Q.data[i].index=i,Q.data[i].distance=P(e,t,o)}Q.sort((function(e,t){return e.distance-t.distance}));for(var a=0;a<8;++a)n[a]=Q.data[a].index}(r,i,$);0!==a.length;){if(n(o=a.pop())&&!o.isLeaf())for(var u=7;u>=0;--u){var s=$[u];o.node.children[s]&&a.push(x.acquire().init(o).advance(s))}x.release(o)}}},{key:"_remove",value:function(e,t,n){U.clear();var r=n.advanceTo(t,(function(e,t){U.push(e.node),U.push(t)}))?n.node.terminals:n.node.residents;if(r.removeUnordered(e),0===r.length)for(var i=U.length-2;i>=0;i-=2){var o=U.data[i],a=U.data[i+1];if(!this._purge(o,a))break}}},{key:"_nodeIsEmpty",value:function(e){if(0!==e.terminals.length)return!1;if(null!==e.residents)return 0===e.residents.length;for(var t=0;t<e.children.length;t++)if(e.children[t])return!1;return!0}},{key:"_purge",value:function(e,t){return t>=0&&(e.children[t]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new T.Z({shrink:!0})),!0)}},{key:"_add",value:function(e,t){t.advanceTo(this._objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}},{key:"_split",value:function(e){var t=e.node.residents;e.node.residents=null;for(var n=0;n<t.length;n++){var r=x.acquire().init(e);this._add(t.getItemAt(n),r),x.release(r)}}},{key:"_grow",value:function(e,t){var n=this;if(0!==t&&(I(e,t,(function(e){return n._objectToBoundingSphere(e)}),K),z(K[3])&&!this._fitsInsideTree(K)))if(this._nodeIsEmpty(this._root.node))(0,v.h)(K,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{var r=this._rootBoundsForRootAsSubNode(K);this._placingRootViolatesMaxDepth(r)?this._rebuildTree(K,r):this._growRootAsSubNode(r),x.release(r)}}},{key:"_rebuildTree",value:function(e,t){var n=this;(0,f.c)(X,t.bounds),X[3]=t.halfSize,I([e,X],2,(function(e){return e}),Y);var r=x.acquire().init(this._root);this._root.initFrom(null,Y,Y[3]),this._root.increaseHalfSize(1.25),this._forEachNode(r,(function(e){return n.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&n.add(e.node.residents.data,e.node.residents.length),!0})),x.release(r)}},{key:"_placingRootViolatesMaxDepth",value:function(e){var t=this,n=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E,r=0;return this._forEachNode(this._root,(function(e){return(r=Math.max(r,e.depth))+n<=t._maximumDepth})),r+n>this._maximumDepth}},{key:"_rootBoundsForRootAsSubNode",value:function(e){for(var t=e[3],n=e,r=-1/0,i=this._root.bounds,o=this._root.halfSize,a=0;a<3;a++){var u=i[a]-o-(n[a]-t),s=n[a]+t-(i[a]+o),c=Math.max(0,Math.ceil(u/(2*o))),h=Math.max(0,Math.ceil(s/(2*o)))+1,d=Math.pow(2,Math.ceil(Math.log(c+h)*Math.LOG2E));r=Math.max(r,d),J[a].min=c,J[a].max=h}for(var f=0;f<3;f++){var l=J[f].min,_=J[f].max,v=(r-(l+_))/2;l+=Math.ceil(v),_+=Math.floor(v);var p=i[f]-o-l*o*2;D[f]=p+(_+l)*o}var m=r*o;return D[3]=m*C,x.acquire().initFrom(null,D,m,0)}},{key:"_growRootAsSubNode",value:function(e){var t=this._root.node;(0,f.c)(K,this._root.bounds),K[3]=this._root.halfSize,this._root.init(e),e.advanceTo(K,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}},{key:"_shrink",value:function(){for(;;){var e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0}}},{key:"_findShrinkIndex",value:function(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;for(var e=null,t=this._root.node.children,n=0,r=0;r<t.length&&null==e;)e=t[n=r++];for(;r<t.length;)if(t[r++])return-1;return n}},{key:"_isDegenerate",value:function(e){return!z(this._objectToBoundingSphere(e)[3])}},{key:"_fitsInsideTree",value:function(e){var t=this._root.bounds,n=this._root.halfSize;return e[3]<=n&&e[0]>=t[0]-n&&e[0]<=t[0]+n&&e[1]>=t[1]-n&&e[1]<=t[1]+n&&e[2]>=t[2]-n&&e[2]<=t[2]+n}}]),e}(),x=function(){function e(){(0,a.Z)(this,e),this.bounds=(0,v.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}return(0,u.Z)(e,[{key:"init",value:function(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}},{key:"initFrom",value:function(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.depth;return this.node=(0,c.pC)(t)?t:e.createEmptyNode(),(0,c.pC)(n)&&(0,v.h)(n,this.bounds),this.halfSize=r,this.depth=i,this}},{key:"increaseHalfSize",value:function(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}},{key:"updateBoundsRadiusFromHalfSize",value:function(){this.bounds[3]=this.halfSize*C}},{key:"advance",value:function(t){var n=this.node.children[t];n||(n=e.createEmptyNode(),this.node.children[t]=n),this.node=n,this.halfSize/=2,this.depth++;var r=L[t];return this.bounds[0]+=r[0]*this.halfSize,this.bounds[1]+=r[1]*this.halfSize,this.bounds[2]+=r[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}},{key:"advanceTo",value:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!n)return t&&t(this,-1),!1;this.node.residents=null}var r=this._childIndex(e);t&&t(this,r),this.advance(r)}}},{key:"isLeaf",value:function(){return null!=this.node.residents}},{key:"isTerminalFor",value:function(e){return e[3]>this.halfSize/2}},{key:"_childIndex",value:function(e){var t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}}],[{key:"createEmptyNode",value:function(){return{children:[null,null,null,null,null,null,null,null],terminals:new T.Z({shrink:!0}),residents:new T.Z({shrink:!0})}}},{key:"acquire",value:function(){return e._pool.acquire()}},{key:"release",value:function(t){e._pool.release(t)}},{key:"clearPool",value:function(){e._pool.prune()}}]),e}();function M(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3])}function j(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3])}function B(e,t,n){n[0]=e[0]+t,n[1]=e[1]+t,n[2]=e[2]+t}function I(e,t,n,r){if(1===t){var i=n(e[0]);(0,v.h)(i,r)}else{V[0]=1/0,V[1]=1/0,V[2]=1/0,q[0]=-1/0,q[1]=-1/0,q[2]=-1/0;for(var o=0;o<t;o++){var a=n(e[o]);z(a[3])&&(M(V,a),j(q,a))}(0,f.h)(r,V,q,.5),r[3]=Math.max(q[0]-V[0],q[1]-V[1],q[2]-V[2])/2}}function w(e,t){for(var n,r=1/0,i=0;i<8;++i){var o=P(e,t,Z[i]);o<r&&(r=o,n=Z[i])}return n}function P(e,t,n){return t*(e[0]*n[0]+e[1]*n[1]+e[2]*n[2])}function z(e){return!isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}x._pool=new m.Z(x),function(e){var t;(t=e.DepthOrder||(e.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(S||(S={}));var L=[(0,l.f)(-1,-1,-1),(0,l.f)(1,-1,-1),(0,l.f)(-1,1,-1),(0,l.f)(1,1,-1),(0,l.f)(-1,-1,1),(0,l.f)(1,-1,1),(0,l.f)(-1,1,1),(0,l.f)(1,1,1)],Z=[(0,l.f)(-1,-1,-1),(0,l.f)(-1,-1,1),(0,l.f)(-1,1,-1),(0,l.f)(-1,1,1),(0,l.f)(1,-1,-1),(0,l.f)(1,-1,1),(0,l.f)(1,1,-1),(0,l.f)(1,1,1)],C=Math.sqrt(3),H=[null];var D=(0,v.c)(),G=(0,l.c)(),V=(0,l.c)(),q=(0,l.c)(),U=new T.Z,W=(0,v.c)(),K=(0,v.c)(),X=(0,v.c)(),Y=(0,v.c)(),J=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],Q=new T.Z,$=[0,0,0,0,0,0,0,0],ee=S,te=n(83715);function ne(e,t,n){var r=(0,v.c)(),i=(0,v.g)(r);return(0,f.z)(i,i,e,.5),(0,f.z)(i,i,t,.5),r[3]=(0,f.i)(i,e),(0,f.a)(i,i,n),r}var re=function(){function e(){(0,a.Z)(this,e),this._idToComponent=new Map,this._components=new ee((function(e){return e.bounds})),this._edges=new ee((function(e){return e.bounds})),this._tmpLineSegment=(0,_.Ue)(),this._tmpP1=(0,l.c)(),this._tmpP2=(0,l.c)(),this._tmpP3=(0,l.c)(),this.remoteClient=null}return(0,u.Z)(e,[{key:"fetchCandidates",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var r,o=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve();case 2:return(0,h.k_)(n),e.next=5,this._ensureEdgeLocations(t,n);case 5:return r=[],e.abrupt("return",(this._edges.forEachNeighbor((function(e){return o._addCandidates(t,e,r),r.length<1e3}),t.bounds),{result:{candidates:r}}));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_ensureEdgeLocations",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var o,a,u,s,h,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=[],this._components.forEachNeighbor((function(e){if((0,c.Wi)(e.info)){var t=e.id,n=e.uid;o.push({id:t,uid:n})}return!0}),t.bounds),o.length){e.next=3;break}return e.abrupt("return");case 3:return a={components:o},e.next=6,this.remoteClient.invoke("fetchAllEdgeLocations",a,(0,c.Pt)(n,{}));case 6:u=e.sent,s=(0,r.Z)(u.components);try{for(s.s();!(h=s.n()).done;)d=h.value,this._setFetchEdgeLocations(d)}catch(i){s.e(i)}finally{s.f()}case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"add",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new oe(t.id,t.bounds),e.abrupt("return",(this._idToComponent.set(n.id,n),this._components.add([n]),{result:{}}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=this._idToComponent.get(t.id))&&(r=[],this._edges.forEachNeighbor((function(e){return e.component===n&&r.push(e),!0}),n.bounds),this._edges.remove(r),this._components.remove([n]),this._idToComponent.delete(n.id)),e.abrupt("return",{result:{}});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_setFetchEdgeLocations",value:function(e){var t=this._idToComponent.get(e.id);if(!(0,c.Wi)(t)&&e.uid===t.uid){for(var n=te.n_.createView(e.locations),r=new Array(n.count),i=(0,l.c)(),o=(0,l.c)(),a=0;a<n.count;a++){n.position0.getVec(a,i),n.position1.getVec(a,o);var u=ne(i,o,e.origin),s=new ae(t,a,u);r[a]=s}this._edges.add(r);var h=e.objectIds,d=e.origin;t.info={locations:n,objectIds:h,origin:d}}}},{key:"_addCandidates",value:function(e,t,n){var r=t.component.info,i=r.origin,o=r.objectIds,a=r.locations,u=a.position0.getVec(t.index,this._tmpP1),s=a.position1.getVec(t.index,this._tmpP2);(0,f.a)(u,u,i),(0,f.a)(s,s,i);var c=o[a.componentIndex.get(t.index)];this._addEdgeCandidate(e,c,u,s,n),this._addVertexCandidate(e,c,u,n),this._addVertexCandidate(e,c,s,n)}},{key:"_addEdgeCandidate",value:function(e,t,n,r,i){if(e.types&p.r.EDGE){var o=(0,v.g)(e.bounds),a=(0,_.zk)(n,r,this._tmpLineSegment),u=(0,_.nF)(a,o,this._tmpP3);(0,v.m)(e.bounds,u)&&i.push({type:"edge",objectId:t,target:(0,l.a)(u),distance:(0,f.i)(o,u),start:(0,l.a)(n),end:(0,l.a)(r)})}}},{key:"_addVertexCandidate",value:function(e,t,n,r){if(e.types&p.r.VERTEX){var i=(0,v.g)(e.bounds);(0,v.m)(e.bounds,n)&&r.push({type:"vertex",objectId:t,target:(0,l.a)(n),distance:(0,f.i)(i,n)})}}}]),e}(),ie=re=(0,s._)([(0,d.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],re),oe=(0,u.Z)((function e(t,n){(0,a.Z)(this,e),this.id=t,this.bounds=n,this.info=null,this.uid=++e.uid}));oe.uid=0;var ae=(0,u.Z)((function e(t,n,r){(0,a.Z)(this,e),this.component=t,this.index=n,this.bounds=r}))}}]);
//# sourceMappingURL=113.c459c1dc.chunk.js.map