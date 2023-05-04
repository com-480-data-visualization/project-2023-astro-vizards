"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8016],{51064:function(e,n,t){t.d(n,{Qn:function(){return y},iG:function(){return T}});var i,a=t(97326),o=t(60136),r=t(29388),d=t(98737),u=t(4942),s=t(43144),l=t(15671),f=t(22564),c=t(99779),m=(0,s.Z)((function e(){(0,l.Z)(this,e)}));m.instance=new c.vF("Etc/UTC"),function(e){e.TimeZoneNotRecognised="TimeZoneNotRecognised"}(i||(i={}));var v=(0,u.Z)({},i.TimeZoneNotRecognised,"Timezone identifier has not been recognised."),h=function(e){(0,o.Z)(t,e);var n=(0,r.Z)(t);function t(e,i){var o;return(0,l.Z)(this,t),(o=n.call(this,(0,f.Hy)(v[e],i))).declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace((0,a.Z)(o),t),o}return(0,s.Z)(t)}((0,d.Z)(Error)),T=function(){function e(n){(0,l.Z)(this,e),this._date=n,this.declaredRootClass="esri.arcade.arcadedate"}return(0,s.Z)(e,[{key:"changeTimeZone",value:function(n){var t=y(n);return e.dateTimeToArcadeDate(this._date.setZone(t))}},{key:"isSystem",get:function(){return"system"===this.timeZone||this.timeZone===e.systemTimeZoneCanonicalName}},{key:"equals",value:function(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}},{key:"isUnknownTimeZone",get:function(){return this._date.zone===m.instance}},{key:"isValid",get:function(){return this._date.isValid}},{key:"hour",get:function(){return this._date.hour}},{key:"second",get:function(){return this._date.second}},{key:"day",get:function(){return this._date.day}},{key:"dayOfWeekISO",get:function(){return this._date.weekday}},{key:"dayOfWeekJS",get:function(){var e=this._date.weekday;return e>6&&(e=0),e}},{key:"millisecond",get:function(){return this._date.millisecond}},{key:"monthISO",get:function(){return this._date.month}},{key:"weekISO",get:function(){return this._date.weekNumber}},{key:"yearISO",get:function(){return this._date.weekYear}},{key:"monthJS",get:function(){return this._date.month-1}},{key:"year",get:function(){return this._date.year}},{key:"minute",get:function(){return this._date.minute}},{key:"zone",get:function(){return this._date.zone}},{key:"timeZoneOffset",get:function(){return this.isUnknownTimeZone?0:this._date.offset}},{key:"timeZone",get:function(){if(this.isUnknownTimeZone)return"unknown";if("system"===this._date.zone.type)return"system";var e=this.zone;return"fixed"===e.type?0===e.fixed?"utc":e.formatOffset(0,"short"):e.name}},{key:"stringify",value:function(){return JSON.stringify(this.toJSDate())}},{key:"plus",value:function(n){return new e(this._date.plus(n))}},{key:"diff",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"milliseconds";return this._date.diff(e._date,n)[n]}},{key:"toISOString",value:function(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}},{key:"toFormat",value:function(e,n){return this._date.toFormat(e,n)}},{key:"toJSDate",value:function(){return this._date.toJSDate()}},{key:"toSQLString",value:function(){return"timestamp '"+this._date.toFormat("yyyy-LL-dd HH:mm:ss")+"'"}},{key:"toDateTime",value:function(){return this._date}},{key:"toNumber",value:function(){return this._date.toMillis()}},{key:"getTime",value:function(){return this._date.toMillis()}},{key:"toUTC",value:function(){return new e(this._date.toUTC())}},{key:"toLocal",value:function(){return new e(this._date.toLocal())}},{key:"toString",value:function(){return this.toISOString(!0)}}],[{key:"fromParts",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,u=arguments.length>7?arguments[7]:void 0;if(isNaN(n)||isNaN(t)||isNaN(i)||isNaN(a)||isNaN(o)||isNaN(r)||isNaN(d))return null;var s=0,l=c.ou.local(n,t).daysInMonth;i<1&&(s=i-1,i=1),i>l&&(s=i-l,i=l);var f=0;t>12?(f=t-12,t=12):t<1&&(f=t-1,t=1);var m=0;o>59?(m=o-59,o=59):o<0&&(m=o,o=0);var v=0;r>59?(v=r-59,r=59):r<0&&(v=r,r=0);var h=0;d>999?(h=d-999,d=999):d<0&&(h=d,d=0);var T=c.ou.fromObject({day:i,year:n,month:t,hour:a,minute:o,second:r,millisecond:d},{zone:y(u)});return 0!==f&&(T=T.plus({months:f})),0!==s&&(T=T.plus({days:s})),0!==m&&(T=T.plus({minutes:m})),0!==v&&(T=T.plus({seconds:v})),0!==h&&(T=T.plus({milliseconds:h})),new e(T)}},{key:"systemTimeZoneCanonicalName",get:function(){var e;return null!==(e=Intl.DateTimeFormat().resolvedOptions().timeZone)&&void 0!==e?e:"system"}},{key:"arcadeDateAndZoneToArcadeDate",value:function(n,t){var i=y(t);return n.isUnknownTimeZone||i===m.instance?e.fromParts(n.year,n.monthJS+1,n.day,n.hour,n.minute,n.second,n.millisecond,i):new e(n._date.setZone(t))}},{key:"dateJSToArcadeDate",value:function(n){return new e(c.ou.fromJSDate(n,{zone:"system"}))}},{key:"dateJSAndZoneToArcadeDate",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"system";return new e(c.ou.fromJSDate(n,{zone:t}))}},{key:"unknownEpochToArcadeDate",value:function(n){return new e(c.ou.fromMillis(n,{zone:m.instance}))}},{key:"unknownDateJSToArcadeDate",value:function(n){return new e(c.ou.fromMillis(n.getTime(),{zone:m.instance}))}},{key:"epochToArcadeDate",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"system";return new e(c.ou.fromMillis(n,{zone:t}))}},{key:"dateTimeToArcadeDate",value:function(n){return new e(n)}},{key:"dateTimeAndZoneToArcadeDate",value:function(n,t){var i=y(t);return n.zone===m.instance||i===m.instance?e.fromParts(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond,i):new e(n.setZone(i))}},{key:"nowToArcadeDate",value:function(n){return new e(c.ou.fromJSDate(new Date,{zone:n}))}},{key:"nowUTCToArcadeDate",value:function(){return new e(c.ou.utc())}}]),e}();function y(e){if(e instanceof c.ld)return e;if("system"===e.toLowerCase())return"system";if("utc"===e.toLowerCase())return"utc";if("unknown"===e.toLowerCase())return m.instance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){var n=c.Qf.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e);if(n)return n}var t=c.vF.create(e);if(!t.isValid)throw new h(i.TimeZoneNotRecognised);return t}},18016:function(e,n,t){t.d(n,{nu:function(){return u}});var i=t(15671),a=t(43144),o=(t(51064),t(52410)),r=(t(16354),t(99779),t(44218));function d(e){return null!==e&&void 0!==e&&e.timeZoneIANA?null===e||void 0===e?void 0:e.timeZoneIANA:null!==e&&void 0!==e&&e.timeZone?(0,r.G)(e,""):""}var u=function(){function e(){(0,i.Z)(this,e),this.dateTimeReferenceMetaData=null,this._fieldTimeZoneIndex={},this._fieldIndex=null,this._ianaPreferred=null,this._ianaTimeInfo=null,this._ianaEditFields=null,this._ianaLayerDateFields=null}return(0,a.Z)(e,[{key:"fieldTimeZone",value:function(e){var n,t,i,a,o,r,d,u,s,l,f,c,m,v,h,T,y,k,_,w,I,D,Z,g=null===(n=this._fieldIndex)||void 0===n?void 0:n.get(e);if(!g)return null;if("date"!==g.type&&"esriFieldTypeDate"!==g.type)return null;var R=this._fieldTimeZoneIndex[g.name];if(void 0!==R)return R;for(var F=0,N=[{field:null===(t=this.dateTimeReferenceMetaData)||void 0===t||null===(i=t.editFieldsInfo)||void 0===i?void 0:i.creationDateField,timeReference:null===(a=this.dateTimeReferenceMetaData)||void 0===a||null===(o=a.editFieldsInfo)||void 0===o?void 0:o.dateFieldsTimeReference,isunknown:!0===(null===(r=this.dateTimeReferenceMetaData)||void 0===r?void 0:r.datesInUnknownTimezone)},{field:null===(d=this.dateTimeReferenceMetaData)||void 0===d||null===(u=d.editFieldsInfo)||void 0===u?void 0:u.editDateField,timeReference:null===(s=this.dateTimeReferenceMetaData)||void 0===s||null===(l=s.editFieldsInfo)||void 0===l?void 0:l.dateFieldsTimeReference,isunknown:!0===(null===(f=this.dateTimeReferenceMetaData)||void 0===f?void 0:f.datesInUnknownTimezone)},{field:null===(c=this.dateTimeReferenceMetaData)||void 0===c||null===(m=c.timeInfo)||void 0===m?void 0:m.startTimeField,timeReference:null===(v=this.dateTimeReferenceMetaData)||void 0===v||null===(h=v.timeInfo)||void 0===h?void 0:h.timeReference,isunknown:!0===(null===(T=this.dateTimeReferenceMetaData)||void 0===T?void 0:T.datesInUnknownTimezone)},{field:null===(y=this.dateTimeReferenceMetaData)||void 0===y||null===(k=y.timeInfo)||void 0===k?void 0:k.endTimeField,timeReference:null===(_=this.dateTimeReferenceMetaData)||void 0===_||null===(w=_.timeInfo)||void 0===w?void 0:w.timeReference,isunknown:!0===(null===(I=this.dateTimeReferenceMetaData)||void 0===I?void 0:I.datesInUnknownTimezone)}];F<N.length;F++){var S=N[F];if(S.field===g.name){var p=this.convertToIANA(S.timeReference,S.isunknown);return this._fieldTimeZoneIndex[g.name]=p,p}}var A=this.convertToIANA(null===(D=this.dateTimeReferenceMetaData)||void 0===D?void 0:D.dateFieldsTimeReference,null===(Z=this.dateTimeReferenceMetaData)||void 0===Z?void 0:Z.datesInUnknownTimezone);return this._fieldTimeZoneIndex[g.name]=A,A}},{key:"convertToIANA",value:function(e,n){return n?"unknown":d(e)}},{key:"layerPreferredTimeZone",get:function(){var e,n;if(null!==this._ianaPreferred)return this._ianaPreferred;this._ianaPreferred="";var t=null===(e=this.dateTimeReferenceMetaData)||void 0===e?void 0:e.preferredTimeReference;return this._ianaPreferred=this.convertToIANA(t,!0===(null===(n=this.dateTimeReferenceMetaData)||void 0===n?void 0:n.datesInUnknownTimezone)),this._ianaPreferred}},{key:"layerTimeInfoTimeZone",get:function(){var e,n;if(null!==this._ianaTimeInfo)return this._ianaTimeInfo;this._ianaTimeInfo="";var t=null===(e=this.dateTimeReferenceMetaData)||void 0===e||null===(n=e.timeInfo)||void 0===n?void 0:n.timeReference;return this._ianaTimeInfo=this.convertToIANA(t,!1),this._ianaTimeInfo}},{key:"layerEditFieldsTimeZone",get:function(){var e,n,t;if(null!==this._ianaEditFields)return this._ianaEditFields;this._ianaEditFields="";var i=null===(e=this.dateTimeReferenceMetaData)||void 0===e||null===(n=e.editFieldsInfo)||void 0===n?void 0:n.dateFieldsTimeReference;return this._ianaEditFields=this.convertToIANA(i,null===(t=this.dateTimeReferenceMetaData)||void 0===t?void 0:t.datesInUnknownTimezone),this._ianaEditFields}},{key:"layerDateFieldsTimeZone",get:function(){var e,n;if(null!==this._ianaLayerDateFields)return this._ianaLayerDateFields;this._ianaLayerDateFields="";var t=null===(e=this.dateTimeReferenceMetaData)||void 0===e?void 0:e.dateFieldsTimeReference;return this._ianaLayerDateFields=this.convertToIANA(t,!0===(null===(n=this.dateTimeReferenceMetaData)||void 0===n?void 0:n.datesInUnknownTimezone)),this._ianaLayerDateFields}}],[{key:"create",value:function(n,t){var i=new e;return i.dateTimeReferenceMetaData=t,i._fieldIndex=n instanceof o.Z?n:new o.Z(n),i}},{key:"createFromLayer",value:function(n){var t,i,a,o,r,d,u,s;if(!n)return null;if(!n.fieldsIndex)return!n.declaredClass&&n.fields?e.create(n.fields,n):null;var l=new e;return l._fieldIndex=n.fieldsIndex,l.dateTimeReferenceMetaData={timeInfo:null!==(t=null===n||void 0===n||null===(i=n.timeInfo)||void 0===i?void 0:i.toJSON())&&void 0!==t?t:null,editFieldsInfo:null!==(a=null===n||void 0===n||null===(o=n.editFieldsInfo)||void 0===o?void 0:o.toJSON())&&void 0!==a?a:null,dateFieldsTimeReference:null!==(r=null===n||void 0===n||null===(d=n.dateFieldsTimeReference)||void 0===d?void 0:d.toJSON())&&void 0!==r?r:null,preferredTimeReference:null!==(u=null===n||void 0===n||null===(s=n.preferredTimeReference)||void 0===s?void 0:s.toJSON())&&void 0!==u?u:null,datesInUnknownTimezone:!0===(null===n||void 0===n?void 0:n.datesInUnknownTimezone)},l}}]),e}()}}]);
//# sourceMappingURL=8016.f6dcb25a.chunk.js.map