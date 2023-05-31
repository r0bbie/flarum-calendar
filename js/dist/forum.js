/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,n)=>{var r=n(288).default;function a(){"use strict";t.exports=a=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,n){return t[e]=n}}function m(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),s=new P(r||[]);return i(o,"_invoke",{value:C(t,n,s)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=m;var p={};function v(){}function h(){}function y(){}var b={};d(b,l,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(k([])));w&&w!==n&&o.call(w,l)&&(b=w);var x=y.prototype=v.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function n(a,i,s,l){var c=f(t[a],t,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==r(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,s,l)}),(function(t){n("throw",t,s,l)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,l)}))}l(c.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}})}function C(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=j(i,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=f(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:h,configurable:!0}),h.displayName=d(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,d(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},_(N.prototype),d(N.prototype,c,(function(){return this})),e.AsyncIterator=N,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new N(m(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),d(x,u,"Generator"),d(x,l,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,n)=>{var r=n(648)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";function t(t,e,n,r,a,o,i){try{var s=t[o](i),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(r,a)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(a,o){var i=e.apply(n,r);function s(e){t(i,a,o,s,l,"next",e)}function l(e){t(i,a,o,s,l,"throw",e)}s(void 0)}))}}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}n.r(r),n.d(r,{components:()=>vt,models:()=>ht,states:()=>yt,utils:()=>bt});var i=n(357),s=n.n(i);const l=flarum.core.compat["forum/app"];var c=n.n(l);const u=flarum.core.compat["common/components/Page"];var d=n.n(u);flarum.core.compat["common/utils/ItemList"];const f=flarum.core.compat["common/helpers/listItems"];var p=n.n(f);const v=flarum.core.compat["forum/components/IndexPage"];var h=n.n(v);function y(){return y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y.apply(this,arguments)}var b={fullcalendarCore:{js:"https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.7/index.global.min.js",loaded:function(){return"undefined"!=typeof FullCalendar}},fullcalendarLocales:{js:"https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.7/locales-all.global.min.js",loaded:function(){return"undefined"!=typeof FullCalendar&&FullCalendar.globalLocales.length>2}},fullcalendarDayGrid:{js:"https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.7/index.global.min.js",loaded:function(){return"undefined"!=typeof FullCalendar&&FullCalendar.globalPlugins.find((function(t){return"@fullcalendar/daygrid"===t.name}))}},fullcalendarInteraction:{js:"https://cdn.jsdelivr.net/npm/@fullcalendar/interaction@6.1.7/index.global.min.js",loaded:function(){return"undefined"!=typeof FullCalendar&&FullCalendar.globalPlugins.find((function(t){return"@fullcalendar/interaction"===t.name}))}},fullcalendarList:{js:"https://cdn.jsdelivr.net/npm/@fullcalendar/list@6.1.7/index.global.min.js",loaded:function(){return"undefined"!=typeof FullCalendar&&FullCalendar.globalPlugins.find((function(t){return"@fullcalendar/list"===t.name}))}},flatpickr:{css:"https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css",js:"https://cdn.jsdelivr.net/npm/flatpickr",loaded:function(){return void 0!==window.flatpickr}},flatpickrLocale:{js:function(t){return"https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/"+t+".js"},loaded:function(t){return void 0!==window.flatpickr.l10ns[t]}}};function g(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];if(Array.isArray(t))return Promise.all(t.map((function(t){return g(t)})));var o={};if("object"==typeof t&&!(o=y({},t)).loaded)return console.warn("dynamicallyLoadLib: No loaded function defined for lib",t),Promise.resolve();if("string"==typeof t){if(!b[t])return console.warn("dynamicallyLoadLib: lib not found",t),Promise.resolve();o=y({},b[t])}if(0===Object.keys(o).length)return console.warn("dynamicallyLoadLib: lib is not a string nor an valid object",t),Promise.resolve();var i=[];if((e=o).loaded.apply(e,r))i.push(Promise.resolve());else{var s;if(o.css&&(Array.isArray(o.css)?o.css:[o.css]).forEach((function(t){var e=document.createElement("link");e.rel="stylesheet",e.href=t,document.head.appendChild(e)})),o.js)"function"==typeof o.js&&(o.js=(s=o).js.apply(s,r)),(Array.isArray(o.js)?o.js:[o.js]).forEach((function(t){var e=document.createElement("script");e.src=t,document.head.appendChild(e)}));i.push(new Promise((function(t,e){var n=setInterval((function(){var e;(e=o).loaded.apply(e,r)&&(clearInterval(n),t())}),5)})))}return Promise.all(i)}const w=flarum.core.compat["common/components/Modal"];var x=n.n(w);const _=flarum.core.compat["common/components/Button"];var N=n.n(_);const C=flarum.core.compat["common/components/LinkButton"];var j=n.n(C);const E=flarum.core.compat["common/helpers/avatar"];var L=n.n(E);const P=flarum.core.compat["common/Component"];var k=n.n(P);const S=flarum.core.compat["common/components/Alert"];var O=n.n(S);const A=flarum.core.compat["common/components/Link"];var M=n.n(A);const I=flarum.core.compat["common/helpers/username"];var T=n.n(I);const F=flarum.core.compat["common/helpers/userOnline"];var B=n.n(F);const D=flarum.core.compat["common/utils/Stream"];var U=n.n(D);const G=flarum.core.compat["forum/states/ComposerState"];var V=n.n(G),Y=function(t){function e(){var e;return(e=t.call(this)||this).position=V().Position.NORMAL,e}return o(e,t),e}(V());const R=flarum.core.compat["common/components/TextEditor"];var $=n.n(R),H=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var r=n.prototype;return r.oninit=function(e){if(t.prototype.oninit.call(this,e),this.name=U()(""),this.user=U()(""),this.description=U()(""),this.event_start=U()(),this.event_end=U()(),this.attrs.event){var n=this.attrs.event;this.name(n.name()),this.description(n.description()),this.user(n.user()),this.event_start(n.event_start()),this.event_end(n.event_end()?n.event_end():n.event_start())}this.composerState=new Y},r.title=function(){return this.name()?c().translator.trans("flarum-calendar.forum.modal.title_edit"):c().translator.trans("flarum-calendar.forum.modal.title_create")},r.className=function(){return"EditEventsModal Modal--large"},r.content=function(){return[m("div",{className:"Modal-body"},m("div",{className:"Form-group"},m("label",{className:"label"},c().translator.trans("flarum-calendar.forum.modal.title_label")),m("input",{type:"text",name:"title",className:"FormControl",bidi:this.name})),m("div",{className:"Form-group"},m("label",{className:"label"},c().translator.trans("flarum-calendar.forum.modal.dates_label")),m("div",{className:"PollModal--date"},m("input",{style:"opacity: 1; color: inherit",className:"FormControl","data-input":!0,oncreate:this.initDatePicker.bind(this)}))),m("div",{class:"Form-group"},m("label",{className:"label"},c().translator.trans("flarum-calendar.forum.modal.description_label")),m("div",{className:"Composer"},m($(),{disabled:this.loading,value:this.description(),onchange:this.description,placeholder:c().translator.trans("flarum-calendar.forum.modal.description_placeholder"),composer:this.composerState}))),m("div",{className:"Form-group"},m(N(),{type:"submit",className:"Button Button--primary PollModal-SubmitButton",loading:this.loading},c().translator.trans("flarum-calendar.forum.modal.submit"))))]},r.initDatePicker=function(){var t=e(s().mark((function t(e){var n,r,a=this;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c().translator.getLocale(),t.next=3,g("flatpickr");case 3:return t.next=5,g("flatpickrLocale",n);case 5:r=flatpickr.l10ns[n],flatpickr(e.dom,{enableTime:!0,dateFormat:"Y-m-d H:i",mode:"range",locale:r,defaultDate:[flatpickr.parseDate(this.event_start(),"Y-m-d h:i K"),flatpickr.parseDate(this.event_end(),"Y-m-d h:i K")],inline:!0,onChange:function(t){a.event_start(t[0]),a.event_end(t[1])}}),m.redraw();case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),r.onsubmit=function(){var t=e(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),this.name()&&this.description()){t.next=4;break}return c().alerts.show(O(),{type:"error"},c().translator.trans("flarum-calendar.forum.modal.requirement_message")),t.abrupt("return");case 4:return this.attrs.event||(this.attrs.event=c().store.createRecord("events")),t.next=7,this.attrs.event.save({name:this.name(),description:this.description(),event_start:this.event_start(),event_end:this.event_end()});case 7:this.hide();case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),n}(x());const K=flarum.core.compat["common/helpers/fullTime"];var q=n.n(K),z=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e)},n.title=function(){return this.attrs.event.name()},n.className=function(){return"EventTeaser Modal--small"},n.view=function(){return m("div",null,m("p",{id:"eventdescription"}),!c().forum.attribute("webbinaro-calendar.hide_host")&&m("p",null,c().translator.trans("flarum-calendar.forum.event.hosted_by")," ",m(M(),{href:c().route.user(this.attrs.event.user())},B()(this.attrs.event.user()),T()(this.attrs.event.user()))),m("p",null,c().translator.trans("flarum-calendar.forum.event.starts")," ",q()(this.attrs.event.event_start())," ",m("br",null),c().translator.trans("flarum-calendar.forum.event.ends")," ",q()(this.attrs.event.event_end())),c().session.user&&(c().session.user.canModerateEvents||this.attrs.event.user.id===c().session.user.id)&&m("div",null,m(N(),{icon:"fas fa-edit",onclick:this.editLaunch.bind(this),className:"Button Button--icon Button--link"}),m(N(),{icon:"fas fa-trash-alt",onclick:this.deleteEvent.bind(this),className:"Button Button--icon Button--link"})))},n.oncreate=function(t){var e=document.getElementById("eventdescription");s9e.TextFormatter.preview(this.attrs.event.description(),e)},n.editLaunch=function(){c().modal.show(H,{event:this.attrs.event})},n.deleteEvent=function(){var t=this;confirm(c().translator.trans("flarum-calendar.forum.event.confirm_delete"))&&this.attrs.event.delete().then((function(){c().alerts.show(O(),{type:"success"},c().translator.trans("flarum-calendar.forum.event.deleted")),m.route.set(c().route("advevents")),t.attrs.modal&&t.attrs.modal.hide()}))},e}(k()),J=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e)},n.title=function(){return this.attrs.event.name()},n.view=function(){return this.alertAttrs&&(this.alertAttrs.dismissible=!1),[m("div",{className:"Modal modal-dialog "+this.className()},m("div",{className:"Modal-content"},this.constructor.isDismissible?m("div",{className:"Modal-close App-backControl"},m(N(),{icon:"fas fa-times",onclick:this.hide.bind(this),className:"Button Button--icon Button--link"})):"",m("form",{onsubmit:this.onsubmit.bind(this)},m("div",{className:"Modal-header"},m("div",null,m("h3",{className:"fa-pull-left App-titleControl App-titleControl--text",style:"margin-right:1em"},this.title())),m("div",{className:"fa-pull-right"},L()(this.attrs.event.user())),m("div",{style:"clear:both"})),this.alertAttrs&&m("div",{className:"Modal-alert"},m(O(),this.alertAttrs)),m("div",{className:"Modal-body"},m(z,{event:this.attrs.event,modal:this}),m("p",null,m(j(),{href:c().route.advevent(this.attrs.event)},c().translator.trans("flarum-calendar.forum.event.details")))))))]},e}(x());const Q=flarum.core.compat["forum/components/LogInModal"];var W=n.n(Q);function X(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var tt=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var r=n.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),c().history.push("advevents"),this.bodyClass="App--calendar",c().setTitle(c().translator.trans("flarum-calendar.forum.button.landing"))},r.view=function(){return m("div",{className:"IndexPage CalendarPage"},h().prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,p()(this.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m("div",{className:"IndexPage-toolbar"}),m("div",{id:"calendar"})))))},r.sidebarItems=function(){var t=h().prototype.sidebarItems();return c().session.user?c().session.user.canStartEvents()?t.setContent("newDiscussion",m(N(),{icon:"fas fa-calendar-plus",className:"Button Button--primary PollModal-SubmitButton",itemClassName:"App-primaryControl",onclick:this.openCreateModal.bind(this)},c().translator.trans("flarum-calendar.forum.button.create"))):t.remove("newDiscussion"):t.setContent("newDiscussion",m(N(),{icon:"fas fa-calendar-plus",className:"Button Button--primary PollModal-SubmitButton",itemClassName:"App-primaryControl",onclick:this.openCreateModal.bind(this)},c().translator.trans("flarum-calendar.forum.button.login"))),t},r.oncreate=function(t){this.renderCalendar(t)},r.onupdate=function(t){this.renderCalendar(t)},r.renderCalendar=function(){var t=e(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g("fullcalendarCore");case 2:return t.next=4,g(["fullcalendarLocales","fullcalendarDayGrid","fullcalendarInteraction","fullcalendarList"]);case 4:n=document.getElementById("calendar"),r=this.openCreateModal.bind(this),new FullCalendar.Calendar(n,{locale:c().translator.getLocale(),headerToolbar:{center:"dayGridMonth,listYear"},initialView:"dayGridMonth",eventClick:function(t){t.jsEvent.preventDefault();for(var e,n=X(this.events);!(e=n()).done;){var r=e.value;if(r.id()===t.event.extendedProps.eventId){c().modal.show(J,{event:r});break}}}.bind(this),dateClick:function(t){r(t)},events:function(t,e,n){var r=this;c().store.find("events",{start:t.start.toISOString(),end:t.end.toISOString(),sort:"event_start"}).then((function(t){r.events=t,e(t)}))}.bind(this),eventDataTransform:this.flarumToFullCalendarEvent}).render();case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),r.openCreateModal=function(t){c().session.user.canStartEvents()&&(null!=c().session.user?t.dateStr?c().modal.show(H,{withStart:t.dateStr}):c().modal.show(H):c().modal.show(W()))},r.flarumToFullCalendarEvent=function(t){return{title:t.name(),end:t.event_end(),start:t.event_start(),extendedProps:{description:t.description(),user:t.user(),eventId:t.id()},url:c().route("advevent",{id:t.id()})}},n}(d());const et=flarum.core.compat["forum/components/AffixedSidebar"];var nt=n.n(et);const rt=flarum.core.compat["common/components/LoadingIndicator"];var at=n.n(rt),ot=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.event=null;var n=c().preloadedApiDocument();if(n)this.show(n);else{var r=m.route.param("id");c().store.find("events",r).then(this.show.bind(this))}c().history.push("advevent"),this.bodyClass="App--event"},n.show=function(t){this.event=t,this.user=t.user(),c().setTitle(t.name()),m.redraw()},n.view=function(){return m("div",{className:"EventPage"},this.event?m("div",{className:"container"},m("div",{className:"sideNavContainer"},m(nt(),null,m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,p()(tt.prototype.sidebarItems().toArray())))),m("div",{className:"sideNavOffset IndexPage-results"},m("h2",null,this.event.name()),m(z,{event:this.event})))):m(at(),{className:"LoadingIndicator--block"}))},e}(d());const it=flarum.core.compat["common/extend"],st=flarum.core.compat["common/Model"];var lt=n.n(st),ct=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).name=lt().attribute("name"),e.description=lt().attribute("description"),e.createdAt=lt().attribute("createdAt",lt().transformDate),e.event_start=lt().attribute("event_start",lt().transformDate),e.event_end=lt().attribute("event_end",lt().transformDate),e.user=lt().hasOne("user"),e}return o(e,t),e}(lt());const ut=flarum.core.compat["forum/app.js"];var dt=n.n(ut);const mt=flarum.core.compat["forum/components/UserCard"];var ft=n.n(mt),pt=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.cardVisible=!1},n.view=function(){var t=this.attrs.post,e=this.attrs.user;if(!e)return m("div",{className:"PostUser"},m("h3",null,L()(e,{className:"PostUser-avatar"})," ",T()(e)));var n=null;return!t.isHidden()&&this.cardVisible&&(n=m(ft(),{user:e,className:"UserCard--popover",controlsButtonClassName:"Button Button--icon Button--flat"})),m("div",{className:"PostUser"},m("h3",null,m(M(),{href:c().route.user(e)},L()(e,{className:"PostUser-avatar"}),B()(e),T()(e))),m("ul",{className:"PostUser-badges badges"},p()(e.badges().toArray())),n)},n.oncreate=function(e){var n,r=this;t.prototype.oncreate.call(this,e),this.$().on("mouseover","h3 a, .UserCard",(function(){clearTimeout(n),n=setTimeout(r.showCard.bind(r),500)})).on("mouseout","h3 a, .UserCard",(function(){clearTimeout(n),n=setTimeout(r.hideCard.bind(r),250)}))},n.showCard=function(){var t=this;this.cardVisible=!0,m.redraw(),setTimeout((function(){return t.$(".UserCard").addClass("in")}))},n.hideCard=function(){var t=this;this.$(".UserCard").removeClass("in").one("transitionend webkitTransitionEnd oTransitionEnd",(function(){t.cardVisible=!1,m.redraw()}))},e}(k()),vt={CalendarPage:tt,EditEventModal:H,EventFragment:z,EventPage:ot,EventTeaser:J,EventUser:pt},ht={Event:ct},yt={CustomComposerState:Y},bt={dynamicallyLoadLib:g};dt().initializers.add("webbinaro-calendar",(function(){dt().routes.advevents={path:"/events",component:tt},dt().routes.advevent={path:"/events/:id",component:ot},dt().route.advevent=function(t){return dt().route("advevent",{id:t.id()})},dt().store.models.events=ct,dt().store.models.users.prototype.canModerateEvents=lt().attribute("canModerateEvents"),dt().store.models.users.prototype.canStartEvents=lt().attribute("canStartEvents"),dt().store.models.users.prototype.canViewEvents=lt().attribute("canViewEvents"),(0,it.extend)(h().prototype,"navItems",(function(t){return t.add("events",m(j(),{icon:"fas fa-calendar-alt",href:dt().route("advevents")},dt().translator.trans("flarum-calendar.forum.button.landing")),50),t}))}))})(),module.exports=r})();
//# sourceMappingURL=forum.js.map