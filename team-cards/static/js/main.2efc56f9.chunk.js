(window.webpackJsonptest=window.webpackJsonptest||[]).push([[0],{28:function(n,e,t){n.exports=t.p+"static/media/checkbox.cd8ee429.svg"},31:function(n,e,t){n.exports=t(45)},36:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(22),o=t.n(i),c=(t(36),t(11)),l=t(8),u=t(12),p=t.n(u),d=t(14),s=t(9),b=t(1),f=t(2);t(38);function h(){var n=Object(b.a)(['\n    display: inline-block;\n    background: lightgray;\n    border-radius: 50%;\n    position: relative;\n    width: 25px;\n    height: 25px;\n    margin-left: 15px;\n    padding-top: 5px;\n    text-align: center;\n    color: #333;\n    font-weight: bolder;\n    font-size: 12px;\n    :before {\n        left: -18px;\n        top: 2px;\n        content: "+";\n        width: 30px;\n        font-size: 16px;\n        font-weight: 400;\n        display: flex;\n        position: absolute;\n    }\n']);return h=function(){return n},n}function m(){var n=Object(b.a)(["\n    width: 25px;\n    height: 25px;\n    margin: 0 8px 0 0;\n    display: inline-block;\n"]);return m=function(){return n},n}function x(){var n=Object(b.a)(["\n    flex: 0 1 48px;\n    max-height: 48px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    padding: 0 0px 0 15px;\n"]);return x=function(){return n},n}function g(){var n=Object(b.a)(["\n    margin-top: 5px;\n    font-size: 12px;\n    font-weight: 600;\n    letter-spacing: -0.17px;\n    line-height: 16px;\n    opacity: 0.5;\n"]);return g=function(){return n},n}function v(){var n=Object(b.a)(["\n    font-size: 14px;\n    letter-spacing: -0.2px;\n    line-height: 16px;\n    font-weight: 600;\n"]);return v=function(){return n},n}function y(){var n=Object(b.a)(['\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 100%;\n    margin: 26px 0 0 16px;\n    color: #2a3f58;\n    font-family: "Open Sans";\n']);return y=function(){return n},n}function E(){var n=Object(b.a)(["\n    border-radius: 50%;\n    width: 48px;\n    height: 48px;\n    background: lightgray url(",") center;\n    background-size: 100%;\n    display: block;\n    margin: 20px 0 0 15px;\n"]);return E=function(){return n},n}function O(){var n=Object(b.a)(["\n    border-bottom: 1px solid lightgray;\n    display: flex;\n    flex: 0 1 95px;\n"]);return O=function(){return n},n}function k(){var n=Object(b.a)(["\n    display: flex;\n    flex: 0 1 368px;\n    width: 368px;\n    height: 145px;\n    border: 1px solid lightgray;\n    border-radius: 5px;\n    flex-direction: column;\n    margin: 10px 21px 8px 0;\n    cursor: pointer;\n    &:hover {\n        box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.05);\n    }\n"]);return k=function(){return n},n}var w=f.a.div(k()),j=f.a.div(O()),D=f.a.div(E(),function(n){var e=n.src;return void 0===e?"":e}),J=f.a.div(y()),S=f.a.div(v()),T=f.a.div(g()),M=f.a.div(x()),B=Object(f.a)(D)(m()),P=f.a.div(h());function W(n){var e=n.image,t=void 0===e?"":e,a=n.title,i=void 0===a?"":a,o=n.description,c=void 0===o?"":o,l=n.dashed,u=void 0!==l&&l,p=n.onClick,d=void 0===p?function(){}:p,s=n.avatars,b=void 0===s?[]:s;return r.a.createElement(w,{onClick:d,dashed:u},r.a.createElement(j,null,r.a.createElement(D,{src:t}),r.a.createElement(J,null,r.a.createElement(S,null,i),r.a.createElement(T,null,c))),r.a.createElement(M,null,b.slice(0,9).map(function(n,e){var t=n.avatar;return r.a.createElement(B,{key:e,src:t})}),!!b.slice(9).length&&r.a.createElement(P,null,b.slice(9).length)))}function q(){var n=Object(b.a)(["\n    & > div {\n        border-style: dashed;\n    }\n    "," {\n        opacity: 0.5;\n    }\n"]);return q=function(){return n},n}var H=f.a.div(q(),S);var Q=Object(l.e)(function(n){return r.a.createElement(H,null,r.a.createElement(W,{onClick:function(){n.history.push("/add-card")},avatars:[],dashed:!0,src:"",title:"New team...",description:""}))});function I(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n    margin: 20px 30px;\n"]);return I=function(){return n},n}var z=f.a.div(I());var C=Object(l.e)(function(n){var e=Object(a.useState)([]),t=Object(s.a)(e,2),i=t[0],o=t[1],c=function(){var n=Object(d.a)(p.a.mark(function n(){var e,t;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if((e=fetch("/get-cards")).ok){n.next=3;break}return n.abrupt("return",o([{id:1,image:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",title:"The Sell Outs",description:"They'll sell anything to make a buck.",avatars:[]},{id:2,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/220px-TEIDE.JPG",title:"The Sell Outsa",description:"They'll sell anything to make a buck.",avatars:[]},{id:3,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/220px-TEIDE.JPG",title:"The Sell Outs",description:"They'll sell anything to make a buck.",avatars:[]},{id:4,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/220px-TEIDE.JPG",title:"The Sell Outs",description:"They'll sell anything to make a buck.",avatars:[]},{id:5,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/220px-TEIDE.JPG",title:"The Sell Outs",description:"They'll sell anything to make a buck.",avatars:[]},{id:6,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/220px-TEIDE.JPG",title:"The Sell Outs",description:"They'll sell anything to make a buck.",avatars:[{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},{avatar:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}]}]));case 3:return n.next=5,e.json();case 5:t=n.sent,o(t||[]);case 7:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)(function(){c()},[]),r.a.createElement(z,null,i.map(function(e,t){return r.a.createElement(W,Object.assign({},e,{onClick:function(){n.history.push("/edit-card/".concat(e.id))},key:t}))}),r.a.createElement(Q,null))}),G=t(27),A=t(20),F=t(28),N=t.n(F);function R(){var n=Object(b.a)(["\n    margin-top: 12px;\n    padding: 12px 48px;\n    background: #fff;\n    border-radius: 5px;\n    border: 1px solid lightgray;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    button {\n        padding: 8px 12px;\n        font-size: 14px;\n        background: #d12f69;\n        border-radius: 5px;\n        border: none;\n        color: #fff;\n    }\n    a {\n        color: #d32b68;\n    }\n"]);return R=function(){return n},n}function U(){var n=Object(b.a)(["\n    cursor: pointer;\n    input {\n        display: none;\n    }\n    label {\n        cursor: pointer;\n        display: block;\n        width: 18px;\n        height: 18px;\n        text-align: center;\n        font-weight: bold;\n        border: 2px solid lightgray;\n        border-radius: 2px;\n        background: url(",") -5px -5px;\n        background-size: 24px;\n    }\n"]);return U=function(){return n},n}function L(){var n=Object(b.a)(["\n    display: flex;\n    background: #fff;\n    border: 1px solid lightgray;\n    border-radius: 5px;\n    margin-top: 24px;\n    padding-top: 18px;\n    flex-direction: column;\n"]);return L=function(){return n},n}function $(){var n=Object(b.a)(["\n    border-collapse: collapse;\n    tr {\n        border-bottom: 1px solid lightgray;\n    }\n    th {\n        font-weight: 600;\n        text-align: left;\n        padding: 8px 5px;\n        font-size: 10px;\n        color: rgba(42, 63, 88, 0.5);\n    }\n    td {\n        position: relative;\n        padding: 15px 5px;\n        border-top: 1px solid lightgray;\n    }\n    th:first-of-type {\n        width: 50px;\n    }\n    th:first-of-type,\n    td:first-of-type {\n        width: 50px;\n        padding-left: 24px;\n    }\n    td span {\n        font-size: 12px;\n        color: #263d5c;\n        line-height: 16px;\n    }\n"]);return $=function(){return n},n}function K(){var n=Object(b.a)(["\n    position: absolute;\n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background: url(",") center;\n    & + span {\n        margin-left: 32px;\n    }\n"]);return K=function(){return n},n}function V(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    width: auto;\n    padding: 5px 8px;\n    flex: 1 1 auto;\n    "," {\n        margin-bottom: -8px;\n        label {\n            margin: 0 0;\n            padding: 0;\n            font-size: 10px;\n            line-height: 14px;\n            color: rgba(42, 63, 88, 0.5);\n            font-weight: bold;\n        }\n        input {\n            outline: none;\n            border: 1px solid lightgray;\n            border-radius: 5px;\n            padding: 12px;\n            margin-top: 6px;\n            color: #293f59;\n            font-size: 13px;\n        }\n    }\n"]);return V=function(){return n},n}function X(){var n=Object(b.a)(["\n    flex: 0 1 auto;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    margin-right: 24px;\n    label {\n        text-decoration: underline;\n        font-size: 12px;\n        margin-top: 15px;\n        cursor: pointer;\n        line-height: 16px;\n        letter-spacing: -0.17px;\n        color: #d32b68;\n        font-weight: 600;\n    }\n\n    "," {\n        display: none;\n    }\n    "," {\n        position: absolute;\n        top: -999999;\n        z-index: -999999;\n    }\n"]);return X=function(){return n},n}function Y(){var n=Object(b.a)(["\n    display: block;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background-color: lightgray;\n    padding: 0;\n    margin: 0;\n    background: url(",") center no-repeat;\n    background-size: cover;\n"]);return Y=function(){return n},n}function Z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)}return t}function _(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Z(t,!0).forEach(function(e){Object(A.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Z(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function nn(){var n=Object(b.a)(["\n    display: flex;\n    position: relative;\n    flex-direction: column;\n"]);return nn=function(){return n},n}function en(){var n=Object(b.a)(["\n    color: red;\n    position: absolute;\n    bottom: 0px;\n    padding: 0;\n    margin: 0;\n"]);return en=function(){return n},n}function tn(){var n=Object(b.a)(["\n    color: #333;\n    padding: 12px 0 0;\n    margin: 8px;\n"]);return tn=function(){return n},n}function an(){var n=Object(b.a)(["\n    margin-top: 8px;\n    margin-bottom: 24px;\n    padding: 8px;\n"]);return an=function(){return n},n}function rn(){var n=Object(b.a)(["\n    border: 1px solid lightgray;\n    width: 100%;\n    height: 190px;\n    display: flex;\n    flex-direction: row;\n    background: #fff;\n    padding: 24px;\n    border-radius: 5px;\n"]);return rn=function(){return n},n}function on(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 24px 32px;\n\n    border-radius: 5px;\n"]);return on=function(){return n},n}function cn(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    background: #eee;\n"]);return cn=function(){return n},n}var ln=f.a.div(cn()),un=f.a.form(on()),pn=f.a.div(rn()),dn=f.a.input(an()),sn=f.a.label(tn()),bn=Object(f.a)(sn)(en()),fn=f.a.div(nn()),hn=function(n){var e=n.name,t=n.text,a=n.type,i=void 0===a?"text":a,o=n.setState,c=n.state,l=n.errors,u=n.placeholder,p=void 0===u?"":u;return r.a.createElement(fn,null,r.a.createElement(sn,{htmlFor:e},t),r.a.createElement(dn,{onChange:function(n){o(_({},c,Object(A.a)({},e,n.target.value)))},placeholder:p,name:e,id:e,value:c&&c[e],type:i}),r.a.createElement(bn,null,l&&l[e]))},mn=f.a.div(Y(),function(n){return n.src}),xn=f.a.div(X(),dn,fn),gn=f.a.div(V(),fn),vn=f.a.div(K(),function(n){return n.src}),yn=f.a.table($()),En=f.a.div(L()),On=f.a.div(U(),function(n){return n.checked?N.a:""}),kn=function(n){var e=n.checked,t=n.id,a=n.onClick;return r.a.createElement(On,{checked:e},r.a.createElement("label",{htmlFor:t}),r.a.createElement("input",{onChange:a,id:t,type:"checkbox",value:e,checked:e}))},wn=f.a.div(R());var jn=Object(l.e)(function(n){var e=n.match.params.id,t=Object(a.useState)({description:"",title:"",logo:""}),i=Object(s.a)(t,2),o=i[0],l=i[1],u=Object(a.useState)({}),b=Object(s.a)(u,2),f=b[0],h=(b[1],Object(a.useState)("")),m=Object(s.a)(h,2),x=m[0],g=m[1],v=Object(a.useState)([{avatar:"",user:"Amy Maxwell",details:"616-662-70-90",checked:!1},{avatar:"",user:"Amy Maxwell",details:"616-662-70-90",checked:!1}]),y=Object(s.a)(v,2),E=y[0],O=y[1],k=function(){var n=Object(d.a)(p.a.mark(function n(){var t,a,r,i,o;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/get-team-by-id/".concat(e));case 3:if((t=n.sent).ok){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,t.json();case 8:a=n.sent,r=a.teamMembers,i=void 0===r?[]:r,o=Object(G.a)(a,["teamMembers"]),l(o),g(o.avatar),O(i),n.next=17;break;case 15:n.prev=15,n.t0=n.catch(0);case 17:case"end":return n.stop()}},n,null,[[0,15]])}));return function(){return n.apply(this,arguments)}}();Object(a.useEffect)(function(){e&&k()},[]);var w=function(){var n={};return o.title||(n.title="Fill title"),o.description||(n.description="Fill description"),o.logo||(n.logo="Choose logo"),E&&E.every(function(n){return!n.checked})&&(n.avatars="Choose at least one team member"),n};return Object(a.useEffect)(function(){w(),o.logo&&function(n,e){var t=document.querySelector(n).files[0],a=new FileReader;a.onloadend=function(){e(a.result)},t&&a.readAsDataURL(t)}("input[name='logo']",function(n){g(n)})},[o]),r.a.createElement(ln,null,r.a.createElement(un,{onSubmit:function(n){if(n.preventDefault(),Object.keys(w()).length>0)alert("Errors: \n".concat(JSON.stringify(w(),null,2)));else{var e={description:o.description,title:o.title,logo:o.logo,teamMembers:E.filter(function(n){return n.checked})};console.log(e),alert("send:\n ".concat(JSON.stringify(e,null,2)))}}},r.a.createElement(pn,null,r.a.createElement(xn,null,r.a.createElement(mn,{src:x}),r.a.createElement(hn,{state:o,setState:l,errors:f,name:"logo",type:"file"}),r.a.createElement("label",{htmlFor:"logo"},"Upload New Image")),r.a.createElement(gn,null,r.a.createElement(hn,{state:o,setState:l,errors:f,name:"title",placeholder:"Enter team name",text:"TEAM NAME"}),r.a.createElement(hn,{state:o,setState:l,errors:f,placeholder:"Enter decription",name:"description",text:"DESCRIPTION"}))),r.a.createElement(En,null,r.a.createElement(yn,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(kn,{onClick:function(){E.some(function(n){return!n.checked})?O(E.map(function(n){return _({},n,{checked:!0})})):O(E.map(function(n){return _({},n,{checked:!1})}))},checked:E.every(function(n){return n.checked}),id:"checkboxAll"})),r.a.createElement("th",null,"USER RESOURCE"),r.a.createElement("th",null,"DETAILS"))),r.a.createElement("tbody",null,E.map(function(n,e){var t=n.avatar,a=n.checked,i=n.user,o=n.details;return r.a.createElement("tr",{key:e},r.a.createElement("td",null,r.a.createElement(kn,{onClick:function(){return function(n){O(E.map(function(e,t){return t===n&&(e.checked=!e.checked),e}))}(e)},checked:a,id:"checkbox".concat(e)})),r.a.createElement("td",null,r.a.createElement(vn,{src:t})," ",r.a.createElement("span",null,i)),r.a.createElement("td",null,r.a.createElement("span",null,o)))})))),r.a.createElement(wn,null,r.a.createElement("button",{type:"submit"},"Save"),r.a.createElement(c.b,{to:"/"},"Back"))))});var Dn=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{path:"/",exact:!0,component:C}),r.a.createElement(l.a,{path:"/add-card/",component:jn}),r.a.createElement(l.a,{path:"/edit-card/:id",component:jn}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Dn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.2efc56f9.chunk.js.map