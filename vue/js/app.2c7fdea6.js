(function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],f=0,m=[];f<u.length;f++)i=u[f],a[i]&&m.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},4859:function(t,e,n){"use strict";var r=n("7a6c"),a=n.n(r);a.a},5536:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={name:"app"},u=i,s=(n("034f"),n("2877")),c=Object(s["a"])(u,a,o,!1,null,null,null),l=c.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{title:"Home"}}),n("div",{staticClass:"content",attrs:{id:"home_content"}},[n("div",{staticClass:"home_form_container"},[n("p",[t._v("Informe um termo:")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmitForm(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.term,expression:"term"}],attrs:{type:"text",id:"input_term",name:"term"},domProps:{value:t.term},on:{input:function(e){e.target.composing||(t.term=e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("Pesquisar")])])])])],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"main_header"}},[n("div",{staticClass:"header_content content"},[n("h3",[t._v(t._s(t.title))])])])},h=[],v={name:"Header",props:{title:String}},_=v,b=(n("67d9"),Object(s["a"])(_,d,h,!1,null,"708ed552",null)),g=b.exports,y={name:"Home",data:function(t){return{term:""}},components:{Header:g},methods:{onSubmitForm:function(){if(!this.term.length)return alert("Informe um termo!"),!1;this.$router.push({path:"/lista/".concat(this.term)})}}},w=y,x=(n("eea8"),Object(s["a"])(w,m,p,!1,null,"ecead9f6",null)),O=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{title:"Lista"}}),n("div",{staticClass:"content",attrs:{id:"list_content"}},[t.list?t._e():n("div",[t._v("Carregando...")]),t.list&&!t.list.length?n("div",[n("h2",[t._v("Nenhum usuário encontrado!")])]):t._e(),t.list&&t.list.length?n("div",[n("h1",[t._v("Itens encontrados:")]),n("ul",t._l(t.list,function(e){return n("li",{key:e.id,staticClass:"item_list"},[n("div",{staticClass:"item_list_container"},[n("img",{attrs:{src:e.avatar_url,alt:e.avatar_url}}),n("div",{staticClass:"item_list_container_texts"},[n("h3",[t._v(t._s(e.login))]),n("a",{attrs:{href:e.html_url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.html_url))])])])])}),0)]):t._e()])],1)},S=[],H=(n("96cf"),n("3b8d")),$=(n("5118"),n("bc3a")),k=n.n($),C=k.a.create({baseURL:"https://api.github.com/search/"}),P=C,R={name:"List",data:function(){return{list:null}},components:{Header:g},methods:{onRouteSeted:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.list=null,t.next=3,P.get("users?q=".concat(e));case 3:if(n=t.sent,r=n.data,a=n.status,e&&e.length){t.next=9;break}return this.$router.push({name:"Home"}),t.abrupt("return");case 9:if(200===a){t.next=12;break}return alert("Algo deu errado!"),t.abrupt("return");case 12:this.list=r.items;case 13:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.onRouteSeted(this.$route.params.term)},watch:{$route:function(t,e){this.onRouteSeted(t.params.term)}}},E=R,L=(n("4859"),Object(s["a"])(E,j,S,!1,null,"26394adc",null)),M=L.exports;r["a"].use(f["a"]);var I=new f["a"]({routes:[{path:"/",name:"Home",component:O},{path:"/lista/:term",name:"Lista",component:M},{path:"*",name:"no-term",component:M}]});r["a"].config.productionTip=!1,new r["a"]({router:I,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},"67d9":function(t,e,n){"use strict";var r=n("5536"),a=n.n(r);a.a},"74e8":function(t,e,n){},"7a6c":function(t,e,n){},eea8:function(t,e,n){"use strict";var r=n("74e8"),a=n.n(r);a.a}});
//# sourceMappingURL=app.2c7fdea6.js.map