(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),l=(n(18),n(2)),i=n(3),u=n(6),s=n(4),m=n(5),p=n(8),h=function(e){return"="===e[0]&&(e=e.substr(1)),e=(e=(e=(e=(e=e.replace(/([A-Z]{1,3}[0-9]{1,5})/g,'"$1"')).replace(/,/g,".")).replace(/([A-Z]+)\(/g,function(e){return"".concat(e).toLowerCase()})).replace(/\*/g,"xx")).replace(/exp\((.*?)\)/g,"(e^$1)")},d=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleInput=function(t){e.setState({formula:t.target.value,asciiFormula:h(t.target.value)})},e.state={formula:"",asciiFormula:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"App"},r.a.createElement("h1",null,"Hi"),r.a.createElement("input",{onChange:this.handleInput,value:this.state.formula}),r.a.createElement("br",null),r.a.createElement(p.a.Context,null,r.a.createElement(p.a.Node,null,this.state.asciiFormula)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.2a8bfaba.chunk.js.map