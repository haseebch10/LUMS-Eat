(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(95)},49:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=(a(49),a(11)),i=a(12),o=a(14),u=a(13),m=a(16),d=a(4),E=a(3),f=(a(54),a(55),a(9)),p=(a(56),Object(m.f)(function(e){var t=e.RestaurantID,a=e.name,n=e.imageurl,c=e.category,l=e.rating,s=e.history,i=(e.linkUrl,e.match);return r.a.createElement("div",{className:"menu-item",onClick:function(){return s.push("".concat(i.url,"shop/").concat(t))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},a.toUpperCase()),r.a.createElement("span",{className:"subtitle"},c,"       *",l," /5")))})),h=(a(58),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={sections:[],search:""},e}return Object(i.a)(a,[{key:"updateSearch",value:function(e){this.setState({search:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;fetch("/restaurants").then(function(e){return e.json()}).then(function(t){return e.setState({sections:t})})}},{key:"render",value:function(){var e=this,t=this.state.sections.filter(function(t){return-1!==t.name.toUpperCase().indexOf(e.state.search.toUpperCase())});return r.a.createElement("div",{className:"directory-menu"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",class:"search",placeholder:"search...",value:this.state.search,onChange:this.updateSearch.bind(this)})),r.a.createElement("hr",null),r.a.createElement("div",{className:"directory-menu"},t.map(function(e){var t=e.id,a=Object(f.a)(e,["id"]);return r.a.createElement(p,Object.assign({key:t},a))})))}}]),a}(r.a.Component)),v=(a(59),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(h,null))}),b=(a(60),a(29)),O=Object(m.f)(function(e){var t=e.OrderID,a=e.totalPrice,n=e.status,c=e.Type,l=e.userID;e.history,e.linkUrl,e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"font"},t),r.a.createElement("td",{className:"font"},a),r.a.createElement("td",{className:"font"},c),r.a.createElement("td",{className:"font"},l),r.a.createElement("td",{className:"font"},n),r.a.createElement("td",null,function(){switch(n){case"Dispatched":return r.a.createElement("span",{className:"disp",onClick:function(){var e={OrderID:t,update:{status:"Complete"}};b.post("/orders/update",e).then(function(e){return window.location.reload()}).catch(function(e){return console.log(e)})}},"Complete");case"Pending":return r.a.createElement("span",{className:"pend",onClick:function(){var e={OrderID:t,update:{status:"Dispatched"}};b.post("/orders/update",e).then(function(e){return window.location.reload()}).catch(function(e){return console.log(e)})}},"Dispatch");default:return r.a.createElement("span",{className:"button",onClick:function(){return alert("button")}},"button")}}()))}),g=(a(78),a(29)),N=Object(m.f)(function(e){var t=e.OrderID,a=e.totalPrice,n=e.status,c=e.Type,l=e.userID;e.history,e.linkUrl,e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"font"},t),r.a.createElement("td",{className:"font"},a),r.a.createElement("td",{className:"font"},c),r.a.createElement("td",{className:"font"},l),r.a.createElement("td",{className:"font"},n),r.a.createElement("td",null,r.a.createElement("span",{className:"new-accept",onClick:function(){var e={OrderID:t,update:{status:"Pending"}};g.post("/orders/update",e).then(function(){return window.location.reload()}).catch(function(e){return console.log(e)})}},"Accept"),r.a.createElement("span",{className:"new-decline",onClick:function(){var e={OrderID:t,update:{status:"Declined"}};g.post("/orders/update",e).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},"Decline")))}),y=a(21),j=(a(79),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={sections:[],newsections:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/orders/all").then(function(e){return e.json()}).then(function(t){return e.setState({sections:t})}),fetch("/orders/new").then(function(e){return e.json()}).then(function(t){return e.setState({newsections:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"restaurant-menu"},r.a.createElement("div",{className:"top"},"New Orders"),r.a.createElement(y.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",{className:"font"},r.a.createElement("th",null,"Order number"),r.a.createElement("th",null,"Total Price"),r.a.createElement("th",null,"Order Type"),r.a.createElement("th",null,"User ID"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,this.state.newsections.map(function(e){var t=e.id,a=Object(f.a)(e,["id"]);return r.a.createElement("tr",null,r.a.createElement(N,Object.assign({key:t},a)))})))),r.a.createElement("div",{className:"restaurant-menu"},r.a.createElement("div",{className:"top"},"Orders ",r.a.createElement("span",{className:"number"},this.state.sections.length)),r.a.createElement(y.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",{className:"font"},r.a.createElement("th",null,"Order number"),r.a.createElement("th",null,"Total Price"),r.a.createElement("th",null,"Order Type"),r.a.createElement("th",null,"User ID"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,this.state.sections.map(function(e){var t=e.id,a=Object(f.a)(e,["id"]);return r.a.createElement("tr",null,r.a.createElement(O,Object.assign({key:t},a)))})))))}}]),a}(r.a.Component)),I=(a(80),function(){return r.a.createElement("div",{className:"restaurantpage"},r.a.createElement(j,null))}),k=a(2),C=(a(81),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={sections:[],newsections:[]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"restaurant-menu"},r.a.createElement("div",{className:"top"},r.a.createElement(k.b,{className:"top",to:"/analytics"},"DAILY"),r.a.createElement(k.b,{className:"top",to:"/analytics"},"WEEKLY"),r.a.createElement(k.b,{className:"top",to:"/analytics"},"MONTHLY")),r.a.createElement(y.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",{className:"font"},r.a.createElement("th",null,"Number of orders"),r.a.createElement("th",null,"Most ordered item"),r.a.createElement("th",null,"Revenue"))),r.a.createElement("tbody",null,this.state.sections.map(function(e){var t=e.id,a=Object(f.a)(e,["id"]);return r.a.createElement("tr",null,r.a.createElement(O,Object.assign({key:t},a)))})))))}}]),a}(r.a.Component)),D=(a(82),function(){return r.a.createElement("div",{className:"restaurantpage"},r.a.createElement(C,null))}),w=(a(83),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(f.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),T={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},R=function(){return{type:T.TOGGLE_CART_HIDDEN}},_=function(e){return{type:T.ADD_ITEM,payload:e}},A=(a(84),Object(d.b)(null,function(e){return{addItem:function(t){return e(_(t))}}})(function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,l=t.imageurl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(l,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},"Rs",c)),r.a.createElement(w,{onClick:function(){return a(t)},inverted:!0},"Add to cart"))})),M=(a(85),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter(function(e,t){return t<4}).map(function(e){return r.a.createElement(A,{key:e.id,item:e})})))}),U=Object(E.a)([function(e){return e.shop}],function(e){return e.collections}),S=Object(E.a)([U],function(e){return Object.keys(e).map(function(t){return e[t]})}),x=(a(86),Object(E.b)({collections:S})),H=Object(d.b)(x)(function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map(function(e){var t=e.id,a=Object(f.a)(e,["id"]);return r.a.createElement(M,Object.assign({key:t},a))}))}),P=(a(87),a(88),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={collection:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/menu/find/".concat(this.props.match.params.id)).then(function(e){return e.json()}).then(function(t){return e.setState({collection:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},this.props.match.params.id," "),r.a.createElement("div",{className:"items"},this.state.collection.map(function(e){return r.a.createElement(A,{key:e.ItemId,item:e})})))}}]),a}(r.a.Component)),G=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(k.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"".concat(t.path),component:H}),r.a.createElement(m.a,{exact:!0,path:"/shop/:id",render:function(e){return r.a.createElement(P,e)}}))),"/>")},L=function(e){return e.cart},q=Object(E.a)([L],function(e){return e.cartItems}),F=Object(E.a)([L],function(e){return e.hidden}),V=Object(E.a)([q],function(e){return e.reduce(function(e,t){return e+t.quantity},0)}),z=Object(E.a)([q],function(e){return e.reduce(function(e,t){return e+t.quantity*t.price},0)});function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Z=r.a.createElement("g",null),J=r.a.createElement("g",null),K=r.a.createElement("g",null),Q=r.a.createElement("g",null),W=r.a.createElement("g",null),X=r.a.createElement("g",null),$=r.a.createElement("g",null),ee=r.a.createElement("g",null),te=r.a.createElement("g",null),ae=r.a.createElement("g",null),ne=r.a.createElement("g",null),re=r.a.createElement("g",null),ce=r.a.createElement("g",null),le=r.a.createElement("g",null),se=r.a.createElement("g",null),ie=function(e){var t=e.svgRef,a=Y(e,["svgRef"]);return r.a.createElement("svg",B({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Z,J,K,Q,W,X,$,ee,te,ae,ne,re,ce,le,se)},oe=r.a.forwardRef(function(e,t){return r.a.createElement(ie,B({svgRef:t},e))}),ue=(a.p,a(89),Object(E.b)({itemCount:V})),me=Object(d.b)(ue,function(e){return{toggleCartHidden:function(){return e(R())}}})(function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(oe,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))}),de=(a(90),function(e){var t=e.item,a=t.imageurl,n=t.price,c=t.name,l=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},l," x Rs",n)))}),Ee=(a(91),Object(E.b)({cartItems:q})),fe=Object(m.f)(Object(d.b)(Ee)(function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map(function(e){return r.a.createElement(de,{key:e.id,item:e})}):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(w,{onClick:function(){a.push("/checkout"),n(R())}},"GO TO CHECKOUT"))}));function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ve=r.a.createElement("defs",null,r.a.createElement("style",null,"\n      .cls-1 {\n        fill: #333;\n      }\n\n      .cls-2 {\n        fill: #f8a22f;\n      }\n\n      .cls-3 {\n        fill: #fff;\n      }\n    ")),be=r.a.createElement("g",{id:"Group_144","data-name":"Group 144",transform:"translate(-80.63 -230.46)"},r.a.createElement("path",{id:"Path_7783","data-name":"Path 7783",className:"cls-1",d:"M211.35,230.46h-2.419a1.126,1.126,0,0,0,0,2.253h.238v1.216h1.942v-1.216h.238a1.126,1.126,0,0,0,0-2.253Z",transform:"translate(-87.333)"}),r.a.createElement("path",{id:"Path_7784","data-name":"Path 7784",className:"cls-2",d:"M122.811,241.53H101.592a1.488,1.488,0,0,0,0,2.976h4.843a1.488,1.488,0,0,1,0,2.976H82.118a1.488,1.488,0,1,0,0,2.976H96.629a1.488,1.488,0,0,1,0,2.976h-10.4a1.488,1.488,0,1,0,0,2.976H100.4a1.488,1.488,0,0,1,0,2.976H90.73a1.488,1.488,0,1,0,0,2.976h7.246a1.488,1.488,0,1,1,0,2.976H82.118a1.491,1.491,0,0,0-1.488,1.488h0a1.491,1.491,0,0,0,1.488,1.479H93.744a1.491,1.491,0,0,1,1.363,1.482h0a1.491,1.491,0,0,1-1.488,1.488h-.627l-.341,2.982h27.832v-2.976h32.488A30.166,30.166,0,0,0,122.811,241.53Z",transform:"translate(0 -7.602)"}),r.a.createElement("rect",{id:"Rectangle_18","data-name":"Rectangle 18",className:"cls-1",width:71.451,height:2.976,rx:1.488,transform:"translate(83.735 263.681)"}),r.a.createElement("path",{id:"Path_7785","data-name":"Path 7785",className:"cls-3",d:"M241.9,273.12h0a.783.783,0,0,0,.774-.9,27.707,27.707,0,0,0-26.61-23.681.78.78,0,0,0-.8.783h0a.78.78,0,0,0,.761.78,26.144,26.144,0,0,1,25.1,22.35A.78.78,0,0,0,241.9,273.12Z",transform:"translate(-92.452 -12.415)"})),Oe=function(e){var t=e.svgRef,a=he(e,["svgRef"]);return r.a.createElement("svg",pe({width:74.556,height:36.197,viewBox:"0 0 74.556 36.197",ref:t},a),ve,be)},ge=r.a.forwardRef(function(e,t){return r.a.createElement(Oe,pe({svgRef:t},e))}),Ne=(a.p,Object(E.a)([function(e){return e.user}],function(e){return e.currentUser})),ye=(a(92),Object(E.b)({currentUser:Ne,hidden:F})),je=Object(d.b)(ye)(function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(k.b,{className:"logo-container",to:"/"},r.a.createElement(ge,{className:"logo"}),r.a.createElement(k.b,{className:"title1",to:"/"},"  "," "),r.a.createElement(k.b,{className:"title1",to:"/"},"LUMS"),r.a.createElement(k.b,{className:"title",to:"/"},"EAT")),r.a.createElement("div",{className:"options"},r.a.createElement(k.b,{className:"option",to:"/analytics"},"RESTAURANT ANALYTICS"),r.a.createElement(k.b,{className:"option",to:"/restaurant"},"RESTAURANT"),r.a.createElement(k.b,{className:"option",to:"/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option"},"SIGN OUT"):r.a.createElement(k.b,{className:"option"},"SIGN IN"),r.a.createElement(me,null)),a?null:r.a.createElement(fe,null))}),Ie=(a(93),Object(d.b)(null,function(e){return{clearItem:function(t){return e(function(e){return{type:T.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(_(t))},removeItem:function(t){return e(function(e){return{type:T.REMOVE_ITEM,payload:e}}(t))}}})(function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,l=t.name,s=t.imageurl,i=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:s,alt:"item"})),r.a.createElement("span",{className:"name"},l),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},"Rs.",i),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))})),ke=(a(94),Object(E.b)({cartItems:q,total:z})),Ce=Object(d.b)(ke)(function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map(function(e){return r.a.createElement(Ie,{key:e.id,cartItem:e})}),r.a.createElement("div",{className:"total"},"TOTAL: Rs.",a))}),De="SET_CURRENT_USER",we=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(je,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:v}),r.a.createElement(m.a,{exact:!0,path:"/checkout",component:Ce}),r.a.createElement(m.a,{exact:!0,path:"/restaurant",component:I}),r.a.createElement(m.a,{exact:!0,path:"/analytics",component:D}),r.a.createElement(m.a,{path:"/shop",component:G}),r.a.createElement(m.a,{path:"/signin"})))}}]),a}(r.a.Component),Te=Object(E.b)({currentUser:Ne}),Re=Object(d.b)(Te,function(e){return{setCurrentUser:function(t){return e(function(e){return{type:De,payload:e}}(t))}}})(we),_e=a(17),Ae=a(42),Me=a.n(Ae),Ue=a(10),Se={currentUser:null},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case De:return Object(Ue.a)({},e,{currentUser:t.payload});default:return e}},He=a(43),Pe=function(e,t){return 1===e.find(function(e){return e.ItemID===t.ItemID}).quantity?e.filter(function(e){return e.ItemID!==t.ItemID}):e.map(function(e){return e.ItemID===t.ItemID?Object(Ue.a)({},e,{quantity:e.quantity-1}):e})},Ge={hidden:!0,cartItems:[]},Le=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case T.TOGGLE_CART_HIDDEN:return Object(Ue.a)({},a,{hidden:!a.hidden});case T.ADD_ITEM:return Object(Ue.a)({},a,{cartItems:(e=a.cartItems,t=n.payload,e.find(function(e){return e.ItemID===t.ItemID})?e.map(function(e){return e.ItemID===t.ItemID?Object(Ue.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(He.a)(e),[Object(Ue.a)({},t,{quantity:1})]))});case T.REMOVE_ITEM:return Object(Ue.a)({},a,{cartItems:Pe(a.cartItems,n.payload)});case T.CLEAR_ITEM_FROM_CART:return Object(Ue.a)({},a,{cartItems:a.cartItems.filter(function(e){return e.id!==n.payload.id})});default:return a}},qe={collections:[]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe;return(arguments.length>1?arguments[1]:void 0).type,e},Ve={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve;return(arguments.length>1?arguments[1]:void 0).type,e},Be=Object(_e.c)({user:xe,cart:Le,shop:Fe,directory:ze}),Ye=[Me.a],Ze=Object(_e.d)(Be,_e.a.apply(void 0,Ye));l.a.render(r.a.createElement(d.a,{store:Ze},r.a.createElement(k.a,null,r.a.createElement(Re,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.31240f95.chunk.js.map