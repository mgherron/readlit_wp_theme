!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a){a("./helpers/helpers");!function(b){var c=function(a){return document.body.className.split(" ").indexOf(a)>-1?!0:!1},d={book:a("./modules/book")};b.onload=function(){c("single-books")&&d.book({single:document.querySelector("body.single-books"),book:document.querySelector("#book"),menu:document.querySelector("a.menu_toggle"),logo:document.querySelector(".pagetitle_cont a"),chapters:document.querySelector("#chapters")})}}(window)},{"./helpers/helpers":2,"./modules/book":3}],2:[function(){Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b=this.length>>>0,c=Number(arguments[1])||0;for(c=0>c?Math.ceil(c):Math.floor(c),0>c&&(c+=b);b>c;c++)if(c in this&&this[c]===a)return c;return-1})},{}],3:[function(a,b){var c=function(b){var c=(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?!0:!1,a("../vendor/hammer")),d=document.body.className.split(" "),e="click",f={preventDefault:!1,behavior:{userSelect:"all"}},g=!1;document.querySelector("html").className.split(" ").indexOf("touch")>-1&&(c(b.single,f).on("dragright",function(){i()}).on("dragleft",function(){h()}),e="touchend"),b.menu.addEventListener(e,function(a){a.preventDefault(),j()});var h=function(){var a=d.indexOf("show-chapters");a>-1&&d.splice(a,1),document.body.className=d.join(" ")},i=function(){-1===d.indexOf("show-chapters")&&d.push("show-chapters"),document.body.className=d.join(" ")},j=function(){b.book.addEventListener("webkitTransitionEnd",function(a){console.log(a)}),d.indexOf("show-chapters")>-1?(h(),g=!1):(i(),g=!0)}};b.exports=c},{"../vendor/hammer":4}],4:[function(a,b){!function(a,c){"use strict";function d(){e.READY||(t.determineEventTypes(),s.each(e.gestures,function(a){v.register(a)}),t.onTouch(e.DOCUMENT,o,v.detect),t.onTouch(e.DOCUMENT,p,v.detect),e.READY=!0)}var e=function w(a,b){return new w.Instance(a,b||{})};e.VERSION="1.1.3",e.defaults={behavior:{userSelect:"none",touchAction:"pan-y",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},e.DOCUMENT=document,e.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,e.HAS_TOUCHEVENTS="ontouchstart"in a,e.IS_MOBILE=/mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent),e.NO_MOUSEEVENTS=e.HAS_TOUCHEVENTS&&e.IS_MOBILE||e.HAS_POINTEREVENTS,e.CALCULATE_INTERVAL=25;var f={},g=e.DIRECTION_DOWN="down",h=e.DIRECTION_LEFT="left",i=e.DIRECTION_UP="up",j=e.DIRECTION_RIGHT="right",k=e.POINTER_MOUSE="mouse",l=e.POINTER_TOUCH="touch",m=e.POINTER_PEN="pen",n=e.EVENT_START="start",o=e.EVENT_MOVE="move",p=e.EVENT_END="end",q=e.EVENT_RELEASE="release",r=e.EVENT_TOUCH="touch";e.READY=!1,e.plugins=e.plugins||{},e.gestures=e.gestures||{};var s=e.utils={extend:function(a,b,d){for(var e in b)!b.hasOwnProperty(e)||a[e]!==c&&d||(a[e]=b[e]);return a},on:function(a,b,c){a.addEventListener(b,c,!1)},off:function(a,b,c){a.removeEventListener(b,c,!1)},each:function(a,b,d){var e,f;if("forEach"in a)a.forEach(b,d);else if(a.length!==c){for(e=0,f=a.length;f>e;e++)if(b.call(d,a[e],e,a)===!1)return}else for(e in a)if(a.hasOwnProperty(e)&&b.call(d,a[e],e,a)===!1)return},inStr:function(a,b){return a.indexOf(b)>-1},inArray:function(a,b){if(a.indexOf){var c=a.indexOf(b);return-1===c?!1:c}for(var d=0,e=a.length;e>d;d++)if(a[d]===b)return d;return!1},toArray:function(a){return Array.prototype.slice.call(a,0)},hasParent:function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},getCenter:function(a){var b=[],c=[],d=[],e=[],f=Math.min,g=Math.max;return 1===a.length?{pageX:a[0].pageX,pageY:a[0].pageY,clientX:a[0].clientX,clientY:a[0].clientY}:(s.each(a,function(a){b.push(a.pageX),c.push(a.pageY),d.push(a.clientX),e.push(a.clientY)}),{pageX:(f.apply(Math,b)+g.apply(Math,b))/2,pageY:(f.apply(Math,c)+g.apply(Math,c))/2,clientX:(f.apply(Math,d)+g.apply(Math,d))/2,clientY:(f.apply(Math,e)+g.apply(Math,e))/2})},getVelocity:function(a,b,c){return{x:Math.abs(b/a)||0,y:Math.abs(c/a)||0}},getAngle:function(a,b){var c=b.clientX-a.clientX,d=b.clientY-a.clientY;return 180*Math.atan2(d,c)/Math.PI},getDirection:function(a,b){var c=Math.abs(a.clientX-b.clientX),d=Math.abs(a.clientY-b.clientY);return c>=d?a.clientX-b.clientX>0?h:j:a.clientY-b.clientY>0?i:g},getDistance:function(a,b){var c=b.clientX-a.clientX,d=b.clientY-a.clientY;return Math.sqrt(c*c+d*d)},getScale:function(a,b){return a.length>=2&&b.length>=2?this.getDistance(b[0],b[1])/this.getDistance(a[0],a[1]):1},getRotation:function(a,b){return a.length>=2&&b.length>=2?this.getAngle(b[1],b[0])-this.getAngle(a[1],a[0]):0},isVertical:function(a){return a==i||a==g},setPrefixedCss:function(a,b,c,d){var e=["","Webkit","Moz","O","ms"];b=s.toCamelCase(b);for(var f=0;f<e.length;f++){var g=b;if(e[f]&&(g=e[f]+g.slice(0,1).toUpperCase()+g.slice(1)),g in a.style){a.style[g]=(null==d||d)&&c||"";break}}},toggleBehavior:function(a,b,c){if(b&&a&&a.style){s.each(b,function(b,d){s.setPrefixedCss(a,d,b,c)});var d=c&&function(){return!1};"none"==b.userSelect&&(a.onselectstart=d),"none"==b.userDrag&&(a.ondragstart=d)}},toCamelCase:function(a){return a.replace(/[_-]([a-z])/g,function(a){return a[1].toUpperCase()})}},t=e.event={preventMouseEvents:!1,started:!1,shouldDetect:!1,on:function(a,b,c,d){var e=b.split(" ");s.each(e,function(b){s.on(a,b,c),d&&d(b)})},off:function(a,b,c,d){var e=b.split(" ");s.each(e,function(b){s.off(a,b,c),d&&d(b)})},onTouch:function(a,b,c){var d=this,g=function(f){var g,h=f.type.toLowerCase(),i=e.HAS_POINTEREVENTS,j=s.inStr(h,"mouse");j&&d.preventMouseEvents||(j&&b==n&&0===f.button?(d.preventMouseEvents=!1,d.shouldDetect=!0):i&&b==n?d.shouldDetect=1===f.buttons||u.matchType(l,f):j||b!=n||(d.preventMouseEvents=!0,d.shouldDetect=!0),i&&b!=p&&u.updatePointer(b,f),d.shouldDetect&&(g=d.doDetect.call(d,f,b,a,c)),g==p&&(d.preventMouseEvents=!1,d.shouldDetect=!1,u.reset()),i&&b==p&&u.updatePointer(b,f))};return this.on(a,f[b],g),g},doDetect:function(a,b,c,d){var e=this.getTouchList(a,b),f=e.length,g=b,h=e.trigger,i=f;b==n?h=r:b==p&&(h=q,i=e.length-(a.changedTouches?a.changedTouches.length:1)),i>0&&this.started&&(g=o),this.started=!0;var j=this.collectEventData(c,g,e,a);return b!=p&&d.call(v,j),h&&(j.changedLength=i,j.eventType=h,d.call(v,j),j.eventType=g,delete j.changedLength),g==p&&(d.call(v,j),this.started=!1),g},determineEventTypes:function(){var b;return b=e.HAS_POINTEREVENTS?a.PointerEvent?["pointerdown","pointermove","pointerup pointercancel lostpointercapture"]:["MSPointerDown","MSPointerMove","MSPointerUp MSPointerCancel MSLostPointerCapture"]:e.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],f[n]=b[0],f[o]=b[1],f[p]=b[2],f},getTouchList:function(a,b){if(e.HAS_POINTEREVENTS)return u.getTouchList();if(a.touches){if(b==o)return a.touches;var c=[],d=[].concat(s.toArray(a.touches),s.toArray(a.changedTouches)),f=[];return s.each(d,function(a){s.inArray(c,a.identifier)===!1&&f.push(a),c.push(a.identifier)}),f}return a.identifier=1,[a]},collectEventData:function(a,b,c,d){var e=l;return s.inStr(d.type,"mouse")||u.matchType(k,d)?e=k:u.matchType(m,d)&&(e=m),{center:s.getCenter(c),timeStamp:Date.now(),target:d.target,touches:c,eventType:b,pointerType:e,srcEvent:d,preventDefault:function(){var a=this.srcEvent;a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return v.stopDetect()}}}},u=e.PointerEvent={pointers:{},getTouchList:function(){var a=[];return s.each(this.pointers,function(b){a.push(b)}),a},updatePointer:function(a,b){a==p||a!=p&&1!==b.buttons?delete this.pointers[b.pointerId]:(b.identifier=b.pointerId,this.pointers[b.pointerId]=b)},matchType:function(a,b){if(!b.pointerType)return!1;var c=b.pointerType,d={};return d[k]=c===(b.MSPOINTER_TYPE_MOUSE||k),d[l]=c===(b.MSPOINTER_TYPE_TOUCH||l),d[m]=c===(b.MSPOINTER_TYPE_PEN||m),d[a]},reset:function(){this.pointers={}}},v=e.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(a,b){this.current||(this.stopped=!1,this.current={inst:a,startEvent:s.extend({},b),lastEvent:!1,lastCalcEvent:!1,futureCalcEvent:!1,lastCalcData:{},name:""},this.detect(b))},detect:function(a){if(this.current&&!this.stopped){a=this.extendEventData(a);var b=this.current.inst,c=b.options;return s.each(this.gestures,function(d){!this.stopped&&b.enabled&&c[d.name]&&d.handler.call(d,a,b)},this),this.current&&(this.current.lastEvent=a),a.eventType==p&&this.stopDetect(),a}},stopDetect:function(){this.previous=s.extend({},this.current),this.current=null,this.stopped=!0},getCalculatedData:function(a,b,c,d,f){var g=this.current,h=!1,i=g.lastCalcEvent,j=g.lastCalcData;i&&a.timeStamp-i.timeStamp>e.CALCULATE_INTERVAL&&(b=i.center,c=a.timeStamp-i.timeStamp,d=a.center.clientX-i.center.clientX,f=a.center.clientY-i.center.clientY,h=!0),(a.eventType==r||a.eventType==q)&&(g.futureCalcEvent=a),(!g.lastCalcEvent||h)&&(j.velocity=s.getVelocity(c,d,f),j.angle=s.getAngle(b,a.center),j.direction=s.getDirection(b,a.center),g.lastCalcEvent=g.futureCalcEvent||a,g.futureCalcEvent=a),a.velocityX=j.velocity.x,a.velocityY=j.velocity.y,a.interimAngle=j.angle,a.interimDirection=j.direction},extendEventData:function(a){var b=this.current,c=b.startEvent,d=b.lastEvent||c;(a.eventType==r||a.eventType==q)&&(c.touches=[],s.each(a.touches,function(a){c.touches.push({clientX:a.clientX,clientY:a.clientY})}));var e=a.timeStamp-c.timeStamp,f=a.center.clientX-c.center.clientX,g=a.center.clientY-c.center.clientY;return this.getCalculatedData(a,d.center,e,f,g),s.extend(a,{startEvent:c,deltaTime:e,deltaX:f,deltaY:g,distance:s.getDistance(c.center,a.center),angle:s.getAngle(c.center,a.center),direction:s.getDirection(c.center,a.center),scale:s.getScale(c.touches,a.touches),rotation:s.getRotation(c.touches,a.touches)}),a},register:function(a){var b=a.defaults||{};return b[a.name]===c&&(b[a.name]=!0),s.extend(e.defaults,b,!0),a.index=a.index||1e3,this.gestures.push(a),this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0}),this.gestures}};e.Instance=function(a,b){var c=this;d(),this.element=a,this.enabled=!0,s.each(b,function(a,c){delete b[c],b[s.toCamelCase(c)]=a}),this.options=s.extend(s.extend({},e.defaults),b||{}),this.options.behavior&&s.toggleBehavior(this.element,this.options.behavior,!0),this.eventStartHandler=t.onTouch(a,n,function(a){c.enabled&&a.eventType==n?v.startDetect(c,a):a.eventType==r&&v.detect(a)}),this.eventHandlers=[]},e.Instance.prototype={on:function(a,b){var c=this;return t.on(c.element,a,b,function(a){c.eventHandlers.push({gesture:a,handler:b})}),c},off:function(a,b){var c=this;return t.off(c.element,a,b,function(a){var d=s.inArray({gesture:a,handler:b});d!==!1&&c.eventHandlers.splice(d,1)}),c},trigger:function(a,b){b||(b={});var c=e.DOCUMENT.createEvent("Event");c.initEvent(a,!0,!0),c.gesture=b;var d=this.element;return s.hasParent(b.target,d)&&(d=b.target),d.dispatchEvent(c),this},enable:function(a){return this.enabled=a,this},dispose:function(){var a,b;for(s.toggleBehavior(this.element,this.options.behavior,!1),a=-1;b=this.eventHandlers[++a];)s.off(this.element,b.gesture,b.handler);return this.eventHandlers=[],t.off(this.element,f[n],this.eventStartHandler),null}},function(a){function b(b,d){var e=v.current;if(!(d.options.dragMaxTouches>0&&b.touches.length>d.options.dragMaxTouches))switch(b.eventType){case n:c=!1;break;case o:if(b.distance<d.options.dragMinDistance&&e.name!=a)return;var f=e.startEvent.center;if(e.name!=a&&(e.name=a,d.options.dragDistanceCorrection&&b.distance>0)){var k=Math.abs(d.options.dragMinDistance/b.distance);f.pageX+=b.deltaX*k,f.pageY+=b.deltaY*k,f.clientX+=b.deltaX*k,f.clientY+=b.deltaY*k,b=v.extendEventData(b)}(e.lastEvent.dragLockToAxis||d.options.dragLockToAxis&&d.options.dragLockMinDistance<=b.distance)&&(b.dragLockToAxis=!0);var l=e.lastEvent.direction;b.dragLockToAxis&&l!==b.direction&&(b.direction=s.isVertical(l)?b.deltaY<0?i:g:b.deltaX<0?h:j),c||(d.trigger(a+"start",b),c=!0),d.trigger(a,b),d.trigger(a+b.direction,b);var m=s.isVertical(b.direction);(d.options.dragBlockVertical&&m||d.options.dragBlockHorizontal&&!m)&&b.preventDefault();break;case q:c&&b.changedLength<=d.options.dragMaxTouches&&(d.trigger(a+"end",b),c=!1);break;case p:c=!1}}var c=!1;e.gestures.Drag={name:a,index:50,handler:b,defaults:{dragMinDistance:10,dragDistanceCorrection:!0,dragMaxTouches:1,dragBlockHorizontal:!1,dragBlockVertical:!1,dragLockToAxis:!1,dragLockMinDistance:25}}}("drag"),e.gestures.Gesture={name:"gesture",index:1337,handler:function(a,b){b.trigger(this.name,a)}},function(a){function b(b,d){var e=d.options,f=v.current;switch(b.eventType){case n:clearTimeout(c),f.name=a,c=setTimeout(function(){f&&f.name==a&&d.trigger(a,b)},e.holdTimeout);break;case o:b.distance>e.holdThreshold&&clearTimeout(c);break;case q:clearTimeout(c)}}var c;e.gestures.Hold={name:a,index:10,defaults:{holdTimeout:500,holdThreshold:2},handler:b}}("hold"),e.gestures.Release={name:"release",index:1/0,handler:function(a,b){a.eventType==q&&b.trigger(this.name,a)}},e.gestures.Swipe={name:"swipe",index:40,defaults:{swipeMinTouches:1,swipeMaxTouches:1,swipeVelocityX:.6,swipeVelocityY:.6},handler:function(a,b){if(a.eventType==q){var c=a.touches.length,d=b.options;if(c<d.swipeMinTouches||c>d.swipeMaxTouches)return;(a.velocityX>d.swipeVelocityX||a.velocityY>d.swipeVelocityY)&&(b.trigger(this.name,a),b.trigger(this.name+a.direction,a))}}},function(a){function b(b,d){var e,f,g=d.options,h=v.current,i=v.previous;switch(b.eventType){case n:c=!1;break;case o:c=c||b.distance>g.tapMaxDistance;break;case p:!s.inStr(b.srcEvent.type,"cancel")&&b.deltaTime<g.tapMaxTime&&!c&&(e=i&&i.lastEvent&&b.timeStamp-i.lastEvent.timeStamp,f=!1,i&&i.name==a&&e&&e<g.doubleTapInterval&&b.distance<g.doubleTapDistance&&(d.trigger("doubletap",b),f=!0),(!f||g.tapAlways)&&(h.name=a,d.trigger(h.name,b)))}}var c=!1;e.gestures.Tap={name:a,index:100,handler:b,defaults:{tapMaxTime:250,tapMaxDistance:10,tapAlways:!0,doubleTapDistance:20,doubleTapInterval:300}}}("tap"),e.gestures.Touch={name:"touch",index:-1/0,defaults:{preventDefault:!1,preventMouse:!1},handler:function(a,b){return b.options.preventMouse&&a.pointerType==k?void a.stopDetect():(b.options.preventDefault&&a.preventDefault(),void(a.eventType==r&&b.trigger("touch",a)))}},function(a){function b(b,d){switch(b.eventType){case n:c=!1;break;case o:if(b.touches.length<2)return;var e=Math.abs(1-b.scale),f=Math.abs(b.rotation);if(e<d.options.transformMinScale&&f<d.options.transformMinRotation)return;v.current.name=a,c||(d.trigger(a+"start",b),c=!0),d.trigger(a,b),f>d.options.transformMinRotation&&d.trigger("rotate",b),e>d.options.transformMinScale&&(d.trigger("pinch",b),d.trigger("pinch"+(b.scale<1?"in":"out"),b));break;case q:c&&b.changedLength<2&&(d.trigger(a+"end",b),c=!1)}}var c=!1;e.gestures.Transform={name:a,index:45,defaults:{transformMinScale:.01,transformMinRotation:1},handler:b}}("transform"),"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof b&&b.exports?b.exports=e:a.Hammer=e}(window)},{}]},{},[1]);