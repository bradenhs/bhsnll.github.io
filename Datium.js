"format global";!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in m||(m[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==n.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=m[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(n.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=m[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return r[a]||(r[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b});c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],n=m[k],o=r[k];o?j=o.exports:n&&!n.declarative?j=n.esModule:n?(h(n),o=n.module,j=o.exports):j=l(k),o&&o.importers?(o.importers.push(c),c.dependencies.push(o)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=m[a];if(c)c.declarative?k(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=l(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b["default"]:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=m[g];h&&j(h)}b.evaluated=!0;var k=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);if(k&&(d.exports=k),c=d.exports,c&&c.__esModule)b.esModule=c;else{if(b.esModule={},("object"==typeof c||"function"==typeof c)&&c!==a)if(o){var l;for(var n in c)(l=Object.getOwnPropertyDescriptor(c,n))&&q(b.esModule,n,l)}else{var p=c&&c.hasOwnProperty;for(var n in c)(!p||c.hasOwnProperty(n))&&(b.esModule[n]=c[n])}b.esModule["default"]=c,q(b.esModule,"__useDefault",{value:!0})}}}function k(b,c){var d=m[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==n.call(c,g)&&(m[g]?k(g,c):l(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function l(a){if(s[a])return s[a];if("@node/"==a.substr(0,6))return require(a.substr(6));var b=m[a];if(!b)throw"Module "+a+" not present.";return f(a),k(a,[]),m[a]=void 0,b.declarative&&q(b.module.exports,"__esModule",{value:!0}),s[a]=b.declarative?b.module.exports:b.esModule}var m={},n=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},o=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(p){o=!1}var q;!function(){try{Object.defineProperty({},"a",{})&&(q=Object.defineProperty)}catch(a){q=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(d){}}}}();var r={},s={};return function(a,d,e){return function(f){f(function(f){var g={_nodeRequire:"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,register:b,registerDynamic:c,get:l,set:function(a,b){s[a]=b},newModule:function(a){return a}};g.set("@empty",{});for(var h=0;h<d.length;h++)(function(a,b){b&&b.__esModule?g.register(a,[],function(a){return{setters:[],execute:function(){for(var c in b)"__esModule"==c||"object"==typeof c&&c+""=="Module"||a(c,b[c])}}}):g.registerDynamic(a,[],!1,function(){return b})})(d[h],arguments[h]);e(g);var i=l(a[0]);if(a.length>1)for(var h=1;h<a.length;h++)l(a[h]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)(["1"],[],function(a){a.registerDynamic("2",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports="datium-container{font-family:Roboto,Arial,Helvetica,sans-serif;display:block;position:absolute;overflow:hidden;border-radius:2px;width:300px;background:#fff;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)}datium-container datium-header{background:#019587;display:block;height:90px;width:100%;font-weight:bold;color:#fff;position:relative}datium-container datium-next-view,datium-container datium-previous-view{position:absolute;width:40px;height:90px;bottom:0}datium-container datium-next-view:after,datium-container datium-previous-view:after,datium-container datium-next-view:before,datium-container datium-previous-view:before{content:'';position:absolute;background:#fff;width:3px;height:8px;display:block;top:56px}datium-container datium-next-view:before,datium-container datium-previous-view:before{margin-top:-4px}datium-container datium-next-view{right:0}datium-container datium-next-view:after,datium-container datium-next-view:before{left:50%;margin-left:-2px}datium-container datium-next-view:after{transform:rotate(45deg)}datium-container datium-next-view:before{transform:rotate(-45deg)}datium-container datium-previous-view{left:0}datium-container datium-previous-view:after,datium-container datium-previous-view:before{right:50%;margin-right:-2px}datium-container datium-previous-view:after{transform:rotate(-45deg)}datium-container datium-previous-view:before{transform:rotate(45deg)}datium-container datium-span-labels{overflow:hidden;left:40px;right:40px;top:0;bottom:0;display:block;position:absolute}datium-container datium-span-label{display:block;position:absolute;width:100%;overflow:hidden;white-space:nowrap;transition:all ease .2s;transform-origin:0 0;font-size:18pt}datium-container datium-span-label.datium-top{transform:translateY(22px) scale(.66);opacity:.6;width:151%}datium-container datium-span-label.datium-hidden-top{transform:translateY(10px) scale(.5);opacity:0}datium-container datium-span-label datium-extended-label-text{opacity:1;transition:all ease .2s}datium-container datium-span-label.datium-bottom>datium-extended-label-text,datium-container datium-span-label.datium-hidden-bottom>datium-extended-label-text{opacity:0}datium-container datium-span-label.datium-bottom{transform:translateY(44px) scale(1)}datium-container datium-span-label.datium-bottom>datium-zoom-out-icon{opacity:0}datium-container datium-span-label.datium-hidden-bottom{transform:translateY(90px) scale(1.2)}datium-container datium-zoom-out-icon{position:relative;width:16px;height:16px;margin-left:4px;display:inline-block;bottom:1px}datium-container datium-zoom-out-icon:before{content:'';border:2px solid #fff;position:absolute;height:10px;width:10px;overflow:hidden;border-radius:7px}datium-container datium-zoom-out-icon:after{content:'';position:absolute;width:3px;height:7px;transform:rotate(-45deg);background:#fff;transform-origin:1.5px 7px;bottom:0;right:-1.5px}datium-container datium-zoom-out-icon datium-zoom-out-minus-sign{position:absolute;width:6px;height:2px;background:#fff;z-index:5;top:6px;left:4px;display:block}datium-day-element{width:14.2857143%;display:inline-block;line-height:40px;text-align:center;position:relative;color:#888;font-size:12pt}datium-day-element.datium-day-inactive,datium-day-element.datium-weekday-label{opacity:.6}datium-day-element.datium-weekday-label{font-weight:bold}datium-month-element,datium-year-element{display:inline-block;width:24%;line-height:60px;text-align:center;color:#888}datium-clock{position:absolute;left:50%;top:50%;margin-left:-100px;margin-top:-100px;display:block;width:200px;height:200px;border-radius:100px;box-shadow:inset 0 0 1px 0 #888}datium-clock datium-clock-middle{position:absolute;width:36px;text-align:center;font-size:12px;font-weight:bold;color:#019587;border-radius:20px;text-transform:uppercase;top:50%;left:50%;margin-left:-20px;margin-top:-20px;border:2px solid white;z-index:1;background:#fff;line-height:36px;box-shadow:inset 0 0 0 3px #019587}datium-clock datium-tick{display:block;position:absolute;width:0;height:50%;top:50%;left:50%;transform-origin:0 0}datium-clock datium-tick-mark{content:'';position:absolute;width:2px;left:-1px;height:6px;opacity:.3;background:#888;bottom:-3px}datium-clock datium-tick-label{position:absolute;bottom:-30px;width:50px;left:-25px;text-align:center;font-size:12px;line-height:50px;opacity:.8;color:#888;margin-bottom:-20px;border-radius:25px}datium-clock datium-time-drag{position:absolute;left:50%;top:50%;height:100px;width:0;transform-origin:0 0;z-index:1;transform:rotate(180deg);transition:.4s ease all}datium-clock datium-time-drag.datium-is-dragging{transition:none}datium-clock datium-time-drag:before{content:'';position:absolute;bottom:-8px;left:-9px;width:14px;height:14px;border-radius:100%;border:2px solid #019587;box-shadow:inset 0 0 0 2px #fff;background:#019587}datium-clock datium-drag-selection-area{position:absolute;width:50px;height:50px;border-radius:30px;bottom:-25px;left:-25px;z-index:1}datium-clock datium-time-drag-arrows{position:absolute;width:22px;left:-11px;bottom:0}datium-clock datium-time-drag-arrows:before{position:absolute;content:'';width:0;height:0;border:4px solid transparent;border-right-color:#019587;top:-5px;left:-8px}datium-clock datium-time-drag-arrows:after{position:absolute;content:'';width:0;height:0;border:4px solid transparent;border-left-color:#019587;top:-5px;right:-8px}datium-clock datium-pick{position:absolute;color:#019587;text-transform:uppercase;left:0;right:0;text-align:center;font-weight:bold;top:50px;font-size:12pt;text-shadow:-2px -2px 0 #fff,2px -2px 0 #fff,-2px 2px 0 #fff,2px 2px 0 #fff;z-index:1}datium-clock datium-hour-hand{display:block;position:absolute;width:0;height:0;border-radius:40%;top:50%;left:50%;margin-left:-3px;margin-top:-3px;transform-origin:3px 3px;transform:rotate(240deg);border-top:50px solid #019587;border-left:3px solid transparent;border-right:3px solid transparent;transition:all ease .4s}datium-clock datium-time-drag.datium-is-dragging datium-time-bubble{opacity:1}datium-clock datium-time-bubble{position:absolute;width:56px;height:30px;bottom:26px;left:-28px;text-align:center;line-height:30px;border-radius:2px;font-size:12pt;font-weight:bold;background:#019587;color:#fff;transform-origin:28px 56px;pointer-events:none;opacity:0;transition:.4s ease opacity}datium-clock datium-time-bubble:after{content:'';position:absolute;border:10px solid transparent;border-top-color:#019587;left:50%;margin-left:-10px;top:29px}datium-container,datium-container *{-webkit-user-select:none;cursor:default}datium-container{border:2px solid red}datium-all-pickers-container{display:block;position:relative;overflow:hidden;transition:.4s ease all}datium-picker-container{position:absolute;display:block;left:0;right:0;bottom:0;top:0;transition:.4s ease all;transform-origin:150px 150px}datium-picker-container.datium-transition-in{opacity:0;transform:scale(.8)}datium-picker-container.datium-transition-out{opacity:0;transform:scale(1.2)}datium-picker-container.datium-transition-left{transform:translateX(-100%)}datium-picker-container.datium-transition-right{transform:translateX(100%)}datium-container{font-family:Roboto,Arial,Helvetica,sans-serif;margin-top:20px;display:block;width:300px;max-width:100%;position:absolute;background:#fff;overflow:hidden;border-radius:2px;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);padding-bottom:10px}",d.define=e,c.exports}),a.register("3",["4"],function(a){var b,c,d=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};return{setters:[function(a){b=a}],execute:function(){c=function(a){function b(b,c){a.call(this,b,c,"datium-second-selectable"),this.viewManager=c}return d(b,a),b.prototype.populatePicker=function(a,b){},b}(b.Picker),a("default",c)}}}),a.register("5",["4"],function(a){var b,c,d=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};return{setters:[function(a){b=a}],execute:function(){c=function(a){function b(b,c){a.call(this,b,c,"datium-minute-selectable"),this.viewManager=c}return d(b,a),b.prototype.populatePicker=function(a,b){},b}(b.Picker),a("default",c)}}}),a.registerDynamic("6",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports='<datium-clock>\r\n    <datium-clock-middle class="datium-clock-middle"></datium-clock-middle>\r\n    <datium-pick></datium-pick>\r\n    <datium-hour-hand></datium-hour-hand>\r\n    <datium-time-drag class="datium-time-drag">\r\n        <datium-drag-selection-area></datium-drag-selection-area>\r\n        <datium-time-drag-arrows></datium-time-drag-arrows>\r\n        <datium-time-bubble></datium-time-bubble>\r\n    </datium-time-drag>\r\n</datium-clock>',d.define=e,c.exports}),a.register("7",["4","6","8"],function(a){var b,c,d,e,f=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};return{setters:[function(a){b=a},function(a){c=a},function(a){d=a}],execute:function(){e=function(a){function b(b,c){var e=this;a.call(this,b,c,"datium-hour-selectable"),this.viewManager=c,this.height=330,d.onDrag(b,"datium-time-drag",{dragStart:function(a){e.dragStart(a)},dragMove:function(a){e.dragMove(a)},dragEnd:function(a){e.dragEnd(a)}}),d.onTap(b,"datium-clock-middle",function(a){e.switchMeridiem()})}return f(b,a),b.prototype.switchMeridiem=function(){this.meridiem="am"===this.meridiem?"pm":"am",this.clockMiddleElement.innerText=this.meridiem,this.updateTime(this.time);for(var a in this.tickLabels){var b=this.tickLabels[a],c=parseInt(b.getAttribute("datium-data"));c="am"===this.meridiem?c-12:c+12,b.setAttribute("datium-data",c.toString())}},b.prototype.dragStart=function(a){this.timeDragElement.classList.add("datium-is-dragging"),this.dragMove(a)},b.prototype.dragMove=function(a){var b=this.clockElement.getBoundingClientRect().left+100,c=this.clockElement.getBoundingClientRect().top+100,d=void 0===a.clientX?a.touches[0].clientX:a.clientX,e=void 0===a.clientY?a.touches[0].clientY:a.clientY,f=b-d,g=c-e,h=180-180*Math.atan2(f,g)/Math.PI;this.rotation=this.normalizeRotation(h),this.setTimeDragRotation(this.rotation);var i=this.time;this.time=this.rotationToTime(this.rotation),(11===i&&12===this.time||12===i&&11===this.time)&&this.switchMeridiem(),this.updateTime(this.time),this.setHourRotationFromTime(this.time);var j=-this.rotation;this.timeBubbleElement.innerText=this.time.toString()+this.meridiem,this.timeBubbleElement.style.transform="rotate("+j+"deg)"},b.prototype.setTimeDragRotation=function(a){this.timeDragElement.style.transform="rotate("+a+"deg)"},b.prototype.setHourRotationFromTime=function(a){var b=this.timeToRotation(a);this.hourHandElement.style.transform="rotate("+b+"deg)"},b.prototype.rotationToTime=function(a){var b=a/30-6;for(b=Math.round(0>b?b+12:b);0>b;)b+=12;for(;b>12;)b-=12;return 0===b?12:b},b.prototype.timeToRotation=function(a){return this.normalizeRotation(30*a+180)},b.prototype.updateTime=function(a){this.currentPickElement.innerText=a.toString()+this.meridiem},b.prototype.normalizeRotation=function(a){for(;a+180<this.rotation;)a+=360;for(;a-180>this.rotation;)a-=360;return a},b.prototype.dragEnd=function(a){this.rotation=this.timeToRotation(this.time),this.setTimeDragRotation(this.rotation),this.timeDragElement.classList.remove("datium-is-dragging");var b="pm"===this.meridiem?this.time+12:this.time;(12===b||24===b)&&(b-=12),this.viewManager.zoomTo(b)},b.prototype.populatePicker=function(a,b){a.innerHTML=c["default"],this.meridiem=b.getHours()<12?"am":"pm",this.clockElement=a.querySelector("datium-clock"),this.currentPickElement=a.querySelector("datium-pick"),this.clockMiddleElement=a.querySelector("datium-clock-middle"),this.hourHandElement=a.querySelector("datium-hour-hand"),this.timeBubbleElement=a.querySelector("datium-time-bubble"),this.clockMiddleElement.innerText=this.meridiem,this.tickLabels=[];for(var d=1;12>=d;d++){var e=30*(d-6),f=d.toString(),g=d;"pm"===this.meridiem&&(g+=12),12===d&&(g-=12),this.clockElement.appendChild(this.mkTick(e,f,g))}this.timeDragElement=a.querySelector(".datium-time-drag"),this.rotation=180,this.time=b.getHours()>12?b.getHours()-12:b.getHours(),0===this.time&&(this.time=12),this.setTimeDragRotation(this.timeToRotation(this.time)),this.updateTime(this.time),this.setHourRotationFromTime(this.time)},b.prototype.mkTick=function(a,b,c){var d=document.createElement("datium-tick"),e=document.createElement("datium-tick-label");return e.innerText=b,e.style.transform="rotate("+-a+"deg)",e.setAttribute("datium-data",c.toString()),e.className="datium-hour-selectable",d.appendChild(document.createElement("datium-tick-mark")),d.appendChild(e),d.style.transform="rotate("+a+"deg)",this.tickLabels.push(e),d},b}(b.Picker),a("default",e)}}}),a.register("9",["4"],function(a){var b,c,d=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};return{setters:[function(a){b=a}],execute:function(){c=function(a){function b(b,c){a.call(this,b,c,"datium-day-selectable"),this.days=["Su","Mo","Tu","We","Th","Fr","Sa"]}return d(b,a),b.prototype.populatePicker=function(a,b){var c=new Date(b.valueOf());c.setDate(1),c.setDate(1-c.getDay());for(var d=0;7>d;d++)a.appendChild(this.mkDayLabel(d));var e=1;do{for(var d=0;7>d;d++)a.appendChild(this.mkDay(c,c.getMonth()!==b.getMonth())),c.setDate(1+c.getDate());e++}while(c.getMonth()===b.getMonth());this.height=40*e},b.prototype.mkDayLabel=function(a){var b=document.createElement("datium-day-element");return b.innerText=this.days[a],b.className="datium-weekday-label",b},b.prototype.mkDay=function(a,b){var c=document.createElement("datium-day-element");return c.innerText=a.getDate().toString(),c.setAttribute("datium-data",a.getDate().toString()),b?c.className="datium-day-inactive":c.className="datium-day-selectable",c},b}(b.Picker),a("default",c)}}}),a.registerDynamic("a",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports='<datium-month-element datium-data="0" class="datium-month-selectable">Jan</datium-month-element>\r\n<datium-month-element datium-data="1" class="datium-month-selectable">Feb</datium-month-element>\r\n<datium-month-element datium-data="2" class="datium-month-selectable">Mar</datium-month-element>\r\n<datium-month-element datium-data="3" class="datium-month-selectable">Apr</datium-month-element>\r\n<datium-month-element datium-data="4" class="datium-month-selectable">May</datium-month-element>\r\n<datium-month-element datium-data="5" class="datium-month-selectable">Jun</datium-month-element>\r\n<datium-month-element datium-data="6" class="datium-month-selectable">Jul</datium-month-element>\r\n<datium-month-element datium-data="7" class="datium-month-selectable">Aug</datium-month-element>\r\n<datium-month-element datium-data="8" class="datium-month-selectable">Sep</datium-month-element>\r\n<datium-month-element datium-data="9" class="datium-month-selectable">Oct</datium-month-element>\r\n<datium-month-element datium-data="10" class="datium-month-selectable">Nov</datium-month-element>\r\n<datium-month-element datium-data="11" class="datium-month-selectable">Dec</datium-month-element>',d.define=e,c.exports}),a.register("b",["4","a"],function(a){var b,c,d,e=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(a){function b(b,c){a.call(this,b,c,"datium-month-selectable"),this.viewManager=c,this.height=180}return e(b,a),b.prototype.populatePicker=function(a){a.innerHTML=c["default"]},b}(b.Picker),a("default",d)}}}),a.register("4",["8"],function(a){var b,c,d;return{setters:[function(a){b=a}],execute:function(){!function(a){a[a.SCROLL_LEFT=0]="SCROLL_LEFT",a[a.SCROLL_RIGHT=1]="SCROLL_RIGHT",a[a.ZOOM_IN=2]="ZOOM_IN",a[a.ZOOM_OUT=3]="ZOOM_OUT",a[a.NONE=4]="NONE"}(c||(c={})),a("Transition",c),d=function(){function a(a,c,d){this.height=0,this.container=a,b.onTap(this.container,d,function(a){var b=parseInt(a.srcElement.getAttribute("datium-data"));c.zoomTo(b)})}return a.prototype.create=function(a,b){var d=this;this.picker=document.createElement("datium-picker-container"),this.populatePicker(this.picker,b),this.picker.className=this.getTransitionClass(a),setTimeout(function(){d.picker.className=d.getTransitionClass(c.NONE)},10),this.container.appendChild(this.picker)},a.prototype.populatePicker=function(a,b){},a.prototype.getHeight=function(){return this.height},a.prototype.getTransitionClass=function(a){switch(a){case c.SCROLL_LEFT:return"datium-transition-left";case c.SCROLL_RIGHT:return"datium-transition-right";case c.ZOOM_IN:return"datium-transition-in";case c.ZOOM_OUT:return"datium-transition-out";default:return""}},a.prototype.destroy=function(a){this.picker.className=this.getTransitionClass(a),setTimeout(function(a){a.remove(),a=null},400,this.picker)},a}(),a("Picker",d)}}}),a.register("c",["4"],function(a){var b,c,d=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};return{setters:[function(a){b=a}],execute:function(){c=function(a){function b(b,c){a.call(this,b,c,"datium-year-selectable"),this.viewManager=c,this.height=180}return d(b,a),b.prototype.populatePicker=function(a,b){for(var c=b.getFullYear();c%10!==0;)c--;for(var d=c;c+10>=d;d++){var e=document.createElement("datium-year-element");e.className="datium-year-selectable",e.innerText=d.toString(),e.setAttribute("datium-data",d.toString()),a.appendChild(e)}},b}(b.Picker),a("default",c)}}}),a.register("d",[],function(a){var b,c;return{setters:[],execute:function(){!function(a){a[a.SECOND=0]="SECOND",a[a.MINUTE=1]="MINUTE",a[a.HOUR=2]="HOUR",a[a.DAY=3]="DAY",a[a.MONTH=4]="MONTH",a[a.YEAR=5]="YEAR",a[a.DECADE=6]="DECADE"}(b||(b={})),a("ViewLevel",b),c=function(){function a(){this.observers=[],this.date=new Date,this.level=b.DAY,this.lastDate=this.date,this.lastLevel=this.level}return a.prototype.registerObserver=function(a){a(this.date,this.level,this.lastDate,this.lastLevel),this.observers.push(a)},a.prototype.notifyObservers=function(){for(var a in this.observers)this.observers[a](this.date,this.level,this.lastDate,this.lastLevel)},a.prototype.goToView=function(a,c){switch(this.lastDate=new Date(this.date.valueOf()),this.lastLevel=this.level,this.level=c,c){case b.DECADE:case b.YEAR:this.date.setFullYear(a);break;case b.MONTH:this.date.setMonth(a);break;case b.DAY:this.date.setDate(a);break;case b.HOUR:this.date.setHours(a);break;case b.MINUTE:this.date.setMinutes(a);break;default:this.date.setSeconds(a)}this.notifyObservers()},a.prototype.next=function(){var a=this.level===b.DECADE?10:1,c=this.getValue(this.level)+a;this.goToView(c,this.level)},a.prototype.previous=function(){var a=this.level===b.DECADE?10:1,c=this.getValue(this.level)-a;this.goToView(c,this.level)},a.prototype.zoomOut=function(){var a=this.level===b.DECADE?this.level:this.level+1,c=this.getValue(a);this.goToView(c,a)},a.prototype.zoomTo=function(a){var c=this.level===b.MINUTE?this.level:this.level-1;this.goToView(a,c)},a.prototype.getValue=function(a){switch(a){case b.SECOND:return this.date.getSeconds();case b.MINUTE:return this.date.getMinutes();case b.HOUR:return this.date.getHours();case b.DAY:return this.date.getDate();case b.MONTH:return this.date.getMonth();default:return this.date.getFullYear()}},a}(),a("default",c)}}}),a.register("8",[],function(a){function b(a,b,c){return function(d){d.preventDefault();for(var e=d.srcElement;!e.isEqualNode(a);){if(e.classList.contains(b))return void c(d);e=e.parentElement}}}function c(a,c,d,e){var f=[];for(var g in a){var h=a[g],i=b(c,d,e);f.push({reference:i,event:h}),c.addEventListener(h,i)}return f}function d(a,b,c){var d=[];for(var e in a){var f=a[e],g=function(a){console.log(a),a.preventDefault(),c(a)};d.push({reference:g,event:f}),b.addEventListener(f,g)}return d}function e(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];var e=!1;3===a.length?(c(["touchstart"],a[0],a[1],function(){e=!0}),c(["touchend","click"],a[0],a[1],function(b){return e?void(e=!1):void a[2](b)})):2===a.length&&(d(["touchcancel"],a[0],function(){e=!0}),d(["touchend","click"],a[0],function(b){return e?void(e=!1):void a[1](b)}))}function f(a,b,e){var f=!1;c(["touchstart","mousedown"],a,b,function(a){f=!0,void 0!==e.dragStart&&e.dragStart(a);var b=[];b=b.concat(d(["touchmove","mousemove"],document,function(a){f&&void 0!==e.dragMove&&e.dragMove(a)})),b=b.concat(d(["touchend","mouseup"],document,function(a){f&&void 0!==e.dragEnd&&e.dragEnd(a),f=!1;for(var c in b){var d=b[c];document.removeEventListener(d.event,d.reference)}}))})}return a("onTap",e),a("onDrag",f),{setters:[],execute:function(){}}}),a.register("e",["8","d"],function(a){var b,c,d;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(){function a(a,c){var d=this;this.viewManager=c,this.months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],this.days=["SUN","MON","TUE","WED","THU","FRI","SAT"],this.decadeLabel=a.querySelector(".datium-decade-label"),this.yearLabel=a.querySelector(".datium-year-label"),this.monthLabel=a.querySelector(".datium-month-label"),this.dayLabel=a.querySelector(".datium-day-label"),this.hourLabel=a.querySelector(".datium-hour-label"),this.minuteLabel=a.querySelector(".datium-minute-label"),this.decadeLabelText=this.decadeLabel.querySelector("datium-label-text"),this.yearLabelText=this.yearLabel.querySelector("datium-label-text"),this.monthLabelText=this.monthLabel.querySelector("datium-label-text"),this.dayLabelText=this.dayLabel.querySelector("datium-label-text"),this.hourLabelText=this.hourLabel.querySelector("datium-label-text"),this.minuteLabelText=this.minuteLabel.querySelector("datium-label-text"),this.decadeExtendedLabelText=this.decadeLabel.querySelector("datium-extended-label-text"),this.yearExtendedLabelText=this.yearLabel.querySelector("datium-extended-label-text"),this.monthExtendedLabelText=this.monthLabel.querySelector("datium-extended-label-text"),this.dayExtendedLabelText=this.dayLabel.querySelector("datium-extended-label-text"),this.hourExtendedLabelText=this.hourLabel.querySelector("datium-extended-label-text"),this.minuteExtendedLabelText=this.minuteLabel.querySelector("datium-extended-label-text"),b.onTap(a.querySelector("datium-span-labels"),function(){c.zoomOut()}),b.onTap(a.querySelector("datium-previous-view"),function(){c.previous()}),b.onTap(a.querySelector("datium-next-view"),function(){c.next()}),c.registerObserver(function(a,b){d.viewChanged(a,b)})}return a.prototype.updateLabels=function(a,b){for(var d=a.getFullYear();d%10!==0;)d--;var e=d+" - "+(d+10),f=a.getFullYear().toString(),g=this.months[a.getMonth()],h=a.getDate(),i="";10>h&&(i="0");var j=this.days[a.getDay()]+" "+i+h,k=a.getHours(),l="AM";0===k?k=12:12===k?l="PM":k>12&&(k-=12,l="PM");var m="";10>k&&(m="0");var n=m+k+l,o=a.getMinutes(),p="";10>o&&(p="0");var q=m+k+":"+p+o+l;this.decadeLabelText.innerText=e,this.yearLabelText.innerText=f,this.monthLabelText.innerText=g,this.monthExtendedLabelText.innerText=f,this.dayLabelText.innerText=j,this.dayExtendedLabelText.innerText=g+" "+f,this.hourLabelText.innerText=b===c.ViewLevel.MINUTE?"":n,this.hourExtendedLabelText.innerText=j+" "+g+" "+f,this.minuteLabelText.innerText=q},a.prototype.viewChanged=function(a,b){this.updateLabels(a,b),b===c.ViewLevel.DECADE&&(this.mkBottom(this.decadeLabel),this.mkHiddenBottom(this.yearLabel,this.monthLabel,this.dayLabel,this.hourLabel,this.minuteLabel)),b===c.ViewLevel.YEAR&&(this.mkTop(this.decadeLabel),this.mkBottom(this.yearLabel),this.mkHiddenBottom(this.monthLabel,this.dayLabel,this.hourLabel,this.minuteLabel)),b===c.ViewLevel.MONTH&&(this.mkHiddenTop(this.decadeLabel),this.mkTop(this.yearLabel),this.mkBottom(this.monthLabel),this.mkHiddenBottom(this.dayLabel,this.hourLabel,this.minuteLabel)),b===c.ViewLevel.DAY&&(this.mkHiddenTop(this.decadeLabel,this.yearLabel),this.mkTop(this.monthLabel),this.mkBottom(this.dayLabel),this.mkHiddenBottom(this.hourLabel,this.minuteLabel)),b===c.ViewLevel.HOUR&&(this.mkHiddenTop(this.decadeLabel,this.yearLabel,this.monthLabel),this.mkTop(this.dayLabel),this.mkBottom(this.hourLabel),this.mkHiddenBottom(this.minuteLabel)),b===c.ViewLevel.MINUTE&&(this.mkHiddenTop(this.decadeLabel,this.yearLabel,this.monthLabel,this.dayLabel),this.mkTop(this.hourLabel),this.mkBottom(this.minuteLabel)),b===c.ViewLevel.SECOND&&(this.mkHiddenTop(this.decadeLabel,this.yearLabel,this.monthLabel,this.dayLabel,this.hourLabel),this.mkTop(this.minuteLabel))},a.prototype.mkTop=function(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];for(var c in a)a[c].className="datium-top"},a.prototype.mkHiddenTop=function(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];for(var c in a)a[c].className="datium-top datium-hidden-top"},a.prototype.mkBottom=function(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];for(var c in a)a[c].className="datium-bottom"},a.prototype.mkHiddenBottom=function(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];for(var c in a)a[c].className="datium-bottom datium-hidden-bottom"},a}(),a("default",d)}}}),a.registerDynamic("f",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports="<datium-header>\r\n	<datium-next-view></datium-next-view>\r\n    <datium-span-labels>\r\n        <datium-span-label class='datium-decade-label datium-top datium-hidden-top'>\r\n            <datium-label-text></datium-label-text>\r\n            <datium-extended-label-text></datium-extended-label-text>\r\n            <datium-zoom-out-icon>\r\n                <datium-zoom-out-minus-sign></datium-zoom-out-minus-sign>\r\n            </datium-zoom-out-icon>\r\n        </datium-span-label>\r\n        <datium-span-label class='datium-year-label datium-top datium-hidden-top'>\r\n            <datium-label-text></datium-label-text>\r\n            <datium-extended-label-text></datium-extended-label-text>\r\n            <datium-zoom-out-icon>\r\n                <datium-zoom-out-minus-sign></datium-zoom-out-minus-sign>\r\n            </datium-zoom-out-icon>\r\n        </datium-span-label>\r\n        <datium-span-label class='datium-month-label datium-top datium-hidden-top'>\r\n            <datium-label-text></datium-label-text>\r\n            <datium-extended-label-text></datium-extended-label-text>\r\n            <datium-zoom-out-icon>\r\n                <datium-zoom-out-minus-sign></datium-zoom-out-minus-sign>\r\n            </datium-zoom-out-icon>\r\n        </datium-span-label>\r\n        <datium-span-label class='datium-day-label datium-top datium-hidden-top'>\r\n            <datium-label-text></datium-label-text>\r\n            <datium-extended-label-text></datium-extended-label-text>\r\n            <datium-zoom-out-icon>\r\n                <datium-zoom-out-minus-sign></datium-zoom-out-minus-sign>\r\n            </datium-zoom-out-icon>\r\n        </datium-span-label>\r\n        <datium-span-label class='datium-hour-label datium-top datium-hidden-top'>\r\n            <datium-label-text></datium-label-text>\r\n            <datium-extended-label-text></datium-extended-label-text>\r\n            <datium-zoom-out-icon>\r\n                <datium-zoom-out-minus-sign></datium-zoom-out-minus-sign>\r\n            </datium-zoom-out-icon>\r\n        </datium-span-label>\r\n        <datium-span-label class='datium-minute-label datium-top datium-hidden-top'>\r\n            <datium-label-text></datium-label-text>\r\n            <datium-extended-label-text></datium-extended-label-text>\r\n            <datium-zoom-out-icon>\r\n                <datium-zoom-out-minus-sign></datium-zoom-out-minus-sign>\r\n            </datium-zoom-out-icon>\r\n        </datium-span-label>\r\n    </datium-span-labels>\r\n	<datium-previous-view></datium-previous-view>\r\n</datium-header>",
d.define=e,c.exports}),a.register("1",["f","e","d","c","b","9","7","5","3","4","2"],function(a){var b,c,d,e,f,g,h,i,j,k,l,m;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a},function(a){j=a},function(a){k=a},function(a){l=a}],execute:function(){m=function(){function a(a){var b=this,k=this.createView();this.pickerContainer=k.querySelector("datium-all-pickers-container");var l=new d["default"];this.yearPicker=new e["default"](this.pickerContainer,l),this.monthPicker=new f["default"](this.pickerContainer,l),this.dayPicker=new g["default"](this.pickerContainer,l),this.hourPicker=new h["default"](this.pickerContainer,l),this.minutePicker=new i["default"](this.pickerContainer,l),this.secondPicker=new j["default"](this.pickerContainer,l),new c["default"](k.querySelector("datium-header"),l),l.registerObserver(function(a,c,d,e){b.viewChanged(a,c,d,e)}),this.insertAfter(a.element,k),this.insertStyles()}return a.prototype.viewChanged=function(a,b,c,d){var e=this.getNewPicker(b);b>d?(this.currentPicker.destroy(k.Transition.ZOOM_IN),e.create(k.Transition.ZOOM_OUT,a)):d>b?(this.currentPicker.destroy(k.Transition.ZOOM_OUT),e.create(k.Transition.ZOOM_IN,a)):a.valueOf()<c.valueOf()?(this.currentPicker.destroy(k.Transition.SCROLL_RIGHT),e.create(k.Transition.SCROLL_LEFT,a)):a.valueOf()>c.valueOf()?(this.currentPicker.destroy(k.Transition.SCROLL_LEFT),e.create(k.Transition.SCROLL_RIGHT,a)):void 0===this.currentPicker&&e.create(k.Transition.NONE,a),this.pickerContainer.style.height=e.getHeight()+"px",this.currentPicker=e},a.prototype.getNewPicker=function(a){switch(a){case d.ViewLevel.DECADE:return this.yearPicker;case d.ViewLevel.YEAR:return this.monthPicker;case d.ViewLevel.MONTH:return this.dayPicker;case d.ViewLevel.DAY:return this.hourPicker;case d.ViewLevel.HOUR:return this.minutePicker;case d.ViewLevel.MINUTE:return this.secondPicker}},a.prototype.insertStyles=function(){if(!a.insertedStyles&&""!==l["default"]){a.insertedStyles=!0;var b=document.createElement("style");b.innerText=l["default"],document.head.appendChild(b)}},a.prototype.createView=function(){var a=document.createElement("datium-container");return a.innerHTML=b["default"]+"<datium-all-pickers-container></datium-all-pickers-container>",a},a.prototype.insertAfter=function(a,b){a.parentNode.insertBefore(b,a.nextSibling)},a.insertedStyles=!1,a}(),window.Datium=m}}})})(function(a){a()});