(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),o=n.n(c),s=(n(14),n(1)),i=n.n(s),u=n(4),l=n(5),p=n(7),m=n(6),h=n(8),d=function(e){return a.a.createElement("div",{className:"info"},a.a.createElement("h2",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 ",a.a.createElement("br",null)," \u043f\u043e\u0433\u043e\u0434\u044b"),a.a.createElement("p",null,"\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0433\u043e\u0434\u0443 \u0432 \u0432\u0430\u0448\u0435\u043c \u0433\u043e\u0440\u043e\u0434e"))},v=function(e){return a.a.createElement("form",{onSubmit:e.weatherGet},a.a.createElement("input",{type:"text",name:"city",placeholder:"\u0413\u043e\u0440\u043e\u0434 (\u0410\u043d\u0433\u043b)"}),a.a.createElement("button",null,"\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0433\u043e\u0434\u0443"))},y=function(e){return a.a.createElement("div",null,e.city&&a.a.createElement("div",{id:"weather"},a.a.createElement("p",null,"\u041c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435: ",e.city,", ",e.country),a.a.createElement("p",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",e.temperature),a.a.createElement("p",null,"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",e.pressure),a.a.createElement("p",null,"\u0417\u0430\u0445\u043e\u0434: ",e.sunset)),a.a.createElement("p",null,e.error))},f=(n(16),"468fb32ccc63de5a026ac34d3a0331c1"),w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={temperature:void 0,city:void 0,country:void 0,pressure:void 0,sunset:void 0,error:void 0},n.getWeather=function(e){var t,r,a,c,o,s,u;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(e.preventDefault(),!(t=e.target.elements.city.value)){l.next=18;break}return r=function(e){return e<10&&(e="0"+e),e},l.next=6,i.a.awrap(fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(f,"&units=metric")));case 6:return a=l.sent,l.next=9,i.a.awrap(a.json());case 9:c=l.sent,console.log(c),o=c.sys.sunset,(s=new Date(1e3*o)).toLocaleDateString(),u=r(s.getHours(o))+":"+r(s.getMinutes(o)),n.setState({temperature:Math.round(c.main.temp)+" \xb0C",city:c.name,country:c.sys.country,pressure:c.main.pressure+" hPa",sunset:u,error:void 0}),l.next=19;break;case 18:n.setState({temp:void 0,city:void 0,coutry:void 0,pressure:void 0,sunset:void 0,error:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"});case 19:case"end":return l.stop()}}))},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(d,null),a.a.createElement(v,{weatherGet:this.getWeather}),a.a.createElement(y,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,pressure:this.state.pressure,sunset:this.state.sunset,error:this.state.error}))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.21ff0066.chunk.js.map