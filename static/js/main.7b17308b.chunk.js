(this["webpackJsonpreact-marketplace"]=this["webpackJsonpreact-marketplace"]||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),s=n(20),i=n.n(s),o=(n(78),n(79),n(9)),l=n(124),u=n(25),j=n(13),p=n.n(j),b=n(19),m="[Item] Fecth items",h="[Item] Fecth items success",d="[Item] Fecth items failure",f="[Item] Fecth item details",O="[Item] Fecth item details success",x="[Item] Fecth item details failure",g=n(38),v=n(39),k=function(){function e(t){Object(g.a)(this,e),this.itemRepo=t}return Object(v.a)(e,[{key:"getItems",value:function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.itemRepo.getItems());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getItemDetails",value:function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.itemRepo.getItemDetails(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),y=function(){function e(){Object(g.a)(this,e),this.url="https://pokeapi.co/api/v2/pokemon"}return Object(v.a)(e,[{key:"getItems",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.url);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getItemDetails",value:function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this.url,"/").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),w=function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m}),e.prev=1,n=new y,a=new k(n),e.next=6,a.getItems();case 6:r=e.sent,t({type:h,payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:d,error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),I=n(123),N=n(115),F=n(117),C=n(118),D=n(122),P=n(120),R=n(119),_=n(121),L=n(23),E=Object(N.a)({root:{},name:{textTransform:"capitalize"},link:{color:"black"}});function T(e){var t=e.name,n=(e.url,E());return Object(a.jsxs)(F.a,{className:n.root,children:[Object(a.jsx)(C.a,{children:Object(a.jsxs)(L.b,{className:n.link,to:"marketplace/".concat(t),children:[Object(a.jsx)(R.a,{component:"img",alt:"Contemplative Reptile",height:"250",image:"react-marketplace/pokemon.jpg",title:"Pokemon"}),Object(a.jsx)(P.a,{children:Object(a.jsx)(_.a,{className:n.name,gutterBottom:!0,variant:"h5",component:"h2",children:t})})]})}),Object(a.jsx)(D.a,{children:Object(a.jsx)(L.b,{to:"marketplace/".concat(t),children:Object(a.jsx)(I.a,{size:"small",color:"primary",children:"Ver Detalle"})})})]})}n(90);var B=Object(u.b)((function(e){return{items:e.marketPlace.results}}),(function(e){return{fetchItems:function(){return e(w)}}}))((function(e){var t=e.items,n=e.fetchItems;return Object(a.jsxs)("div",{className:"item-list",children:[Object(a.jsx)("div",{className:"item-list__actions",children:Object(a.jsx)(I.a,{className:"item-list__fetch-cta",variant:"contained",color:"primary",onClick:n,children:"Mostrar todos"})}),Object(a.jsx)("div",{children:Object(a.jsx)(l.a,{container:!0,spacing:3,children:t.map((function(e){return Object(a.jsx)(l.a,{item:!0,xs:12,sm:10,md:3,lg:4,children:Object(a.jsx)(T,Object(o.a)({},e),e.name)})}))})})]})})),z=n(129),H=n(130),M=n(68),G=n(62),J=n.n(G),S=n(60),V=n.n(S),A=n(63),W=n.n(A),q=n(64),K=n.n(q),Q=n(61),U=n.n(Q),X=Object(N.a)((function(e){return Object(z.a)({root:{marginLeft:"3%"},title:{textTransform:"uppercase"},paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary},orange:{backgroundColor:"#ff5000"},titleHolder:{display:"flex"}})})),Y=Object(u.b)((function(e){return{details:e.marketPlace.details}}),(function(e,t){return{fetchItemDetails:function(){return e(function(e){var t=e.name;return function(){var e=Object(b.a)(p.a.mark((function e(n){var a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:f}),e.prev=1,a=new y,r=new k(a),e.next=6,r.getItemDetails(t);case 6:c=e.sent,n({type:O,payload:Object(o.a)({},c)}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n({type:x,error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}({name:t.name}))}}}))((function(e){var t=e.name,n=e.details,c=e.fetchItemDetails,s=X();return Object(r.useEffect)((function(){c()}),[c]),Object(a.jsxs)("div",{className:s.root,children:[Object(a.jsx)("h1",{className:s.title,children:Object(a.jsxs)("span",{className:s.titleHolder,children:[Object(a.jsx)(H.a,{className:s.orange,children:"P"}),t]})}),Object(a.jsxs)(l.a,{container:!0,spacing:1,children:[Object(a.jsx)(l.a,{item:!0,xs:5,children:Object(a.jsxs)(M.a,{className:s.paper,variant:"outlined",children:[Object(a.jsx)("img",{alt:"front",src:n.sprites.front_default}),Object(a.jsx)("img",{alt:"back",src:n.sprites.back_default}),Object(a.jsx)("img",{alt:"front shiny",src:n.sprites.front_shiny}),Object(a.jsxs)(_.a,{children:[Object(a.jsx)(V.a,{}),Object(a.jsx)("strong",{children:"Nombre:"})," ",t]}),Object(a.jsxs)(_.a,{children:[Object(a.jsx)(U.a,{}),Object(a.jsx)("strong",{children:"Peso:"})," ",n.weight]}),n.abilities.map((function(e,t){return Object(a.jsxs)(_.a,{children:[Object(a.jsx)(J.a,{}),Object(a.jsxs)("strong",{children:["Habilidad ",t+1,":"]})," ",e.ability.name]})})),n.forms.map((function(e,t){return Object(a.jsxs)(_.a,{children:[Object(a.jsx)(W.a,{}),Object(a.jsxs)("strong",{children:["Forma ",t+1,":"]})," ",e.name]})})),n.types.map((function(e,t){return Object(a.jsxs)(_.a,{children:[Object(a.jsx)(K.a,{}),Object(a.jsxs)("strong",{children:["Tipo ",t+1,":"]})," ",e.type.name]})}))]})}),Object(a.jsx)(l.a,{item:!0,xs:12,children:Object(a.jsx)(L.b,{to:"/",children:Object(a.jsx)(I.a,{size:"small",color:"primary",children:"Volver"})},t)})]})]})})),Z=n(28),$=n(65),ee={loading:!1,count:0,next:"",previous:"",results:[],details:{abilities:[],forms:[],types:[],sprites:{back_default:""},weight:0}};var te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(o.a)(Object(o.a)({},e),{},{loading:!0});case h:case d:return Object(o.a)(Object(o.a)(Object(o.a)({},e),t.payload),{},{loading:!1});case f:return Object(o.a)(Object(o.a)({},e),{},{loading:!0});case O:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,details:Object(o.a)({},t.payload)});case x:return Object(o.a)(Object(o.a)({},e),{},{loading:!1});default:return e}},ne=n(27),ae=n(125),re=n(126),ce=n(14),se=Object(N.a)((function(e){return Object(z.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(ne.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(ne.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ce.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ce.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(ne.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})})}));function ie(){var e=se();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(ae.a,{position:"static",children:Object(a.jsx)(re.a,{children:Object(a.jsx)(_.a,{className:e.title,variant:"h6",noWrap:!0,children:"Marketplace"})})})})}var oe=n(66),le=n(128),ue=n(127),je=n(7),pe=Object(Z.c)({marketPlace:te}),be=Object(Z.d)(pe,Object(Z.a)($.a)),me=Object(oe.a)({palette:{primary:{main:"#ff5000"},secondary:{main:"#651fff"}}});var he=function(){return Object(a.jsx)(L.a,{children:Object(a.jsx)(u.a,{store:be,children:Object(a.jsxs)(ue.a,{theme:me,children:[Object(a.jsx)(ie,{}),Object(a.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:"2%"},children:Object(a.jsx)("img",{src:"react-marketplace/houm-logo.png",width:"100"})}),Object(a.jsx)(le.a,{}),Object(a.jsxs)(je.d,{children:[Object(a.jsx)(je.b,{path:"/marketplace/:name",children:function(e){var t=e.match.params;return Object(a.jsx)(Y,{name:t.name})}}),Object(a.jsx)(je.b,{path:"/marketplace",children:function(){return Object(a.jsx)(B,{})}}),Object(a.jsx)(je.a,{to:"/marketplace"})]})]})})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(he,{})}),document.getElementById("root")),de()}},[[92,1,2]]]);
//# sourceMappingURL=main.7b17308b.chunk.js.map