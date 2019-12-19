(this["webpackJsonpjays-app"]=this["webpackJsonpjays-app"]||[]).push([[0],{49:function(e,t,a){e.exports=a(67)},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=a(20),s=a(12),l=a(25),u=a(26),m=a(28),h=a(99),f=a(101),d=a(97),p=a(92),y=a(96),v=a(30),b=a.n(v),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){"initPrice"===e.target.name?a.setState({initPrice:e.target.value}):a.setState({finalPrice:e.target.value})},a.calculate=function(e){var t,n,r=parseFloat(a.state.initPrice),i=parseFloat(a.state.finalPrice);r>i?(t=(t=(r-i)/Math.abs(r)*100).toFixed(2)+"% decrease",n="\\frac{".concat(r," - ").concat(i,"}{").concat(Math.abs(r),"} * 100")):r<i?(t=(t=(i-r)/Math.abs(r)*100).toFixed(2)+"% increase",n="\\frac{".concat(i," - ").concat(r,"}{").concat(Math.abs(r),"} * 100")):r===i&&(t=(t=(r-i)/Math.abs(r)*100).toFixed(2)+"% decrease",n="\\frac{".concat(r," - ").concat(i,"}{").concat(Math.abs(r),"} * 100"),t="0% change"),a.setState({change:t,formula:n}),e.preventDefault()},a.state={initPrice:"",finalPrice:"",formula:"",change:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{component:"main",maxWidth:"xs"},r.a.createElement(f.a,null),r.a.createElement(y.a,{component:"h1",variant:"h2"},"%Change"),r.a.createElement("form",{onSubmit:this.calculate},r.a.createElement(d.a,{value:this.state.initPrice,onChange:this.handleChange,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"initPrice",label:"Initial Price",name:"initPrice",autoComplete:"initPrice",autoFocus:!0}),r.a.createElement(d.a,{value:this.state.finalPrice,onChange:this.handleChange,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"finalPrice",label:"Final Price",type:"finalPrice",id:"finalPrice",autoComplete:"finalPrice"}),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Calculate")),r.a.createElement(y.a,{component:"h1",variant:"h5"},r.a.createElement(b.a.Provider,null,r.a.createElement("div",null,r.a.createElement(b.a.Node,{inline:!0,formula:this.state.formula})))),r.a.createElement(y.a,{component:"h1",variant:"h3"},this.state.change))}}]),t}(r.a.Component),E=a(23),w=a.n(E),P=a(31),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({word:e.target.value})},a.findSynonym=function(e){a.setState({synonyms1:[],synonyms2:[]}),Object(P.a)(w.a.mark((function e(){var t,n,r,i,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.dictionaryapi.com/api/v3/references/thesaurus/json/".concat(a.state.word,"?key=862e489f-c41f-4b0a-bdee-fd6ae20eeb16"));case 2:return t=e.sent,e.next=5,t.json();case 5:if((n=e.sent)!=={})for(r in n)for(i in n[r].meta.syns[0])(c=a.state.synonyms1).push(n[r].meta.syns[0][i]),a.setState({synonyms1:c});case 7:case"end":return e.stop()}}),e)})))(),Object(P.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})))(),e.preventDefault()},a.state={word:"",synonyms1:[],synonyms2:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{component:"main",maxWidth:"xs"},r.a.createElement(f.a,null),r.a.createElement(y.a,{component:"h1",variant:"h2"},"Thesaurus"),r.a.createElement("form",{onSubmit:this.findSynonym},r.a.createElement(d.a,{value:this.state.word,onChange:this.handleChange,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"word",label:"Word",name:"word"}),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Synonyms")),this.state.synonyms1.map((function(e){return r.a.createElement(y.a,{component:"h1",variant:"h5",key:e},e)})),this.state.synonyms2.map((function(e){return r.a.createElement(y.a,{component:"h1",variant:"h5",key:e},e)})))}}]),t}(r.a.Component),x=a(37),C=a.n(x);var O=function(){return r.a.createElement(C.a,{flexDirection:"row"},r.a.createElement(g,null),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.f595afd7.chunk.js.map