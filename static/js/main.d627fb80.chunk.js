(this["webpackJsonppersonal-page"]=this["webpackJsonppersonal-page"]||[]).push([[0],{38:function(e,t,s){},40:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var c={};s.r(c),s.d(c,"loadRequest",(function(){return h})),s.d(c,"loadSuccess",(function(){return p})),s.d(c,"loadFailure",(function(){return x}));var i=s(1),r=s.n(i),n=s(13),a=s.n(n),j=s(15),o=(s(38),s(2));function l(e){var t=e.repository;return Object(o.jsx)("a",{id:"repository-link",href:t.html_url,target:"_blank",children:Object(o.jsxs)("div",{id:"repository-item",children:[Object(o.jsx)("strong",{children:t.name}),t.description&&Object(o.jsx)("span",{className:"description",children:t.description}),t.topics&&Object(o.jsxs)("span",{className:"topics",children:["T\xf3picos: ",t.topics.join(", ")]})]})})}var d,b=s(10),u=s(8),O=s(16);!function(e){e.LOAD_REQUEST="@repositories/LOAD_REQUEST",e.LOAD_SUCCESS="@repositories/LOAD_SUCCESS",e.LOAD_FAILURE="@repositories/LOAD_FAILURE"}(d||(d={}));var h=function(){return Object(O.action)(d.LOAD_REQUEST)},p=function(e){return Object(O.action)(d.LOAD_SUCCESS,{data:e})},x=function(){return Object(O.action)(d.LOAD_FAILURE)},f=s.p+"static/media/profile.bf765db6.png";s(40);var m=Object(j.b)((function(e){return{repositories:e.repositories.data}}),(function(e){return Object(u.b)(c,e)}))((function(e){Object(i.useEffect)((function(){(0,e.loadRequest)()}),[]);var t=e.repositories;return Object(o.jsxs)("div",{id:"page-profile",children:[Object(o.jsxs)("aside",{children:[Object(o.jsx)("img",{src:f,alt:"Matheus Fugisaki"}),Object(o.jsxs)("div",{className:"profile-info",style:{width:"100%"},children:[Object(o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[Object(o.jsx)("strong",{children:"Matheus Fugisaki"}),Object(o.jsxs)("div",{className:"social-media-mobile",children:[Object(o.jsx)("a",{href:"https://github.com/fugisakimatheus",target:"_blank",children:Object(o.jsx)(b.a,{size:"22px"})}),Object(o.jsx)("a",{href:"https://www.instagram.com/matheusfugisaki/",target:"_blank",children:Object(o.jsx)(b.b,{size:"22px"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/matheus-fugisaki/",target:"_blank",children:Object(o.jsx)(b.c,{size:"22px"})})]})]}),Object(o.jsx)("p",{children:"Front-end developer"}),Object(o.jsxs)("section",{className:"skills-list",children:[Object(o.jsx)("strong",{children:"Skills"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Javascript / Typescript"}),Object(o.jsx)("li",{children:"React.js / React Native - Redux"}),Object(o.jsx)("li",{children:"Vue.js - Vuex"}),Object(o.jsx)("li",{children:"Electron"}),Object(o.jsx)("li",{children:"CSS / SASS / Stylus"})]})]})]}),Object(o.jsxs)("footer",{className:"social-media",children:[Object(o.jsx)("strong",{children:"Social Media:"}),Object(o.jsx)("a",{href:"https://github.com/fugisakimatheus",target:"_blank",children:Object(o.jsx)(b.a,{size:"20px"})}),Object(o.jsx)("a",{href:"https://www.instagram.com/matheusfugisaki/",target:"_blank",children:Object(o.jsx)(b.b,{size:"20px"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/matheus-fugisaki/",target:"_blank",children:Object(o.jsx)(b.c,{size:"20px"})})]})]}),Object(o.jsxs)("main",{className:"main-content",children:[Object(o.jsxs)("section",{className:"skills-list-mobile",children:[Object(o.jsx)("strong",{children:"Skills"}),Object(o.jsxs)("div",{className:"skills-content",children:[Object(o.jsx)("span",{children:"Javascript / Typescript"}),Object(o.jsx)("span",{children:"React.js / React Native - Redux"}),Object(o.jsx)("span",{children:"Vue.js - Vuex"}),Object(o.jsx)("span",{children:"Electron"}),Object(o.jsx)("span",{children:"CSS / SASS / Stylus"})]})]}),Object(o.jsx)("strong",{className:"title",children:"Repositories"}),Object(o.jsx)("div",{className:"items-list",children:t.map((function(e){return Object(o.jsx)(l,{repository:e},e.id)}))})]}),Object(o.jsx)("footer",{className:"profile-footer",children:"\xa9 Matheus Fugisaki - 2021"})]})})),g=s(29),S=s(11),k={data:[],error:!1,loading:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.LOAD_REQUEST:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case d.LOAD_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:!1,data:t.payload.data});case d.LOAD_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:!0,data:[]});default:return k}},w=Object(u.c)({repositories:v}),E=s(12),_=s.n(E),A=s(9),R=s(28),L=s.n(R).a.create({baseURL:"https://api.github.com"}),y=_.a.mark(N);function N(){var e,t;return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(A.b)(L.get,"users/fugisakimatheus/repos");case 3:return e=s.sent,s.next=6,Object(A.b)(L.get,"users/fugisaki/repos");case 6:return t=s.sent,s.next=9,Object(A.c)(p(e.data.concat(t.data)));case 9:s.next=15;break;case 11:return s.prev=11,s.t0=s.catch(0),s.next=15,Object(A.c)(x());case 15:case"end":return s.stop()}}),y,null,[[0,11]])}var U=_.a.mark(D);function D(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([Object(A.d)(d.LOAD_REQUEST,N)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),U)}var C=Object(g.a)(),F=Object(u.e)(w,Object(u.a)(C));C.run(D);var T=F;var z=function(){return Object(o.jsx)(j.a,{store:T,children:Object(o.jsx)(m,{})})};s(60);a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(z,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.d627fb80.chunk.js.map